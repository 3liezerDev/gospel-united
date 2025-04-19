import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface User {
  id: number;
  name: string;
  lastname: string;
  document: string;
  address: string;
  email: string;
  age: number;
  family: number;
  created_at: string;
  completed: boolean;
}

const UsersTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('❌ Error al cargar usuarios:', error);
      setUsers([]);
    } else {
      setUsers(data || []);
    }
    setLoading(false);
  };

  const toggleCompleted = async (id: number, currentState: boolean) => {
    const action = currentState ? 'desmarcar como completado' : 'marcar como completado';
    const confirmAction = window.confirm(`¿Estás seguro que deseas ${action} este usuario?`);

    if (!confirmAction) return;

    const { error } = await supabase
      .from('users')
      .update({ completed: !currentState })
      .eq('id', id);

    if (error) {
      console.error(`❌ Error al actualizar el estado de completado:`, error);
    }
    // No necesitas llamar fetchUsers() aquí, Realtime se encarga
  };

  const deleteUser = async (id: number) => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este usuario? Esta acción no se puede deshacer.');

    if (!confirmDelete) return;

    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('❌ Error al eliminar usuario:', error);
    }
    // No llamamos fetchUsers aquí porque el canal Realtime se encarga
  };

  useEffect(() => {
    fetchUsers();

    const channel = supabase
      .channel('realtime-users')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'users',
        },
        () => {
          fetchUsers();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Usuarios Registrados</h2>
      {loading ? (
        <p>Cargando usuarios...</p>
      ) : users.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Integrantes</th> 
              <th className="border px-4 py-2">Documento</th>
              <th className="border px-4 py-2">Dirección</th>
              <th className="border px-4 py-2">Completado</th>
              <th className="border px-4 py-2">Acciones</th> {/* Nueva columna */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className={`text-center ${user.completed ? 'bg-green-100' : 'bg-white'}`}
              >
                <td className="border px-4 py-2">
                  {user.name} {user.lastname}
                </td>
                <td className="border px-4 py-2">{user.family}</td> 
                <td className="border px-4 py-2">{user.document}</td>
                <td className="border px-4 py-2">{user.address}</td>
                <td className="border px-4 py-2">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={user.completed}
                      onChange={() => toggleCompleted(user.id, user.completed)}
                    />
                    {user.completed ? (
                      <span className="text-green-600 font-semibold">Completado</span>
                    ) : (
                      <span className="text-gray-500">Pendiente</span>
                    )}
                  </label>
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersTable;
