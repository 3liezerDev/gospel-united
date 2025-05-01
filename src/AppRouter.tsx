import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Form from './pages/Form'; 
import UserList from './pages/UserList'; 
import Collaborators from "./pages/Collaborators";
import { Toaster } from "./components/ui/sonner";

const AppRouter = () => {
  return (
    <Router>
      <Toaster position="top-center"/>
      <Routes>
        {/* Rutas fuera del layout */}
        <Route path="form" element={<Form />} />
        <Route path="users" element={<UserList />} />

        {/* Rutas que usan el layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Ruta raíz */}
          <Route path="colaboradores" element={<Collaborators />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
