
import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    autoplay : true,
    // infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="">
      <div className="container-fluid">
      <Slider {...settings} className="home__slider">
      <div>
        <img
          className="home__image img-fluid"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="None"
        />
      </div>
      <div>
        <img
          className="home__image img-fluid"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Coolie/launch/1500x600_Hero-Tall_ft._CB411102282_.jpg"
          alt="None"
        />
      </div>
     
      
      
    </Slider>
        
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="None"
        /> */}

        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <Product
              id="12321341"
              title="
              Sony PS4 1TB Slim Console with Additional Dualshock Controller (Black)"
              price={395}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71M4SBulbJL._SL1500_.jpg"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Product
              id="49538094"
              title="Microsoft Surface Pro X 1876 13-inch Laptop (Microsoft SQ1/8GB/128GB SSD/Windows 10 Home"
              price={750}
              rating={4}
              image="https://m.media-amazon.com/images/I/51ZqIfidWfL._AC_UY327_FMwebp_QL65_.jpg"
            />
          </div>
        </div>

        <div className="row">
        <div className="col-12">
          <Product
              id="4903850"
              title="
              OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)"
              price={199.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71Lx9l3NivL._SL1500_.jpg"
            />
        </div> 
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
