// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Kanishk",
    title: "Hi all, I'm Kanishk",
    subTitle: emoji(
        "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / React Native and some other cool libraries and frameworks."
    ),
    resumeLink: "https://drive.google.com/file/d/1sSUdalLQhatAc4hVP48g01MJdRa42uL1/view?usp=sharing", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/Kanishk0412",
    linkedin: "https://www.linkedin.com/in/kanishk-tyagi-32970a173/",
    gmail: "kanishktyagi200@gmail.com",
    facebook: "https://www.facebook.com/kanishk20/",
    medium: "https://medium.com/@kanishktyagi200",
    instagram: "https://www.instagram.com/kanishk_.20/",
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
        ),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji(
            "⚡ Integration of third party services such as Firebase"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "sass",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
/*        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "swift",
            fontAwesomeClassname: "fab fa-swift"
        },
*/
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
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
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [{
            schoolName: "UIET Panjab University",
            logo: require("./assets/images/uiet-img.png"),
            subHeader: "Bachelors of Engineering in Biotechnology",
            duration: "November 2020 - Present",
            desc: "Exploring Every Technology Domain.",
            descBullets: [
                "Working on Kidney Tumor Detection Research under DIC",
            ]
        },
        {
            schoolName: "Annie Besant School",
            logo: require("./assets/images/annieBesant-img.png"),
            subHeader: "Higher Secondary Class (12th)",
            duration: "April 2019 - March 2020",
            desc: "Secured 90% in Higher Secondary Class",
            descBullets: ["Head Boy of the School"]
        },
        {
            schoolName: "K.L International School",
            logo: require("./assets/images/kl-img.png"),
            subHeader: "Senior Secondary Class",
            duration: "April 2017 - March 2018",
            desc: "Secure 72% in Senior Secondary Class",
            descBullets: ["Participated in many Cultural Fests and was a part of House Core Team"]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: false, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Frontend/Design", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "70%"
        },
        {
            Stack: "Programming",
            progressPercentage: "60%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "Web Developer",
            company: "Recyteq",
            companylogo: require("./assets/images/recyteq.jpeg"),
            date: "Jan 2020 – Present",
            desc: "Vision: Transforming Human Hair into Plant Booster ",
            descBullets: [
                "Tech Stacks: HTML/CSS/React/Django",
            ]
        },
        {
            role: "Front-End Developer",
            company: "Asian Fields",
            companylogo: require("./assets/images/asian.png"),
            date: "Nov 2021 – Jan 2022",
            desc: "APCRC is an incorporated non-profit body established for the protection of the environment, the prevention of pollution and environmental degradation, the preparation of Environmental Plans for the management and protection of the environment. ",
            descBullets: [
                "Tech Stacks: HTML/CSS/React",
            ] 
        },
        {
            role: "Technical Writing",
            company: "TCR Innovation",
            companylogo: require("./assets/images/tcr.jpeg"),
            date: " Jun 2021 – Jul 2021",
            desc: "Vision: Bridging the gap between the students and their knowledge in industrial field and bringing them a step closer to their dream",
            descBullets: [
                "Working Area: During my internship, I created new blogs about the latest technology and various coding languages.",
            ]
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [{
            image: require("./assets/images/saayaHealthLogo.webp"),
            projectName: "Saayahealth",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [{
                    name: "Visit Website",
                    url: "http://saayahealth.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/nextuLogo.webp"),
            projectName: "Nextu",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [{
                name: "Visit Website",
                url: "http://nextu.se/"
            }]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: "Google Code-In Finalist",
            subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            footerLink: [{
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
            subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            footerLink: [{
                name: "View Google Assistant Action",
                url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
            }]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            footerLink: [
                { name: "Certification", url: "" },
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
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [{
            url: "https://medium.com/@kanishktyagi200/getting-started-with-c-programming-language-af61b1d0badc?source=user_profile---------0-------------------------------",
            title: "Getting Started with C Programming Language",
            description: "C programming is a middle-level, general-purpose computer programming language created by Dennis M. Ritchie....Read More"
        },
    ],
    display: true// Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [{
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
    }],
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
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+91-9760892957",
    email_address: "kanishktyagi200@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "Kanishk0412", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
};

export {
    illustration,
    greeting,
    socialMediaLinks,
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
    twitterDetails
};