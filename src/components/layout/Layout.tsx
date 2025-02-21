import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aquí se renderizarán las páginas */}
    </>
  );
};

export default Layout;