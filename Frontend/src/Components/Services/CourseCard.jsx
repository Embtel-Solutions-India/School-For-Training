// import { Link } from "react-router-dom";
// import { FaGraduationCap } from "react-icons/fa";

// const CourseCard = ({ course }) => {
//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   return (
//     <div
//       className="service-single-box"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         height: "450px",
//         width: "400px",
//       }}
//     >
//       <div
//         className="inner-box"
//         style={{
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           height: "100%",
//         }}
//       >
//         <div>
//           {/* 🔥 ICON + UPCOMING BADGE ROW */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <div className="icon react-icon" style={{ fontSize: "35px" }}>
//               <FaGraduationCap />
//             </div>

//             {course.upcomingBatch && (
//               <span
//                 style={{
//                   background: "linear-gradient(90deg, #ff4d4f, #ff7875)",
//                   color: "#fff",
//                   padding: "5px 12px",
//                   borderRadius: "20px",
//                   fontSize: "12px",
//                   fontWeight: "600",
//                   boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 Upcoming
//                 {course.startDate && (
//                   <span style={{ marginLeft: "6px", fontWeight: "500" }}>
//                     {formatDate(course.startDate)}
//                   </span>
//                 )}
//               </span>
//             )}
//           </div>

//           <div className="border mt-20 xs-mt-40 mb-20"></div>

//           <h4 className="title">{course.title}</h4>

//           {/* Duration + Status */}
//           <div
//             style={{
//               fontSize: "14px",
//               marginBottom: "10px",
//               display: "flex",
//               gap: "15px",
//               flexWrap: "wrap",
//               alignItems: "center",
//             }}
//           >
//             {course.duration && (
//               <span style={{ fontWeight: "500", color: "#868686" }} >
//                {course.duration}
//               </span>
//             )}

//             {course.status && (
//               <span style={{ fontWeight: "500", color: "#007bff" }}>
//                 {course.status}
//               </span>
//             )}
//           </div>

//           <p className="text">{course.shortDescription}</p>
//         </div>

//         <div style={{ marginTop: "auto" }}>
//           <Link
//             to={`/project/project-details?id=${course._id || course.id}`}
//             className="theme-btn service-btn"
//           >
//             <i className="bi bi-plus-lg"></i>
//             <span className="link-text">View Details</span>
//           </Link>
//         </div>

//         <div className="path__shape"></div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;

import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

const CourseCard = ({ course }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Link
      to={`/project/project-details?id=${course._id || course.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="service-single-box"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "450px",
          width: "400px",
          cursor: "pointer",
        }}
      >
        <div
          className="inner-box"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            {/* 🔥 ICON + UPCOMING BADGE ROW */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="icon react-icon" style={{ fontSize: "35px" }}>
                <FaGraduationCap />
              </div>

              {course.upcomingBatch && (
                <span
                  style={{
                    background: "linear-gradient(90deg, #ff4d4f, #ff7875)",
                    color: "#fff",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Upcoming
                  {course.startDate && (
                    <span style={{ marginLeft: "6px", fontWeight: "500" }}>
                      {formatDate(course.startDate)}
                    </span>
                  )}
                </span>
              )}
            </div>

            <div className="border mt-20 xs-mt-40 mb-20"></div>

            <h4 className="title">{course.title}</h4>

            {/* Duration + Status */}
            <div
              style={{
                fontSize: "14px",
                marginBottom: "10px",
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {course.duration && (
                <span style={{ fontWeight: "500", color: "#868686" }}>
                  {course.duration}
                </span>
              )}

              {course.status && (
                <span style={{ fontWeight: "500", color: "#007bff" }}>
                  {course.status}
                </span>
              )}
            </div>

            <p className="text">{course.shortDescription}</p>
          </div>

          <div style={{ marginTop: "auto" }}>
            <span className="theme-btn service-btn">
              <i className="bi bi-plus-lg"></i>
              <span className="link-text">View Details</span>
            </span>
          </div>

          <div className="path__shape"></div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
