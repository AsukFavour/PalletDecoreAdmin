import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavBar from "./Component/TopNavBar/TopNavBar";
import Sidebar from "./Component/SideNavBar/Sidebar";
import Dashboard from "./Component/Dashboard/Dashboard";
import Layout from "./Component/Layout/Layout";
import Products from "./Component/Products/Products";
import Order from "./Component/Orders/Order";
import AdminLogin from "./Component/AdminLogin/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route path="/" element={<AdminLogin />} />

        <Route
          path="/admin/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <Layout>
              <Order />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
