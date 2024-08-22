import { IconContext } from "react-icons";
import { BsList } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';

import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 880px)' });

  return (
    <>
    {isTabletOrMobile ? (
    <nav className="navbar-container">
      <div className="navigation-container">
        <a className="navbar-brand" href="#">
          <img src="/NursifyLogo.webp" alt="Nursify Education" width="140" height="80" />
        </a>
        <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <IconContext.Provider value={{ size: "20px", color: "var(--accent-color)" }}>
            <BsList />
          </IconContext.Provider>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              <img src="/NursifyLogo.webp" alt="Nursify Education" width="150" height="75" />
            </h5>
            <button type="button" className="btn-close text-bg-secondary" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="nav-subheadings">
              <a href="#about">About</a>
              <a href="#modules">Education</a>
              <a href="#certification">Certification</a>
              <a href="#aboutContact">Contact</a>
            </div>
            <button className="join-btn">Register / Sign In</button>
          </div>
        </div>
      </div>
    </nav>
    
  ) : 
    (<nav className="navbar-container">
      <div className="navigation-container">
        <a className="navbar-brand" href="#">
          <img src="/NursifyLogo.webp" alt="Nursify Education" width="140" height="80" />
        </a>
        <div className="nav-subheadings">
          <a href="#about">About</a>
          <a href="#modules">Education</a>
          <a href="#certification">Certification</a>
          <a href="#aboutContact">Contact</a>
        </div>
        <a className="join-btn" href="https://nursifyeducation.com/student-sales-page-page">Register / Sign In</a>
      </div>
    </nav>)}

    </>
  );
};

export default Navbar;