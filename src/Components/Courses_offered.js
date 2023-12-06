// import React, { useState } from "react";
// import "./Courses_offered.css";
// import CourseHeading from "../Assets/courseheading.png";

// const WeekContent = ({ weekNumber }) => {
//   const weeksContent = [
//     null,
//     <div>
//       <span>Week 1</span>
//       <hr className="horizontal-line"></hr>

//       <li>Introduction to Web Development and HTML</li>
//       <ul>
//         <li>Understanding the basics of web development</li>
//         <li>Introducing HTML and its structure</li>
//         <li>Creating a simple webpage and HTML</li>
//         <li>Working with text, headings, and paragraphs</li>
//         <li>Adding links and anchors</li>
//         <li>Inserting images and multimedia content</li>
//       </ul>
//       <hr className="horizontal-line"></hr>
//     </div>,
//     // Week 2 content
//     <div>
//       <span>Week 2</span>
//       <hr className="horizontal-line"></hr>

//       <li>CSS Fundamentals</li>
//       <ul>
//         <li>Introduction to Cascading Style Sheets (CSS)</li>
//         <li>Selectors and HTML elements</li>
//         <li>Working with colors and backgrounds</li>
//         <li>Managing margins, paddings and borders</li>
//         <li>Understanding the box model</li>
//         <li>Creating layouts with CSS positioning and floating</li>
//       </ul>
//       <hr className="horizontal-line"></hr>
//     </div>,
//     // Week 3-4 content
//     <div>
//       <span>Week 3-4</span>
//       <hr className="horizontal-line"></hr>

//       <li>Responsive Web design</li>
//       <ul>
//         <li>The importance of responsive design</li>
//         <li>Media queries for different devices</li>
//         <li>Fluid layouts and flexible grids</li>
//         <li>Using CSS frameworks for responsive developments</li>
//         <li>Making images and media responsive</li>
//         <li>Testing and debugging responsive websites</li>
//       </ul>
//       <hr className="horizontal-line"></hr>
//     </div>,
//     // Week 5-6 content
//     <div>
//       <span>Week 5-6</span>
//       <hr className="horizontal-line"></hr>
//       <li>JavaScript Basics</li>
//       <ul>
//         <li>Introduction to JavaScript and its role in web development</li>
//         <li>Working with variables, data types and operators</li>
//         <li>Control structures, if statements, loops and functions</li>
//         <li>Manipulating the DOM (Document Object Model)</li>
//         <li>Event handling and interactive web elements</li>
//         <li>Introduction to AJAX and working with APIs</li>
//       </ul>
//       <hr className="horizontal-line"></hr>
//     </div>,
//     // Week 7-8 content
//     <div>
//       <span>Week 7-8</span>
//       <hr className="horizontal-line"></hr>
//       <li>Front-end Tools and Libraries</li>
//       <ul>
//         <li>Introduction to front-end build tools (e.g., npm, Web-pack)</li>
//         <li>Managing packages with npm and using package.json</li>
//         <li>Version control with Git and GitHub</li>
//         <li>Introduction to front-end libraries (e.g., jQuery, Bootstrap)</li>
//         <li>Using third-party APIs and libraries in projects</li>
//         <li>Web performance optimization techniques</li>
//       </ul>
//       <hr className="horizontal-line"></hr>
//     </div>,
//   ];

//   return <>{weeksContent[weekNumber]}</>;
// };

// const Modules = () => {
//   const [selectedModule, setSelectedModule] = useState(1);

//   const handleModuleClick = (moduleNumber) => {
//     setSelectedModule(moduleNumber);
//   };

//   return (
//     <div className="container" class="d-flex bg-white">
//       <div
//         class="CoursesOffered my-5 py-5 "
//         style={{ backgroundColor: "rgb(221, 242, 255)", display: "flex" }}
//       >
//         <div class="overview" style={{ width: "35%", margin: "0 4%" }}>
//           <div class="card md-4">
//             <img src={CourseHeading} alt="Course-heading" srcset="" width="" />
//             <br />
//             <div class="card-body">
//               <h3>Course Outcome</h3>
//               <p>Full-stack Front-end Developer</p>
//               <h3>What You Will Learn</h3>
//               <p>
//                 HTML,CSS,JavaScript,responsive design,user interface (UI)
//                 design,web accessibility,version control(Git),browser
//                 compatibility,front-end
//                 frameworks(e.g.,React,Angular,Vue.js).CSS
//                 preprocessors(e.g.,Sass,Less),DOM manipulation,web performance
//                 optimization,cross-browser testing,progressive web
//                 apps(PWAs),JavaScript libraries(e.g.,JQuery),front-end build
//                 tools etc.
//               </p>
//             </div>

//             <button
//               class="btn curriculumbtn"
//               type="button"
//               data-toggle="modal"
//               data-target="#requestCallback"
//               style={{ color: "rgb(255, 133, 65)", border: "none" }}
//             >
//               Enroll Now
//             </button>
//           </div>
//         </div>

//         {/* <div className="modules" class="mx-5 bg-white">
//         {[1, 2, 3, 4, 5].map((moduleNumber) => (
//             <div
//               key={moduleNumber}
//               className={`card ${
//                   selectedModule === moduleNumber ? 'selected-module' : ''
//                 }`}
//                 onClick={() => handleModuleClick(moduleNumber)}
//           >
//             <div className={`card-head text-center module_${moduleNumber}`}>
//               Module {moduleNumber}
//             </div>
//             <div className="card-body">
//               {moduleNumber}

//               {moduleNumber === 1 ? (
//             <div>
//             </div>
//           ) : (
//               `Content for Module ${moduleNumber}`
//             )}
//                 </div>
//               </div>
//             ))}
//           </div> */}
//         <div className="modules mx-5 bg-white">
//           <div
//             className={`card ${selectedModule === 1 ? "selected-module" : ""}`}
//             onClick={() => handleModuleClick(1)}
//           >
//             <div className="card-head text-center module_1">Module 1</div>
//             <div className="card-body">
//               Introduction to Web Developmet and HTML
//             </div>
//             <div>1 Week</div>
//           </div>

//           <div
//             className={`card ${selectedModule === 2 ? "selected-module" : ""}`}
//             onClick={() => handleModuleClick(2)}
//           >
//             <div className="card-head text-center module_2">Module 2</div>
//             <div className="card-body">CSS Fundementals</div>
//             <div>1 Week</div>
//           </div>

//           <div
//             className={`card ${selectedModule === 3 ? "selected-module" : ""}`}
//             onClick={() => handleModuleClick(3)}
//           >
//             <div className="card-head text-center module_3">Module 3</div>
//             <div className="card-body">Responsive Web Design</div>
//             <div>2 Weeks</div>
//           </div>

//           <div
//             className={`card ${selectedModule === 4 ? "selected-module" : ""}`}
//             onClick={() => handleModuleClick(4)}
//           >
//             <div className="card-head text-center module_4">Module 4</div>
//             <div className="card-body">JavaScript Basics</div>
//             <div>2 Weeks</div>
//           </div>

//           <div
//             className={`card ${selectedModule === 5 ? "selected-module" : ""}`}
//             onClick={() => handleModuleClick(5)}
//           >
//             <div className="card-head text-center module_5">Module 5</div>
//             <div className="card-body">Front-end Tools and Libraries</div>
//             <div>2 Weeks</div>
//           </div>
//         </div>

//         <div className="week-content" class="bg-white">
//           <WeekContent weekNumber={selectedModule} />
//           <div class="text-center">
//             <button
//               style={{
//                 backgroundColor: "none",
//                 color: "rgb(255, 133, 65)",
//                 border: "none",
//               }}
//             >
//               Download Curriculum
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modules;







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import "./Courses_offered.css";
// import CourseHeading from "../Assets/courseheading.png";

// const CoursesOffered = () => {
//   return (
//     <div className="courses_offered d-flex">
//       <div className="outcome">
//         <div class="overview" style={{ width: "45%", margin: "0 4%" }}>
//           <div class="card md-6">
//             {" "}
//             <img src={CourseHeading} alt="Course-heading" srcset="" width="" />
//             <br />
//             <div class="card-body">
//               <h3>Course Outcome</h3>
//               <p>Full-stack Front-end Developer</p>
//               <h3>What You Will Learn</h3>
//               <p>
//                 HTML,CSS,JavaScript,responsive design,user interface (UI)
//                 design,web accessibility,version control(Git),browser
//                 compatibility,front-end
//                 frameworks(e.g.,React,Angular,Vue.js).CSS
//                 preprocessors(e.g.,Sass,Less),DOM manipulation,web performance
//                 optimization,cross-browser testing,progressive web
//                 apps(PWAs),JavaScript libraries(e.g.,JQuery),front-end build
//                 tools etc.
//               </p>
//             </div>
//             <button
//               class="btn curriculumbtn"
//               type="button"
//               data-toggle="modal"
//               data-target="#requestCallback"
//               style={{ color: "rgb(255, 133, 65)", border: "none" }}
//             >
//               Enroll Now
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="curriculum d-flex">
//   <div className="modules mx-2">Modules</div>
//   <div className="content me-2">Content</div>
// </div>
//     </div>
//   );
// };

// export default CoursesOffered;

// import React, { useState } from 'react';
// import './Courses_offered.css';
// import CourseHeading from "../Assets/courseheading.png";

// const ModuleContent = ({ moduleNumber }) => {
//   const Modules = {
//     1: (
//       <div style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, paddingBottom: 20, background: 'linear-gradient(90deg, #F87B34 0%, #CB5C1C 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
//         <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
//           <div style={{color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Module 1</div>
//           <div style={{justifyContent: 'center', alignItems: 'center', gap: 54, display: 'inline-flex'}}>
//             <div style={{width: 144, color: 'white', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Introduction to Web Development and HTML</div>
//             <div style={{color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>1 week</div>
//           </div>
//         </div>
//       </div>
//     ),
//     2: (
//       <div style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, paddingBottom: 20, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
//         <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
//           <div style={{color: 'black', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Module 2</div>
//           <div style={{justifyContent: 'center', alignItems: 'center', gap: 54, display: 'inline-flex'}}>
//             <div style={{width: "144px", color: 'black', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>CSS Fundamentals</div>
//             <div style={{color: 'black', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', wordWrap: 'break-word'}}>1 week</div>
//           </div>
//         </div>
//       </div>
//     ),
//     3: (
//       <div style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, paddingBottom: 20, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
//       <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
//         <div style={{color: 'black', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Module 3</div>
//         <div style={{justifyContent: 'center', alignItems: 'center', gap: 54, display: 'inline-flex'}}>
//           <div style={{width: "144px", color: 'black', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Responsive Web Design</div>
//           <div style={{color: 'black', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', wordWrap: 'break-word'}}>2 weeks</div>
//         </div>
//       </div>
//     </div>
//     ),
//     4: (
//       <div style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, paddingBottom: 20, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
//       <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
//         <div style={{color: 'black', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Module 4</div>
//         <div style={{justifyContent: 'center', alignItems: 'center', gap: 54, display: 'inline-flex'}}>
//           <div style={{width: "144px", color: 'black', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>JavaScript Basics</div>
//           <div style={{color: 'black', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', wordWrap: 'break-word'}}>2 weeks</div>
//         </div>
//       </div>
//     </div>
//     ),
//     5: (
//       <div style={{paddingLeft: 30, paddingRight: 30, paddingTop: 20, paddingBottom: 20, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
//       <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
//         <div style={{color: 'black', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Module 5</div>
//         <div style={{justifyContent: 'center', alignItems: 'center', gap: 54, display: 'inline-flex'}}>
//           <div style={{width: "144px", color: 'black', fontSize: 15, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Front-end tools and Libraries</div>
//           <div style={{color: 'black', fontSize: 10, fontFamily: 'Helvetica', fontWeight: '700', wordWrap: 'break-word'}}>2 weeks</div>
//         </div>
//       </div>
//     </div>
//     ),
//   };

//   return Modules[moduleNumber] || null;
// };
// const WeekContent = ({ weekNumber }) => {
//   const weeksContent = [
//       null,
//       <div>
//       <span>Week 1</span>
//       <hr className="horizontal-line"></hr>

//       <li>Introduction to Web Development and HTML</li>
//       <ul>
//       <li>Understanding the basics of web development</li>
//       <li>Introducing HTML and its structure</li>
//       <li>Creating a simple webpage and HTML</li>
//       <li>Working with text, headings, and paragraphs</li>
//       <li>Adding links and anchors</li>
//       <li>Inserting images and multimedia content</li>
//     </ul>
//     <hr className="horizontal-line"></hr>

//   </div>,
//   // Week 2 content
//   <div>
//     <span>Week 2</span>
//     <hr className="horizontal-line"></hr>

//     <li>CSS Fundamentals</li>
//     <ul>
//       <li>Introduction to Cascading Style Sheets (CSS)</li>
//       <li>Selectors and HTML elements</li>
//       <li>Working with colors and backgrounds</li>
//       <li>Managing margins, paddings and borders</li>
//       <li>Understanding the box model</li>
//       <li>Creating layouts with CSS positioning and floating</li>
//     </ul>
//     <hr className="horizontal-line"></hr>

//   </div>,
//   // Week 3-4 content
//   <div>
//     <span>Week 3-4</span>
//     <hr className="horizontal-line"></hr>

//     <li>Responsive Web design</li>
//     <ul>
//       <li>The importance of responsive design</li>
//       <li>Media queries for different devices</li>
//       <li>Fluid layouts and flexible grids</li>
//       <li>Using CSS frameworks for responsive developments</li>
//       <li>Making images and media responsive</li>
//       <li>Testing and debugging responsive websites</li>
//     </ul>
//     <hr className="horizontal-line"></hr>

//   </div>,
//   // Week 5-6 content
//   <div>
//     <span>Week 5-6</span>
//     <hr className="horizontal-line"></hr>
//     <li>JavaScript Basics</li>
//     <ul>
//       <li>Introduction to JavaScript and its role in web development</li>
//       <li>Working with variables, data types and operators</li>
//       <li>Control structures, if statements, loops and functions</li>
//       <li>Manipulating the DOM (Document Object Model)</li>
//       <li>Event handling and interactive web elements</li>
//       <li>Introduction to AJAX and working with APIs</li>
//     </ul>
//     <hr className="horizontal-line"></hr>
//   </div>,
//   // Week 7-8 content
//   <div>
//     <span>Week 7-8</span>
//     <hr className="horizontal-line"></hr>
//     <li>Front-end Tools and Libraries</li>
//     <ul>
//       <li>Introduction to front-end build tools (e.g., npm, Web-pack)</li>
//       <li>Managing packages with npm and using package.json</li>
//       <li>Version control with Git and GitHub</li>
//       <li>Introduction to front-end libraries (e.g., jQuery, Bootstrap)</li>
//       <li>Using third-party APIs and libraries in projects</li>
//       <li>Web performance optimization techniques</li>
//     </ul>
//     <hr className="horizontal-line"></hr>
//   </div>
//   ];

//   return <>{weeksContent[weekNumber]}</>;
// };

// const Modules = () => {
//   const [selectedModule, setSelectedModule] = useState(1);

//   const handleModuleClick = (moduleNumber) => {
//     WeekContent(moduleNumber);
//   };

//   return (
//     <div className="container d-flex bg-white">
//       <div
//         className="CoursesOffered my-5 py-5"
//         style={{ backgroundColor: "rgb(221, 242, 255)", display: "flex" }}
//       >
//         <div className="overview" style={{ width: "35%", margin: "0 4%" }}>
//           <div className="card md-4">
//             <img
//               src={CourseHeading}
//               alt="Course-heading"
//               srcSet=""
//               width=""
//             />
//             <br />
//             <div className="card-body">
//               <h3>Course Outcome</h3>
//               <p>Full-stack Front-end Developer</p>
//               <h3>What You Will Learn</h3>
//               <p>
//                 HTML,CSS,JavaScript,responsive design,user interface (UI)
//                 design,web accessibility,version control(Git),browser
//                 compatibility,front-end
//                 frameworks(e.g.,React,Angular,Vue.js).CSS
//                 preprocessors(e.g.,Sass,Less),DOM manipulation,web performance
//                 optimization,cross-browser testing,progressive web
//                 apps(PWAs),JavaScript libraries(e.g.,JQuery),front-end build
//                 tools etc.
//               </p>
//             </div>

//             <button
//               className="btn curriculumbtn"
//               type="button"
//               data-toggle="modal"
//               data-target="#requestCallback"
//               style={{ color: "rgb(255, 133, 65)", border: "none" }}
//             >
//               Enroll Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}} className="modules mx-2">
//         {[1, 2, 3, 4, 5].map((moduleNumber) => (
//           <div
//             key={moduleNumber}
//             style={{cursor: 'pointer'}}
//             onClick={() => handleModuleClick(moduleNumber)}
//           >
//             <ModuleContent moduleNumber={moduleNumber} />
//           </div>
//         ))}
//       </div>
//       <div></div>

//       <div className="content me-2">
//         <ModuleContent moduleNumber={selectedModule} />
//         <div className='text-center'>
//           <button
//             style={{
//               backgroundColor: "none",
//               color: "rgb(255, 133, 65)",
//               border: "none",
//             }}
//           >
//             Download Curriculum
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modules;
// import React, { useState } from 'react';
// import './Courses_offered.css';
// import CourseHeading from "../Assets/courseheading.png";

// const WeekContent = ({ weekNumber }) => {
//   // Define the content for each week here
//   const weeksContent = [
//     null,
//     // Week 1 content
//     <div>
//       <span>Week 1</span>
//       <hr className="horizontal-line"></hr>

//       <li>Introduction to Web Development and HTML</li>
//       <ul>
//         <li>Understanding the basics of web development</li>
//         <li>Introducing HTML and its structure</li>
//         <li>Creating a simple webpage and HTML</li>
//         <li>Working with text, headings, and paragraphs</li>
//         <li>Adding links and anchors</li>
//         <li>Inserting images and multimedia content</li>
//       </ul>
//       <hr className="horizontal-line"></hr>
//     </div>,
//     // Add content for other weeks here...
//   ];

//   return <>{weeksContent[weekNumber]}</>;
// };

// const Modules = () => {
//   const [selectedModule, setSelectedModule] = useState(1);
//   const [selectedWeek, setSelectedWeek] = useState(0);

//   const handleModuleClick = (moduleNumber) => {
//     setSelectedModule(moduleNumber);
//     setSelectedWeek(0); // Reset selected week when a module is clicked
//   };

//   const handleWeekClick = (weekNumber) => {
//     setSelectedWeek(weekNumber);
//   };

//   return (
//     <div className="container d-flex bg-white">
//       {/* ... (Your existing code) */}

//       <div className="modules mx-2">
//         {[1, 2, 3, 4, 5].map((moduleNumber) => (
//           <div
//             key={moduleNumber}
//             style={{cursor: 'pointer'}}
//             onClick={() => handleModuleClick(moduleNumber)}
//           >
//             {/* Use selectedModule and selectedWeek to determine which content to display */}
//             <div className={`card ${selectedModule === moduleNumber ? 'selected-module' : ''}`}>
//               <div className={`card-head text-center module_${moduleNumber}`}>
//                 Module {moduleNumber}
//               </div>
//               <div className="card-body">
//                 {selectedModule === moduleNumber ? (
//                   <WeekContent weekNumber={selectedWeek} />
//                 ) : (
//                   `Content for Module ${moduleNumber}`
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ... (Your existing code) */}
//     </div>
//   );
// };

// export default Modules;








// import React, { useState } from "react";
// import "./Courses_offered.css";
// import CourseHeading from "../Assets/courseheading.png";

// const WeekContent = ({ weekNumber }) => {
//   // ... (no changes here)
//   const weeksContent = [
//     null,
//     <div>
//       <span>Week 1</span>
//       <hr className="horizontal-line"></hr>

//       <li>Introduction to Web Development and HTML</li>
//       <ul>
//         <li>Understanding the basics of web development</li>
//         <li>Introducing HTML and its structure</li>
//         <li>Creating a simple webpage and HTML</li>
//         <li>Working with text, headings, and paragraphs</li>
//         <li>Adding links and anchors</li>
//         <li>Inserting images and multimedia content</li>
//       </ul>
//       <hr className="horizontal-line"></hr>
//     </div>,
//     // Week 2 content
//     <div>
//       <span>Week 2</span>
//       <hr className="horizontal-line"></hr>

//       <li>CSS Fundamentals</li>
//       <ul>
//         <li>Introduction to Cascading Style Sheets (CSS)</li>
//         <li>Selectors and HTML elements</li>
//         <li>Working with colors and backgrounds</li>
//         <li>Managing margins, paddings and borders</li>
//         <li>Understanding the box model</li>
//         <li>Creating layouts with CSS positioning and floating</li>
//       </ul>
//       <hr className="horizontal-line"></hr>
//     </div>,
//     // Week 3-4 content
//     <div>
//       <span>Week 3-4</span>
//       <hr className="horizontal-line"></hr>

//       <li>Responsive Web design</li>
//       <ul>
//         <li>The importance of responsive design</li>
//         <li>Media queries for different devices</li>
//         <li>Fluid layouts and flexible grids</li>
//         <li>Using CSS frameworks for responsive developments</li>
//         <li>Making images and media responsive</li>
//         <li>Testing and debugging responsive websites</li>
//       </ul>
//       <hr className="horizontal-line"></hr>
//     </div>,
//     // Week 5-6 content
//     <div>
//       <span>Week 5-6</span>
//       <hr className="horizontal-line"></hr>
//       <li>JavaScript Basics</li>
//       <ul>
//         <li>Introduction to JavaScript and its role in web development</li>
//         <li>Working with variables, data types and operators</li>
//         <li>Control structures, if statements, loops and functions</li>
//         <li>Manipulating the DOM (Document Object Model)</li>
//         <li>Event handling and interactive web elements</li>
//         <li>Introduction to AJAX and working with APIs</li>
//       </ul>
//       <hr className="horizontal-line"></hr>
//     </div>,
//     // Week 7-8 content
//     <div>
//       <span>Week 7-8</span>
//       <hr className="horizontal-line"></hr>
//       <li>Front-end Tools and Libraries</li>
//       <ul>
//         <li>Introduction to front-end build tools (e.g., npm, Web-pack)</li>
//         <li>Managing packages with npm and using package.json</li>
//         <li>Version control with Git and GitHub</li>
//         <li>Introduction to front-end libraries (e.g., jQuery, Bootstrap)</li>
//         <li>Using third-party APIs and libraries in projects</li>
//         <li>Web performance optimization techniques</li>
//       </ul>
//       <hr className="horizontal-line"></hr>
//     </div>,
//   ];

//   return <>{weeksContent[weekNumber]}</>;
// };

// const Modules = () => {
//   const [selectedModule, setSelectedModule] = useState(1);

//   const handleModuleClick = (moduleNumber) => {
//     setSelectedModule(moduleNumber);
//   };

//   return (
//     <div className="container d-flex bg-white">
//       <div
//         className="CoursesOffered my-5 py-5"
//         style={{ backgroundColor: "rgb(221, 242, 255)", display: "flex" }}
//       >
//         <div className="overview" style={{ width: "35%", margin: "0 4%" }}>
  
//           <div class="card md-4">
//             <img src={CourseHeading} alt="Course-heading" srcset="" width="" />
//             <br />
//             <div class="card-body">
//               <h3>Course Outcome</h3>
//               <p>Full-stack Front-end Developer</p>
//               <h3>What You Will Learn</h3>
//               <p>
//                 HTML,CSS,JavaScript,responsive design,user interface (UI)
//                 design,web accessibility,version control(Git),browser
//                 compatibility,front-end
//                 frameworks(e.g.,React,Angular,Vue.js).CSS
//                 preprocessors(e.g.,Sass,Less),DOM manipulation,web performance
//                 optimization,cross-browser testing,progressive web
//                 apps(PWAs),JavaScript libraries(e.g.,JQuery),front-end build
//                 tools etc.
//               </p>
//             </div>

//             <button
//               class="btn curriculumbtn"
//               type="button"
//               data-toggle="modal"
//               data-target="#requestCallback"
//               style={{ color: "rgb(255, 133, 65)", border: "none" }}
//             >
//               Enroll Now
//             </button>
//           </div>
//         </div>

//         <div className="modules-and-content d-flex flex-column mx-5 bg-white">
//           {[1, 2, 3, 4, 5].map((moduleNumber) => (
//             <div
//               key={moduleNumber}
//               className={`card ${
//                 selectedModule === moduleNumber ? "selected-module" : ""
//               }`}
//               onClick={() => handleModuleClick(moduleNumber)}
//             >
//               <div className={`card-head text-center module_${moduleNumber}`}>
//                 Module {moduleNumber}
//               </div>
//               <div className="card-body">
//                 {moduleNumber === 1
//                   ? "Introduction to Web Development and HTML"
//                   : `Content for Module ${moduleNumber}`}
//               </div>
//               <div>{moduleNumber === 1 ? "1 Week" : "2 Weeks"}</div>
//             </div>
//           ))}

//           <div className="week-content bg-white">
//             <WeekContent weekNumber={selectedModule} />
//             <div className="text-center">
//               <button
//                 style={{
//                   backgroundColor: "none",
//                   color: "rgb(255, 133, 65)",
//                   border: "none",
//                 }}
//               >
//                 Download Curriculum
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modules;








import React, { useState } from "react";
import "./Courses_offered.css";
import CourseHeading from "../Assets/courseheading.png";

const WeekContent = ({ weekNumber }) => {
  // ... (no changes here)

  const weeksContent = [
    null,
    <div>
      <span>Week 1</span>
      <hr className="horizontal-line"></hr>

      <li>Introduction to Web Development and HTML</li>
      <ul>
        <li>Understanding the basics of web development</li>
        <li>Introducing HTML and its structure</li>
        <li>Creating a simple webpage and HTML</li>
        <li>Working with text, headings, and paragraphs</li>
        <li>Adding links and anchors</li>
        <li>Inserting images and multimedia content</li>
      </ul>
      <hr className="horizontal-line"></hr>
    </div>,
    // Week 2 content
    <div>
      <span>Week 2</span>
      <hr className="horizontal-line"></hr>

      <li>CSS Fundamentals</li>
      <ul>
        <li>Introduction to Cascading Style Sheets (CSS)</li>
        <li>Selectors and HTML elements</li>
        <li>Working with colors and backgrounds</li>
        <li>Managing margins, paddings and borders</li>
        <li>Understanding the box model</li>
        <li>Creating layouts with CSS positioning and floating</li>
      </ul>
      <hr className="horizontal-line"></hr>
    </div>,
    // Week 3-4 content
    <div>
      <span>Week 3-4</span>
      <hr className="horizontal-line"></hr>

      <li>Responsive Web design</li>
      <ul>
        <li>The importance of responsive design</li>
        <li>Media queries for different devices</li>
        <li>Fluid layouts and flexible grids</li>
        <li>Using CSS frameworks for responsive developments</li>
        <li>Making images and media responsive</li>
        <li>Testing and debugging responsive websites</li>
      </ul>
      <hr className="horizontal-line"></hr>
    </div>,
    // Week 5-6 content
    <div>
      <span>Week 5-6</span>
      <hr className="horizontal-line"></hr>
      <li>JavaScript Basics</li>
      <ul>
        <li>Introduction to JavaScript and its role in web development</li>
        <li>Working with variables, data types and operators</li>
        <li>Control structures, if statements, loops and functions</li>
        <li>Manipulating the DOM (Document Object Model)</li>
        <li>Event handling and interactive web elements</li>
        <li>Introduction to AJAX and working with APIs</li>
      </ul>
      <hr className="horizontal-line"></hr>
    </div>,
    // Week 7-8 content
    <div>
      <span>Week 7-8</span>
      <hr className="horizontal-line"></hr>
      <li>Front-end Tools and Libraries</li>
      <ul>
        <li>Introduction to front-end build tools (e.g., npm, Web-pack)</li>
        <li>Managing packages with npm and using package.json</li>
        <li>Version control with Git and GitHub</li>
        <li>Introduction to front-end libraries (e.g., jQuery, Bootstrap)</li>
        <li>Using third-party APIs and libraries in projects</li>
        <li>Web performance optimization techniques</li>
      </ul>
      <hr className="horizontal-line"></hr>
    </div>,
  ];

  return <>{weeksContent[weekNumber]}</>;
};

const Modules = () => {
  const [selectedModule, setSelectedModule] = useState(1);

  const handleModuleClick = (moduleNumber) => {
    setSelectedModule(moduleNumber);
  };

  return (
    <div className="container d-flex bg-white">
      <div
        className="CoursesOffered my-5 py-5"
        style={{ backgroundColor: "rgb(221, 242, 255)", display: "flex" }}
      >
        <div className="overview" style={{ width: "35%", margin: "0 4%" }}>
        <div class="card md-4">
            <img src={CourseHeading} alt="Course-heading" srcset="" width="" />
            <br />
            <div class="card-body">
              <h3>Course Outcome</h3>
              <p>Full-stack Front-end Developer</p>
              <h3>What You Will Learn</h3>
              <p>
                HTML,CSS,JavaScript,responsive design,user interface (UI)
                design,web accessibility,version control(Git),browser
                compatibility,front-end
                frameworks(e.g.,React,Angular,Vue.js).CSS
                preprocessors(e.g.,Sass,Less),DOM manipulation,web performance
                optimization,cross-browser testing,progressive web
                apps(PWAs),JavaScript libraries(e.g.,JQuery),front-end build
                tools etc.
              </p>
            </div>

            <button
              class="btn curriculumbtn"
              type="button"
              data-toggle="modal"
              data-target="#requestCallback"
              style={{ color: "rgb(255, 133, 65)", border: "none" }}
            >
              Enroll Now
            </button>
          </div>
        </div>

        <div className="modules mx-5 bg-white d-flex flex-column">
          {[1, 2, 3, 4, 5].map((moduleNumber) => (
            <div
              key={moduleNumber}
              className={`card ${
                selectedModule === moduleNumber ? "selected-module" : ""
              }`}
              onClick={() => handleModuleClick(moduleNumber)}
            >
              <div className={`card-head text-center module_${moduleNumber}`}>
                Module {moduleNumber}
              </div>
              <div className="card-body">
                {moduleNumber === 1
                  ? "Introduction to Web Development and HTML"
                  : `Content for Module ${moduleNumber}`}
              </div>
              <div>{moduleNumber === 1 ? "1 Week" : "2 Weeks"}</div>
            </div>
          ))}
        </div>

        <div className="week-content bg-white">
          <WeekContent weekNumber={selectedModule} />
          <div className="text-center">
            <button
              style={{
                backgroundColor: "none",
                color: "rgb(255, 133, 65)",
                border: "none",
              }}
            >
              Download Curriculum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
