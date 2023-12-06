// import React from "react";
// import { Card, CardBody } from "react-bootstrap";
// import "./Team_experts.css";
// import Anil_kumar from "../Assets/image 4.png"
// import Praveen_kumar from "../Assets/image 4(2).png"
// import Pavan_kumar from "../Assets/image 4 (1).png";
// import Amazon_logo from "../Assets/Amazon_logo 1.png"
// import Oracle_logo from "../Assets/Oracle_logo 1.png"
// import Micrrosoft_logo from "../Assets/logos_microsoft-icon.png"

// const TeamExperts = () => {
//   return (
//     <div class="team_experts">
//       <div>
//         <h4>Team Experts</h4>
//         <p>
//           Exceptional instructors fueling innovation and shaping future tech
//           leaders with their expertise,guidance and unwavering passion for
//           education
//         </p>
//       </div>
//       <div class="expert-cards">
//         <Card class="trainer_card">
//           <CardBody>
//             <div class="trainer_image" >
//               <img src={Anil_kumar} alt="Trainer" style={{}}></img>
//             </div>
//             <div
//               class="trainer_details"
//               style={{
//                 borderRadius: "0px 0px 20px 20px",
//                 background:
//                   "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
//               }}
//             >
//               <p>Anil Kumar Ghorakavi</p>
//               <p>Ex Company</p>
//               <p style={{  display:"flex"}}><div style={{ backgroundColor:"white",borderRadius:"8px",width:"80px",height:"35px"}}><img src={Amazon_logo} alt="" style={{height:"15px"}}/> </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style={{ backgroundColor:"white",borderRadius:"8px",width:"80px",height:"35px"}}><img src={Oracle_logo} alt="" style={{height:"15px"}}/></div></p>
//               <p>
//                 As an entrepreneur who’s constantly finding ways to help people
//                 reach greater heights in their career and an Ex-Oracle guy, I
//                 know exactly what it takes to launch a career in the IT
//                 industry. The truth is your background or your degrees don’t
//                 matter! What matters is your skills, only your skills!
//               </p>
//             </div>
//           </CardBody>
//         </Card>
//         <Card class="trainer_card">
//           <CardBody>
//             <div class="trainer_image">
//               <img src={Praveen_kumar} alt="Trainer" style={{}}></img>
//             </div>
//             <div
//               class="trainer_details"
//               style={{
//                 borderRadius: "0px 0px 20px 20px",
//                 background:
//                   "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
//               }}
//             >
//               <p>Praveen Kumar</p>
//               <p>Ex Company</p>
//               <p><img src={Micrrosoft_logo} alt="" /><span> Microsoft</span></p>
//               <p>
//                 A pioneer in Learning & Development, Praveen always felt
//                 disengaged with traditional education. He believes supplementing
//                 education with relevant and engaging experience would prepare
//                 students for careers in the tech industry. He currently leads
//                 the program design at 10000 coders and brings in all his
//                 experience in studying various programs in the west to India for
//                 your success.
//               </p>
//             </div>
//           </CardBody>
//         </Card>
//         <Card class="trainer_card">
//           <CardBody>
//             <div class="trainer_image">
//               <img src={Pavan_kumar} alt="Trainer" style={{}}></img>
//             </div>
//             <div
//               class="trainer_details"
//               style={{
//                 borderRadius: "0px 0px 20px 20px",
//                 background:
//                   "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
//               }}
//             >
//               <p>Pavan Kumar</p>
//               <p>Ex Company</p>
//               <p>N/A</p>
//               <p>
//                 A startup enthusiast and a technology erudite, Pavan dons the
//                 advisor hat at 10000 Coders. He ensures our curriculum is
//                 up-to-date with the latest industry needs and our program
//                 delivery uses the trending tools and processes adopted by the
//                 industry. He has led and directed many learning programs for
//                 fresher engineers in various roles at the companies he has
//                 served over the last 13+ years.
//               </p>
//             </div>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default TeamExperts;

import React from "react";
import { Card, CardBody } from "react-bootstrap";
import "./Team_experts.css";
import Anil_kumar from "../Assets/Anil_kumar.png";
import Praveen_kumar from "../Assets/Praveen.png";
import Pavan_kumar from "../Assets/Pavan.png";
import Amazon_logo from "../Assets/Amazon_logo 1.png";
import Oracle_logo from "../Assets/Oracle_logo 1.png";
import Micrrosoft_logo from "../Assets/logos_microsoft-icon.png";

// const TeamExperts = () => {
//   return (
//     <div className="team_experts">
// <div >
//   <h4>Team Experts</h4>
//   <p>
//     Exceptional instructors fueling innovation and shaping future tech
//     leaders with their expertise, guidance, and unwavering passion for
//     education
//   </p>
// </div>
//       <div className="expert-cards">
//         <div className="trainer_card">
//         <div className="trainer_image text-center">
//                 <img src={Anil_kumar} alt="Trainer"></img>
//               </div>
//           <div>
//             <div className="trainer_details">
//               <h4>Anil Kumar Ghorakavi</h4>
//               <p>Ex Company</p>
//               <p style={{ display: "flex" }}>
//                 <div
//                   style={{
//                     backgroundColor: "white",
//                     borderRadius: "8px",
//                     width: "80px",
//                     height: "35px",
//                   }}
//                 >
//                   <img src={Amazon_logo} alt="" style={{ height: "15px" }} />
//                 </div>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <div
//                   style={{
//                     backgroundColor: "white",
//                     borderRadius: "8px",
//                     width: "80px",
//                     height: "35px",
//                   }}
//                 >
//                   <img
//                     src={Oracle_logo}
//                     alt=""
//                     style={{ height: "15px" }}
//                   />
//                 </div>
//               </p>
//               <p>
//                 As an entrepreneur who’s constantly finding ways to help people
//                 reach greater heights in their career and an Ex-Oracle guy, I
//                 know exactly what it takes to launch a career in the IT industry.
//                 The truth is your background or your degrees don’t matter! What
//                 matters is your skills, only your skills!
//               </p>
//             </div>
//           </div>
//         </div>
//         <Card className="trainer_card " style={{border:"none"}} >
//         <div className="trainer_image">
//                 <img src={Praveen_kumar} alt="Trainer"></img>
//               </div>
//           <CardBody>
//             <div className="trainer_details">

//               <p>Praveen Kumar</p>
//               <p>Ex Company</p>
//               <p>
//                 <img src={Micrrosoft_logo} alt="" />
//                 <span> Microsoft</span>
//               </p>
//               <p>
//                 A pioneer in Learning & Development, Praveen always felt
//                 disengaged with traditional education. He believes supplementing
//                 education with relevant and engaging experience would prepare
//                 students for careers in the tech industry. He currently leads
//                 the program design at 10000 coders and brings in all his
//                 experience in studying various programs in the west to India for
//                 your success.
//               </p>
//             </div>
//           </CardBody>
// </Card>
// <Card className="trainer_card ">
// <div className="trainer_image" style={{bottom:"0"}}>
//         <img src={Pavan_kumar} alt="Trainer" ></img>
//       </div>
//   <CardBody>
//     <div className="trainer_details" style={{top:"0"}}>

//       <p>Pavan Kumar</p>
//       <p>Ex Company</p>
//       <p>N/A</p>
//       <p>
//         A startup enthusiast and a technology erudite, Pavan dons the
//         advisor hat at 10000 Coders. He ensures our curriculum is
//         up-to-date with the latest industry needs and our program
//         delivery uses the trending tools and processes adopted by the
//         industry. He has led and directed many learning programs for
//         fresher engineers in various roles at the companies he has served
//         over the last 13+ years.
//       </p>
//     </div>
//   </CardBody>
// </Card>
//       </div>
//     </div>
//   );
// };

// export default TeamExperts;

// const Team_experts = () => {
//   return (
//     <div className="main_container text-center">
//       <div>
//         <h4>Team Experts</h4>
//         <p>
//           Exceptional instructors fueling innovation and shaping future tech
//           leaders with their expertise, guidance, and unwavering passion for
//           education
//         </p>
//       </div>

//       <div className="d-flex">
//         <Card class="trainer_card">
//           <CardBody>
//             <div class="trainer_image">
//               <img src={Anil_kumar} alt="Trainer" style={{}}></img>
//             </div>
//             <div
//               class="trainer_details"
//               style={{
//                 borderRadius: "0px 0px 20px 20px",
//                 background:
//                   "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
//               }}
//             >
//               <p>Anil Kumar Ghorakavi</p>
//               <p>Ex Company</p>
//               <p style={{ display: "flex" }}>
//                 <div
//                   style={{
//                     backgroundColor: "white",
//                     borderRadius: "8px",
//                     width: "80px",
//                     height: "35px",
//                   }}
//                 >
//                   <img src={Amazon_logo} alt="" style={{ height: "15px" }} />{" "}
//                 </div>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <div
//                   style={{
//                     backgroundColor: "white",
//                     borderRadius: "8px",
//                     width: "80px",
//                     height: "35px",
//                   }}
//                 >
//                   <img src={Oracle_logo} alt="" style={{ height: "15px" }} />
//                 </div>
//               </p>
//               <p>
//                 As an entrepreneur who’s constantly finding ways to help people
//                 reach greater heights in their career and an Ex-Oracle guy, I
//                 know exactly what it takes to launch a career in the IT
//                 industry. The truth is your background or your degrees don’t
//                 matter! What matters is your skills, only your skills!
//               </p>
//             </div>
//           </CardBody>
//         </Card>

// <Card class="trainer_card">
//   <CardBody>
//     <div class="trainer_image">
//       <img src={Praveen_kumar} alt="Trainer" style={{}}></img>
//     </div>
//     <div
//       class="trainer_details"
//       style={{
//         borderRadius: "0px 0px 20px 20px",
//         background:
//           "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
//       }}
//     >
//       <p>Praveen Kumar</p>
//       <p>Ex Company</p>
//       <p>
//         <img src={Micrrosoft_logo} alt="" />
//         <span> Microsoft</span>
//       </p>
//       <p>
//         A pioneer in Learning & Development, Praveen always felt
//         disengaged with traditional education. He believes supplementing
//         education with relevant and engaging experience would prepare
//         students for careers in the tech industry. He currently leads
//         the program design at 10000 coders and brings in all his
//         experience in studying various programs in the west to India for
//         your success.
//       </p>
//     </div>
//   </CardBody>
// </Card>
// <Card className="trainer_card ">
//   <div className="trainer_image">
//     <img src={Pavan_kumar} alt="Trainer"></img>
//   </div>
//   <CardBody>
//     <div className="trainer_details" style={{ top: "0" }}>
//       <p>Pavan Kumar</p>
//       <p>Ex Company</p>
//       <p>N/A</p>
//       <p>
//         A startup enthusiast and a technology erudite, Pavan dons the
//         advisor hat at 10000 Coders. He ensures our curriculum is
//         up-to-date with the latest industry needs and our program
//         delivery uses the trending tools and processes adopted by the
//         industry. He has led and directed many learning programs for
//         fresher engineers in various roles at the companies he has
//         served over the last 13+ years.
//       </p>
//     </div>
//   </CardBody>
// </Card>
//       </div>
//     </div>
//   );
// };

// export default Team_experts;

const Team_experts = () => {
  return (
    <div className="main_container text-center">
      <div>
        <h4>Team Experts</h4>
        <p>
          Exceptional instructors fueling innovation and shaping future tech
          leaders with their expertise, guidance, and unwavering passion for
          education
        </p>
      </div>

      <div className="trainers d-flex">
        <div className="trainer_card">
          <div>
            <div className="trainer_image">
              <img src={Anil_kumar} alt="Trainer" style={{}}></img>
            </div>
            <div
              className="trainer_details"
              style={{
                borderRadius: "0px 0px 20px 20px",
                background:
                  "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
                padding: "20px", // Add padding to adjust the text indentation
              }}
            >
              <h5>Anil Kumar Ghorakavi</h5>
              <p>Ex Company</p>
              {/* <p style={{ display: "flex" }}>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    width: "80px",
                    height: "35px",
                  }}
                >
                  <img src={Amazon_logo} alt="" style={{ height: "15px" }} />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    width: "80px",
                    height: "35px",
                  }}
                >
                  <img
                    src={Oracle_logo}
                    alt=""
                    style={{ height: "15px", bottom: "0px" }}
                  />
                </div>
              </p> */}
              <p style={{ display: "flex", alignItems: "flex-end" }}>
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "8px",
      width: "80px",
      height: "35px",
      marginRight: "10px", 
      overflow: "hidden", 
      padding:"3px"
    }}
  >
    <img
      src={Amazon_logo}
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  </div>
  <div
    style={{
      padding:"3px",
      backgroundColor: "white",
      borderRadius: "8px",
      width: "80px",
      height: "35px",
      overflow: "hidden", 
    }}
  >
    <img
      src={Oracle_logo}
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  </div>
</p>
              <p>
                As an entrepreneur who’s constantly finding ways to help people
                reach greater heights in their career and an Ex-Oracle guy, I
                know exactly what it takes to launch a career in the IT
                industry. The truth is your background or your degrees don’t
                matter! What matters is your skills, only your skills!
              </p>
            </div>
          </div>
        </div>

        <div class="trainer_card">
          <div>
            <div class="trainer_image">
              <img src={Praveen_kumar} alt="Trainer" style={{}}></img>
            </div>
            <div
              class="trainer_details"
              style={{
                borderRadius: "0px 0px 20px 20px",
                background:
                  "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
              }}
            >
              <h5>Praveen Kumar</h5>
              <p>Ex Company</p>
              <p>
                <img src={Micrrosoft_logo} alt="" />
                <span style={{fontSize:"20px"}}> Microsoft</span>
              </p>
              <p>
                A pioneer in Learning & Development, Praveen always felt
                disengaged with traditional education. He believes supplementing
                education with relevant and engaging experience would prepare
                students for careers in the tech industry. He currently leads
                the program design at 10000 coders and brings in all his
                experience in studying various programs in the west to India for
                your success.
              </p>
            </div>
          </div>
        </div>
        <div class="trainer_card">
          <div>
            <div class="trainer_image">
              <img src={Pavan_kumar} alt="Trainer" style={{}}></img>
            </div>
            <div
              class="trainer_details"
              style={{
                borderRadius: "0px 0px 20px 20px",
                background:
                  "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
              }}
            >
              <h5>Pavan Kumar</h5>
              <p>Ex Company</p>
              <p>
         
                <span style={{fontSize:"20px"}}>N/A</span>
              </p>
              <p>
                A startup enthusiast and a technology erudite, Pavan dons the
                advisor hat at 10000 Coders. He ensures our curriculum is
                up-to-date with the latest industry needs and our program
                delivery uses the trending tools and processes adopted by the
                industry. He has led and directed many learning programs for
                fresher engineers in various roles at the companies he has
                served over the last 13+ years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team_experts;



