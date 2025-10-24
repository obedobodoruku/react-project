import React from 'react';
import { Link } from 'react-router';

const Cards = () => {
  return (
    <div className="cards flex flex-row items-center justify-center gap-9 mt-[100px]">
      <div className="card-items w-[400px] h-[400px] bg-gray-900 border-2 border-blue-500 p-5">
        <h4 className='underline'>JavaScript Library for UIs</h4>
        <div className="flex flex-col items-center justify-center text-white text-center text-[0.9rem] mt-7">
            <p>React is a JavaScript library specifically designed for building user interfaces (UIs) for web and mobile applications. It's not a full-fledged framework, but rather a tool focused on the view layer.</p>
        </div>
      </div>
      <div className="card-items w-[400px] h-[400px] bg-gray-900 border-2 border-blue-500 p-5">
        <h4 className='underline'>Component-Based Architecture</h4>
        <div className="flex flex-col items-center justify-center text-white text-center text-[0.9rem] mt-7">
            <p> React promotes a component-based approach, where UIs are broken down into small, reusable, and independent pieces of code called components. These components can be combined to build complex interfaces.</p>
        </div>
      </div>
      <div className="card-items w-[400px] h-[400px] bg-gray-900 border-2 border-blue-500 p-5">
        <h4 className='underline'>JSX</h4>
        <div className="flex flex-col items-center justify-center text-white text-center text-[0.9rem] mt-7">
            <p> React often uses JSX (JavaScript XML), a syntax extension that allows developers to write HTML-like code directly within JavaScript. This makes it easier to define UI structures within components.</p>
        </div>
      </div>
    </div>
  )
}

const Video = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[150px]">
        <iframe
        className="react-vid w-[900px] h-[500px] rounded-[12px]"
        src="https://www.youtube.com/embed/Tn6-PIqc4UM"
        title="React.js Tutorial for Beginners"
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
        <p className="text-center text-white font-bold mt-5">React 101 for Beginners in just 100 seconds</p>
    </div>
  )
}

const Home = () => {
    return (
        <div>
            <div className="home-text text-white w-full mb-[200px] mt-[100px]">
                <h1 className="text-center text-7xl font-bold">Welcome to My <span className="react-span text-blue-500">
                        <Link to="https://react.dev/">React</Link>
                        </span> Project</h1>
            </div>
            <Cards />

            <Video />
        </div>
    );
};

export default Home;