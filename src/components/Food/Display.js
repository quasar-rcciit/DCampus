import React from "react";
import "./display.css";
import "../home.css";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import transaction1 from "../../assets/transaction1.svg";
import transaction2 from "../../assets/transaction2.svg";
import transaction3 from "../../assets/transaction3.svg";
import transaction4 from "../../assets/transaction4.svg";
import foodorder from "../../assets/foodorder.svg";
import orderhistory from "../../assets/orderhistory.svg";
import foodowner from "../../assets/foodowner.svg";
import house4 from "../../assets/house4.svg";
import business from "../../assets/business.svg";
import additems from "../../assets/additems.svg";
import homesale from "../../assets/homesale.svg";
import historycard from "../../assets/historycard.svg";
import ordercard from "../../assets/ordercard.svg";
import ownercard from "../../assets/ownercard.svg";

function Display() {
  return (
    <>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/foodiegenie">
            <h3 className="home_about_header">Order Food</h3>
          </a>
          <p className="home_about_description_main">
            Feeling hungry? Its obvious when you use your brain so much.
            <br />
            <strong> Order </strong>food from college cafe, eat at cafe or get
            it <strong> delivered </strong>to your room. <br /> Pay using
            <strong> Ethereum </strong>the next-gen currency. You can also
            provide a <strong> feedback</strong> of your order once its done.{" "}
            <br />
            <em>A Zomato or Swiggy just for college. Isn't that awesome?</em>
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/foodiegenie">
              <img src={foodorder} width="500px" />
            </a>
          </div>
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <div className="logo">
            <a href="/foodiegenie-owner">
              <img src={foodowner} width="580px" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-right justify-content-center">
          {/* <div className="col-lg-6"> */}
          <a href="/foodiegenie-owner">
            <h3 className="home_about_header">Canteen Owners</h3>
          </a>
          <p className="home_about_description_main">
            <strong> Canteen </strong>authority adds the delicious and
            fresh-made food items here. Toggle the{" "}
            <strong> availability</strong> of any dish when needed and can also
            <strong> update</strong> the prices of the items when needed.
            <br />
            <em>Go add your dishes now!</em>
          </p>
          {/* </div> */}
        </div>
      </div>
      <div className="row p-5 home_about_container">
        <div className="col-lg-6">
          <a href="/foodiegenie-orders">
            <h3 className="home_about_header">Order History</h3>
          </a>
          <p className="home_about_description_main">
            <em>The heading is sufficient, isn't it?</em> <br />
            Details such as <strong>Order no.</strong>,{" "}
            <strong>Ordered Items</strong>, <strong>Quantity</strong>,{" "}
            <strong>Price</strong>, <strong>Delivery Location</strong>,{" "}
            <strong>Delivery status</strong>, <strong>Rating</strong> <br /> and
            many more are displayed here.
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="logo">
            <a href="/foodiegenie-orders">
              <img src={orderhistory} width="500px" />
            </a>
          </div>
        </div>
      </div>
      {/* <div
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
      </div>
      <Parallax
        bgImage={
          "https://i.pinimg.com/originals/8f/b8/41/8fb841d386e1acf32e2b36bd40c67f50.jpg"
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
          </p> */}
      <div className=" home_about_container">
        <div className="container login_cards" style={{ marginBottom: "2%" }}>
          <a
            href="/foodiegenie"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://images.unsplash.com/photo-1559308448-de7de9315f9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
              src={ordercard}
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Order Food</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
          <a
            href="/landlords"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://images.unsplash.com/photo-1559308448-de7de9315f9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
              src={ownercard}
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Canteen Owners</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>

          <a
            href="/foodiegenie-orders"
            class="card each_card text-dark text-decoration-none"
          >
            <img
              // src="https://images.unsplash.com/photo-1563461661026-49631dd5d68e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
              src={historycard}
              height="220"
              class="card-img-top"
            />
            <div class="card-body">
              <h4 class="card-title">Order History</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
      </div>
      {/* </div>
      </Parallax> */}
      {/* </div> */}
    </>
  );
}

export default Display;
