/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Billy Byiringiro's Portfolio",
  description:"Welcome to the online portfolio of Billy Byiringiro, a multifaceted technologist with a strong background in computer science, artificial intelligence, and business. With a passion for innovation and an unwavering commitment to excellence, Billy is dedicated to leveraging cutting-edge technology and creative problem-solving to create lasting impact in the world of technology and business.",
  og: {
    title: "Jean Claude Billy Byiringiro Portfolio",
    type: "website",
    url: "https://billyjason.github.io/billybyiringiro/",
  },
};

//Home Page
const greeting = {
  title: "Billy Byiringiro",
  logo_name: "#Byiringiro%20Billy",
  nickname: "",
  subTitle:
  "Welcome to the online portfolio of Billy Byiringiro, a multifaceted technologist with a strong background in computer science, artificial intelligence, and business. With a passion for innovation and an unwavering commitment to excellence, Billy is dedicated to leveraging cutting-edge technology and creative problem-solving to create lasting impact in the world of technology and business.",
  resumeLink:
    "https://www.linkedin.com/in/billy-byiringiro/", //TODO -- need a resume link to a linked in
  portfolio_repository: "https://github.com/bbyiringiro/",
  githubProfile: "https://github.com/bbyiringiro/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/billyjason",
  // linkedin: "https://www.linkedin.com/in/billy-byiringiro/",
  // gmail: "billy.byiringiro@gmail.com",
  // twitter: "https://twitter.com/byiringiro_bill",

  {
    name: "Github",
    link: "https://github.com/bbyiringiro/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/billy-byiringiro",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:billy.byiringiro@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/byiringiro_bill",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "AI-Powered Business Solutions",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Design and implement advanced machine learning models to optimize business operations and uncover actionable insights.",
        "⚡ Utilize data-driven analytics and predictive modeling to support strategic decision-making and growth initiatives.",
        "⚡ Develop innovative algorithms and frameworks that enhance the efficiency, robustness, and scalability of AI applications.",
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
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },

      ],
    },
    {
      title: "Agile Software Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Create powerful, user-friendly web, mobile, and desktop applications using a wide range of programming languages and frameworks, ensuring the best fit for each unique project requirement.",
        "⚡ Adopt agile methodologies to ensure efficient, maintainable, and scalable code, fostering a collaborative and iterative development process.",
        "⚡ Seamlessly integrate front-end and back-end technologies to deliver comprehensive web solutions that cater to diverse user needs.",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "devicon:cplusplus",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
{
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
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
      ],
    },
    {
      title: "Cloud-Native Architectures",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architect scalable, secure, and high-performance web applications using industry-leading cloud platforms (AWS, Google Cloud, Azure)",
        "⚡ Implement best practices in DevOps and MLOps to streamline deployment, testing, and monitoring of web services.",
        "⚡ Leverage cloud-native tools and services to optimize resource usage, reduce costs, and enhance overall application performance.",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform (GCP)", // TODO P??
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Amazon Web Serveices (AWS)",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
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
      title: "Customer-Centric Product Management",
      fileName: "DesignImg",
      skills: [
        "⚡ Conduct thorough user research to empathize with users, understanding their needs, preferences, and pain points.",
        "⚡ Develop and manage product roadmaps, prioritizing features based on user feedback, performance metrics, and industry trends.",
        "⚡ Collaborate with cross-functional teams to ensure the successful execution of product strategies, fostering a culture of customer obsession."
        ,
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        // {
        //   skillName: "Inkscape",
        //   fontAwesomeClassname: "simple-icons:inkscape",
        //   style: {
        //     color: "#000000",
        //   },
        // },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  //   {
  //     siteName: "LeetCode",
  //     iconifyClassname: "simple-icons:leetcode",
  //     style: {
  //       color: "#F79F1B",
  //     },
  //     profileLink: "https://leetcode.com",
  //   },
  //   {
  //     siteName: "HackerRank",
  //     iconifyClassname: "simple-icons:hackerrank",
  //     style: {
  //       color: "#2EC866",
  //     },
  //     profileLink: "https://www.hackerrank.com",
  //   },
  //   {
  //     siteName: "Kaggle",
  //     iconifyClassname: "simple-icons:kaggle",
  //     style: {
  //       color: "#20BEFF",
  //     },
  //     profileLink: "https://www.kaggle.com/laymanbrother",
  //   },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of oxford, Said Business School",
      subtitle: "Master in Business Admnistration (MBA)",
      logo_path: "sbs_logo.png",
      alt_name: "University of Oxford, Said Business School",
      duration: "2022 - 2023",
      descriptions: [

      ],
      website_link: "https://www.sbs.ox.ac.uk",
    },
    {
      title: "University of Oxford",
      subtitle: "MSc in Advanced Computer Science",
      logo_path: "ox_logo.png",
      alt_name: "University of Oxford",
      duration: "2021 - 2022",
      descriptions: [
        // "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        // "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        // "⚡ During my time at university, I was ",
      ],
      website_link: "https://www.ox.ac.uk",
    },
    {
      title: "The university of Edinburgh",
      subtitle: "BSc(Honours) in Artificial Intelligence and Computer Science",
      logo_path: "uoe_logo.jpg",
      alt_name: "University of Edinburgh",
      duration: "2017 - 2021",
      descriptions: [
        // "...."

      ],
      website_link: "https://ed.ac.uk/",
    },
    
  ],
};

const certifications = {
  certifications: [
    {
      title: "Ethereum Blockchain Developer Bootcamp",
      subtitle: "CahinShot Academy - OxBridge Bootcamp",
      logo_path: "chainshot_logo.png",
      certificate_link:
        "https://www.chainshot.com/certificates/bbyi0222",
      alt_name: "ChainShot Certificate",
      color_code: "#00000099",
    },
    {
      title: "Advanced Google Analytics",
      subtitle: "Google Analytics Academy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://analytics.google.com/analytics/academy/certificate/bUs7Q1vGQZexR9oiZepiDA",
      alt_name: "Advanced Google Analytics Certificate",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Data Studio",
      subtitle: "Google Analytics Academy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://analytics.google.com/analytics/academy/certificate/b66KMgL4R7io9rH0ts7Hfw",
      alt_name: "Data Studio Certificate",
      color_code: "#0C9D5899",
    }

    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
       
      ],
    },
    {
      title: "Internships",
      experiences: [
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:'',
    // "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
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
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_avatar.jpeg",
    description:
      "Reach out!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Check out my blog, where inquisitive minds journey through a rich tapestry of thought-provoking insights on life's enigmas, groundbreaking tech discoveries, audacious entrepreneurial pursuits, and the boundless frontier of AI.",
    link: "https://medium.com/@billy.byiringiro",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Oxford, United Kingdom",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/mLjKzdhX3L1da72g8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
