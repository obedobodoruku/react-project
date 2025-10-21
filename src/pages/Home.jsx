import React from 'react';

const Cards = () => {
  return (
    <div className="cards flex flex-row items-center justify-center gap-9 my-[150px]">
      <div className="card-items w-[400px] h-[400px] bg-gray-900 border-2 border-blue-500">
        <h4>Hello World</h4>
      </div>
      <div className="card-items w-[400px] h-[400px] bg-gray-900 border-2 border-blue-500">
        <h4>Hello World</h4>
      </div>
      <div className="card-items w-[400px] h-[400px] bg-gray-900 border-2 border-blue-500">
        <h4>Hello World</h4>
      </div>
    </div>
  )
}

const Home = () => {
    return (
        <div>
            <div className="home-text text-white w-full h-[200px] mt-[200px]">
                <h1 className="text-center text-7xl font-bold">Welcome to My <span className="text-blue-500 underline">React</span> Project</h1>
            </div>
            <Cards />
        </div>
    );
};

export default Home;