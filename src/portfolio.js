/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import waixoLogo from "./assets/images/waixoLogo.png";
import las_present from "./assets/images/las_present.PNG";
import speaker_aiedutalks from "./assets/images/speaker_aiedutalks.jfif";
import sleeptile_sope from "./assets/images/sleeptile_sope.jpg";
import aiedutechLogo from "./assets/images/aiedutechLogo.jfif";
import gaiaLogo from "./assets/images/gaiaLogo.png";
import clickersLogo from "./assets/images/clickersLogo.png";
import cerebros from "./assets/images/cerebros.PNG";
import lookiero from "./assets/images/lookiero.jfif";

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
  title: "Technologies",
  subTitle: "Already worked with...",
  skills: [
    emoji("⚡ Analyze data and create models to solve real-world problems"),
    emoji("⚡ Create and deploy Generative AI models"),
    emoji("⚡ Implement the created models to final EdTech products")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  // Programación y Bases de Datos
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "R", fontAwesomeClassname: "fab fa-r-project" },
  { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
  { skillName: "HTML 5", fontAwesomeClassname: "fab fa-html5" },
  { skillName: "CSS 3", fontAwesomeClassname: "fab fa-css3-alt" },
  { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "Bootstrap", fontAwesomeClassname: "fab fa-bootstrap" },
  { skillName: "Flask", fontAwesomeClassname: "fas fa-laptop" },
  { skillName: "VS Code", fontAwesomeClassname: "fas fa-code" },

  // Big Data
  { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
  { skillName: "Hadoop", fontAwesomeClassname: "fas fa-hdd" },
  { skillName: "Spark", fontAwesomeClassname: "fas fa-bolt" },
  { skillName: "Elasticsearch", fontAwesomeClassname: "fas fa-search" },

  // Aprendizaje Automático Avanzado, MLOps, Aprendizaje Profundo e IA
  { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire" },
  { skillName: "Computer Vision", fontAwesomeClassname: "fas fa-eye" },
  { skillName: "Neural Networks", fontAwesomeClassname: "fas fa-network-wired" },
  { skillName: "GNNs", fontAwesomeClassname: "fas fa-project-diagram" },
  
  // NLP
  { skillName: "BERT", fontAwesomeClassname: "fas fa-language" },
  { skillName: "OpenAI API", fontAwesomeClassname: "fas fa-robot" },
  { skillName: "Langchain", fontAwesomeClassname: "fas fa-link" },
  { skillName: "Stable Diffusion", fontAwesomeClassname: "fas fa-image" },
  { skillName: "Dall-E", fontAwesomeClassname: "fas fa-magic" },
  { skillName: "Krea AI", fontAwesomeClassname: "fas fa-paint-brush" },

  // Herramientas de Colaboración y Metodologías Ágiles
  { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
  { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
  { skillName: "Trello", fontAwesomeClassname: "fab fa-trello" },
  { skillName: "Azure DevOps", fontAwesomeClassname: "fas fa-cloud" },
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
      progressPercentage: "80%"
    },
    {
      Stack: "Educational Technologies",
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
      companylogo: clickersLogo,
      date: "September 2023 – Present",
      desc: "Freelance role as a Data Scientist and Generative AI Leader, contributing to various projects.",
      descBullets: [
        "Specialized in Data Analysis and Generative AI applications (GPT-4.5, StableDiffusion, Dall-E...)",
        "Worked across multiple domains to deliver AI-driven solutions.",
        "Fine-tuned models to improve performance and accuracy.",
      ]
    },
    {
      role: "Co-founder & CTO",
      company: "AIEDUTECH",
      companylogo: aiedutechLogo,
      date: "January 2023 – Present",
      desc: "Co-founder and CTO at AIEDUTECH, focusing on data science and generative AI leadership.",
      descBullets: [
        "Involved in strategic planning and technology leadership.",
        "Trained teachers from +100 schools on AI and Educational Technology.",
        "Led the development of AI models for educational technology products.",
        "Created a platform that uses AI to track, analyze, and improve student feedback.",
      ]
    },
    {
      role: "Lead Data Scientist & Generative AI Partner",
      company: "GAIA Consulting",
      companylogo: gaiaLogo,
      date: "May 2023 – March 2024",
      desc: "Participated in AI-driven data transformation pipelines, digital transformation through AI, and advanced content analysis techniques.",
      descBullets: [
        "Crafted and deployed advanced pipelines, reducing data processing times by 54%.",
        "Integrated AI tools such as Sentiment Analysis, Topic Modeling...",
        "Deployed NLP and OpenAI API to group opinions into clusters, reducing manual data sorting by 75%.",
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
  title: "Main Projects",
  subtitle:
    "SOME STARTUPS AND COMPANIES THAT I HELPED WITH THEIR TECH, DATA AND AI STRATEGIES 🚀",
  projects: [
    {
      image: waixoLogo,
      projectName: "Generating rapports with AI",
      projectDesc:
        "Creating cloth rapports from an image following a patent of geometrical calculations to create the rapport and Stable Diffusion and Dall-E for inpainting the empty spaces.",
      footerLink: [{name: "View Project", url: "https://iapattern.waixo.com/en/"}]
    },
    {
      image: clickersLogo,
      projectName: "Curriculum matching",
      projectDesc:
        "Utilizing NLP, BERT fine-tuning, and cosine similarity for a model that selects the best candidates for a job offer, given his curriculum, interview audio and Linkedin data.",
      footerLink: [{name: "View Project", url: "https://drive.google.com/file/d/1sWgUuOH43cXe5-y0fj57zhRsm_-dac-E/view?usp=sharing"}]
    },
    {
      image: aiedutechLogo,
      projectName: "AI-powered Student Feedback Optimizer",
      projectDesc:
        "Developing an AI tool that uses NLP and Generative AI to track, analyze, and improve student feedback, providing teachers with actionable insights and interesting recommendations.",
      footerLink: [{name: "View Project", url: "https://drive.google.com/file/d/1hRTK_T_eX_CmFhyOkASXUuY1rPpbCnHq/view?usp=sharing"}]
    },
    {
      image: lookiero,
      projectName: "Lookiero looks",
      projectDesc:
        "Implementing Graph Neural Networks (GNNs) to create looks of three clothing items. Graph-based analysis and prediction, UX redesign proposals...",
      footerLink: [{name: "View Project", url: "https://drive.google.com/file/d/1jC45Ugk707OSdEc2lF7yIlIkbh5xkTrd/view?usp=sharing"}]
    },
    {
      image: clickersLogo,
      projectName: "Factor-IA",
      projectDesc:
      "SaaS platform integrating Langchain and OpenAI API to turn all your invoices into a simple Excel sheet.",
      footerLink: [{name: "View Project", url: "https://drive.google.com/file/d/1tuG3BBYgBp5xXO00onJL5PeS-VbxezWr/view?usp=sharing"}]
    },
    {
      image: cerebros,
      projectName: "Brain Tumor Classification",
      projectDesc:
        "Applying Transfer Learning with VGG16, EfficientNet V2 B0, Vision Transformer (ViT) to classify brain tumors in 7 classes, achieving a 94% accuracy.",
      footerLink: [
        // Este enlace es hipotético; reemplázalo con un enlace real si el proyecto lo tiene
        {name: "View Project", url: "https://drive.google.com/file/d/1w_C7ZVBIeKF_5Pbad_GKJUvctaHgicNZ/view?usp=sharing"}
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done! 🏅",

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
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Some Posts",
  subtitle:
    "I love to share my experiences and learnings in LinkedIn. Here are some of my posts! 📝",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/posts/jon-ortega-uzquiaga-598a40212_reflecting-on-my-recent-experience-as-a-visiting-activity-7105500267139211264-X-4W?utm_source=share&utm_medium=member_desktop",
      title: "Visiting Scholar at Leysin American School in Switzerland",
      description:
        "Reflecting on my recent experience as a Visiting Scholar, where I debated with teachers and head of school about the future of AI and its impact on society.💡",
      photo: las_present
    },
    {
      url: "https://www.linkedin.com/posts/jon-ortega-uzquiaga-598a40212_aiedutalks-aiedutech-activity-7047493816240476160-BCpq?utm_source=share&utm_medium=member_desktop",
      title: "AIEDUtalks event: the future of AI in Education",
      description:
        "From when I was speaker in the AIEDUtalks event, where we reflected on use cases of AI in Education with Philippa Hardman, Cambridge University professor.💎",
      photo: speaker_aiedutalks
    },
    {
      url: "https://www.linkedin.com/posts/jon-ortega-uzquiaga-598a40212_some-weeks-ago-i-had-the-opportunity-to-present-activity-7004402509997850624-ZGKK?utm_source=share&utm_medium=member_desktop",
      title: "Winning with Sleeptile",
      description:
        "From when I pitched Sleeptile in one of the many competitions we've been in.⚡",
      photo: sleeptile_sope
    },
    // {
    //   url: "https://www.linkedin.com/posts/jon-ortega-uzquiaga-598a40212_ml-kaggle-alexnet-activity-7161316121550237697-JS-P?utm_source=share&utm_medium=member_desktop",
    //   title: "Playing with Deep Learning tools",
    //   description:
    //     "From when I found a no-code tool that nearly overcame the State of the Art in Image Classification.🌟",
    //   photo: pistachios
    // },
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
    "Want to discuss a project or just say hi? My Inbox is always open for you!",
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