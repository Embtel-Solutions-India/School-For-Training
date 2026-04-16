import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
// import Header4 from "../Components/Header/Header4";
import Header1 from "../Components/Header/Header1";

const Layout4 = () => {
    return (
        <div className="main-page-area2">
            <Header1></Header1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout4;