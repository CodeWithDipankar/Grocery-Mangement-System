import React from 'react';
import './style/All.css';  // Create this CSS file for custom styles

function Home() {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content text-center">
        <h1 className="display-4 animate__animated animate__fadeIn">Welcome to the Grocery Store</h1>
        <p className="lead animate__animated animate__fadeInUp">Your one-stop shop for all your daily needs.</p>
        <button className="btn btn-primary btn-lg animate__animated animate__fadeInUp">Shop Now</button>
      </div>
      {/* Diagnostic Grid */}
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Orders Delivered</h5>
                <p className="card-text">1250</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Items Available</h5>
                <p className="card-text">50 Products</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Price</h5>
                <p className="card-text">$7,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
