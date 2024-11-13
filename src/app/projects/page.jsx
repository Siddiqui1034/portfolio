"use client"
import React from 'react'

const projects = [
    {
      label: "HandMade",
      desc: "For artisans who showcase their creativity through their handmade products customer can send mail and can make personalized order. Email System with EmailJS to make communication between buyer and seller. Integrated Razor pay as a payment gateway.  ", 
      tools: "HTML, CSS, Bootstrap, Nextjs, GraphQL Apollo Server, Material UI, Axios, JSON web token, Git, Typescript, State Management, Redux lib."           
    },
    {
      label: "School Management System",
      desc: "Role-based access control, easy creation and modification of class schedules, including events, assignments to the students, adding new staff member or removing existing, generating report cards, attendance tracking. Reduces paperwork and manual processes, better communication and saves time and allowing staff to focus on more strategic activities." ,  
      tools: "HTML, CSS, Bootstrap, React, Formik, Yup, RESTful APIs, Axios lib, Context API, Redux lib, Git, Jest"         
    },
    {
      label: "Weather Forecast",
      desc: "With help of Weather APIs created a basic Weather Forecast Application which shows your current location and you can also search any city temperature and three day forecast of that searched city weather." ,
      tools: "HTML, CSS, BootStrap, Vanilla JavaScript" 
    },
    
  ]


const  Projects = () => {
  return (
    <div className="w-full h-full overflow-scroll flex flex-col gap-8 md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
     {
        projects.map(({label, desc, tools}, index)=>{
        return <div key={`project_${index+1}`} className='glass flex flex-col rounded-md bg-gradient-to-b odd:from-red-100 odd:to-blue-100 even:from-blue-100 even:to-red-100 p-2 m-2 lg:w-1/3'>
                <div className=" text-2xl p-2 mt-4 font-semibold rounded-md text-center justify-center">{label}</div>
                <p className=" p-4 mt-4 text-justify  text-1xl italic">{desc}</p>
                <div className="p-2 text-justify text-1xl rounded  font-semibold w-fit text-base">Tools Used: {tools}</div>
            </div>  
        })
     }
    </div>
  )
}

export default  Projects
