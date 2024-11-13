import React from "react";

const Skills = () => {
  return (
    <>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center">
        {/* About CONTAINER */}
        <div className="flex flex-col gap-4 justify-center p-8">
          {/* About TITLE */}
          <h1 className="font-bold text-4xl text-center">About Me</h1>
          {/* About DESC */}
          <p className="text-sm lg:text-lg text-justify">
          React Developer with 3 years of experience building User focused web applications with most up-to-date tools, 
          frameworks and javascript ES6.
          Involved in Understanding functional specifications and develop creative solutions to meet business requirements.
          </p>
          {/* About QUOTE */}
          <span className="italic text-sm lg:text-lg text-justify">
           The best way to predict the future is to invent it.<span className="text-red-500 text-1xl"> Alan Kay</span> 
          </span>
          
        </div>
      </div>

      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center gap-8 bg-red-100 rounded-md p-4">
        {/* SKILL TITLE */}
        <h1 className="font-bold text-1xl lg:text-2xl text-center ">SKILLS</h1>
        <div className="flex flex-wrap lg:flex-row gap-2">
          {/* SKILL LIST */}
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            HTML
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            CSS
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Bootstrap
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            JavaScript
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            TypeScript
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            React.js
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Next.js
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            SCSS
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Tailwind CSS
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            MongoDB
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            PostgreSQL
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Node.js
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Express.js
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            GraphQL
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Apollo
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Redux
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Framer Motion
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Webpack
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Vite
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Git
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer hover:bg-black hover:text-white bg-white text-black">
            Eager to learn More and More................
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Skills;
