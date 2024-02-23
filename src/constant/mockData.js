import {
  ProjectLogo1,
  ProjectLogo2,
  CompanyLogo3,
  CompanyLogo4,
  Coursera,
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
  Gaming,
  Google,
  Reading,
  SkillCss,
  SkillNextJs,
  SkillHtml5,
  SkillReact,
  SkillJavascript,
  SkillGithub,
  SkillRedux,
  Travelling,
  Wacthing,
  SkillTailwind,
  HariSenin,
} from "../assets/image";

const DATA = {
  projectExperiences: [
    {
      id: "prof_exp_1",
      startDate: "Jul 2023",
      endDate: "Des 2023",
      project: "Final Project at Harisenin Bootcamp",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        logo: ProjectLogo1,
        name: "Twitter Clone",
        info: "Social Media",
      },
      description:
        "Create a Twitter clone with React JS, Tailwind CSS for styling and Supabase for the database. We are working on this project as a team for the final project on Harisenin bootcamp",
      links: [
        {
          label: "View Twitter Clone",
          url: "https://final-project-kel2.vercel.app/login",
        },
      ],
    },
    {
      id: "prof_exp_2",
      startDate: "9 Feb 2024",
      endDate: "24 Feb 2024",
      project: "Personal Project",
      diamondColors: ["Blue", "Orange", "Green"],
      company: {
        logo: ProjectLogo2,
        name: "Spotify Clone",
        info: "Music Player",
      },
      description:
        "I created this Spotify Clone project with the React Js Framework, namely Next Js, Tailwind CSS for styling, supabase for the database, and stripe for the payment method.",
      links: [
        {
          label: "View Spotify Clone",
          url: "",
        },
      ],
    },
    // {
    //   id: "prof_exp_3",
    //   startDate: "Aug 2012",
    //   endDate: "Nov 2013",
    //   position: "Content Specialist",
    //   diamondColors: ["Green", "Yellow", "Purple"],
    //   company: {
    //     logo: CompanyLogo3,
    //     name: "21vek Private Ltd.",
    //     info: "E-commerce store in Minsk, Belarus",
    //   },
    //   description:
    //     "Added and modified the product information, prepared images and text for the website, developed categories filters, ensure all info is correct in the catalogue with the goal of improving online shopper experience.",
    //   links: [],
    // },
    // {
    //   id: "prof_exp_4",
    //   startDate: "Aug 2011",
    //   endDate: "Nov 2014",
    //   position: "Software Support Engineer",
    //   diamondColors: ["Green", "Yellow", "Purple"],
    //   company: {
    //     logo: CompanyLogo4,
    //     name: "Integral",
    //     info: "Microelectronics factory in Minsk, Belarus",
    //   },
    //   description:
    //     "Supported retail accounting system LS Trade, troubleshoot technical problems.",
    //   links: [],
    // },
  ],
  educationalExperiences: [
    {
      id: "prof_exp_2",
      startDate: "Juli 2023",
      endDate: "Desember 2023",
      project: "FullStack Web Developer",
      diamondColors: ["Blue", "Orange", "Green"],
      company: {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh4YIVtSZJfIXTYanuw-fnEePCCAonCIYbFlpCcjfUQ&s",
        name: "Harisenin Bootcamp",
        info: "Online Course",
      },
      description:
        "Harisenin bootcamp is an online course that trains skills in various fields, the training program on Harisenin lasts 3-6 months.",
      links: [
        {
          label: "Harisenin Bootcamp",
          url: "https://www.harisenin.com/",
        },
      ],
    },
    {
      id: "prof_exp_2",
      startDate: "Desember 2023",
      endDate: "Juni 2024",
      project: "Advance Training",
      diamondColors: ["Blue", "Orange", "Green"],
      company: {
        logo: "https://qodr.id/favicon.png",
        name: "Qodr",
        info: "Offline Training",
      },
      description:
        "Qodr is a Islamic IT training boarding school, Qodr is an offline course specifically for training web development and UI/UX skills",
      links: [
        {
          label: "Qodr",
          url: "https://qodr.id/",
        },
      ],
    },
    // {
    //   id: "edu_2",
    //   icon: DiamondLgGreen,
    //   course: "Fundamentals of UX/UI",
    //   institution: "Skillshare",
    //   degree: "Beginner Course",
    //   startDate: "2021",
    //   endDate: "2022",
    // },
    // {
    //   id: "edu_3",
    //   icon: DiamondLgOrange,
    //   course: "CG Artist",
    //   institution: "Polygon CG School",
    //   degree: "Graduate",
    //   startDate: "2018",
    //   endDate: "2021",
    // },
    // {
    //   id: "edu_4",
    //   icon: DiamondLgPink,
    //   course: "Graphic Design",
    //   institution: "Belarusian State Academy of Arts",
    //   degree: "Postgraduate Diploma",
    //   startDate: "2015",
    //   endDate: "2018",
    // },
    // {
    //   id: "edu_5",
    //   icon: DiamondLgYellow,
    //   course: "SEO Specialist Workshop",
    //   institution: "ARTOX Media",
    //   degree: "",
    //   startDate: "2015",
    //   endDate: "2017",
    // },
    // {
    //   id: "edu_6",
    //   icon: DiamondLgBlue,
    //   course: "Information Technology Software",
    //   institution:
    //     "Belarusian State University of Informatics and Radioelectronics",
    //   degree: "Bachelor Degree",
    //   startDate: "2011",
    //   endDate: "2015 ",
    // },
  ],
  skills: [
    {
      id: "skill_1",
      icon: SkillHtml5,
      name: "HML5",
      description: "Hypertext Markup Language",
    },
    {
      id: "skill_2",
      icon: SkillCss,
      name: "CSS",
      description: "Cascading Style Sheet",
    },
    {
      id: "skill_3",
      icon: SkillTailwind,
      name: "TAILWIND CSS",
      description: "Create UI With CSS Framework",
    },
    {
      id: "skill_4",
      icon: SkillJavascript,
      name: "JAVASCRIPT",
      description: "Functional and interactive",
    },
    {
      id: "5",
      icon: SkillReact,
      name: "REACT JS",
      description: "Javascript Library",
    },
    {
      id: "skill_6",
      icon: SkillRedux,
      name: "REDUX",
      description: "State Management",
    },
    {
      id: "skill_7",
      icon: SkillNextJs,
      name: "NEXT JS",
      description: "React Js Framework",
    },
    {
      id: "skill_8",
      icon: SkillGithub,
      name: "GITHUB",
      description: "Working Team With Version Control System",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      icon: HariSenin,
      provider: "Harisenin Bootcamp",
      course: "Fullstack Web Develover",
      startDate: "Juli 2023",
      endDate: "Desember 2023",
    },
    {
      id: "cert_award_2",
      icon: "https://qodr.id/favicon.png",
      provider: "Qodr",
      course: "Advance Training Web Development",
      startDate: "Desember 2023",
      endDate: "Juni 2024",
    },
    {
      id: "cert_award_3",
      icon: "https://asset.brandfetch.io/idK1RDMSRY/idPamGvnsf.jpeg?updated=1681745888429",
      provider: "Dicoding",
      course: "Front-End Web Developer",
      startDate: "Februari 2024",
      endDate: "Juni 2024",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Gaming,
      name: "Gaming",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "Reading",
    },
    {
      id: "hob_3",
      icon: Travelling,
      name: "Travelling",
    },
    {
      id: "hob_4",
      icon: Wacthing,
      name: "Watching",
    },
  ],
};

export default DATA;
