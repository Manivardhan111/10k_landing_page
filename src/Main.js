import React from "react";
import "./Main.css"
import NavbarComp from "./Components/Navbar";
import WelcomePage from "./Components/WelcomePage";
import Scholarship from "./Components/Scholarship";
import Freelecture from "./Components/Freelecture"
import CoursesOffered from "./Components/Courses_offered";
// import Modules from "./Components/Courses_offered";
import SuccessStories from "./Components/Success_stories";
import TeamExperts from "./Components/Team_experts";
import StudentTestimonials from "./Components/Student_testimonials";
import WhyChooseUs from "./Components/Why_choose_us";
import HiringPartners from "./Components/Hiring_partners";
import ContactCard from "./Components/ContactCard";
// import Footer from "./Components/Footer.js";
// import Cc from "./Components/Cc";
const Main = () => {
  return (
    <div style={{fontFamily:"Open sans"}}>
      <NavbarComp />
      <WelcomePage />
      <Scholarship />
      <Freelecture />
      <CoursesOffered />
      {/* <Modules /> */}
      <SuccessStories />
      <StudentTestimonials />
      <TeamExperts />
      <WhyChooseUs />
      <HiringPartners />
      <ContactCard />
      {/* <Footer /> */}
      {/* <Cc/> */}
      <div class="footer_contact" style={{backgroundColor:"#fdbe9b"}}>
        <footer class=" text-center mb-0 b-0 ">
          Need help? Talk to us at 9700610241 or &nbsp;
          <button
            class="btn ftrbtn"
            type="button"
            data-toggle="modal"
            data-target="#requestCallback"
            style={{ backgroundColor: "rgb(255, 133, 65)", color: "white" }}
          >
            Request Callback
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Main;
