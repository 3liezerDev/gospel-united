import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}> 
          <Route index  path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
