"use client"

import Stepper from "@/components/Stepper"

const Experience = () => {

  const steps = [
    {
      label: "React Developer",
      content:  [
        {
          title:"React Developer",
          desc: "Developed and maintained React Web application, following best practices for writing reusable components and worked on state management using Context API and Redux library.",
          date: "2021 - Present",
          company: "P2P System Pvt Ltd"
        }
      ]                
    },
    {
      label: "Skill Enhancement Training",
      content:  [
        {
          title:"Web Development",
          desc: "The course covers both front-end and back-end development, equipping skills necessary to create full-stack applications using modern web technologies.",
          date: "5 month",
          company: "Max it"
        }
      ]                
    },
    {
      label: "Support Engineer",
      content:  [
        {
          title:"Support Engineer",
          desc: "Analyse and make recommendations for improvements, and execute necessary maintenance to enhance the user experience.",
          date: "2016 - 2021",
          company: "Kaiser Computer Pvt Ltd"
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
