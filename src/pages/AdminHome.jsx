import AdminProductList from "../features/admin/components/AdminProductList";
import Footer from "../features/common/Footer";
import NavBar from "../features/navbar/Navbar";

const AdminHome = () => {
  return (
    <div>
      <NavBar>
        <AdminProductList />
      </NavBar>
      <Footer />
    </div>
  );
};

export default AdminHome;
