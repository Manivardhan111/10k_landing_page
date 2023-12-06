// import React, { useState } from "react";
// import "./WelcomePage.css";
// import { Modal, Button, Form } from "react-bootstrap";
// import PersononComputer from "../Assets/guy_on_comp_1.png";

// const WelcomePage = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleRequestCallbackModal = () => setShow(true);

//   return (
//     <div className="welcome_page_container mt-5">
//       <div className="welcome_page mt-5" style={{display:"flex",justifyContent:"space-around"}}>
//         <div className="col-md-4 mb-1 mb-md-0 mx-5 welcome_message" style={{height:"700px"}}>
//           <h3 style={{paddingBottom:"30px",fontWeight:"bold"}}>Welcome to <br />
//             <span style={{color:"#ff8541"}}>10000 Coders</span>
//           </h3>
//           <p style={{fontWeight:"bold",fontSize:"30px"}}>Changing Lives <br /> through IT Excellence</p>
//           <p style={{fontWeight:"bold"}}>
//             Transform your aspirations into achievements with our
//             <span>web development training</span> and placement programs. Level
//             up not only in coding but also in effective communication through
//             our comprehensive training.
//           </p>
//           <div className="my-5">
//           <button
//             className="btn enrbtn"
//             style={{ backgroundColor: "rgb(255, 133, 65)", color: "white" }}
//           >
//             Get Enrolled
//           </button>
//           <button
//             onClick={handleRequestCallbackModal}
//             style={{
//               textDecoration: "none",
//               color: "rgb(255, 133, 65)",
//               border: "none",
//               backgroundColor: "white",
//             }}
//             type="button"
//           >
//             Request a Callback
//           </button>
//           </div>
//         </div>

//         <Modal show={show} onHide={handleClose}>
          // <Modal.Header
          //   style={{ backgroundColor: "rgb(255, 133, 65)", color: "white" }}
          // >
          //   <Modal.Title>ENQUIRY FORM</Modal.Title>
          //   <Button variant="light" onClick={handleClose}>
          //     <span style={{ color: "rgb(255, 133, 65)" }}>X</span>
          //   </Button>
          // </Modal.Header>
          // <Modal.Body>
          //   <Form>
          //     <Form.Group controlId="name">
          //       <Form.Label>Name</Form.Label>
          //       <Form.Control type="text" placeholder="Enter your name" />
          //     </Form.Group>
          //     <Form.Group controlId="mobile">
          //       <Form.Label>Mobile Number</Form.Label>
          //       <Form.Control
          //         type="tel"
          //         placeholder="Enter your mobile number"
          //       />
          //     </Form.Group>
          //     <Form.Group controlId="email">
          //       <Form.Label>Email</Form.Label>
          //       <Form.Control type="email" placeholder="Enter your email" />
          //     </Form.Group>
          //     <Form.Group controlId="qualification">
          //       <Form.Label>Highest Educational Qualification</Form.Label>
          //       <Form.Control
          //         type="text"
          //         placeholder="Enter your qualification"
          //       />
          //     </Form.Group>
          //     <Form.Group controlId="passingYear">
          //       <Form.Label>Year of Passing</Form.Label>
          //       <Form.Control type="text" placeholder="Enter year of passing" />
          //     </Form.Group>
          //   </Form>
          // </Modal.Body>
          // <Modal.Footer>
          //   <Button
          //     style={{
          //       color: "rgb(255, 133, 65)",
          //       backgroundColor: "white",
          //       border: "none",
          //     }}
          //     onClick={handleClose}
          //   >
          //     Close
          //   </Button>
          //   <Button
          //     style={{
          //       color: "white",
          //       backgroundColor: "rgb(255, 133, 65)",
          //       border: "none",
          //     }}
          //   >
          //     Save Changes
          //   </Button>
          // </Modal.Footer>
//         </Modal>

//         <div className="col-md-8 mx-5 welcome_image"style={{width:"700px",height:"700px"}}>
//           <img
//             src={PersononComputer}
//             alt="Person on Computer"
//             // className="img-fluid"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;


// ... other imports ...

// const WelcomePage = () => {

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleRequestCallbackModal = () => setShow(true);

//   return (
//     <div className="welcome_page_container mt-5">
//       <div className="welcome_page mt-5" style={{ display: "flex", justifyContent: "space-around" }}>
//         <div className="col-md-4 mb-1 mb-md-0 mx-5 welcome_message" style={{ height: "700px" }}>
//           <h3 style={{ paddingBottom: "30px", fontWeight: "bold" }}>
//             Welcome to <br />
//             <span style={{ color: "#ff8541" }}>10000 Coders</span>
//           </h3>
//           <p style={{ fontWeight: "bold", fontSize: "30px" }}>
//             Changing Lives <br /> through IT Excellence
//           </p>
//           <p style={{ fontWeight: "bold" }}>
//             Transform your aspirations into achievements with our
//             <span> web development training</span> and placement programs. Level
//             up not only in coding but also in effective communication through
//             our comprehensive training.
//           </p>
//           <div className="my-5">
//             <button
//               className="btn enrbtn"
//               style={{ backgroundColor: "rgb(255, 133, 65)", color: "white" }}
//             >
//               Get Enrolled
//             </button>
//             <button
//               onClick={handleRequestCallbackModal}
//               style={{
//                 textDecoration: "none",
//                 color: "rgb(255, 133, 65)",
//                 border: "none",
//                 backgroundColor: "white",
//               }}
//               type="button"
//             >
//               Request a Callback
//             </button>
//           </div>
//         </div>

//         <Modal show={show} onHide={handleClose}>
//         <Modal.Header
//             style={{ backgroundColor: "rgb(255, 133, 65)", color: "white" }}
//           >
//             <Modal.Title>ENQUIRY FORM</Modal.Title>
//             <Button variant="light" onClick={handleClose}>
//               <span style={{ color: "rgb(255, 133, 65)" }}>X</span>
//             </Button>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>
//               <Form.Group controlId="name">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your name" />
//               </Form.Group>
//               <Form.Group controlId="mobile">
//                 <Form.Label>Mobile Number</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   placeholder="Enter your mobile number"
//                 />
//               </Form.Group>
//               <Form.Group controlId="email">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter your email" />
//               </Form.Group>
//               <Form.Group controlId="qualification">
//                 <Form.Label>Highest Educational Qualification</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your qualification"
//                 />
//               </Form.Group>
//               <Form.Group controlId="passingYear">
//                 <Form.Label>Year of Passing</Form.Label>
//                 <Form.Control type="text" placeholder="Enter year of passing" />
//               </Form.Group>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               style={{
//                 color: "rgb(255, 133, 65)",
//                 backgroundColor: "white",
//                 border: "none",
//               }}
//               onClick={handleClose}
//             >
//               Close
//             </Button>
//             <Button
//               style={{
//                 color: "white",
//                 backgroundColor: "rgb(255, 133, 65)",
//                 border: "none",
//               }}
//             >
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>

//         <div className="col-md-8 mx-5 welcome_image" style={{ width: "700px", height: "700px" }}>
//           {/* <img
//             src={PersononComputer}
//             alt="Person on Computer - Coding Illustration"
//           /> */}
//               <img
//             src={PersononComputer}
//             alt="Person on Computer - Coding Illustration"
//             style={{ width: "75%", height: "75%", objectFit:"contain"}}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;



import React, { useState } from "react";
import "./WelcomePage.css";
import { Modal, Button, Form } from "react-bootstrap";
import PersononComputer from "../Assets/guy_on_comp_1.png";

const WelcomePage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleRequestCallbackModal = () => setShow(true);

  return (
    <div className="welcome_page_container mt-5">
      <div className="welcome_page mt-5" style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="col-md-4 mb-1 mb-md-0 mx-5 welcome_message" style={{ height: "700px" }}>
          <h3 style={{ paddingBottom: "30px", fontWeight: "bold", fontSize: "2em" }}>
            Welcome to <br />
            <span style={{ color: "#ff8541" }}>10000 Coders</span>
          </h3>
          <p style={{ fontWeight: "bold", fontSize: "1.5em" }}>
            Changing Lives <br /> through IT Excellence
          </p>
          <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
            Transform your aspirations into achievements with our
            <span> web development training</span> and placement programs. Level
            up not only in coding but also in effective communication through
            our comprehensive training.
          </p>
          <div className="my-5">
            <button
              className="btn enrbtn"
              style={{ backgroundColor: "rgb(255, 133, 65)", color: "white", fontSize: "1em" }}
            >
              Get Enrolled
            </button>
            <button
              onClick={handleRequestCallbackModal}
              style={{
                textDecoration: "none",
                color: "rgb(255, 133, 65)",
                border: "none",
                backgroundColor: "white",
                fontSize: "1em",
              }}
              type="button"
            >
              Request a Callback
            </button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
                <Modal.Header
            style={{ backgroundColor: "rgb(255, 133, 65)", color: "white" }}
          >
            <Modal.Title>ENQUIRY FORM</Modal.Title>
            <Button variant="light" onClick={handleClose}>
              <span style={{ color: "rgb(255, 133, 65)" }}>X</span>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="mobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your mobile number"
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="qualification">
                <Form.Label>Highest Educational Qualification</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your qualification"
                />
              </Form.Group>
              <Form.Group controlId="passingYear">
                <Form.Label>Year of Passing</Form.Label>
                <Form.Control type="text" placeholder="Enter year of passing" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{
                color: "rgb(255, 133, 65)",
                backgroundColor: "white",
                border: "none",
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              style={{
                color: "white",
                backgroundColor: "rgb(255, 133, 65)",
                border: "none",
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="col-md-8 mx-5 welcome_image" style={{ width: "700px", height: "700px", overflow: "hidden" }}>
          <img
            src={PersononComputer}
            alt="Person on Computer - Coding Illustration"
            style={{ width: "80%", height: "80%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;









