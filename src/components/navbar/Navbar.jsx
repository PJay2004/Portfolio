import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <span>Poorna Jayasinghe</span>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100073240487009">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/_poorna_j_/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/poorna-jayasinghe123/">
            <img src="/linkedIn.png" alt="" />
          </a>
          <a href="https://youtube.com/@MaochiEdits?feature=shared">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
