import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import deleteimg from "../Assets/Images/logImage.svg";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location.pathname]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully.");
    navigate("/login");
    setShow(false);
  };

  return (
    <>
      <div className={`sidebar col-3 ${isToggled ? "active-sidebar" : ""}`}>
        <div className="toggl-main" onClick={handleToggle}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className="sidebar-wrapper d-flex">
          <div className="sidebar-content">
            <div className="sidebar-logo">
              <figure
                className="text-center"
                onClick={() => navigate("/blogs")}
              >
                {/* <img src={logo} className="img-fluid" alt="Logo" /> */}
              </figure>
            </div>

            <ul className="slide-navli">
              {/* ===== Main Section ===== */}
              <li className="sidebar-section-heading">Main</li>

              {/* <li
                className={
                  activeMenu === "/dashboard"
                    ? "inner-slide-li active subitem"
                    : "inner-slide-li subitem"
                }
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </li> */}

              {/* ===== Blog Management ===== */}
              <li
                className={
                  activeMenu === "/blogs" ||
                  activeMenu === "/create-blog" ||
                  activeMenu.startsWith("/edit-blog")
                    ? "inner-slide-li active subitem"
                    : "inner-slide-li subitem"
                }
                onClick={() => navigate("/blogs")}
              >
                Blogs
              </li>

              <li
                className={
                  activeMenu === "/courses"
                    ? "inner-slide-li active subitem"
                    : "inner-slide-li subitem"
                }
                onClick={() => navigate("/courses")}
              >
                Courses
              </li>

              {/* ===== Content Section ===== */}
              {/* <li className="sidebar-section-heading">Content</li> */}

              {/* <li
                className={
                  activeMenu === "/contact"
                    ? "inner-slide-li active subitem"
                    : "inner-slide-li subitem"
                }
                onClick={() => navigate("/contact")}
              >
                Contact Forms
              </li> */}

              {/* ===== Account Section ===== */}
              <li className="sidebar-section-heading">Account</li>

              <li
                className={
                  activeMenu === "/profile" || activeMenu === "/change-password"
                    ? "inner-slide-li active subitem"
                    : "inner-slide-li subitem"
                }
                onClick={() => navigate("/profile")}
              >
                Settings
              </li>

              <li
                className="inner-slide-li logout subitem"
                onClick={handleShow}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Logout Confirmation Modal ===== */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="modal-delete-logout"
      >
        <Modal.Body className="p-0">
          <div className="inner-body-delete-logout">
            <div className="img-modal">
              <figure>
                <img src={deleteimg} alt="Logout Confirm" />
              </figure>
            </div>
            <h4>Are you sure you want to logout?</h4>

            <div className="upper-btns-modal-pair">
              <Button className="comn-modal-btns-blue" onClick={logoutHandler}>
                Yes, Logout
              </Button>
              <Button
                className="comn-modal-btns-transparent"
                onClick={handleClose}
              >
                No, Stay Here
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Sidebar;
