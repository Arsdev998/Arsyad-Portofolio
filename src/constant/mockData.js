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
  QodrBee,
  express,
  node,
} from "../assets/image";

const DATA = {
  InternExperiences: [
    {
      id: "prof_exp_2",
      startDate: "Mei 2024",
      endDate: "October 2024",
      project: "Frontend Web Developer",
      company: {
        logo: QodrBee,
        name: "PT Qodr Bee Berinovasi",
        info: "IT Consultant",
      },
      description:
        "Developed a Jira-like employee management application using React.js, which allows users to track tasks, collaborate in teams, andmanage projects. Work closely with the backend team to integrate REST APIs, ensuring the data displayed on the frontend is always up-to-date and consistent.",
      links: [
        {
          label: "View Website",
          url: "https://qodrbee.com/",
        },
      ],
    },
  ],
  projectExperiences: [
    {
      project: "Final Project at Harisenin Bootcamp",
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
      project: "Personal Project",
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
          url: "https://spotify-clone-rakb6xfie-arsdevvs-projects.vercel.app/",
        },
      ],
    },
    {
      id: "prof_exp_3",
      position: "Content Specialist",
      company: {
        logo: "https://melense-fe.vercel.app/assets/logo-DCtTZ0A2.png",
        name: "MelenseTour",
        info: "Travel Information Destination",
      },
      description:
        "The language I use for the frontend is Javascript and the library is React.js, styling uses Tailwind.Css and Shadcn as componentlibraries, state management with Redux. The languages Iuse for the backend are Javascript, Node.Js, Express.Js and use Postgree as the database, Prisma as the ORM,upload media using the Cloudinary cloud",
      links: [
        {
          label: "View MelenseTour",
          url: "https://melense-fe.vercel.app/",
        },
      ],
    },
  ],
  educationalExperiences: [
    {
      id: "prof_exp_2",
      startDate: "Juli 2023",
      endDate: "Desember 2023",
      project: "FullStack Web Developer",
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
      endDate: "Desember 2024",
      project: "Advance Training Web Development",
      company: {
        logo: "https://www.qodr.id/qodr_logo-only_outline.svg",
        name: "Qodr",
        info: "Islamic IT Training Board",
      },
      description:
        "Qodr is a Islamic IT training boarding school, Qodr is an offline course specifically for training web development and UI/UX skills",
      links: [
        {
          label: "Qodr",
          url: "https://www.qodr.id/",
        },
      ],
    },
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
      icon: node,
      name: "NODE JS",
      description: "Javascript Runtime Environment",
    },
    {
      id: "skill_9",
      icon: express,
      name: "EXPRESS JS",
      description: "Node Js Framework",
    },
    {
      id: "skill_10",
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
      course: "Fullstack Web Developer",
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
