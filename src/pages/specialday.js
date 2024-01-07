import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../components/Slider.css';
import Navbar from "../pages/specialday"
gsap.registerPlugin(ScrollTrigger);

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const animateSingleContainer = () => {
  const singleContainer = document.querySelector('.container.single');

  if (singleContainer) {
    const innerContainer = singleContainer.querySelector('.inner-container');
    const sections = gsap.utils.toArray('.container.single .panel');

    gsap.to(sections, {
      scrollTrigger: {
        trigger: singleContainer,
        pin: true,
        start: 'top top',
        end: () => '+=' + (innerContainer.offsetHeight - window.innerHeight),
        scrub: 1,
      },
      width: '100vw',
      height: '100vh',
    });

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          x: () => window.innerWidth / 10,
        },
        {
          x: () => -1 * (innerContainer.offsetWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: singleContainer,
            start: 'top 65%',
            pin: false,
            scrub: 1,
            end: () => '+=' + (innerContainer.offsetHeight + window.innerHeight / 2),
          },
        }
      );

      const rndVH = randomIntFromInterval(5, 50);
      gsap.fromTo(
        section,
        {
          opacity: 1,
          x: rndVH + 'vw',
        },
        {
          opacity: 1,
          x: '0',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: singleContainer,
            start: 'top 50%',
            markers: false,
            pin: false,
            scrub: 1,
            end: 'center 25%',
          },
        }
      );
    });
  }
};





const animateDoubleContainer = () => {
  const doubleContainer = document.querySelector('.container.double');

  if (doubleContainer) {
    const innerContainer = doubleContainer.querySelector('.inner-container');
    const topRow = doubleContainer.querySelector('.container.double .row--top');
    const bottomRow = doubleContainer.querySelector('.container.double .row--bottom');
    const topSections = gsap.utils.toArray('.container.double .row--top .panel');
    const bottomSections = gsap.utils.toArray('.container.double .row--bottom .panel');

    topSections.forEach((section) => {
      const rndEND = randomIntFromInterval(10, 14);
      const rndSTART = randomIntFromInterval(10, 14);
      const endMultiplier = rndEND / 100;
      const startMultiplier = rndSTART / 10;

      gsap.fromTo(
        section,
        {
          x: () => window.innerWidth / startMultiplier,
        },
        {
          x: () => -1 * (topRow.offsetWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: doubleContainer,
            markers: false,
            start: 'top bottom',
            pin: false,
            scrub: 1,
            end: 'bottom center',
          },
        }
      );

      const rndVH = randomIntFromInterval(5, 20);
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: rndVH + 'vh',
        },
        {
          opacity: 1,
          y: '0',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: innerContainer,
            start: 'top bottom',
            markers: false,
            pin: false,
            scrub: 1,
            end: 'top 45%',
          },
        }
      );
    });

    bottomSections.forEach((section) => {
      const rndEND = randomIntFromInterval(10, 12);
      const rndSTART = randomIntFromInterval(10, 12);
      const endMultiplier = rndEND / 10;
      const startMultiplier = rndSTART / 10;

      gsap.fromTo(
        section,
        {
          x: () => -1 * (bottomRow.offsetWidth * startMultiplier),
        },
        {
          x: () => bottomRow.offsetWidth - window.innerWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: doubleContainer,
            markers: false,
            start: 'top 70%',
            pin: false,
            scrub: 1,
            end: 'bottom top',
          },
        }
      );

      const rndVH = randomIntFromInterval(5, 20);
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: rndVH + 'vh',
        },
        {
          opacity: 1,
          y: '0',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: innerContainer,
            start: 'center bottom',
            markers: false,
            pin: false,
            scrub: 1,
            end: 'center center',
          },
        }
      );
    });
  }
};

const SpecialDay = () => {
  useEffect(() => {
    animateSingleContainer();
    animateDoubleContainer();
  }, []);

  return (
    <div className='relative'>

      <Navbar/>
      <div className="firstContainer md:mt-20 md:ml-32">
        <h1>Scroll Down</h1>
      </div>

      <div className="container single">
        <a className="jump-btn" href="#skip">
          Skip
        </a>
        <div className="inner-container">
          <div className="container-text">
            <h1>We Look to the Future, Shoot from the Hip, Then Build by Hand</h1>
          </div>
          <section className="panel behind width--thin height--short">
            <figure>
              <img src="https://picsum.photos/1200/650" alt="image" />
            </figure>
          </section>
          <section class="panel width--small height--tall">
            <figure>
              <img src="https://picsum.photos/1200/640" />
            </figure>
          </section>
          <section class="panel behind width--extra-wide height--extra-tall">
            <figure>
              <img src="https://picsum.photos/1200/660" />
            </figure>
          </section>
          <section class="panel behind width--normal height--tall">
            <figure>
              <img src="https://picsum.photos/1200/620" />
            </figure>
          </section>
          <section class="panel width--small height--extra-tall">
            <figure>
              <img src="https://picsum.photos/1200/700" />
            </figure>
          </section>
          <section class="panel width--normal height--extra-short">
            <figure>
              <img src="https://picsum.photos/1200/690" />
            </figure>
          </section>
          <section class="panel behind width--normal height--normal">
            <figure>
              <img src="https://picsum.photos/1200/670" />
            </figure>
          </section>
          <section class="panel behind width--thin height--short">
            <figure>
              <img src="https://picsum.photos/1200/710" />
            </figure>
          </section>
          <section class="panel width--small height--tall">
            <figure>
              <img src="https://picsum.photos/1200/740" />
            </figure>
          </section>
          <section class="panel behind width--extra-wide height--extra-tall">
            <figure>
              <img src="https://picsum.photos/1200/680" />
            </figure>
          </section>
          <section class="panel behind width--normal height--tall">
            <figure>
              <img src="https://picsum.photos/1200/615" />
            </figure>
          </section>
          <section class="panel width--small height--extra-tall">
            <figure>
              <img src="https://picsum.photos/1200/720" />
            </figure>
          </section>
          <section class="panel width--normal height--extra-short">
            <figure>
              <img src="https://picsum.photos/1200/675" />
            </figure>
          </section>
          <section class="panel behind width--normal height--normal">
            <figure>
              <img src="https://picsum.photos/1200/635" />
            </figure>
          </section>
        </div>
      </div>
      <div id="skip"></div>

      <div className="firstContainer">
        <h1>Keep scrolling</h1>
      </div>

      <section className="container double">
        <div className="inner-container">
          <div className="container-text">
            <h1>We Look to the Future, Shoot from the Hip, Then Build by Hand</h1>
          </div>
          <div className="row--top">
            <section className="panel behind width--thin height--short direction--right">
              <figure>
                <img src="https://picsum.photos/1200/652" alt="image" />
              </figure>
            </section>
            <section class="panel width--small height--tall direction--right">
              <figure>
                <img src="https://picsum.photos/1200/642" />
              </figure>
            </section>
            <section class="panel behind width--extra-wide height--extra-tall direction--right">
              <figure>
                <img src="https://picsum.photos/1200/662" />
              </figure>
            </section>
            <section class="panel behind width--normal height--tall direction--right">
              <figure>
                <img src="https://picsum.photos/1200/622" />
              </figure>
            </section>
            <section class="panel width--normal height--extra-short direction--right">
              <figure>
                <img src="https://picsum.photos/1200/692" />
              </figure>
            </section>
            <section class="panel behind width--normal height--normal direction--right">
              <figure>
                <img src="https://picsum.photos/1200/672" />
              </figure>
            </section>
            <section class="panel behind width--normal height--tall direction--right">
              <figure>
                <img src="https://picsum.photos/1200/622" />
              </figure>
            </section>
          </div>
          <div className="row--bottom">
            <section className="panel behind width--thin height--short direction--right">
              <figure>
                <img src="https://picsum.photos/1200/651" alt="image" />
              </figure>
            </section>
            <section class="panel width--small height--tall direction--right">
              <figure>
                <img src="https://picsum.photos/1200/641" />
              </figure>
            </section>
            <section class="panel behind width--extra-wide height--extra-tall direction--right">
              <figure>
                <img src="https://picsum.photos/1200/661" />
              </figure>
            </section>
            <section class="panel behind width--normal height--tall direction--right">
              <figure>
                <img src="https://picsum.photos/1200/621" />
              </figure>
            </section>
            <section class="panel width--normal height--extra-short direction--right">
              <figure>
                <img src="https://picsum.photos/1200/691" />
              </figure>
            </section>
            <section class="panel behind width--normal height--normal direction--right">
              <figure>
                <img src="https://picsum.photos/1200/671" />
              </figure>
            </section>
            <section class="panel width--small height--tall direction--right">
              <figure>
                <img src="https://picsum.photos/1200/641" />
              </figure>
            </section>
          </div>
        </div>
      </section>
      <div class="lastContainer">
      </div>
    </div>
  )
}

export default SpecialDay
