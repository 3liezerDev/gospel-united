import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from "../ui/button";
import * as Yup from 'yup';
import { supabase } from '../../lib/supabaseClient';

const UserSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es obligatorio'),
  lastname: Yup.string().required('Los apellidos son obligatorios'),
  document: Yup.string().required('Documento requerido'),
  email: Yup.string().email('Email inválido').required('Email obligatorio'),
  family: Yup.number().min(1, 'Debe haber al menos 1 integrante').required('Campo obligatorio'),
  address: Yup.string().required('Dirección requerida'),
  age: Yup.number().min(0, 'Edad no válida').required('Edad obligatoria'),
});

const UserForm = () => {
  const handleSubmit = async (values: any, { resetForm }: any) => {
    const valuesToInsert = {
      ...values,
      document: values.document.trim().toUpperCase(),
      address: values.address.trim(),
    };

    const { error } = await supabase.from('users').insert([valuesToInsert]);

    if (error) {
      if (error.code === '23505') {
        alert('❌ El documento o dirección ya está registrado');
      } else {
        alert('❌ Error al guardar en Supabase');
        console.error(error);
      }
      return;
    }

    alert('✅ ¡Datos guardados con éxito!');
    resetForm();
  };

  return (
    <div className="max-w-xl w-[85%] mx-auto mt-10 p-6 rounded-lg shadow bg-white/90 backdrop-blur text-black">
      <h2 className="text-3xl font-bold mb-6 text-center">Formulario de Registro</h2>
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          document: '',
          email: '',
          family: '',
          address: '',
          age: '',
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-5">
            {[
              { label: 'Nombre', name: 'name' },
              { label: 'Apellidos', name: 'lastname' },
              { label: 'DNI/NIE/Pasaporte', name: 'document' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Integrantes de la familia', name: 'family', type: 'number' },
              { label: 'Dirección', name: 'address' },
              { label: 'Edad', name: 'age', type: 'number' },
            ].map(({ label, name, type = 'text' }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                  {label}:
                </label>
                <Field
                  name={name}
                  type={type}
                  className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-teal-950"
                />
                <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
              </div>
            ))}

          <Button type="submit" className="w-full" variant="default">
            Enviar
          </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
