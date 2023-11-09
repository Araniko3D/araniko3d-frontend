import React from 'react';
import { Link } from 'react-router-dom'; 
import BhaktapurImage from "./images/Bhaktapur.png";
import UmaMaheswori from "./images/Umamaheswori.jpeg";
import BhagBhairav from "./images/BhagBhairav.jpg";
import KrishnaTemple from "./images/KrishnaTemple.jpeg"
import slideIcon from "./images/seemore.png";
const services = () => {
    return (
      <div className="workpage">
      <div id='services' className="services-section">
      <div className="slide-icon">
      <Link to="/map">
          <img src={slideIcon} alt="Slide Icon" />
      </Link>
        </div>
        <p className="OurServices">Documented Areas</p>
          <p className="OServices">Documented &nbsp;<span>Areas</span></p>
  
        {/* Create a container for the frame */}
        <div className="frame-container">
          {/* Rectangle with text overlapping at the bottom */}
          
          <div className="frame">
          <Link to="/description-page">
            <div className="service-image">
              <img src={BhaktapurImage} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <h4 className="frameh4">Bhaktapur Durbar Square</h4>
              <h5 className='frameh5'>Bhaktapur</h5>
            </div>
            </Link>
          </div>
  
          {/* Repeat the frame for more images */}
          <div className="frame">
          <Link to="/description-page">
            <div className="service-image">
              <img src={UmaMaheswori} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <h4 className="frameh4">Uma Maheswori</h4>
              <h5 className='frameh5'>Kritipur</h5>
            </div>
            </Link>
          </div>
          
          <div className="frame">
          <Link to="/description-page">
            <div className="service-image">
              <img src={BhagBhairav} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <h4 className="frameh4">BhagBhairab</h4>
              <h5 className='frameh5'>Kritipur</h5>
            </div>
            </Link>
          </div>

          <div className="frame">
          <Link to="/description-page">
            <div className="service-image">
              <img src={KrishnaTemple} alt="Work 1" />
            </div>
            <div className="text-overlay">
              <h4 className="frameh4">Krishna Temple</h4>
              <h5 className='frameh5'>Lalitpur</h5>
            </div>
            </Link>
          </div>
          {/* Add more frames as needed */}
        </div>
      </div>
      </div>
    );
  };
  
  export default services;
  