import React from 'react';
import '../style/css/home.css';
import '../static/best-quality.jpg';

const Home = () => {
  var backgroundStyle = {
    backgroundImage: 'url("/best-quality.jpg")',
    height: '93vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };


  return (
      <div>
        <div style = {{backgroundStyle}}>
        <div className="search-box">
          <h1>Search Products</h1>
          <input type="text" className="search-bar" placeholder="Search for groceries..." />
        </div>
        <div className="product-icons">
          <div className="icon">
            <img src="/images/fruit-icon.png" alt="Fruits" />
            <p>Fruits</p>
          </div>
          <div className="icon">
            <img src="/images/vegetable-icon.png" alt="Vegetables" />
            <p>Vegetables</p>
          </div>
          <div className="icon">
            <img src="/images/dairy-icon.png" alt="Dairy" />
            <p>Dairy</p>
          </div>
          <div className="icon">
            <img src="/images/snacks-icon.png" alt="Snacks" />
            <p>Snacks</p>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Home;