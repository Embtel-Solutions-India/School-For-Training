import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const BreadCumb = ({bg,Title,Content}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (

      <section className="breadcrumb-section">
      <div className="bg bg-image" data-background={bg}></div>
      <div className="container">
          <div className="title-outer">
              <div className="page-title">
                  <h2 className="title">{Title}</h2>
                  <ul className="page-breadcrumb">
                      <li><Link to="/">Home Main</Link></li>
                      <li>{Title}</li>
                  </ul>
              </div>
              <div className="text">
                  <div className="icon"><i className="icon-arrow-up-right"></i></div>
                  <p>{parse(Content)}</p>
              </div>
          </div>
      </div>
  </section>

    );
};

export default BreadCumb;