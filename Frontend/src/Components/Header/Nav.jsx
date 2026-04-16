import { Link } from "react-router-dom";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>

      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About
        </Link>
      </li>

      <li>
        <Link to="/courses" onClick={() => setMobileToggle(false)}>
          Courses
        </Link>
      </li>

      <li>
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>

      {/* ⭐ MOBILE + TABLET ONLY (Green themed button) */}
      <li className="d-lg-none mt-4">
        <a
          href="https://api.leadconnectorhq.com/widget/form/XvpypwEPXY6wJxjWjkLG"
          target="_blank"
          rel="noopener noreferrer"
          className="theme-btn w-full flex justify-center"
          onClick={() => setMobileToggle(false)}
        >
          <span className="link-effect">
            <span className="effect-1">Contact Us</span>
            <span className="effect-1">Contact Us</span>
          </span>
        </a>
      </li>
    </ul>
  );
}
