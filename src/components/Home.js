import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./home.css";
import image1 from "../assets/image1.svg";
import imagebook from "../assets/imagebook.svg";
import imagedeveloper from "../assets/imagedeveloper.svg";
import imageeducation from "../assets/imageeducation.svg";
import imagefood from "../assets/imagefood.svg";
import imagehouse from "../assets/imagehouse.svg";
import ether2 from "../assets/ether2.svg";
import book from "../assets/book.svg";
import { Parallax, Background } from "react-parallax";

export default function Home() {
  return (
    <>
      {/* <img src={ether2} height="700px" /> */}
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <div className="logo">
            <a href="/library">
              <img src={imagebook} width="500px" />
            </a>
          </div>
        </div>

        <div className="col-lg-5 d-flex align-items-right justify-content-center">
          {/* <div className="col-lg-6"> */}
          <a href="/library">
            <h3 className="home_about_header">Library</h3>
          </a>

          <p className="home_about_description_main">
            <em>
              Going out without reason is prohibited in this pandemic, but
              gathering knowledge is not, right?!
            </em>{" "}
            <br /> We understand the value of knowledge and thus this e-Library
            is a homogeneous result of our ideas, skills and implementation.
            <br />
            This library is primarily made for <strong>
              students
            </strong> and <strong>librarian</strong>, however we have included
            an Admin section as well. <br />
            <strong> Students</strong> have access to books and notes. They can
            upload class notes themselves which can be accessed by other
            students. <br />
            <strong> Librarian </strong>has the authority to upload new books to
            the library stack and can delete books as well. <br />
            <strong> Admin</strong> has the power to change the librarian if
            needed.
          </p>
          {/* </div> */}
        </div>
      </div>

      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/food">
            <h3 className="home_about_header">Foodiegenie</h3>
          </a>
          <p style={{ width: "80%" }} className="home_about_description_main">
            <em>
              Even if we go out less, our hunger doesn't get reduced. Getting
              food delivered at doorstep is so cool!
            </em>{" "}
            <br />
            Its our cumulative effort to make the life of students living a{" "}
            <strong>"campus-life"</strong>, a bit easy. <br />{" "}
            <strong> Students</strong> get to order food from their college
            cafeteria. They have freedom to choose where they want their food,
            is it in the canteen or they prefer to get it delivered at their
            doorstep. They get to see all their previous orders along with all
            necessary details at <strong>"Previous Orders"</strong> section.
            <br />
            <strong> Canteen Owner</strong> can add new dishes and delete dishes
            at the same time. They may even change the price or availability of
            any dish at any time they want.
            <br />
            <strong> College Admin</strong> has the right to change Canteen
            Owner and manipulate college commission on orders.
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/food">
              <img src={imagefood} width="800px" />
            </a>
          </div>
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-4">
          <div className="logo">
            <a href="/pg">
              <img src={imagehouse} width="500px" />
            </a>
          </div>
        </div>
        <div className="col-lg-7 d-flex align-items-right justify-content-center">
          {/* <div className="col-lg-6"> */}
          <a href="/pg">
            <h3 className="home_about_header">PGConnect</h3>
          </a>
          <p className="home_about_description_main">
            <em>
              Yes, it is not easy for every student to reach out college from
              their respective homes. Covid has made it even more difficult
              indeed.
            </em>{" "}
            <br />
            Hence, we tried to provide such students a platform where they get
            to know <strong> nearest </strong>PGs to their college. <br />{" "}
            <strong>Landlords</strong> upload their offers specifying all
            details which are displayed to the students. They can stop their
            service at any time they wish if the admin agrees. <br />{" "}
            <strong>Students</strong> get to see all offerings from landlords.
            They can sign agreement which suites them best. Students have the
            right to rate the service once they use it. We have also added a{" "}
            <strong>Pay Rent</strong> button to make paying rents less time
            consuming for students. <br />
            We have a <strong>"Transactions"</strong> section which displays all
            the current and past agreements between students and landlords along
            with other details.
          </p>
          {/* </div> */}
        </div>
      </div>
      <div className="home_about_container">
        <div className="container-fluid cards bg_gradient mt-0">
          <a href="/library" className="card text-dark text-decoration-none">
            <img
              src="https://img.freepik.com/free-vector/people-library-flat-vector-illustration_74855-6607.jpg?size=626&ext=jpg"
              className="card-img-top"
              alt="image here"
              height="300"
            />
            <div className="card-body " style={{ backgroundColor: "#f2f1f1" }}>
              <h4 className="card-title">Library</h4>
              <p className="card-text">
                Get library always at your service. Online book reading,
                checking, class notes, etc.
              </p>
            </div>
          </a>
          <a href="/pg" className="card text-dark text-decoration-none">
            <img
              src="https://img.freepik.com/free-vector/exterior-hostel-tourist-arrival-character-visit-city-cheap-place-living-one-night-alternative-home-some-day-room-relaxation-flat-cartoon-vector-illustration_87771-6471.jpg?size=626&ext=jpg"
              className="card-img-top"
              alt="image here"
              height="300"
            />
            <div className="card-body " style={{ backgroundColor: "#f2f1f1" }}>
              <h4 className="card-title ">PG Connect</h4>
              <p className="card-text">
                Find a perfect PG for you nearest to our college. <br /> Feel
                home away from home.
              </p>
            </div>
          </a>
          <a href="/food" className="card text-dark text-decoration-none">
            <img
              src="https://img.freepik.com/free-vector/happy-cartoon-people-characters-visit-canteen_82574-10739.jpg?size=626&ext=jpg"
              className="card-img-top"
              alt="image here"
              height="300"
            />
            <div className="card-body" style={{ backgroundColor: "#f2f1f1" }}>
              <h4 className="card-title">Foodiegenie</h4>
              <p className="card-text">
                Hunger doesn't let your mind work. Order food and get it
                delivered to you.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/about-us">
            <h3 className="home_about_header">About</h3>
          </a>
          <p className="home_about_description_main">
            This <strong> Dapp</strong> is a result of the joint effort of all
            members of Team <strong> Quasar</strong>. We all have tried our
            level best to make this Dapp functional and easy to use at the same
            time. We tried to make this <strong> feature-rich</strong>. We wish
            our effort will have some useful impact on all of our users. We wish
            to continue this effort to make this Dapp more useful and efficient.
            We are truly grateful to <strong> JU HacknPitch 2021</strong> from
            the bottom of our heart, they provided us the stage and oppurtunity
            without which <strong> DCampus </strong> would have remained a
            dream. <em> Thank You.</em> 🙏🏻
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/12406172-000b-4228-8773-7b97eb8fd888/da1coxr-815e3b9d-fa87-41aa-b084-e02975f4aa4e.gif"
              width="120"
              height="109"
              className="align-top"
              alt=""
            />
            <img
              src="https://see.fontimg.com/api/renderfont4/Gg5D/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/RENhbXB1cw/samarkan-normal.png"
              alt="Hindi fonts"
              width="250"
              height="100"
              className="align-top"
            />
          </div>
        </div>
      </div>

      {/* ========================== Cards to display items ================================== */}
    </>
  );
}
