import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import Slider from "react-slick";

import CarouselItem from '../CarouselItem/index';
import PixoulContactForm from "../ContactForm/index";
import "./services.css";

import downArrow from "../../images/ic_arrow_forward.png";
import computer from "../../images/computer.png";
import web_programming from "../../images/web-programming.png";
import lightbulb from "../../images/lightbulb.png";

import work_examples from "../../images/work-examples.svg";
const cn = require('classnames');
class ServicesPage extends React.Component {
  state = {
    page: 0,
    showMenu: false,
    pageLoaded: true,
    progress: 0,
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  onLeave = (origin, destination, direction) => {
    this.setState({ page: destination.index, pageLoaded: false });
  };

  onSlideLoad = (section, origin, destination, direction) => {
    this.setState({ pageLoaded: true });
  };

  setProgress = (newProgress) => {
    const { progress } = this.state;
    if(newProgress > progress) {
      this.setState({ progress: newProgress });
    }
  }

  render() {
    const pageIndex = ["00", "01", "02", "03", "Contact"];
    const { isMenuVisible } = this.props;
    const { page, pageLoaded, width, progress } = this.state;
    const titleTimeout = {
      appear: 900,
      enter: 1950,
      exit: 50,
    };

    const textTimeout = {
      appear: 900,
      enter: 2450,
      exit: 50,
    };
    
    const imgTimeout = {
      appear: 900,
      enter: 2450,
      exit: 50,
    };

    const gridClass = cn('pixoul_grid_column_item', {
      'services-text-animation-enter-done': progress >= 1 || width <= 1199,
    });

    const mapClass = cn('services-map-row', {
      'services-image-animation-enter-done': progress >= 5 || width <= 1199,
    });

    const carouselClass = cn('carousel-list-row', {
      'services-image-animation-enter-done': progress >= 8 || width <= 1199,
    });

    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false
    };

    const carouselItems = [
      {
        key: 1,
        title: 'What more could we ask for?',
        text: "Pixoul is absolutely amazing!  From start to finish, they guided us through our website redesign and held our hand every step of the way.  I couldn't have asked for a better team.",
        name: 'Kendall Sampson',
        position: 'Product Manager',
      },
      {
        key: 2,
        title: 'The smarter first move.',
        text: "We started working with Pixoul after two failed attempts at other dev agencies.  Since then, we've seen engagement go through the roof and customers are loving our new platform.",
        name: 'Jake Richards',
        position: 'CTO',
      },
      {
        key: 3,
        title: 'What more could we ask for?',
        text: "Pixoul is absolutely amazing!  From start to finish, they guided us through our website redesign and held our hand every step of the way.  I couldn't have asked for a better team.",
        name: 'Kendall Sampson',
        position: 'Product Manager',
      },
      {
        key: 4,
        title: 'The smarter first move.',
        text: "We started working with Pixoul after two failed attempts at other dev agencies.  Since then, we've seen engagement go through the roof and customers are loving our new platform.",
        name: 'Jake Richards',
        position: 'CTO',
      },
      {
        key: 5,
        title: 'What more could we ask for?',
        text: "Pixoul is absolutely amazing!  From start to finish, they guided us through our website redesign and held our hand every step of the way.  I couldn't have asked for a better team.",
        name: 'Kendall Sampson',
        position: 'Product Manager',
      },
      {
        key: 6,
        title: 'The smarter first move.',
        text: "We started working with Pixoul after two failed attempts at other dev agencies.  Since then, we've seen engagement go through the roof and customers are loving our new platform.",
        name: 'Jake Richards',
        position: 'CTO',
      }
    ];
    return (
      <div className="services-us-page">
        <ReactFullpage
          anchors={pageIndex}
          onLeave={this.onLeave}
          afterLoad={this.onSlideLoad}
          scrollingSpeed={500}
          autoScrolling={isMenuVisible}
          allowScrolling={!isMenuVisible}
          fitToSection={false}
          render={({ state, fullpageApi }) => {
            if (fullpageApi) {
              fullpageApi.setAllowScrolling(!isMenuVisible);
            }
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="">
                  <div className="">
                      <div className="blue_heading top_about_us_heading mainTitle-animation-enter">
                        How can we help?
                      </div>
                      <div className="top_about_us_heading_text mainText-animation-enter">
                        We're here to bring life to your digital vision. Got a project in mind?&nbsp;<br/>Let's talk
                      </div>
                  </div>

                  <button
                    onClick={() => fullpageApi.moveSectionDown()}
                    className="page_down_button_centered pixoul_button services-page-button-animation"
                  >
                    <img src={downArrow} alt="downArrow" />
                  </button>
                </div>
              </div>
              <div className="section">
                <div className="pixoul_section_heading">
                <CSSTransition
                  in={page === 1 && pageLoaded && width > 1199 && progress < 1}
                  timeout={titleTimeout}
                  classNames="services-title-animation"
                  onEnter={() => {}}
                  onExited={() => {this.setProgress(1)}}
                >
                  <h1 className={progress >= 1 ? 'services-title-animation-enter-done' : ''}>
                    What we do.
                  </h1>
                </CSSTransition>
                <CSSTransition
                  in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                  timeout={textTimeout}
                  classNames="services-text-animation"
                  onEnter={() => {}}
                  onExited={() => {}}
                >
                  <h2 className={progress >= 1 ? 'services-text-animation-enter-done' : ''}>
                    We'll work with you to find solutions to your most complex challenges.
                  </h2>
                  </CSSTransition>
                </div>
                <div className="pixoul_grid_column">
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                    timeout={textTimeout}
                    classNames="services-text-animation"
                    onEnter={() => {}}
                    onExited={() => {}}
                  >
                    <div className={gridClass}>
                      <div className="pixoul_four_grid_item_img_container">
                        <img src={lightbulb} alt="lightbulb" />
                      </div>
                      <div className="pixoul_grid_column_item-content">
                        <h2>Strategy</h2>
                        <h3>
                          Reimagine and redefine your organizational approach by developing new ways of approaching your mission-critical KPIs.
                        </h3>
                      </div>
                      <Link to="#">
                        <img src={downArrow} alt='Downarrow' />
                      </Link>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                    timeout={titleTimeout}
                    classNames="services-text-animation"
                    onEnter={() => {}}
                    onExited={() => {}}
                  >
                    <div className={gridClass}>
                      <div className="pixoul_four_grid_item_img_container">
                        <img src={computer} alt="computer" />
                      </div>
                      <div className="pixoul_grid_column_item-content">
                        <h2>Human-Centered Design</h2>
                        <h3>
                          Use Design Thinking to create products, services, systems, and experiences that address the core needs of your target audience.
                        </h3>
                      </div>
                      <Link to="#">
                        <img src={downArrow} alt='Downarrow' />
                      </Link>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                    timeout={textTimeout}
                    classNames="services-text-animation"
                    onEnter={() => {}}
                    onExited={() => {}}
                  >
                    <div className={gridClass}>
                      <div className="pixoul_four_grid_item_img_container">
                        <img src={web_programming} alt="Web programming" />
                      </div>
                      <div className="pixoul_grid_column_item-content">
                        <h2>Technology</h2>
                        <h3>
                          Bring your digital solution to life for your customers, and scale it across devices and platforms.
                        </h3>
                      </div>
                      <Link to="#">
                        <img src={downArrow} alt='Downarrow' />
                      </Link>
                    </div>
                  </CSSTransition>
                </div>
              </div>
              <div className="section">
                <div className="pixoul_section_heading">
                  <CSSTransition
                      in={page === 2 && pageLoaded && width > 1199 && progress <3}
                      timeout={titleTimeout}
                      classNames="services-title-animation"
                      onEnter={() => {}}
                      onExited={() => {this.setProgress(3)}}
                    >
                    <h1 className={progress >= 3 ? 'services-title-animation-enter-done' : ''}>Where we work.</h1>
                  </CSSTransition>
                  <CSSTransition
                      in={page === 2 && pageLoaded && width > 1199 && progress < 4}
                      timeout={textTimeout}
                      classNames="services-text-animation"
                      onEnter={() => {}}
                      onExited={() => {this.setProgress(4)}}
                  >
                    <h2 className={progress >= 4 ? 'services-text-animation-enter-done' : ''}>
                      From venture-backed startups to Fortune 500 corporations, we build solutions for our partners across a variety of industries. Here's just a few.
                    </h2>
                  </CSSTransition>
                </div>
                <div className="services-row">
                  <CSSTransition
                    in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                    timeout={imgTimeout}
                    classNames="services-image-animation"
                    onExited={() => this.setProgress(5)}
                  >
                    <div>
                      <h1>Excellence in action</h1> 
                      <h2>From internal tools, to consumer facing products and B2B sales-we've got you covered.</h2>
                      <div className="services-link-row">
                        <Link to="#">Business</Link>
                        <Link to="#">FinTech</Link>
                        <Link to="#">Insurance</Link>
                        <Link to="#">Marketing</Link>
                      </div>
                      <div className='service-button-section'>
                        <button className="green_button pixoul_button">Recent Work</button>
                      </div>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                    timeout={imgTimeout}
                    classNames="services-image-animation"
                  >
                    <div className={mapClass}>
                      <img src={work_examples} alt="map" />
                    </div>
                  </CSSTransition>
                </div>
              </div>
              
              <div className="section">
                <div className="pixoul_section_heading">
                  <CSSTransition
                      in={page === 3 && pageLoaded && width > 1199 && progress < 6}
                      timeout={titleTimeout}
                      classNames="services-title-animation"
                      onEnter={() => {}}
                      onExited={() => {this.setProgress(6)}}
                    >
                    <h1 className={progress >= 6 ? 'services-title-animation-enter-done' : ''}>What everyone is saying.</h1>
                  </CSSTransition>
                  <CSSTransition
                      in={page === 3 && pageLoaded && width > 1199 && progress < 7}
                      timeout={textTimeout}
                      classNames="services-text-animation"
                      onEnter={() => {}}
                      onExited={() => {this.setProgress(7)}}
                  >
                    <h2 className={progress >= 7 ? 'services-text-animation-enter-done' : ''}>
                      Don't just take our word for it.
                    </h2>
                  </CSSTransition>
                </div>
                <div className="carousel-row">
                  <CSSTransition
                    in={page === 3 && pageLoaded && width > 1199 && progress < 8}
                    timeout={imgTimeout}
                    classNames="services-image-animation"
                    onExited={() => this.setProgress(8)}
                  >
                    <button className="blue_button pixoul_button">Let's Work Together</button> 
                  </CSSTransition>
                  <CSSTransition
                    in={page === 3 && pageLoaded && width > 1199 && progress < 8}
                    timeout={imgTimeout}
                    classNames="services-image-animation"
                  >
                    <div className={carouselClass}>
                      <Slider {...settings}>
                        {
                          carouselItems.map(item => (
                            <CarouselItem
                              key={item.key}
                              title={item.title}
                              text={item.text}
                              name={item.name}
                              position={item.position}
                            />
                          ))
                        }
                      </Slider>
                    </div>
                  </CSSTransition>
                </div>
              </div>

              <div className="section">
                <PixoulContactForm
                  heading="Contact us."
                  isAnimated={width > 1199 && page === 4 && pageLoaded && progress <= 9}
                  onExited={() => this.setProgress(9)}
                />
              </div>

            </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default ServicesPage;
