import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* sidebar */}
        <Sidebar/>

        <div className="wrapper">
            <span>Poorna Jayasinghe</span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/linkedIn.png" alt="" /></a>
                <a href="#"><img src="/youtube.png" alt="" /></a>
            </div>
        </div>

    </div>
  )
}

export default Navbar