// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbartask from "./Components/task/Navbar";
import All from "./Components/task/All";
import Fullstack from "./Components/task/Fullstack";
import Datascience from "./Components/task/Datascience";
import Cyber from "./Components/task/Cyber";
import Career from "./Components/task/Career";
import "./App.css";

const App = () => {
  let data = [
    {
      id: 1,
      title:
        "40 Java Interview Questions for Freshers with Clear & Concise Answers",
      head: "Data science",
      description: "By Tushar Vinocha",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/04/feature.webp",
      date: "09 August 2024",
      comment: "5 min Read",
    },
    {
      id: 2,
      title:
        "10 Best Data Science Frameworks in 2024Top 30 Mini Project Ideas For College Students [UPDATED]",
      head: "Data science",
      description: "By Srinithi Sankar",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2015/02/blog-2-768x402.png",
      date: "Aug 09, 2024",
      comment: "6 Min Read",
    },
    {
      id: 3,
      title: "How to Render an Array of Objects in React? [in 3 easy steps]",
      head: "Data science",
      description: "By Tarun Singh",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs.png",
      date: "Aug 06, 2024",
      comment: "7 Min Read",
    },
    {
      id: 4,
      title: "Top 10 Unique Project Ideas for College Students",
      head: "Data science",
      description: "By Tarun Singh",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/06/feature-image-unique-project-ideas.jpg",
      comment: " 7 min Read",
    },
    {
      id: 5,
      title: "Use ReactJS to Fetch and Display Data from API – 5 Simple Steps",
      head: "Data science",
      description: "By Tarun Singh",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js.png",
      date: "Jul 23, 2024",
      comment: "5 min Read",
    },
    {
      id: 6,
      title: "15 Best Mechanical Engineering Project Ideas in 2024",
      head: "Data science",
      description: "By Meghana D",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/03/Untitled-design-41.jpg",
      date: "23 july 2024",
      comment: "5 min Read",
    },
    {
      id: 7,
      title:
        "30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]",
      description: "By Saakshi Priyadarshini",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      date: "5 October 2023",
      comment: "No Comments",
    },
    {
      id: 8,
      title:
        "10 Innovative Project Ideas for Students to Boost Creativity and Skills",
      head: "Data science",
      description: "By Saakshi Priyadarshini",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/02/animated-javascript-project-image.jpg",
      date: "23 july 2024 ",
      comment: "6 min Read",
    },
    {
      id: 9,
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      head: "Data science",
      description: "By Meghana D",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/featured-image.png",
      date: "23 july 2024",
      comment: "8 min Read",
    },
    {
      id: 10,
      title: "Future of Data Science and How You Can Thrive With It",
      head: "Data science",
      description:
        "Data Science has emerged as a revolutionary field in the technology world, transforming the",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
      date: "28 August 2023",
      comment: "No Comments",
    },
    {
      id: 1,
      title:
        "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      head: "Full Stack",
      description:
        "As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
      date: "22 January 2024",
      comment: "No Comments",
    },
    {
      id: 2,
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      head: "Full Stack",
      description:
        "When you're hiring a full-stack developer, what are the most important things you look for?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      date: "15 November 2023",
      comment: "No Comments",
    },
    {
      id: 3,
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      head: "Full Stack",
      description:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      date: "15 November 2023",
      comment: "No Comments",
    },
    {
      id: 4,
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      head: "Full Stack",
      description:
        "In the world of system design, envision a digital skyscraper - a multifaceted structure built",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      date: "10 November 2023",
      comment: "No Comments",
    },
    {
      id: 5,
      title: "Best Books to Learn Full-Stack Development",
      head: "Full Stack",
      description:
        "Are you interested in becoming a full-stack developer but not sure where to start? In",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      date: "9 November 2023",
      comment: "No Comments",
    },
    {
      id: 6,
      title: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      head: "Full Stack",
      description:
        "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      date: "8 November 2023",
      comment: "No Comments",
    },
    {
      id: 7,
      title: "7 Best Full-Stack Development Online Courses [2024]",
      head: "Full Stack",
      description:
        "Today's world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      date: "31 August 2023",
      comment: "No Comments",
    },
    {
      id: 8,
      title: "Roles & Responsibilities of Full Stack Developers in 2024",
      head: "Full Stack",
      description:
        "Do you want to become a full stack developer? If yes, you must definitely know",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
      date: "12 July 2023",
      comment: "No Comments",
    },
    {
      id: 9,
      title: "Best Ways to Learn Full Stack Development in 2024",
      head: "Full Stack",
      description:
        "Full stack development is and will be a promising and in-demand career in the upcoming",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-1536x804.webp",
      date: "4 August 2023",
      comment: "No Comments",
    },
    {
      id: 10,
      title: "How Long Would It Take to Be a Full Stack Developer?",
      head: "Full Stack",

      description:
        "Have you ever wondered how much time it would take to become a skilled Full",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
      date: "4 August 2023",
      comment: "No Comments",
    },
    {
      id: 1,
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      head: "Cyber security",
      description:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      date: "4 December 2023",
      comment: "No Comments",
    },
    {
      id: 2,
      title: "What Is Hacking? Types of Hacking & More",
      head: "Cyber security",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      date: "25 September 2023",
      comment: "No Comments",
    },
    {
      id: 3,
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      head: "Cyber security",
      description:
        "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      date: "1 March 2021",
      comment: "No Comments",
    },
    {
      id: 1,
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      head: "Career",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      date: "19 January 2024",
      comment: "No Comments",
    },
    {
      id: 2,
      title: "Best 11 Product-Based Companies for Product Managers in India ",
      head: "Career",
      description:
        "Who is a product manager? What are the best product-based companies for product managers in",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
      date: "14 November 2023",
      comment: "No Comments",
    },
    {
      id: 3,
      title: "Top 5 IT Jobs for Economics Students",
      head: "Career",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      date: "4 December 2023 ",
      comment: "No Comments",
    },
    {
      id: 4,
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      head: "Career",
      description:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      date: "2 December 2023",
      comment: "No Comments",
    },
    {
      id: 5,
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      head: "Career",
      description:
        "The world is moving towards automating the testing of products in order to increase work",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      date: "1 December 2023",
      comment: "No Comments",
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbartask />
        </div>

        <Routes>
          <Route path="/" element={<All value={data} />} />
          <Route path="/fullstack" element={<Fullstack data={data} />} />
          <Route path="/datascience" element={<Datascience data={data} />} />
          <Route path="/cybersecurity" element={<Cyber data={data} />} />
          <Route path="/career" element={<Career data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
