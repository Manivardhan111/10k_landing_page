import React from "react";

const Footer = () => {
  return (
    <div>
     
      <footer class="footer text-center mb-0 b-0 ">
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
  );
};

export default Footer;
