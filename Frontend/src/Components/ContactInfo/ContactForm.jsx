// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { contactAPI, courseAPI } from "../../API";

// const ContactForm = () => {
//   const [loading, setLoading] = useState(false);
//   const [courses, setCourses] = useState([]);

//   // Fetch courses from backend
//   useEffect(() => {
//     const loadCourses = async () => {
//       try {
//         const result = await courseAPI.getAll();
//         setCourses(result);
//       } catch (err) {
//         toast.error("Failed to load courses");
//       }
//     };
//     loadCourses();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);

//     const selectedCourseId = formData.get("course");
//     const selectedCourse = courses.find((c) => c._id === selectedCourseId);

//     const data = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       phone: formData.get("phone"),
//       message: formData.get("message"),
//       courseId: selectedCourse?._id || "",
//       courseName: selectedCourse?.title || "",
//     };

//     try {
//       await contactAPI.submit(data);
//       toast.success("Your request has been submitted!");
//       e.target.reset();
//     } catch (err) {
//       toast.error("Something went wrong! Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="appointment-form">
//       <div className="header">
//         <h2 className="title">Book a Free Career Consultation</h2>
//       </div>

//       <form
//         id="appointment_form"
//         className="appointment-form"
//         onSubmit={handleSubmit}
//       >
//         {/* Row 1 → Name + Email */}
//         <div className="form-grid">
//           <div className="form-group">
//             <span className="icon">
//               <i className="bi bi-person-fill"></i>
//             </span>
//             <input type="text" name="name" placeholder="Your Name" required />
//           </div>

//           <div className="form-group">
//             <span className="icon">
//               <i className="bi bi-envelope-fill"></i>
//             </span>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               required
//             />
//           </div>
//         </div>

//         {/* Row 2 → Phone + Course */}
//         <div className="form-grid">
//           <div className="form-group">
//             <span className="icon">
//               <i className="bi bi-telephone-fill"></i>
//             </span>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               required
//             />
//           </div>
//           <div className="form-group home-form-select">
//             <select
//               className="custom-select"
//               name="course"
//               required
//               style={{
//                 height: "55px",
//                 padding: "0 20px",
//                 borderRadius: "40px",
//                 display: "flex",
//                 alignItems: "center",
//                 lineHeight: "55px", // ⭐ THIS centers the text vertically
//               }}
//             >
//               <option value="">Select Course</option>
//               {courses.map((course) => (
//                 <option key={course._id} value={course._id}>
//                   {course.title}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Message (Full Width) */}
//         <div className="form-group mb-15">
//           <textarea
//             name="message"
//             placeholder="Write Message"
//             required
//           ></textarea>
//         </div>

//         {/* Terms */}
//         <div
//           className="form-group terms"
//           style={{ pointerEvents: "auto", position: "relative", zIndex: 10 }}
//         >
//           <input type="checkbox" name="terms" id="terms" required />
//           <label htmlFor="terms">I agree to all terms and conditions.</label>
//         </div>

//         {/* Button */}
//         <button type="submit" className="theme-btn bg-dark" disabled={loading}>
//           <span className="link-effect">
//             <span className="btn-title">
//               {loading ? "Please wait..." : "Submit"}
//             </span>
//           </span>
//           <i className="bi bi-arrow-right"></i>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="appointment-form">
      <div className="header">
        <h2 className="title">Book a Free Career Consultation</h2>
      </div>

      <div style={{ width: "100%", height: "600px" }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/XvpypwEPXY6wJxjWjkLG"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "10px",
          }}
          id="inline-XvpypwEPXY6wJxjWjkLG"
          title="CRM Form"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
