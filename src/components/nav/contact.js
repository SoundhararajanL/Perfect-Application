import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./nav.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import profilephoto from "./profilephoto.JPG"
import NavbarPage from '../nav';

const Contact = () => {
  return (
    <div>
        <div>
            <NavbarPage />
        </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div class="page shadow">
        <div class="main-container shadow">
          <MDBContainer>
            <br />
            <br />
            <MDBRow>
              <MDBCol sm={12} md={4}>
                <div class="container">
                  <img
                    src={profilephoto}
                    alt="John"
                    style={{ width: "65%", borderRadius: "100%" }}
                  />
                  <br />
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </div>
              </MDBCol>

              <MDBCol>
                <div class="container">
                  <h2>Soundhararajan L</h2>
                  <p>Software Engineeer</p>
                  <p>Namakkal, TamilNadu, India</p>
                </div>

                <hr />

                <MDBContainer>
                  <MDBRow>
                    <MDBCol sm={2} lg={2} md={2}>
                      <h6 className="m-4">Bio </h6>
                    </MDBCol>
                    <MDBCol>
                      <p class="bio">
                      Hello, I'm a software engineer based in Bangalore, currently employed at ASM Technology. With a diverse background, I've actively participated in several React and Django projects, showcasing my proficiency in Python and JavaScript. My current focus revolves around data science and JavaScript development, with a specialization in Google Apps Script. I bring a wealth of experience in both backend and frontend technologies to contribute effectively to software development projects.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        
        </div>
      </div>
  
  );
};
export default Contact;
