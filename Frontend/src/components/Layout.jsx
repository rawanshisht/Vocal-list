/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        {children} {/* This is where your page content will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
