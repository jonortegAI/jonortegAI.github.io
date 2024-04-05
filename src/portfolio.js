/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jon Ortega",
  title: "Hi all, I'm Jon",
  subTitle: emoji(
    "Data Scientist and Generative AI enthusiast 🚀 This is my portfolio, where I'll share my projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "jonortega20@gmail.com",
  github: "https://github.com/jonortega20",
  linkedin: "https://bit.ly/linkedin-jon-ortega",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BUILDING COOL STUFF WITH DATA AND AI",
  skills: [
    emoji(
      "⚡ Analyze data and create models to solve real-world problems"
    ),
    emoji("⚡ Create and deploy Generative AI models"),
    emoji(
      "⚡ Implement the created models to final EdTech products"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Generative AI",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Scientist and Generative AI Leader",
      company: "We Are Clickers",
      companylogo: "./assets/images/clickersLogo.png",
      date: "September 2023 – Present",
      desc: "Freelance role as a Data Scientist and Generative AI Leader, contributing to various projects.",
      descBullets: [
        "Specialized in data analysis and generative AI applications.",
        "Worked across multiple domains to deliver AI-driven solutions.",
        "Fine-tuned models to improve performance and accuracy.",
        "Used Generative AI models such as OpenAI's GPT-4.5, StableDiffusion, Dall-E, and others."
      ]
    },
    {
      role: "Co-founder & CTO",
      company: "AIEDUTECH",
      companylogo: "./assets/images/aiedutechLogo.jfif",
      date: "January 2023 – Present",
      desc: "Co-founder and CTO at AIEDUTECH, focusing on data science and generative AI leadership.",
      descBullets: [
        "Involved in strategic planning and technology leadership.",
        "Focused on leveraging AI for educational technology solutions.",
        "Developed and deployed AI models for educational technology products.",
        "Led the development of AI-driven products."
      ]
    },
    {
      role: "Lead Data Scientist & Generative AI Partner",
      company: "GAIA Consulting",
      companylogo: "./assets/images/gaiaLogo.png", // Asumiendo que tienes el logo como un archivo local
      date: "May 2023 – March 2024",
      desc: "Participated in AI-driven data transformation pipelines, digital transformation through AI, and advanced content analysis techniques.",
      descBullets: [
        "Crafted and deployed advanced pipelines, reducing data processing times by 54%.",
        "Integrated AI tools such as Sentiment Analysis, Topic Modeling.",
        "Deployed NLP and OpenAI API to group opinions into clusters, reducing manual data sorting by 75%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED WITH THEIR TECH, DATA AND AI STRATEGIES",
  projects: [
    {
      image: "./assets/images/waixoLogo.png",
      projectName: "Waixo rapports",
      projectDesc: "Creating cloth rapports from an image using Stable Diffusion and Dall-E for inpainting of empty spaces.",
      footerLink: [
        { name: "View Project", url: "https://waixo.example.com/" }
      ]
    },
    {
      image: "./assets/images/clickersLogo.png",
      projectName: "FactorIA",
      projectDesc: "SaaS platform integrating langchain and OpenAI API to turn all your invoices into a simple excel sheet.",
      footerLink: [
        { name: "View Project", url: "https://factoria.example.com/" }
      ]
    },
    {
      image: "./assets/images/curriculumns.jfif",
      projectName: "Curriculum matching",
      projectDesc: "Utilizing NLP, BERT fine-tuning, and cosine similarity for a model that selects the best candidates for a job offer.",
      footerLink: [
        { name: "View Project", url: "https://iddtek.example.com/" }
      ]
    },
    {
      image: "./assets/images/lookiero.jfif",
      projectName: "Lookiero looks",
      projectDesc: "Implementing Graph Neural Networks (GNNs) to create looks of three clothing items.",
      footerLink: [
        { name: "View Project", url: "https://lookiero.example.com/" }
      ]
    },
    {
      image: "./assets/images/cerebros.PNG",
      projectName: "Brain Tumor Classification",
      projectDesc: "Applying transfer learning with Vision Transformer (ViT) to classify brain tumors.",
      footerLink: [
        // Este enlace es hipotético; reemplázalo con un enlace real si el proyecto lo tiene
        { name: "View Project", url: "" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is always open for you!",
  //number: "+92-0000000000",
  email_address: "jonortega20@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
