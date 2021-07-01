import React from 'react';
import maskImg from '../../Assets/AboutSection/mask 1.svg';
import youtube from '../../Assets/AboutSection/youtube 1.svg';
import './About.css';
import video1 from '../../Assets/AboutSection/video1.webp';
import video2 from '../../Assets/AboutSection/video2.webp';

function About() {
  return (
    <div className="main">
      <div className="top-section">
        <div className="img">
          <img src={maskImg} alt="" />
        </div>
        <div className="info-section">
          <div className="text">
            <h3>What is the CoronaVirus?</h3>
            <p>
              Coronaviruses form a large family of viruses that can cause a
              range of illnesses. These include the common cold as well as more
              serious diseases like SARS (severe acute respiratory syndrome),
              MERS (Middle East respiratory syndrome) and the more recent
              coronavirus disease (COVID-19). Coronaviruses have been around for
              many years and as a result, humans have built up a general
              immunity to them. Many animals also have coronavirus-related
              illnesses and sometimes those viruses can mutate and be passed on
              to humans.
            </p>
            <p>
              This website allows your to remain upto-date with all news and
              updated information regarding the CoronaVirus, whilst also being
              able to view all current live Coronavirus statistics.
            </p>
          </div>
          <div className="about-buttons">
            <div className="symptoms-btn">
              <span>Check Symptoms</span>
            </div>
            <div className="symptoms-btn live-data">
              <span>Live Data</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <h3 className="bottom-section-title">Videos</h3>
        <div className="video-section">
          <div className="video">
            <a
              href="https://www.youtube.com/watch?v=i0ZabxXmH4Y"
              target="_blank"
            >
              <img className="video-main-img" src={video1} alt="" />
              <p>Coronavirus Disease</p>{' '}
              <img className="youtube-img" src={youtube} alt="" />
            </a>
          </div>
          <div className="video">
            <a
              href="https://www.youtube.com/watch?v=5DGwOJXSxqg"
              target="_blank"
            >
              <img className="video-main-img" src={video2} alt="" />
              <p>COVID-19 Animation</p>{' '}
              <img className="youtube-img" src={youtube} alt="" />
            </a>
          </div>
          <div className="video">
            <a
              href="https://www.youtube.com/watch?v=i0ZabxXmH4Y"
              target="_blank"
            >
              <img className="video-main-img" src={video2} alt="" />
              <p>Covid-19: How to stay Safe</p>{' '}
              <img className="youtube-img" src={youtube} alt="" />
            </a>
          </div>
          <div className="video">
            <a
              href="https://www.youtube.com/watch?v=i0ZabxXmH4Y"
              target="_blank"
            >
              <img className="video-main-img" src={video1} alt="" />
              <p>Covid-19: How to stay Safe</p>{' '}
              <img className="youtube-img" src={youtube} alt="" />
            </a>
          </div>
          <div className="video">
            <a
              href="https://www.youtube.com/watch?v=i0ZabxXmH4Y"
              target="_blank"
            >
              <img className="video-main-img" src={video2} alt="" />
              <p>Covid-19: How to stay Safe</p>{' '}
              <img className="youtube-img" src={youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
