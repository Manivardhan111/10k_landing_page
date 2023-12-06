// import React from "react";
// import { Card, CardBody } from "react-bootstrap";
// import youtube from "../Assets/Youtube.png";
// import youtubeLogo from "../Assets/YoutubeLogo.png";
// import Student_img from "../Assets/Rectangle 3.png";
// import Student_img2 from "../Assets/Rectangle 3 (1).png"

// const StudentTestimonials = () => {
//   return (
//     <div class="student_testimonials_main" style={{padding:"15px"}}>
//       <div className="text-center">
//         <div>
//           <h4>Student Testimonials</h4>
//           <p>
//             Students generously share heartfelt testimonials, reflecting the
//             exceptional learning and transformative experiences they've had at
//             the 10000coders.
//           </p>
//         </div>
//       </div>
//       <div>
//         <div style={{marginBottom:"20px",display:"flex"}}>
//           <Card
//             style={{ width: "400px", padding: "10px", alignItems: "center", margin:"10px"}}
//           >
//             <div style={{ width: "350px" }}>
//               <img src={Student_img} alt="Your Imag" class="container" style={{ position: "relative",textAlign: "center"}}/>

//               <img
//                 src={youtube}
//                 alt="Your Icon"
//                 class="icon"
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                 }}
//               />
//             </div>
//             <div>
//               Watch Shruti as she candidly recounts her personal growth and
//               insights during her time at the 10000coders.
//             </div>
//           </Card>
// <Card
//   style={{ width: "400px", padding: "10px", alignItems: "center", margin:"10px"}}
// >
//   <div style={{ width: "350px" }}>
//     <img src={Student_img2} alt="Your Imag" class="container" />

//     <img
//       src={youtube}
//       alt="Your Icon"
//       class="icon"
//       style={{
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//       }}
//     />
//   </div>
//   <div>
//     Watch Shruti as she candidly recounts her personal growth and
//     insights during her time at the 10000coders.
//   </div>
// </Card>    <Card
//   style={{ width: "400px", padding: "10px", alignItems: "center", margin:"10px"}}
// >
//   <div style={{ width: "350px" }}>
//     <img src={Student_img} alt="Your Imag" class="container" />

//     <img
//       src={youtube}
//       alt="Your Icon"
//       class="icon"
//       style={{
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//       }}
//     />
//   </div>
//   <div>
//     Watch Shruti as she candidly recounts her personal growth and
//     insights during her time at the 10000coders.
//   </div>
// </Card>
//         </div>
//       </div>
//       <div className="text-center">
//         <button>
//           Watch More <img src={youtubeLogo} alt="youtubeLogo"></img>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StudentTestimonials;

// import React from "react";
// import { Card } from "react-bootstrap";
// import youtube from "../Assets/Youtube.png";
// import youtubeLogo from "../Assets/YoutubeLogo.png";
// import Student_img from "../Assets/Rectangle 3.png";
// import Student_img2 from "../Assets/Rectangle 3 (1).png";
// import "./Student_testimonials.css";

// const StudentTestimonials = () => {
//   return (
//     <>
//     <div className="student_testimonials_main">
      // <div className="text-center">
      //   <div>
      //     <h4>Student Testimonials</h4>
      //     <p>
      //       Students generously share heartfelt testimonials, reflecting the
      //       exceptional learning and transformative experiences they've had at
      //       the 10000coders.
      //     </p>
      //   </div>
      // </div>
//       <div>
//         <div className="card-container">
//           <Card className="card">
//             <div className="card-img-container">
//               <img src={Student_img} alt="Your Imag" className="container" />
//               <img src={youtube} alt="Your Icon" className="icon" />
//             </div>
//             <div>
              // Watch Shruti as she candidly recounts her personal growth and
              // insights during her time at the 10000coders.
//             </div>
//           </Card>
//           <Card
//             style={{
//               width: "400px",
//               padding: "10px",
//               alignItems: "center",
//               margin: "10px",
//             }}
//           >
//             <div style={{ width: "350px" }}>
//               <img src={Student_img2} alt="Your Imag" class="container" />

//               <img
//                 src={youtube}
//                 alt="Your Icon"
//                 class="icon"
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                 }}
//               />
//             </div>
//             <div>
//               Watch Rohith as she candidly recounts her personal growth and
//               insights during her time at the 10000coders.
//             </div>
//           </Card>{" "}
//           <Card
//             style={{
//               width: "400px",
//               padding: "10px",
//               alignItems: "center",
//               margin: "10px",
//             }}
//           >
//             <div style={{ width: "350px" }}>
//               <img src={Student_img} alt="Your Imag" class="container" />

//               <img
//                 src={youtube}
//                 alt="Your Icon"
//                 class="icon"
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                 }}
//               />
//             </div>
//             <div>
//               Watch Shruti as she candidly recounts her personal growth and
//               insights during her time at the 10000coders.
//             </div>
//           </Card>
//         </div>
//       </div>
//       <div className="text-center">
//         <button>
//           Watch More <img src={youtubeLogo} alt="youtubeLogo"></img>
//         </button>
//       </div>
//     </div>
//     </>
//   );
// };

// export default StudentTestimonials;





import React from "react";
import { Card } from "react-bootstrap";
import youtube from "../Assets/Youtube.png";
import youtubeLogo from "../Assets/YoutubeLogo.png";
import Student_img from "../Assets/Rectangle 3.png";
import Student_img2 from "../Assets/Rectangle 3 (1).png";
import "./Student_testimonials.css";


const StudentTestimonials = () => {
  return (
    <div className="student_testimonials_main" style={{height:"100vh",width:"100vw"}}>
      <div className="text-center">
      <div className="text-center">
        <div>
          <h4>Student Testimonials</h4>
          <p>
            Students generously share heartfelt testimonials, reflecting the
            exceptional learning and transformative experiences they've had at
            the 10000coders.
          </p>  
        </div>
      </div>
      </div>
      <div>
        <div className="card-container">
        <Card className="card">
            <div className="card-img-container">
              <div className="img-wrapper">
                <img
                  src={Student_img}
                  alt="Your Imag"
                  className="container"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
                <img src={youtube} alt="Your Icon" className="icon" />
              </div>
            </div>
            <div>
            Watch Shruti as she candidly recounts her personal growth and
              insights during her time at the 10000coders.
            </div>
          </Card>
          <Card className="card">
            <div className="card-img-container">
              <div className="img-wrapper">
                <img
                  src={Student_img2}
                  alt="Your Imag"
                  className="container"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
                <img src={youtube} alt="Your Icon" className="icon" />
              </div>
            </div>
            <div>
              Watch Rohith as she candidly recounts her personal growth and
              insights during her time at the 10000coders.
            </div>
          </Card>
          <Card className="card">
            <div className="card-img-container">
              <div className="img-wrapper">
                <img
                  src={Student_img}
                  alt="Your Imag"
                  className="container"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
                <img src={youtube} alt="Your Icon" className="icon" />
              </div>
            </div>
            <div>
            Watch Shruti as she candidly recounts her personal growth and
              insights during her time at the 10000coders.
            </div>
          </Card>
          <Card className="card">
            <div className="card-img-container">
              <div className="img-wrapper">
                <img
                  src={Student_img2}
                  alt="Your Imag"
                  className="container"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
                <img src={youtube} alt="Your Icon" className="icon" />
              </div>
            </div>
            <div>
              Watch Rohith as she candidly recounts her personal growth and
              insights during her time at the 10000coders.
            </div>
          </Card>
          {/* ... (rest of the cards) */}
        </div>
      </div>
      <div className="text-center">
        <button>
          Watch More <img src={youtubeLogo} alt="youtubeLogo"></img>
        </button>
      </div>
    </div>
  );
};

export default StudentTestimonials;




// StudentTestimonials.js

// import React from "react";
// import { Card } from "react-bootstrap";
// import youtube from "../Assets/Youtube.png";
// import youtubeLogo from "../Assets/YoutubeLogo.png";
// import Student_img from "../Assets/Rectangle 3.png";
// import Student_img2 from "../Assets/Rectangle 3 (1).png";
// import "./Student_testimonials.css";

// const StudentTestimonials = () => {
//   return (
//     <div className="student_testimonials_main">
//       <div className="text-center">
//         <div>
//           <h4>Student Testimonials</h4>
//           <p>
//             Students generously share heartfelt testimonials, reflecting the
//             exceptional learning and transformative experiences they've had at
//             the 10000coders.
//           </p>
//         </div>
//       </div>
//       <div>
//         <div className="card-container">
//           {/* Card 1 */}
//           <Card className="card">
//             <div className="card-img-container">
//               <div className="img-wrapper">
//                 <img
//                   src={Student_img}
//                   alt="Your Imag"
//                   className="container"
//                   style={{
//                     maxWidth: "100%",
//                     maxHeight: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <img src={youtube} alt="Your Icon" className="icon" />
//               </div>
//             </div>
//             <div>
//               Watch Shruti as she candidly recounts her personal growth and
//               insights during her time at the 10000coders.
//             </div>
//           </Card>

          // {/* Card 2 */}
          // <Card className="card">
          //   <div className="card-img-container">
          //     <div className="img-wrapper">
          //       <img
          //         src={Student_img2}
          //         alt="Your Imag"
          //         className="container"
          //         style={{
          //           maxWidth: "100%",
          //           maxHeight: "100%",
          //           objectFit: "cover",
          //         }}
          //       />
          //       <img src={youtube} alt="Your Icon" className="icon" />
          //     </div>
          //   </div>
          //   <div>
          //     Watch Rohith as she candidly recounts her personal growth and
          //     insights during her time at the 10000coders.
          //   </div>
          // </Card>

          // {/* Card 3 */}
          // <Card className="card">
          //   <div className="card-img-container">
          //     <div className="img-wrapper">
          //       <img
          //         src={Student_img}
          //         alt="Your Imag"
          //         className="container"
          //         style={{
          //           maxWidth: "100%",
          //           maxHeight: "100%",
          //           objectFit: "cover",
          //         }}
          //       />
          //       <img src={youtube} alt="Your Icon" className="icon" />
          //     </div>
          //   </div>
          //   <div>
          //     Watch Shruti as she candidly recounts her personal growth and
          //     insights during her time at the 10000coders.
          //   </div>
          // </Card>
//         </div>
//       </div>
//       <div className="text-center">
//         <button>
//           Watch More <img src={youtubeLogo} alt="youtubeLogo" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StudentTestimonials;


