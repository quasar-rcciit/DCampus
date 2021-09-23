import React from "react";
import "./display.css";
import "../home.css";

import { Parallax, Background } from "react-parallax";
import lib1 from "../../assets/lib1.svg";
import lib2 from "../../assets/lib2.svg";
import notes1 from "../../assets/notes1.svg";
import notes2 from "../../assets/notes2.svg";
import notes3 from "../../assets/notes3.svg";
import admin from "../../assets/admin.svg";
import librarian from "../../assets/librarian.svg";

function Display() {
  return (
    <>
      {/* ================= */}
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/lib-ebook">
            <h3 className="home_about_header">E Books</h3>
          </a>
          <p className="home_about_description_main">
            <strong> Browse </strong>books from the college's online library,{" "}
            <strong> download</strong> them and get refernce to Google Books.
            <br></br>
            All books are stored in decentralised system and are regularly
            updated by the college librarian.<br></br>
            This feature is completely <strong> free</strong> for the students.
            <br></br>
            <em>
              {" "}
              Experience seamless library experience from the comfort of your
              home.
            </em>
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/lib-ebook">
              <img src={lib2} width="500px" />
            </a>
          </div>
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <div className="logo">
            <a href="/lib-notes">
              <img src={notes3} width="480px" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-right justify-content-center">
          {/* <div className="col-lg-6"> */}
          <a href="/lib-notes">
            <h3 className="home_about_header">Class Notes</h3>
          </a>
          <p className="home_about_description_main">
            <em> Sharing notes with friends is no more a hassle!</em> <br />
            Introducing <strong> Class notes</strong> feature in DCampus.{" "}
            <strong> Upload </strong> notes with least hassle and view them from
            your teachers and friends. You can search the notes according to
            your <strong> department </strong>and view it. <br /> Fully
            decentralised!
          </p>
          {/* </div> */}
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/lib-librarian">
            <h3 className="home_about_header">Librarian</h3>
          </a>
          <p className="home_about_description_main">
            <strong> Librarians</strong> can use this module to{" "}
            <strong> add </strong> or <strong>remove </strong>books from the
            network. Full management of a E-book system without the hassle of
            Database. <br />{" "}
            <em> Librarian's job to maintain an online library made easy!</em>
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/lib-librarian">
              <img src={admin} width="500px" />
            </a>
          </div>
        </div>
      </div>

      {/* ================= */}
      {/* <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1536411396596-afed9fa3c1b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=450&q=80"
              className="d-block w-100"
              alt="First image here"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1569407228235-9a744831a150?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=450&q=80"
              className="d-block w-100"
              alt="Second image here"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1607423730403-b7fc1eb83ce0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=450&q=80"
              className="d-block w-100"
              alt="Third image here"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      {/* <Parallax
        bgImage={
          "https://static.vecteezy.com/system/resources/previews/001/271/530/non_2x/white-marble-surface-free-photo.jpg"
        }
        strength={400}
        renderLayer={(percentage) => (
          <div
            style={{
              position: "absolute",
              // background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              width: percentage * 500,
              height: percentage * 500,
            }}
          />
        )}
      >
        <div className="container about">
          <h1 className="about_headinglib">About Us</h1>
          <h4 className="sub_headinglib">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            quam.
          </h4>
          <p className="descriptionlib">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            voluptatibus, beatae a reiciendis distinctio id nostrum voluptatum
            saepe nisi. Sit modi numquam enim sint libero culpa at assumenda
            dolor beatae voluptatibus optio, minus nemo natus ex iure ratione
            quod veniam ullam! Provident, nobis sint nesciunt unde laboriosam
            officia velit? Maiores consectetur sint unde, inventore aliquam
            accusamus fugit, laboriosam recusandae eaque temporibus sit dolore
            culpa vel iste explicabo dicta pariatur nihil quaerat! Nostrum iste
            quia, voluptatum ratione eaque, labore culpa necessitatibus dolor
            aliquid ex in harum debitis nulla assumenda magnam sed suscipit!
            Vitae dolorem fugit in nesciunt aliquam, voluptas neque ipsum?
          </p> */}
      <div className="home_about_container">
        <div className="container login_cards" style={{ marginBottom: "2%" }}>
          {/* <div className="card-group"> */}
          <a
            href="/lib-ebook"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://st2.depositphotos.com/1037238/6210/v/600/depositphotos_62104503-stock-illustration-kids-checking-out-books-in.jpg"
              src={lib1}
              // width="100"
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">EBooks</h4>
              <p class="card-text">
              Don't want to visit college library? No worries. Access all
              books here.
              </p>
            </div>
          </a>
          <a
            href="/lib-notes"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://st2.depositphotos.com/1037238/6210/v/600/depositphotos_62104503-stock-illustration-kids-checking-out-books-in.jpg"
              src={notes1}
              // width="100"
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Class Notes</h4>
              <p class="card-text">
              Couldn't attend a class yesterday? Ok, find the classnotes here.
              </p>
            </div>
          </a>
          <a
            href="/lib-librarian"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://img.freepik.com/free-vector/female-smiling-librarian-standing-counter-book-shelf-paper-flat-vector-illustration-city-library-knowledge_74855-8364.jpg?size=626&ext=jpg"
              // width="100"
              src={librarian}
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Librarian</h4>
              <p class="card-text">
              Decorum of online library is in your hand. All the best.
              </p>
              {/* <a href="/adminl" class="btn btn-primary">
                Login
              </a> */}
            </div>
          </a>
          {/* <a
          href="/lib-admin"
          class="card each_card text-dark text-decoration-none"
        >
          <img
            src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899173.jpg?size=626&ext=jpg"
            width="100"
            height="220"
            class="card-img-top"
          />
          <div class="card-body">
            <h4 class="card-title">Admin</h4>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            
          </div>
        </a> */}
        </div>
      </div>
      {/* </div>
      </Parallax> */}
    </>
  );
}

export default Display;
