import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Form from './pages/Form'; 
import UserList from './pages/UserList'; 
import Collaborators from "./pages/Collaborators";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="form" element={<Form />} />
         <Route path="users" element={<UserList />} />

        <Route element={<Layout />}> 
          <Route index path="/" element={<Home />} />
          <Route index path="colaboradores" element={<Collaborators />} />
          
        </Route>

      </Routes>
    </Router>
  );
};

export default AppRouter;
