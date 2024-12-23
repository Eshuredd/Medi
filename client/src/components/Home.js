import React from "react";
import "@splinetool/viewer";
import { Link } from "react-router-dom";
import './Home.css';
//import Dboard from "./Dboard";

const Home = ({id}) => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-img">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/390/394/original/mental-health-awareness-icon-vector.jpg"
            alt="Mental Health"
          />
        </div>

        <div className="home-content">
          <h3 className="typing-text">Welcome to Our Platform</h3>
          <p className="homepara">
            <span style={{ fontSize: "2rem" }}>" </span>
            Our mission is to foster mental well-being and community support.
            Explore the chatbot, community forum, and other sections to stay connected and informed.
            <span style={{ fontSize: "2rem" }}>" </span>
          </p>

          <div className="button-container">
            <Link to="/Home/chatbot">
              <button className="custom-button chatbot-btn">Chatbot</button>
            </Link>
            <Link to="/Home/forum/select-domain">
              <button className="custom-button forum-btn">Community Forum</button>
            </Link>
            <Link to="/Home/sections">
              <button className="custom-button mental-btn">Mental Health Resources</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Chatbot Section */}
      <div className="page2" id="chatbot">
        <div className="spline-container">
          <spline-viewer
            url="https://prod.spline.design/iElCLyBL4DC9lZSW/scene.splinecode"
            style={{ width: "100%", height: "550px" }}
          />
        </div>
        <div className="text-container">
          <h2 style = {{color: '#ff0000', fontWeight: '1000', fontSize:'2.5rem'}}> Mental Health Chatbot</h2>
          <p style = {{color:'whitesmoke', fontSize:'1.5rem'}}>
            If you're feeling overwhelmed, don't hesitate to reach out to our chatbot for support.
            You're not alone, and help is just a message away.
          </p>
        </div>
      </div>

      {/* <div>
        <Dboard/>
      </div> */}
      {/* Community Section */}
      <div className="community" id="community" style = {{marginTop:'8rem'}}>
        <div className="spline-container">
          <spline-viewer
            url="https://prod.spline.design/3nUiXob4AEk5Ygug/scene.splinecode"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div className="community-container" style={{ marginTop: "20px", marginLeft: "20px" }}>
          <h2 style = {{color: '#ff0000', fontWeight: '1000', fontSize:'2.5rem'}}>Community Support</h2>
          <p style = {{color:'whitesmoke' , fontSize:'1.5rem'}}>
            Join our community to connect with others who share similar experiences.
            Support each other, share resources, and grow together. Your voice matters!
          </p>
          <p style = {{color:'whitesmoke' , fontSize:'1.5rem'}}>Stay tuned for upcoming events and discussions!</p>
        </div>
      </div>
{/* 
        <div>
        <Dboard id={id}/>
      </div>    */}

      {/* Quizzes Section */}
      <div className="quizzes-section">
        <div className="quiz-img">
          <h2 style = {{color: '#00e676', fontWeight: '1000', fontSize:'4rem'}}>QUIZZES</h2>
          <img
            src="https://binghomepageweeklyquiz.com/wp-content/uploads/2022/04/mental-health-quiz.jpg"
            alt="Quizzes"
          />
        </div>
        <div className="quiz-textbox">
          <p className="quiz-description" style = {{fontSize:'1.5rem'}}>
            A quiz can't tell you everything you need to know about yourself, but it can help provide insight into some of your personality traits, behaviors, and how you view and respond to the world around you.
          </p>
        </div>
      </div>

      {/* Explore Sections */}
      <div className="explore-sections" id="explore">
        <h2 className="text-center mt-5" style = {{color: '#ff0000', fontWeight: '1000', fontSize:'2.5rem'}}>Explore Sections</h2>
        <p className="text-center"  style = {{color:'whitesmoke' , fontSize:'1.5rem'}}>
          Discover our resources and participate in exciting workshops and community events!
        </p>
        <div className="button-container">
          <Link to="/workshops">
            <button className="custom-button workshops-btn">Upcoming Workshops</button>
          </Link>
          <Link to="/events">
            <button className="custom-button events-btn">Community Events</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;


