import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs-gescout_sticky");
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs-gescout_show cs-gescout_sticky");
      } else {
        setIsSticky();
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`cs_site_header header_style_2 cs_style_1 
        ${variant ? variant : ""} 
        cs_sticky_header cs_site_header_full_width 
        ${mobileToggle ? "cs_mobile_toggle_active" : ""} 
        ${isSticky ? isSticky : ""}`}
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            {/* LEFT LOGO */}
            <div className="cs_main_header_left">
              <Link to="/" className="cs_site_branding">
                <img
                  src="./sft_logo.png"
                  alt="Logo"
                  style={{ height: "70px", width: "auto" }} // height increased
                />
              </Link>
            </div>

            {/* NAVIGATION */}
            <div className="cs_main_header_center">
              <div className="cs_nav cs_primary_font fw-medium">
                {/* Burger button */}
                <span
                  className={
                    mobileToggle
                      ? "cs-munu_toggle cs_teggle_active"
                      : "cs-munu_toggle"
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>

                {/* NAVIGATION LIST */}
                <Nav setMobileToggle={setMobileToggle} />
              </div>
            </div>

            {/* RIGHT SIDE CONTACT BUTTON (Desktop only) */}
            <div className="cs_main_header_right">
              <div className="header-btn header-right-wrapper">
                <Link to="/contact" className="theme-btn">
                  <span className="link-effect">
                    <span className="effect-1">Contact Us</span>
                    <span className="effect-1">Contact Us</span>
                  </span>
                </Link>
              </div>
            </div>
            {/* <div className="cs_main_header_right">
              <div className="header-btn header-right-wrapper">
                <a
                  href="https://api.leadconnectorhq.com/widget/form/XvpypwEPXY6wJxjWjkLG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-btn"
                >
                  <span className="link-effect">
                    <span className="effect-1">Contact Us</span>
                    <span className="effect-1">Contact Us</span>
                  </span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
