// import React from "react";
// import "./Success_stories.css";
// import { Card} from "react-bootstrap";
// import walmart from "../Assets/walmart_logo.png";
// import Tej from "../Assets//success story 1 1.png";
// import Akhil from "../Assets//success story 1 1 (1).png";
// import Manoj from "../Assets//success story 1 1 (2).png";
// // import Rohith from "../Assets//success story 1 1 (3).png"
// import Upward from "../Assets/TrendUp.png";

// const SuccessStories = () => {
//   return (
//     <div className="successStories">
//       <div className="text-center py-2">
//         <h3 className="py-3">Success Stories</h3>
//         Our team births success stories by equipping individuals with
//         cutting-edge skills and knowledge, propelling them towards coveted
//         positions at top tier companies across India.
//       </div>

//       <div className="Success_profiles py-5 d-flex mx-5" >
//         <Card
//           className="text-center success-card"
//           style={{
//             width: "250px",
//             margin: "0",
//             position: "relative",
//             backgroundColor: "none",
//             padding:"5px",
//             margin:"0 20px "
//           }}
//         >
//           <div>
//             <div
//               style={{
//                 position: "absolute",
//                 top: "20px",
//                 right: "0",
//                 width: "70px",
//                 height: "20px",
//                 backgroundColor: "#87db85",
//                 borderTopLeftRadius: "4px",
//                 borderBottomLeftRadius: "4px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <img
//                 src={Upward}
//                 alt="trending"
//                 style={{ height: "15px", width: "15px" }}
//               />
//               <span
//                 style={{
//                   marginLeft: "5px",
//                   fontSize: "10px",
//                   textDecoration: "bold",
//                 }}
//               >
//                 100% hike
//               </span>
//             </div>
//           </div>
//           <div>
//             <img
//               src={Tej}
//               alt="person2"
//               style={{
//                 borderRadius: "50%",
//                 height: "120px",
//                 width: "120px",
//                 marginTop: "30px",
//               }}
//             ></img>
//           </div>

//           <div className="text-center">
//             <p
//               style={{
//                 marginTop:"15px",
//                 color: "black",
//                 fontWeight: "700",
//                 fontSize: "20",
//                 fontFamily: "Open Sans",
//                 wordWrap: "break-word",
//               }}
//             >

//               Tej
//             </p>
//             <p   style={{
//                 color: "black",
//                 fontWeight: "700",
//                 fontSize: "20",
//                 fontFamily: "Open Sans",
//                 wordWrap: "break-word",
//               }} >Web Developer</p>
//             <p>
//               <img src={walmart} alt="walmart Logo" height="30px" />
//             </p>
//             <p style={{color: '#36363A',
// fontSize: '16',
// // fontFamily: 'Open Sans',
// fontWeight: '400',
// wordWrap: 'break-word'}}>
//              I got four placement offers of 4.5 LPA, 5.5 LPA, 6.5 LPA, and 9.2 LPA from different companies. The team supported me a lot with my placement.
//             </p>
//             <span
//               style={{
//                 color: "rgb(255, 133, 65)",
//                 // position: "absolute",
//                 bottom: "15px",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "100%",
//                 marginTop: "5px",
//                 fontWeight: "Bold",
//                 fontSize: "20px",
//               }}
//             >
//               Package: 9.2 L
//             </span>
//           </div>
//         </Card>
//         <Card
//           className="text-center success-card"
//           style={{
//             width: "250px",
//             margin: "0",
//             position: "relative",
//             backgroundColor: "none",
//             padding:"5px",
//             margin:"0 20px "

//           }}
//         >
//           <div>
//             <div
//               style={{
//                 position: "absolute",
//                 top: "20px",
//                 right: "0",
//                 width: "70px",
//                 height: "20px",
//                 backgroundColor: "#87db85",
//                 borderTopLeftRadius: "4px",
//                 borderBottomLeftRadius: "4px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <img
//                 src={Upward}
//                 alt="trending"
//                 style={{ height: "15px", width: "15px" }}
//               />
//               <span
//                 style={{
//                   marginLeft: "5px",
//                   fontSize: "10px",
//                   textDecoration: "bold",
//                 }}
//               >
//                 100% hike
//               </span>
//             </div>
//           </div>
//           <div>
//             <img
//               src={Akhil}
//               alt="person2"
//               style={{
//                 borderRadius: "50%",
//                 height: "120px",
//                 width: "120px",
//                 marginTop: "30px",
//               }}
//             ></img>
//           </div>

//           <div className="text-center">
//             <p
//               style={{
//                 marginTop:"15px",
//                 color: "black",
//                 fontWeight: "700",
//                 fontSize: "20",
//                 fontFamily: "Open Sans",
//                 wordWrap: "break-word",
//               }}
//             >

//               Akhil
//             </p>
//             <p   style={{
//                 color: "black",
//                 fontWeight: "700",
//                 fontSize: "20",
//                 fontFamily: "Open Sans",
//                 wordWrap: "break-word",
//               }} >Web Developer</p>
//             <p>
//               <img src={walmart} alt="walmart Logo" height="30px" />
//             </p>
//             <p style={{color: '#36363A',
// fontSize: '16',
// // fontFamily: 'Open Sans',
// fontWeight: '400',
// wordWrap: 'break-word'}}>
//               Got a hike of 250% hike from civil engineer background to react
//               developer all in a duration of 7 months. Thanks to the entire
//               team.
//             </p>
//             <span
//               style={{
//                 color: "rgb(255, 133, 65)",
//                 // position: "absolute",
//                 bottom: "15px",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "100%",
//                 marginTop: "5px",
//                 fontWeight: "Bold",
//                 fontSize: "20px",
//               }}
//             >
//               Package: 8 L
//             </span>
//           </div>
//         </Card>
//         <Card
//           className="text-center success-card"
//           style={{
//             width: "250px",
//             margin: "0",
//             position: "relative",
//             backgroundColor: "none",
//             padding:"5px",
//             margin:"0 20px "

//           }}
//         >
//           <div>
//             <div
//               style={{
//                 position: "absolute",
//                 top: "20px",
//                 right: "0",
//                 width: "70px",
//                 height: "20px",
//                 backgroundColor: "#87db85",
//                 borderTopLeftRadius: "4px",
//                 borderBottomLeftRadius: "4px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <img
//                 src={Upward}
//                 alt="trending"
//                 style={{ height: "15px", width: "15px" }}
//               />
//               <span
//                 style={{
//                   marginLeft: "5px",
//                   fontSize: "10px",
//                   textDecoration: "bold",
//                 }}
//               >
//                 100% hike
//               </span>
//             </div>
//           </div>
//           <div>
//             <img
//               src={Manoj}
//               alt="person2"
//               style={{
//                 borderRadius: "50%",
//                 height: "120px",
//                 width: "120px",
//                 marginTop: "30px",
//               }}
//             ></img>
//           </div>

//           <div className="text-center">
//             <p
//               style={{
//                 marginTop:"15px",
//                 color: "black",
//                 fontWeight: "700",
//                 fontSize: "20",
//                 fontFamily: "Open Sans",
//                 wordWrap: "break-word",
//               }}
//             >

//               Manoj
//             </p>
//             <p   style={{
//                 color: "black",
//                 fontWeight: "700",
//                 fontSize: "20",
//                 fontFamily: "Open Sans",
//                 wordWrap: "break-word",
//               }} >Web Developer</p>
//             <p>
//               <img src={walmart} alt="walmart Logo" height="30px" />
//             </p>
//             <p style={{color: '#36363A',
// fontSize: '16',
// // fontFamily: 'Open Sans',
// fontWeight: '400',
// wordWrap: 'break-word'}}>
//              10000coders helped me learn about real-time practices and work culture. Their guidance has helped a lot in finding the right career of becoming a web developer from being a BSc graduate
//             </p>
//             <span
//               style={{
//                 color: "rgb(255, 133, 65)",
//                 // position: "absolute",
//                 bottom: "15px",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "100%",
//                 marginTop: "5px",
//                 fontWeight: "Bold",
//                 fontSize: "20px",
//               }}
//             >
//               Package: 6.5 L
//             </span>
//           </div>
//         </Card>
//         <Card
//           className="text-center success-card"
//           style={{
//             width: "250px",
//             margin: "0",
//             position: "relative",
//             backgroundColor: "none",
//             padding:"5px",
//             margin:"0 20px "

//           }}
//         >
//           <div>
//             <div
//               style={{
//                 position: "absolute",
//                 top: "20px",
//                 right: "0",
//                 width: "70px",
//                 height: "20px",
//                 backgroundColor: "#87db85",
//                 borderTopLeftRadius: "4px",
//                 borderBottomLeftRadius: "4px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <img
//                 src={Upward}
//                 alt="trending"
//                 style={{ height: "15px", width: "15px" }}
//               />
//               <span
//                 style={{
//                   marginLeft: "5px",
//                   fontSize: "10px",
//                   textDecoration: "bold",
//                 }}
//               >
//                 100% hike
//               </span>
//             </div>
//           </div>
//           <div>
//             <img
//               src={Akhil}
//               alt="person2"
//               style={{
//                 borderRadius: "50%",
//                 height: "120px",
//                 width: "120px",
//                 marginTop: "30px",
//               }}
//             ></img>
//           </div>

//           <div className="text-center">
//             <p
//               style={{
//                 marginTop:"15px",
//                 color: "black",
//                 fontWeight: "700",
//                 fontSize: "20",
//                 fontFamily: "Open Sans",
//                 wordWrap: "break-word",
//               }}
//             >

//               Akhil
//             </p>
//             <p   style={{
//                 color: "black",
//                 fontWeight: "700",
//                 fontSize: "20",
//                 fontFamily: "Open Sans",
//                 wordWrap: "break-word",
//               }} >Web Developer</p>
//             <p>
//               <img src={walmart} alt="walmart Logo" height="30px" />
//             </p>
//             <p style={{color: '#36363A',
// fontSize: '16',
// // fontFamily: 'Open Sans',
// fontWeight: '400',
// wordWrap: 'break-word'}}>
//               Got a hike of 250% hike from civil engineer background to react
//               developer all in a duration of 7 months. Thanks to the entire
//               team.
//             </p>
//             <span
//               style={{
//                 color: "rgb(255, 133, 65)",
//                 // position: "absolute",
//                 bottom: "15px",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "100%",
//                 marginTop: "5px",
//                 fontWeight: "Bold",
//                 fontSize: "20px",
//               }}
//             >
//               Package: 8 L
//             </span>
//           </div>
//         </Card>

//       </div>
//     </div>
//   );
// };

// export default SuccessStories;

// import React from "react";
// import "./Success_stories.css";
// import { Card } from "react-bootstrap";
// import walmart from "../Assets/walmart_logo.png";
// import Tej from "../Assets/success story 1 1.png";
// import Akhil from "../Assets/success story 1 1 (1).png";
// import Manoj from "../Assets/success story 1 1 (2).png";
// import Upward from "../Assets/TrendUp.png";

// const SuccessStories = () => {
//   return (
//     <div className="successStories">
//       <div className="text-center py-2">
//         <h3 className="py-3">Success Stories</h3>
//         Our team births success stories by equipping individuals with
//         cutting-edge skills and knowledge, propelling them towards coveted
//         positions at top tier companies across India.
//       </div>

//       <div className="Success_profiles py-5 d-flex mx-5">
//         {[Tej, Akhil, Manoj].map((image, index) => (
//           <Card
//             key={index}
//             className="text-center success-card"
//             style={{
//               width: "250px", // Set a fixed width for all cards
//               margin: "0 20px",
//               position: "relative",
//               backgroundColor: "none",
//               padding: "5px",
//             }}
//           >
//             <div>
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "20px",
//                   right: "0",
//                   width: "70px",
//                   height: "20px",
//                   backgroundColor: "#87db85",
//                   borderTopLeftRadius: "4px",
//                   borderBottomLeftRadius: "4px",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   src={Upward}
//                   alt="trending"
//                   style={{ height: "15px", width: "15px" }}
//                 />
//                 <span
//                   style={{
//                     marginLeft: "5px",
//                     fontSize: "10px",
//                     textDecoration: "bold",
//                   }}
//                 >
//                   100% hike
//                 </span>
//               </div>
//             </div>
//             <div>
//               <img
//                 src={image}
//                 alt={`person${index + 1}`}
//                 style={{
//                   borderRadius: "50%",
//                   height: "120px",
//                   width: "120px",
//                   marginTop: "30px",
//                 }}
//               ></img>
//             </div>

//             <div className="text-center">
//               <p
//                 style={{
//                   marginTop: "15px",
//                   color: "black",
//                   fontWeight: "700",
//                   fontSize: "20",
//                   fontFamily: "Open Sans",
//                   wordWrap: "break-word",
//                 }}
//               >
//                 {/* Name */}
//               </p>
//               <p
//                 style={{
//                   color: "black",
//                   fontWeight: "700",
//                   fontSize: "20",
//                   fontFamily: "Open Sans",
//                   wordWrap: "break-word",
//                 }}
//               >
//                 {/* Role */}
//               </p>
//               <p>
//                 <img src={walmart} alt="walmart Logo" height="30px" />
//               </p>
//               <p
//                 style={{
//                   color: "#36363A",
//                   fontSize: "16",
//                   fontWeight: "400",
//                   wordWrap: "break-word",
//                 }}
//               >
//                 {/* Success Story */}
//               </p>
//               <span
//                 style={{
//                   color: "rgb(255, 133, 65)",
//                   bottom: "15px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   width: "100%",
//                   marginTop: "5px",
//                   fontWeight: "Bold",
//                   fontSize: "20px",
//                 }}
//               >
//                 Package: {/* Package Information */}
//               </span>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SuccessStories;

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import "./Success_stories.css";
// import { Card } from "react-bootstrap";
// import walmart from "../Assets/walmart_logo.png";
// import Tej from "../Assets/success story 1 1.png";
// import Akhil from "../Assets/success story 1 1 (1).png";
// import Manoj from "../Assets/success story 1 1 (2).png";
// import rohit from "../Assets/rohith_photo.png"
// import Upward from "../Assets/TrendUp.png";

// const SuccessStories = () => {
//   const successStories = [
//     {
//       name: "Tej",
//       role: "Web Developer",
//       companyLogo: walmart,
//       successStory:
//         "I got four placement offers of 4.5 LPA, 5.5 LPA, 6.5 LPA, and 9.2 LPA from different companies. The team supported me a lot with my placement.",
//       package: "9.2 L",
//       Img:Tej,
//       status:"First Job"
//     },
//     {
//       name: "Akhil",
//       role: "Web Developer",
//       companyLogo: walmart,
//       successStory:
//       "Got a hike of 250% from civil engineer background to react developer all in a duration of 7 months. Thanks to the entire team.",
//       package: "8 L",
//       Img:Akhil,
//       status:"250% Hike"

//     },
//     {
//       name: "Manoj",
//       role: "Web Developer",
//       companyLogo: walmart,
//       successStory:
//       "10000coders helped me learn about real-time practices and work culture. Their guidance has helped a lot in finding the right career of becoming a web developer from being a BSc graduate.",
//       package: "6.5 L",
//       Img:Manoj,
//       status:"100% Hike"

//     },
//     {
//       name: "Rohith",
//       role: "Web Developer",
//       companyLogo: walmart,
//       successStory:" This institute have trained me so well that I have transformed from fearing whether I would get a job to becoming a developer",
//       package: "6.5 L",
//       Img:rohit,
//       status:"First Job"

//     },
//   ];

//   return (
//     <div className="successStories" style={{height:"100vh",width:"100vw"}}>
//       <div className="text-center py-2">
//         <h3 className="py-3">Success Stories</h3>
//         Our team births success stories by equipping individuals with
//         cutting-edge skills and knowledge, propelling them towards coveted
//         positions at top tier companies across India.
//       </div>

//       <div className="Success_profiles py-5 d-flex mx-5">
//         {successStories.map((story, index) => (
//           <Card
//             key={index}
//             className="text-center success-card"
//             style={{
//               width: "350px",
//               margin: "0 20px",
//               position: "relative",
//               backgroundColor: "none",
//               padding: "5px",
//             }}
//           >
//             <div>
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "20px",
//                   right: "0",
//                   width: "75px",
//                   height: "25px",
//                   backgroundColor: "#87db85",
//                   borderTopLeftRadius: "4px",
//                   borderBottomLeftRadius: "4px",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   src={Upward}
//                   alt="trending"
//                   style={{ height: "15px", width: "15px" }}
//                 />
//                 <span
//                   style={{
//                     marginLeft: "5px",
//                     fontSize: "10px",
//                     textDecoration: "bold",
//                   }}
//                 >
//                   {story.status}
//                 </span>
//               </div>
//             </div>
//             <div>
//               <img
//                 src={story.Img}
//                 alt={`${story.name} Logo`}
//                 style={{
//                   borderRadius: "50%",
//                   height: "150px",
//                   width: "150px",
//                   marginTop: "30px",
//                   backgroundColor:"#d9d9d9",
//                   border:"4px solid white"
//                 }}
//               ></img>
//             </div>

//             <div className="text-center">
//               <p
//                 style={{
//                   marginTop: "15px",
//                   color: "black",
//                   fontWeight: "700",
//                   fontSize: "20",
//                   fontFamily: "Open Sans",
//                   wordWrap: "break-word",
//                 }}
//               >
//                 {story.name}
//               </p>
//               <p
//                 style={{
//                   color: "black",
//                   fontWeight: "700",
//                   fontSize: "20",
//                   fontFamily: "Open Sans",
//                   wordWrap: "break-word",
//                 }}
//               >
//                 {story.role}
//               </p>
//               <p>
//                 <img src={walmart} alt="walmart Logo" height="30px" />
//               </p>
//               <p
//                 style={{
//                   color: "#36363A",
//                   fontSize: "16",
//                   fontWeight: "400",
//                   wordWrap: "break-word",
//                 }}
//               >
//                 {story.successStory}
//               </p>
//               <span
//                 style={{
//                   color: "rgb(255, 133, 65)",
//                   bottom: "10px ",
//                   left: "50%",
//                   // transform: "translateX(-50%)",
//                   // width: "100%",
//                   marginTop: "15px",
//                   fontWeight: "Bold",
//                   fontSize: "20px",
//                 }}
//               >
//                 Package: {story.package}
//               </span>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SuccessStories;
// //////////////////////////////////////////////////////////////////////////////

import React from "react";
import "./Success_stories.css";
import { Card } from "react-bootstrap";
import walmart from "../Assets/walmart_logo.png";
import Tej from "../Assets/success story 1 1.png";
import Akhil from "../Assets/success story 1 1 (1).png";
import Manoj from "../Assets/success story 1 1 (2).png";
import rohit from "../Assets/rohith_photo.png";
import Upward from "../Assets/TrendUp.png";

const SuccessStories = () => {
  const successStories = [
    {
      name: "Tej",
      role: "Web Developer",
      companyLogo: walmart,
      successStory:
        "I got four placement offers of 4.5 LPA, 5.5 LPA, 6.5 LPA, and 9.2 LPA from different companies. The team supported me a lot with my placement.",
      package: "9.2 L",
      Img: Tej,
      status: "First Job",
    },
    {
      name: "Akhil",
      role: "Web Developer",
      companyLogo: walmart,
      successStory:
        "Got a hike of 250% from civil engineer background to react developer all in a duration of 7 months. Thanks to the entire team.",
      package: "8 L",
      Img: Akhil,
      status: "250% Hike",
    },
    {
      name: "Manoj",
      role: "Web Developer",
      companyLogo: walmart,
      successStory:
        "10000coders helped me learn about real-time practices and work culture. Their guidance has helped a lot in finding the right career of becoming a web developer from being a BSc graduate.",
      package: "6.5 L",
      Img: Manoj,
      status: "100% Hike",
    },
    {
      name: "Rohith",
      role: "Web Developer",
      companyLogo: walmart,
      successStory:
        "This institute has trained me so well that I have transformed from fearing whether I would get a job to becoming a developer",
      package: "6.5 L",
      Img: rohit,
      status: "First Job",
    },
  ];

  return (
    <div className="successStories" style={{ height: "100vh", width: "100vw" }}>
      <div className="text-center py-2">
        <h3 className="py-3">Success Stories</h3>
        Our team births success stories by equipping individuals with
        cutting-edge skills and knowledge, propelling them towards coveted
        positions at top-tier companies across India.
      </div>

      <div className="Success_profiles py-5 d-flex mx-5">
        {successStories.map((story, index) => (
          <Card
            key={index}
            className="text-center success_card"
            style={{
              border:"none",
              width: "350px",
              margin: "0 20px",
              position: "relative",
              backgroundColor: "none",
              padding: "10px",
              borderRadius:"15px",
              boxShadow:"  0px 3px 5px rgb(161, 166, 162) "
            }}
          >
            <div>
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "0",
                  width: "75px",
                  height: "25px",
                  backgroundColor: "#87db85",
                  borderTopLeftRadius: "4px",
                  borderBottomLeftRadius: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Upward}
                  alt="trending"
                  style={{ height: "15px", width: "15px" }}
                />
                <span
                  style={{
                    marginLeft: "5px",
                    fontSize: "10px",
                    textDecoration: "bold",
                  }}
                >
                  {story.status}
                </span>
              </div>
            </div>
            <div>
              <img
                src={story.Img}
                alt={`${story.name} Logo`}
                style={{
                  borderRadius: "50%",
                  height: "150px",
                  width: "150px",
                  marginTop: "30px",
                  backgroundColor: "#d9d9d9",
                  border: "4px solid white",
                }}
              ></img>
            </div>

            <div className="text-center">
              <p
                style={{
                  marginTop: "15px",
                  color: "black",
                  fontWeight: "700",
                  fontSize: "20",
                  fontFamily: "Open Sans",
                  wordWrap: "break-word",
                }}
              >
                {story.name}
              </p>
              <p
                style={{
                  color: "black",
                  fontWeight: "700",
                  fontSize: "20",
                  fontFamily: "Open Sans",
                  wordWrap: "break-word",
                }}
              >
                {story.role}
              </p>
              <p>
                <img src={walmart} alt="walmart Logo" height="30px" />
              </p>
              <p 
                     style={{
                      fontWeight:"bold",
                      padding:"5px",
                      color: "#36363A",
                      fontSize: "16px",
                      // fontWeight: "400",
                      wordWrap: "break-word",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 4, // Limiting to four lines
                    }}
              >
                {story.successStory}
              </p>
              <div className="package"
                style={{
                  color: "rgb(255, 133, 65)",
                  paddingBottom: "15px ",
                  // left: "50%",
                  marginTop: "15px",
                  fontWeight: "Bold",
                  fontSize: "20px",
                }}
              >
                Package: {story.package}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
