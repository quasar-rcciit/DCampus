import React from "react";
import "./footer.css";

export default function Navbar() {
  return (
    <footer>
          <div className="footcont">
              <div className="footer-ul">
                  <ul>
                      <li className="aboutus">
                      <a href="/about-us">About us</a>
                      </li>
                      <li className="developedteam">Developed with <i className="fa fa-heart" style={{fontsize:"20px",color:"red"}}></i> By Quasar</li>
                      <li className="Poweredbyether">Powered By  <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/12406172-000b-4228-8773-7b97eb8fd888/da1coxr-815e3b9d-fa87-41aa-b084-e02975f4aa4e.gif"
            width="40"
            height="29"
            className="align-top"
            alt=""
          />ethereum</li>
                  </ul>
              </div>
          </div>
      </footer>
  );
}
