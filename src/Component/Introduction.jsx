import React from 'react';
import './Introduction.css';
import { CV_HREF, HERO_SLIDES } from './heroSlides';

const renderSlide = (slide) => (
  <li
    key={slide.image}
    style={{
      backgroundImage: `url(${slide.image})`,
      backgroundSize: slide.fit || 'cover',
      backgroundColor: '#111',
    }}
  >
    <div className="overlay" />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
          <div className="slider-text-inner js-fullheight">
            <div className="desc">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              {slide.showCv ? (
                <p>
                  <a className="btn btn-primary btn-learn" href={CV_HREF} target="_blank" rel="noopener noreferrer">
                    View CV<i className="icon-download4" />
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

const Intorduction = () => (
  <div>
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">{HERO_SLIDES.map(renderSlide)}</ul>
      </div>
    </section>
  </div>
);

export default Intorduction;
