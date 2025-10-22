import React from 'react';
import { Link } from 'react-router';

const Cards = () => {
  return (
    <div className="cards flex flex-row items-center justify-center gap-9 mt-[100px]">
      <div className="card-items w-[400px] h-[400px] bg-gray-900 border-2 border-blue-500 p-5">
        <h4 className='underline'>Hello World</h4>
        <div className="flex flex-col items-center justify-center text-white text-center text-[0.9rem] mt-7">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus laudantium ullam error repellat tempora, odit dignissimos adipisci quam quibusdam distinctio libero numquam tempore nostrum quasi sed obcaecati eligendi labore? Eaque!</p>
        </div>
      </div>
      <div className="card-items w-[400px] h-[400px] bg-gray-900 border-2 border-blue-500 p-5">
        <h4 className='underline'>Hi There!</h4>
        <div className="flex flex-col items-center justify-center text-white text-center text-[0.9rem] mt-7">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus laudantium ullam error repellat tempora, odit dignissimos adipisci quam quibusdam distinctio libero numquam tempore nostrum quasi sed obcaecati eligendi labore? Eaque!</p>
        </div>
      </div>
      <div className="card-items w-[400px] h-[400px] bg-gray-900 border-2 border-blue-500 p-5">
        <h4 className='underline'>What's Up!</h4>
        <div className="flex flex-col items-center justify-center text-white text-center text-[0.9rem] mt-7">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus laudantium ullam error repellat tempora, odit dignissimos adipisci quam quibusdam distinctio libero numquam tempore nostrum quasi sed obcaecati eligendi labore? Eaque!</p>
        </div>
      </div>
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
        </div>
    );
};

export default Home;