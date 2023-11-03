import React from 'react';
import ravenshaw from "../assets/ravenshaw.jpg";
import svm from "../assets/svm.jpg";
import kendrapada from "../assets/kendrapada.avif";
import { Container } from 'react-bootstrap';

const Educational = () => {
  return (
    <Container fluid className="contact">
     <div className="card" style={{color:"#03A9F4"}}>
        <div className="img-box">
            <img src={ravenshaw}/>
        </div>
        <div className="content">
            <h2>Ravenshaw University</h2>
            <ul>
                <li>MCA</li>
                <li>7.16 CGPA</li>
                <li>Computer Science</li>
            </ul>
            <p> (2018-2021)</p>
        </div>
    </div>
    
    <div className="card" style={{color:"#FF3E7F"}}>
        <div className="img-box">
            <img src={svm}/>
        </div>
        <div className="content">
            <h2>SVM Autonomous College</h2>
            <ul>
                <li>Bachelor Of Science</li>
                <li>58.66 %</li>
                <li>Mathematics Honours</li>
            </ul>
            <p>(2014-2017)</p>
        </div>
    </div>

    <div className="card" style={{color: "#009688"}}>
        <div className="img-box">
            <img src={kendrapada}/>
        </div>
        <div className="content">
            <h2>Kendrapada Autonomous College</h2>
            <ul>
                <li>Intermidiate</li>
                <li>60 %</li>
                <li>PCM with Electronics</li>
            </ul>
            <p>(2011-2014)</p>
        </div>
    </div>
</Container>
  )
}

export default Educational