import React from "react";

import "./Why_choose_us.css";

const WhyChooseUs = () => {
  return (
    <div className="why_choose_us text-center">
      <div className="heading text-center">
        <h4>Why Choose Us?</h4>
        <p>
          Exceptional instructors fueling innovation and shaping future tech
          leaders with their expertise, guidance, and unwavering passion for
          education.
        </p>
      </div>
      <div className="container">
        <div className="structured_curriculum bx">
          <span>
            STRUCTURED
            <br /> CURRICULUM
          </span>
          <p>
            {" "}
            10000coders offers a meticulously structured IT training curriculum
            designed to equip learners with comprehensive skills and expertise
            for success in the tech industry.
          </p>
        </div>
        <div className="live_classes bx">
          <span>LIVE CLASSES</span>
          <p>
            {" "}
            Experience dynamic learning with 10000coders' live classes, where
            expert instructors deliver real-time instruction and interactive
            sessions for an engaging and effective IT training journey
          </p>
        </div>

        <div className="practical_experience bx">
          <span>
            PRACTICAL
            <br /> EXPERIENCE
          </span>
          <p>
            {" "}
            Gain invaluable practical experience through hands-on projects and
            real-world simulations with 10000coders, ensuring you are
            well-prepared to tackle real challenges in the IT field
          </p>
        </div>
        <div className="aspirational_peers bx">
          <span>
            ASPIRATIONAL
            <br /> PEERS
          </span>
          <p>
            {" "}
            Join a community of aspirational peers, where you'll collaborate
            with like-minded individuals, fostering a supportive environment
            that fuels collective growth and inspires success in the IT
            industry.
          </p>
        </div>

        <div className="mentorship bx">
          <span>
            1:1 <br />
            MENTORSHIP
          </span>
          <p>
            {" "}
            Embark on a personalized learning journey with 10000coders'
            one-on-one mentorship, where experienced mentors provide tailored
            guidance, enabling you to maximize your potential and excel in the
            IT domain.
          </p>
        </div>
        <div className="career_support bx">
          <span>
            CAREER <br />
            SUPPORT
          </span>
          <p>
            {" "}
            Unlock your career potential with comprehensive career support,
            including job placement assistance, interview coaching, and
            networking opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
