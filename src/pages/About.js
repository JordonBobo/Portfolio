import React from "react";
import "./pages.css";



function About() {
  

  return (
    <div className="background">

      <div className="container profile">
        <div className="profile left col-sm-6">
          <img src="https://live.staticflickr.com/65535/51207744275_469179bc0b_b.jpg" 
          alt="Image of Jordan in Yanghuo China, 2018"
          className="fullWidth"/>
        </div>
      </div>
      
      <div className="container myFont">
        <p>
My name is LX "Jordon" Bobo. 
Welcome to my portfolio. I encourage anyone reading 
this to feel free to reach out to me if you have any questions or are interested in anything 
you see in my portfolio. This page is devoted to my transition to becoming a software 
developer or data engineer. <br /> <br />

Although I have had a lifelong interest in computers and coding, and even built my first 
computer at age 10, my experiences in high school and college encouraged me to pursue my 
other passions such as history, agriculture, and linguistics. After getting my bachelors 
degree from Utah State University, I initially attempted to pursue a career in archiving 
and library science, and spent nearly 4 years working at the Murray Library. While I was 
there, I helped facilitate the procurement and deployment of a new Integrated Library System. 
That project rekindled my appreciation for software development and I decided to pursue 
coding and analytics. <br /> <br />

Until recently I worked as a Systems Support Specialist for the Utah Higher Education Assistance Authority, 
which is part of the Utah System of Higher Education. While there, I worked with some pretty 
great people to help make sure that education was available to anyone and everyone. I worked 
mostly behind the scenes monitoring and troubleshooting software/computer scripts that 
were developed in-house, granting and revoking access to various databases, programs, and 
networks, as well as assisting employees and clients with our company’s software. <br /> <br />

In order to improve my skills and continue to pivot my career toward software and coding, I 
am currently engaged in the University of Utah’s &nbsp;
<a href="https://continue.utah.edu/proed/academy/certificate/web-coding-bootcamp" target="_blank" className="red"> 
Coding BootCamp</a> &nbsp; in order to advance my skills as a developer. Currently I am focusing on 
learning full-stack in order to better understand the entire scope of software development. In the 
future however, I plan on focusing more on back-end programming, data analystics, and data science. <br />
        </p>
        
      </div>

    </div>
  
  );
}


export default About




