import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import programmer from "../assets/programmer.png";
import Particle from "../others/Particle";
import Typewriter from "typewriter-effect";
// import About from "./About";
import Home2 from "./Home2";
// import Home2 from "./Home2";
// import Type from "./Type";
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Home() {
  return (
    <>
      <Header />
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Ritishree</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Typewriter
                    options={{
                      strings: [
                        "I'M A",
                        "Frontend Developer",
                        "Software Developer"
                        // "Freelancer",
                        // "MERN Stack Developer",
                        // "Open Source Contributor",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}
                  />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={programmer}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
        <Footer />
      </section>
    </>
  );
}

export default Home;

















// import React, { useEffect, useRef }  from 'react';
// import Typed from 'typed.js';
// import Experience from './Experience';
// import Header from '../header/Header';
// import Particle from '../others/Particle';
// // import About from './About';

// const Home = () => {
//     const el = useRef(null);

//     useEffect(() => {
//         const typed = new Typed(el.current, {
//             strings: ['Frontend Developer','Web Developer','Software Developer'],
//             typeSpeed: 50,
//         });
//         return () => {
//             // Destroy Typed instance during cleanup to stop animation
//             typed.destroy();
//         };
//     }, []);


//     return (
//         <>
//          {/* <Header/> */}
//             <section className='firstSection'>
//             <Particle/>
//                 <div className='leftSection'>
//                    <div> Hii, My Name Is <span className='purple'>Ritishree!</span></div>
//                     <div>and I am a Passonate</div>
//                    <div> <span ref={el} style={{color:"rgb(153, 69, 231)"}}/></div>
//                    <div className='buttons'>
//                     <button className='btn'>Download Resume</button>
//                     <button className='btn'>Git Hub</button>
//                    </div>
//                 </div>
//                 <div className='rightSection'>
//                     <img src='./assets/img1.png' alt='picture' />
//                 </div>
//             </section>
//             <hr/>
//             <Experience/>
//             {/* <About/> */}
//         </>
//     )
// }

// export default Home