import React from "react";
import "./display.css";

function Display() {
  return (
    <>
      <div
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
      </div>
      <div className="container about">
        <h1 className="about_heading">About Us</h1>
        <h4 className="sub_heading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quam.
        </h4>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          voluptatibus, beatae a reiciendis distinctio id nostrum voluptatum
          saepe nisi. Sit modi numquam enim sint libero culpa at assumenda dolor
          beatae voluptatibus optio, minus nemo natus ex iure ratione quod
          veniam ullam! Provident, nobis sint nesciunt unde laboriosam officia
          velit? Maiores consectetur sint unde, inventore aliquam accusamus
          fugit, laboriosam recusandae eaque temporibus sit dolore culpa vel
          iste explicabo dicta pariatur nihil quaerat! Nostrum iste quia,
          voluptatum ratione eaque, labore culpa necessitatibus dolor aliquid ex
          in harum debitis nulla assumenda magnam sed suscipit! Vitae dolorem
          fugit in nesciunt aliquam, voluptas neque ipsum?
        </p>
        <div className="container login_cards">
          <div class="card each_card">
            <img
              src="https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=650&w=1350&q=80"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Students</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Enter
              </a>
            </div>
          </div>
          <div class="card each_card">
            <img
              src="https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Librarians</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/adminl" class="btn btn-primary">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
