import React from "react";
// import Card from "./Card";
import "./home.css";
// import Food from "./Food/Food";
// import Pg from "./Pg/Pg";
// import Lib from "./Lib/Lib";
export default function Home() {
  return (
    <>
      
        <div className="header">
          <h1>Dcampus</h1>
          <h3 className="comments"></h3>
        </div>

        <div className="container cards">
          <div className="card">
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/200402142022-02-hostels-coronavirus-full-169.jpg"
              class="card-img-top"
              alt="image here"
            />
            <div className="card-body">
              <h4 class="card-title">PG Finder</h4>              
              <p className="card-text">
                Find a perfect PG for you nearest to your college. Feel home
                away from home.
              </p>              
            </div>
            <a className="card_link" href="/pg">Visit</a>
          </div>
          <div className="card">
            <img
              src="https://www.detroitlabs.com/wp-content/uploads/2018/02/alfons-morales-YLSwjSy7stw-unsplash.jpg"
              class="card-img-top"
              alt="image here"
            />
            <div className="card-body">
              <h4 class="card-title">OLibrary</h4>
              <p className="card-text">
                Get library always at your service. Online book reading,
                checking, suggestions, etc.
              </p>
            </div>
            <a className="card_link" href="/library">Visit</a>
          </div>
          <div className="card">
            <img
              src="https://miro.medium.com/max/602/1*q2MgVJFLS1DXRUke8uFaGQ.jpeg"
              class="card-img-top"
              alt="image here"
            />
            <div className="card-body">
              <h4 class="card-title">HungerKIA</h4>
              <p className="card-text">
                Hunger doesn't let your mind work. Order food and get it
                delivered at your doorstep.
              </p>
            </div>
            <a className="card_link" href="/food">Visit</a>
          </div>
        </div>
        
    </>
  );
}
