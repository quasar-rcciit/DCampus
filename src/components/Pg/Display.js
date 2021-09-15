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
              src="https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=450&q=80"
              className="d-block w-100"
              alt="First image here"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1617545293648-b4847530f8a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=450&q=80"
              className="d-block w-100"
              alt="Second image here"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1617544926793-e5dd78afc0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&h=450&q=80"
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
        <div className="container about">
          <h1 className="about_heading">About Us</h1>
          <h4 className="sub_heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            velit.
          </h4>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            quidem maxime autem rerum soluta quos deleniti, impedit excepturi
            odio odit nesciunt ex earum, reprehenderit hic architecto dolores.
            Aliquid ab amet voluptates dolore delectus hic expedita eos dolorem
            adipisci iure, veniam ad eaque, cumque explicabo. Fugiat, dicta,
            laborum soluta excepturi dolor ad quis distinctio, consequuntur
            laudantium enim rem blanditiis similique ab esse? Voluptate repellat
            molestias ducimus voluptatibus unde fugiat placeat eligendi odit
            tempora dolores similique deleniti nam corrupti ea optio, tenetur
            assumenda nulla! Velit nostrum recusandae labore obcaecati modi sint
            cupiditate illum sapiente commodi ea accusantium quam nihil, quidem,
            laboriosam voluptas!
          </p>
          <div className="container login_cards">
            <div class="card each_card">
              <img
                src="https://images.unsplash.com/photo-1559308448-de7de9315f9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
                class="card-img-top"
              />
              <div class="card-body">
                <h4 class="card-title">Students</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/studentpg" class="btn btn-primary">
                  Enter
                </a>
              </div>
            </div>
            <div class="card each_card">
              <img
                src="https://images.unsplash.com/photo-1563461661026-49631dd5d68e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
                class="card-img-top"
              />
              <div class="card-body">
                <h4 class="card-title">Renters</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/adminpg" class="btn btn-primary">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
