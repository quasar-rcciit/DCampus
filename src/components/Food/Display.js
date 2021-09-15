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
              src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=450&q=80"
              className="d-block w-100"
              alt="First image here"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=450&q=80"
              className="d-block w-100"
              alt="Second image here"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=450&q=80"
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
            dolorum!
          </h4>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis qui repellat voluptatem cum nihil, a explicabo unde
            odio amet quos sit necessitatibus veritatis magni quidem placeat
            dolorum at sapiente quibusdam itaque numquam excepturi voluptate.
            Perspiciatis odit cumque assumenda facilis quasi iusto ducimus, eum
            veritatis nostrum earum, enim dicta, accusamus eligendi numquam
            possimus aperiam consectetur. Eveniet corrupti quibusdam accusantium
            doloremque, exercitationem quia pariatur quis incidunt assumenda
            odit iusto distinctio? Doloremque culpa ipsa voluptatibus, totam
            odit laboriosam eos exercitationem eum, quam, molestiae placeat
            blanditiis repudiandae nihil eligendi beatae. Sed harum atque
            dolorum, magnam cum suscipit dicta ducimus dolore illo consectetur
            odit placeat.
          </p>
          <div className="container login_cards">
            <div class="card each_card">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
                class="card-img-top"
              />
              <div class="card-body">
                <h4 class="card-title">Student's Corner</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/studentfood" class="btn btn-primary">
                  Enter
                </a>
              </div>
            </div>
            <div class="card each_card">
              <img
                src="https://images.unsplash.com/photo-1560341208-305f47d5e901?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
                class="card-img-top"
              />
              <div class="card-body">
                <h4 class="card-title">Canteen Admin</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/adminfood" class="btn btn-primary">
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
