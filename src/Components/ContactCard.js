import React from "react";
import contactcompany from "../Assets/Contact_logos/Contact_company_logo.png"
import whatsapp from"../Assets/Contact_logos/logos_whatsapp-icon.png"
import gmail from "../Assets/Contact_logos/logos_google-gmail.png"
import facebook from "../Assets/Contact_logos/logos_facebook.png"
import instagram from "../Assets/Contact_logos/skill-icons_instagram.png"
import youtube from"../Assets/Contact_logos/logos_youtube-icon.png"
import linked_in from "../Assets/Contact_logos/skill-icons_linkedin.png"
import reach_img from "../Assets/Contact_logos/uil_message.png"
import link from "../Assets/Contact_logos/material-symbols_link.png"
import home from "../Assets/Contact_logos/iconamoon_home-bold.png"
import course from "../Assets/Contact_logos/clarity_list-line.png"
import successStories from "../Assets/Contact_logos/ph_trophy-bold.png";
import hiringpartners from "../Assets/Contact_logos/pajamas_work.png"
import about from "../Assets/Contact_logos/mdi_about-circle-outline.png"
import reviews from "../Assets/Contact_logos/fluent-mdl2_review-solid.png"
import workwithus from "../Assets/Contact_logos/octicon_person-16.png"
import office from "../Assets/Contact_logos/icomoon-free_office.png"
import location from "../Assets/Contact_logos/ion_location.png"




import "./ContactCard.css"

const ContactCard = () => {
  return (
    <div className="Contact_us">
      <div className="contact_logo"><img src={contactcompany} alt="" style={{width:"75px", height:"20px"}} /></div>
      <div className="contact_info d-flex">
        <div className="Reach_us">
            <div style={{paddingBottom:"15px"}}>Reach Us <img src={reach_img} alt="" /> </div>
            <div>
                <img src={whatsapp} alt="" /><span>+91 9700610241</span>
            </div>
            <div> <img src={gmail} alt="" /><span>hello@10000coders.com</span></div>
            <div className="Contact_icons" style={{backgroundColor:"#ffcc9c" ,padding:"8px",width:"265px"}}>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={youtube} alt="" />
                <img src={linked_in} alt="" /> 
            </div>

        </div>
        <div className="Quick_links">
          <div style={{paddingBottom:"15px"}}><span>Quick Links</span><img src={link} alt="" /></div>
          <div style={{display:"flex" ,gap:"20px"}}>
            <div>
            <div><img src={home} alt="" /><span>Home</span></div>
            <div><img src={course} alt="" /><span>Course</span></div>
            <div><img src={successStories} alt="" /><span>Success Stories</span></div>
            <div><img src={hiringpartners} alt="" /><span>Hiring Partners</span></div>
            </div>
            <div>
       
            <div><img src={about} alt="" /><span>About Us</span></div>
            <div><img src={reviews} alt="" /><span>Reviews</span></div>
            <div><img src={workwithus} alt="" /><span>Work With Us</span></div>
            </div>
            </div>
        </div>
        <div className="Office">
          <div style={{paddingBottom:"15px"}}><span></span > <img src={office} alt="" /></div>
            <div><img src={location} alt="" /><span>Mig 214, 2nd floor, Road No. 1, KPHB Kukatpally, Hyderabad, Telangana - 500072</span></div>

        </div>
      </div>
    </div>
  );
};

export default ContactCard;
