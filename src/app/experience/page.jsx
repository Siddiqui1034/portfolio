"use client"

import Stepper from "@/components/Stepper"

const Experience = () => {

  const steps = [
    {
      label: "React Developer",
      content:  [
        {
          title:"React Developer",
          desc: "Developed and maintained React Web application, following best practices for writing reusable components and worked on state management using Context API and Redux library. ",
          date: "2021 - Present",
          company: "P2P System Pvt Ltd"
        }
      ]                
    },
    {
      label: "Web Development Training",
      content:  [
        {
          title:"Transition in Career",
          desc: "A Career Transition in which Learned Front Technologies, created Basic Javascript Projects, enhanced my technical skillset.",
          date: "2021 - 2021",
          company: "Maxit"
        }
      ]                
    }, 
    {
      label: "Support Engineer",
      content:  [
        {
          title:"Support Engineer",
          desc: "Provided technical support to users experiencing issues with the frontend of web applications. Identify and document bugs or issues in the frontend code, including visual discrepancies and functional errors.",
          date: "2016 - 2021",
          company: "Kaiser Computer Pvt. Ltd."
        }
      ]                
    },
    
  ]

  return (
    <div >
      <Stepper steps={steps} />
    </div>
  )
}

export default Experience
