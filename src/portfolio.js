/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Prakash's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Prakash Upadhyay Portfolio",
    type: "website",
    url: "https://prakashupadhyay.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Prakash Upadhyay",
  logo_name: "PrakashUpadhyay",
  nickname: "Open_Thinker",
  subTitle:
    "An enthusiastic individual dedicated to developing end-to-end products that build sustainable and scalable social and technical systems, aiming to generate a significant impact.",
  resumeLink:
    "https://drive.google.com/file/d/1RFxzUdUG4HcJcgIraqdrWiBTjMkjp6TK/view?usp=sharing",
  portfolio_repository: "https://github.com/Prakash1919/masterPortfolio",
  githubProfile: "https://github.com/upadder",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Prakash1919",
  // linkedin: "https://www.linkedin.com/in/Prakash-Upadhyay-88710b138/",
  // gmail: "PrakashUpadhyay98@gmail.com",
  // gitlab: "https://gitlab.com/PrakashUpadhyay98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Prakash_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/upadder",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prakashupadhyay29/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:upadhyay.prakash1999@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/u_pad/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [

    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML5, CSS3, Bootstrap, React.Js & Redux",
        "⚡ Creating application backend in Node, Express, Java Spring MVC, Hibernate, MySQL, NoSQL.",
        "⚡ Specialize in creating Supply Chain and E-commerce full stack applications.",
        "⚡ Developing mobile applications using Flutter, React.Js Native & Firebase",
    
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "simple-icons:hibernate",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MySQL",
          imageSrc: "mysql.png",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Python",
          imageSrc: "python.png",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Java",
          imageSrc: "java.png",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture & Database Management",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms.",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases.",
        "⚡ Expert in setting up data clusters and running jobs on gcp using Apache Hadoop & Spark.",
        "⚡ Designing and implementing Continuous Integration and Continuous Deployment (CI/CD) pipelines using GitHub Actions",
        "⚡ Proficient in creating optimized Docker images, managing containerized applications, and deploying scalable Docker solutions for efficient application distribution and deployment",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        
        {
          skillName: "Apache Hadoop",
          imageSrc: "hadoop.png",
        },
        {
          skillName: "Apache Spark",
          imageSrc: "pyspark.png",
        },
        {
          skillName: "PostGres SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & Prompt Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready machine learning models for various kaggle projects and statistical use cases",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Experience of working with GPT-4 and prompt engineering to make automated models for targeted portfolio building",
        
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Chat-GPT",
          imageSrc:"openai.png",
          style: {
            backgroundColor: "transparent",
            color: "#663399",
          },
        },
        
        {
          skillName: "Python",
          imageSrc: "python.png",
          style: {
            color: "#663399",
          },
        },
        
      ],
    },
   
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
       
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Prakash_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Prakash391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Stony Brook University",
      subtitle: "M.S in Computer Science",
      logo_path: "sbu_logo.png",
      alt_name: "Stony Brook University",
      duration: "Aug 2023-Dec 2024",
      descriptions: [
        "⚡ I am currently enrolled in the Master of Science program in Computer Science at Stony Brook University, where I am a recipient of a prestigious paid scholarship, awarded for academic excellence. This scholarship is a testament to my dedication and standing among the top tier of students at the university.",
        "⚡ My current academic journey includes engaging in advanced courses such as Theory of Database Systems, Advances in AI/ML, and Data Science Fundamentals, under the guidance of Professor Steven Skiena, a renowned figure in the field. These courses are not only shaping my technical acumen but also allowing me to delve deep into the intricacies of modern computational theories and practices.",
        "⚡ In recognition of my academic proficiency and expertise, Stony Brook University offered me the position of Graduate Teaching Assistant. In this role, I am actively involved in facilitating CSE 416 - Software Engineering instructional sessions, focusing primarily on practical MERN stack labs. My responsibilities extend to managing project supervision and assignment assessments, along with providing expert mentorship to students.",
      ],
      website_link: "https://www.stonybrook.edu/",
    },
    {
      title: "University of Mumbai",
      subtitle: "B.E in Information Technology ",
      logo_path: "mu_logo.png",
      alt_name: "University of Mumbai",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Graduated in the top 5% of my class with a distinguished 3.8/4 or 9.3/10 CGPA from the University of Mumbai, reflecting a strong academic record in Information Technology.",
        "⚡ Volunteered with the Extension Work Team (EWT) during my undergraduate, teaching underprivileged children in Mumbai, and contributing to initiatives aimed at enhancing their quality of life in a rapidly evolving socio-economic landscape.",
        "⚡ Completed key certifications and courses in Data Structures, Algorithms, Database Management, and Software Engineering, complemented by internships as a Software Engineer Intern at DevCentrics Technologies and an AI Intern at Smartbridge.  ",
        "⚡ Winner of MULTICON-W Engineering Workshop & Paper Presentation Competition-2018"
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Teaching Assistant, Teaching and Learning",
      subtitle: "- Graduate Teaching Assistant Training",
      logo_path: "sbu_logo.png",
      certificate_link:
        "https://www.credly.com/badges/09331461-1926-4ca4-9145-e6ece56f56d2/linked_in_profile",
      alt_name: "Stony Brook University",
      color_code: "#8C151599",
    },
    {
      title: "Development in ReactJS",
      subtitle: "- Infosys Limited",
      logo_path: "Infosys_logo.png",
      certificate_link:"https://drive.google.com/file/d/1hixMWmavvw2Itwflm7FcnPoyWEsREPN9/view?usp=sharing",
      alt_name: "Infosys",
      color_code: "#00000099",
    },
    {
      title: "Backend Development using NodeJS",
      subtitle: "- Infosys Limited",
      logo_path: "Infosys_logo.png",
      certificate_link:"https://drive.google.com/file/d/1hixMWmavvw2Itwflm7FcnPoyWEsREPN9/view?usp=sharing",
      alt_name: "Infosys",
      color_code: "#0C9D5899",
    },
    {
      title: "Database Handling using MongoDB",
      subtitle: "- Infosys Limited",
      logo_path: "Infosys_logo.png",
      certificate_link:"https://drive.google.com/file/d/1hixMWmavvw2Itwflm7FcnPoyWEsREPN9/view?usp=sharing",
      alt_name: "Infosys",
      color_code: "#1F70C199",
    },
    {
      title: "Data Structures & Algorithm",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:"https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL19CS40S21690015191175718",
      alt_name: "datastructures",
      color_code: "#D83B0199",
    },
    {
      title: "Programming in Java",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:"https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL19CS84S41820142191175718",
      alt_name: "java",
      color_code: "#1F70C199",
    },
    {
      title: "Cloud Computing",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:"https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL19CS64S31820389191175718",
      alt_name: "cloudcomputing",
      color_code: "#0C9D5899",
    },
    {
      title: "Introduction to Internet of Things",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:"https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL19CS65S61820351191175718",
      alt_name: "Npteliot",
      color_code: "#4285F499",
    },
    {
      title: "PHP & MYSQL Training",
      subtitle: "- IIT Bombay",
      logo_path: "iitbombay_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "phpmysql",
      color_code: "#8C151599",
    },
    {
      title: "Python 3.4.3 Training",
      subtitle: "- IIT Bombay",
      logo_path: "iitbombay_logo.png",
      certificate_link:"https://drive.google.com/file/d/11kgLtSDZygD0OCZ6bE9r8nSqXtSPtmRw/view",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have 2 years of working experience as a Digital Specialist Engineer at Infosys Private Limited, I played a pivotal role in developing full-stack applications for Toyota Motors Europe, leading teams to create automated solutions that enhanced operational efficiency and customer satisfaction. This experience, recognized by the Insta Award for exceptional project work, I also worked in many projects as as Intern and created some projects of my own that are live currently, This experience was complemented by my commitment to social responsibility, demonstrated through volunteer work with the Extension Work Team (EWT) where I educated underprivileged children in Mumbai.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Internships",
      work: true,
      experiences: [
        {
          title: "Digital Specialist Engineer",
          company: "Infosys Limited",
          company_url: "https://www.infosys.com/",
          logo_path: "Infosys_logo.png",
          duration: "Oct 2021 - July 2023",
          location: "Pune, India",
          description:"As a Digital Specialist Engineer at Infosys Private Limited, I led key projects for Toyota Motors Europe, making impactful contributions in software development and process automation. Notably, I directed the development of a full-stack application for the Electronic Data Interchange Portal, significantly enhancing operational efficiency and supplier collaboration. This achievement, alongside the integration of a customs portal that resulted in substantial cost savings and improved customer retention, showcased my expertise in utilizing technologies like React.js, Node.js, and AWS. My role in these projects exemplified my ability to innovate and lead in high-stakes environments, consistently delivering solutions that drive meaningful business outcomes",
          color: "#0879bf",
        },
        {
          title: "Artificial Intelligence Intern",
          company: "Smartbridge",
          company_url: "https://smartbridge.com/",
          logo_path: "smartbridge_logo.png",
          duration: "June 2020 - July 2020",
          location: "Mumbai, India",
          description:"During my internship as an Artificial Intelligence Intern at Smartbridge, I was tasked with developing an advanced customer care chatbot from the ground up. This chatbot was designed to go beyond answering basic queries like store locations and hours; it was integrated with Watson Discovery Service to handle complex inquiries related to device operations. By leveraging the Smart Document Understanding feature of Watson Discovery, I trained the system to discern relevant information from device manuals, enhancing the chatbot's capability to provide precise answers. This project not only improved customer experience by offering detailed responses from the owners' manuals but also represented a significant step forward in AI-driven customer support solutions.", 
          color: "#9b1578",
        },
        {
          title: "Software Engineer Intern",
          company: "DevCentrics Technologies Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/vcentric-technologies-p-ltd-/?originalSubdomain=in",
          logo_path: "vcentric_logo.png",
          duration: "Aug 2019 - Sep 2019",
          location: "Bengaluru, India",
          description:"During my two-month tenure as a Software Engineer Intern at DevCentrics Technologies Private Limited in Bengaluru, I focused on Full Stack Development, encompassing a range of modern web technologies. My role involved utilizing MongoDB for database management, React.js and CSS for frontend development, and Node.js with Express.js for backend services. I also applied HTML5 skills for structuring and presenting content on the web. This experience allowed me to deepen my understanding of the entire development process, from database design to user interface creation, honing my capabilities in creating cohesive and functional web applications.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer at Extension Work Team",
          company: "TCET-EWT",
          company_url: "https://about.google/",
          logo_path: "ewt_logo.png",
          duration: "Aug 2018 - Aug 2019",
          location: "Mumbai, India",
          description:"As a committed volunteer with the Extension Work Team (EWT), I dedicated my time and efforts to educate underprivileged children in various locations around Mumbai. The EWT, focused on aiding the less privileged segments of society, aims to enhance their quality of life through educational programs tailored to the demands of today's technology-driven, knowledge-based economy. My role encompassed not just teaching but also inspiring these children to aspire for greater achievements, aligning with the EWT's mission to foster overall development. Through this outreach, I contributed to empowering individuals with new knowledge and skills, aiding them in improving their life conditions and opportunities for growth. This experience not only enriched my understanding of societal challenges but also underscored the transformative power of education and community engagement.",
          color: "#4285F4",
        },
        {
          title: "Student Volunteed Head at We Can We Will",
          company: "We Can We Will",
          company_url: "https://www.microsoft.com/",
          logo_path: "wecanwewill_logo.png",
          duration: "Aug 2018 - Mar 2019",
          location: "Mumbai, India",
          description:"As a volunteer with We Can We Will, I was entrusted with a meaningful role where I personally mentored a child, guiding their educational journey over eight months. This experience was not just about imparting academic knowledge but also about nurturing their overall growth, aligning with the organization's mission to uplift the less fortunate. We Can We Will focuses on combating hunger and illiteracy, driven by educators and volunteers committed to breaking the cycle of poverty and fostering hope for a brighter future. My involvement allowed me to contribute to this noble cause, working alongside professionals and experts to provide quality education and access to essential healthcare. This period was a testament to the belief that positive change is achievable with courage, determination, and creativity, and every individual deserves the opportunity to live a life of dignity and ",
          color: "#D83B01",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack development projects using cloud infrastructure. Apart from my projects showcased in experience tab, below are some of my creative personal projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "1",
      name: "Covid-19 Detection Using Deep Neural Networks.",
      createdAt: "2022-06-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:"https://www.irjet.net/archives/V9/i6/IRJET-V9I658.pdf",
    },
    {
      id: "2",
      name: "Impact of Procrastination on College Students",
      createdAt: "2018-02-22T16:26:54Z",
      description: "My publication, Impact of Procrastination on College Students, presented at the National Conference in Applied Sciences & Humanities (NCASH-2018) on February 22, 2018, achieved notable recognition, earning a win at this esteemed conference. This study, cataloged with ISBN 978-0-9994483-5-9 and featured on page 95, offered a comprehensive analysis of procrastination among college students, a subject that resonates widely in academic circles. By examining the underlying causes such as self-motivation challenges, task complexity, time management issues, and academic pressures, the research provided valuable insights into student behavior. The acknowledgment of this work with an award at NCASH-2018 underscored its significance and impact in the field of educational research, highlighting the critical nature of understanding and addressing procrastination to enhance academic outcomes. This accolade not only celebrated the research's contribution to educational discourse but also emphasized the importance of addressing such fundamental issues in the academic community.",
      url:"https://docplayer.net/96689481-Ncash-conference-proceedings.html",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "prakash.jpeg",
    description:
      "I am available on below social media. You can message me, I will reply within 24 hours. I can help you with, Full Stack, Data Science, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.PrakashUpadhyay.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "700 Health Sciences Drive, Chapin L 1172, Stony Brook",
    locality: "Stony Brook",
    country: "USA",
    region: "New York",
    postalCode: "11790",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/zE5JwYXkEgmUp1nr6",
  },
  phoneSection: {
    title: "Personal Phone Number",
    subtitle: "+1 934-451-9593",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
