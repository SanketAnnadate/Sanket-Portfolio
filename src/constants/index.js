import {
    java,
    springBoot,
    grpc,
    postgreSQL,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    vite,
    redux,
    tailwind,
    git,
    docker,
    aws,

    BBI,
    carrent,
    jobit,
    threejs,
    awsWhite,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: reactjs,
    },
    {
      title: "Spring Boot Developer",
      icon: springBoot,
    },
    {
      title: "PostgreSQL",
      icon: postgreSQL,
    },
    {
      title: "AWS",
      icon: awsWhite,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: springBoot,
    },
    {
      name: "GRPC",
      icon: grpc,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vite",
      icon: vite,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "PostgreSQL",
      icon: postgreSQL,
    },
    {
      name: "threejs",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "aws",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Blackbuck Insights PVT. LTD.",
      icon: BBI,
      iconBg: "#383E56",
      date: "March 2021 - Current",
      points: [
        "Actively involved in Architecture, Analysis Design, Development, Debugging, Testing, and Deployment",
        "Extensively applied Object-Oriented Analysis and Design concepts, and used design patterns like Singleton, Factory Method, Dependency Injection, and Facade architecture framework.",
        "Revised, modularized, and updated old code bases to modern development standards, reducing operating costs and improving functionality.",
        "Project handling, troubleshooting, development and deployment of project on AWS and On-prem.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Manikandan Nagarajan",
      designation: "Technical lead",
      company: "TransUnion",
      image: "https://media.licdn.com/dms/image/C4E03AQGaXBPm3PF--Q/profile-displayphoto-shrink_800_800/0/1636123046986?e=1686182400&v=beta&t=PYc7tMLK7eF0l9c1tueTE5AjwyW2BphJ5XqYITB9Wvk",
      linkedIn:"https://www.linkedin.com/in/manikandannagarajan/",
    },
  ];
  
  const projects = [
    {
      name: "Blogging Application",
      description:
        "Web-based platform that allows users to create and delete blogs. Users can also like and comment on blogs. The user has to sign up and login to use the application.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Online-Food-Application",
      description:
        "Web application that enables users to search for restaurants in the current city, add food to the cart from the menu, and place an order.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sanketdubhase86/Online-Food-Application",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };