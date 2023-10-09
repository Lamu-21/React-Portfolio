import React from "react";
import "./About.css";
import G from "../../assests/g.JPG";
import { FiAward } from "react-icons/fi";
import { GiFairyWand } from "react-icons/gi";
import { GiCutDiamond } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { PiFileHtmlDuotone } from "react-icons/pi";
import { BsFiletypeCss } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { GiBasketballBasket } from "react-icons/gi";
import { BiPaint } from "react-icons/bi";
import { PiBooks } from "react-icons/pi";
import { ImBooks } from "react-icons/im";
import { BsPersonCheckFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <center>
        <h5 className="top_pad">Get to know</h5>
      </center>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about-icon" />
              <h5> Experiemce</h5>
              <small>1+ years working</small>
            </article>
            <article className="about__card">
              <GiFairyWand className="about-icon" />
              <h5> Skills </h5>
              <small>
                {" "}
                <PiFileHtmlDuotone className="about-icon" />{" "}
              </small>
              <small>
                {" "}
                <BsFiletypeCss className="about-icon" />{" "}
              </small>
              <small>
                {" "}
                <TbBrandJavascript className="about-icon" />{" "}
              </small>
              <small>
                {" "}
                <FaJava className="about-icon" />{" "}
              </small>
              <small>
                {" "}
                <RiReactjsLine className="about-icon" />{" "}
              </small>
              <small>
                {" "}
                <FaNodeJs className="about-icon" />{" "}
              </small>
              <small> TeamWork</small>
            </article>
            <article className="about__card">
              <GoProjectSymlink className="about-icon" />
              <h5> Projects</h5>
              <small>4+ Projects</small>
              <br />
              <small>Check out in GitHub</small>
            </article>
            <article className="about__card">
              <GiCutDiamond className="about-icon" />
              <h5> Passion</h5>
              <small> Developing innovative projects. </small>
              <br />
              <small>Learning new Technologies </small>
              <br />
              <small>
                {" "}
                <GiBasketballBasket className="about-icon" /> Basketball
              </small>
              <br />
              <small>
                {" "}
                <BiPaint className="about-icon" /> Painting
              </small>
              <br />
              <small>
                {" "}
                <PiBooks className="about-icon" /> Reading
              </small>
            </article>
            <article className="about__card">
              <h4>
                {" "}
                <ImBooks className="about-icon" />
                Objective
              </h4>
              <p>
                Motivated and detail-oriented final year Computer Science
                student with a strong passion for learning new technology.&n
                Seeking a challenging web developer internship to apply my
                knowledge in a real-world setting while contributing to
                innovative projects and gaining practical experience in web
                development.
              </p>
            </article>
            <article className="about__card">
              <h4>
                {" "}
                <BsPersonCheckFill className="about-icon" /> EDUCATION
              </h4>
              <p>
                Bachelor in Computer Science And Technology
                <br />
                Punjab Technical University &nbsp; CGPA:78%
                <br />
                Diploma in Computer Science And Technology.,
                <br />
                State Board of Technical Education (Sikkim) &nbsp; CGPA:81%
              </p>
            </article>{" "}
          </div>

          <center>
            <a href="#contact" className="btn btn-primary">
              Lets Talk
            </a>{" "}
          </center>
        </div>
      </div>
    </section>
  );
};

export default About;
