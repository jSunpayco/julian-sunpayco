const experiences = [
    {
        id: 1,
        idName: "car-data-viz",
        title: "Car Data Visualization",
        linkName: "demo",
        link: "https://public.tableau.com/app/profile/julian.sunpayco/viz/USA_Cars_Workbook/Story1",
        year: "Dec 2021",
        description: "A project that was given to us in college during for our Predictive Analysis subject was data visualization. Our professor specifically instructed us to explore Tableau and come up with a presentation on any dataset we could find on the internet. I found the lesson valuable not only in undestanding data, but also when trying to understand situations in general as it helped us be more critical on what's going on given the data presented to be able to create a story that could guide us towards a certain direction.",
        techs: ["Tableau"],
        preview: 'secondhand.webp',
        type: 'Academic Project'
    },
    {
        id: 2,
        idName: "pasakay",
        title: "Pasakay Prototype",
        linkName: "demo",
        link: "https://www.figma.com/proto/ENVUAYEbFn2q43IMysKRf9/Pasakay-Application-Prototype?node-id=230%3A2888&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=230%3A2888&show-proto-sidebar=1",
        year: "Mar - Jun 2022",
        description: "Pasakay: To get on a vehicle; A prototype for a carpooling application directed towards a university's students, professors, staff, and alumni. This is the product of a group project I participated in during an entrepreneurship subject directed towards software developers. The development of the project began from determining the existence of a certain market and ended with providing a minimum viable product for their problems. After creating the original prototype using Figma, the design and overall structure was modified after every iteration that included UX testing with target customers.",
        techs: ["Figma", "UX Design"],
        preview: 'pasakay.webp',
        type: 'Academic Project'
    },
    {
        id: 3,
        idName: "eScience",
        title: "SWE Intern",
        linkName: "eScience",
        link: "https://www.electronicscience.com/products/edtr.html",
        year: "Jul - Oct 2022",
        description: "My first internship; I was initially given a task to review a security scan analysis generated by Zap OWASP. A general walkthrough of Burp Suite and the common vulnerabilities of a web application was also provided for the initial scans, in which I was tasked to do them alone for the succeeding ones. But the main role given to me afterwards was to perform tasks for the web component of an attendance and inventory monitoring system tailored for merchandising services. This made me gain experience in a JavaScript framework for the first time, specifically Angular. Additionally, some of the tickets assigned to me had me dabble a bit into AWS functions, such as when I had to implement multipart uploading for larger sized files. Although the 4 months felt like a breeze, it was still an exciting and fruitful experience to get to work on a larger-scaled project when compared to personal works.",
        techs: ["Angular", "JavaScript", "Python", "AWS SDK"],
        preview: 'escience.webp',
        type: 'Professional Experience'
    },
    {
        id: 4,
        idName: "dota-drafter",
        title: "DOTA Drafter",
        linkName: "demo",
        link: "https://dota-drafter.vercel.app/",
        repo:"https://github.com/jSunpayco/dota_drafter",
        year: "Nov 2022",
        description: "My first take on a full-stack project where I had decided to branch out of just learning one JavaScript framework and decided to go for React. Hearing from friends and reading other testimonies online on the so-called more streamlined version of a JS framework, I was obviously curious how different it could be from Angular. Turns out, the reusablility part of React is what drew developers towards it. By creating a template that can be used as many times as you want, you wouldn't need to do so much to perform changes.",
        techs: ["React", "CSS", "MantineUI", "TypeScript"],
        preview: 'drafter.webp',
        type: 'Personal Project'
    },
    {
        id: 5,
        idName: "my-portfolio-client",
        title: "Julian Sunpayco",
        linkName: "demo",
        link: "https://julian-sunpayco.vercel.app/",
        repo:"https://github.com/jSunpayco/julian-sunpayco",
        year: "Dec 2022",
        description: "This is where you're currently at! This was made to expand my knowledge on JS frameworks while showcasing my past experiences in the field. This is the first web application I made with Vue JS, and yet another experience added when it comes down to component-based frameworks. Additionally, after learning much CSS, I've decided to give Tailwind a try, and found it useful only when writing inline styling.",
        techs: ["Vue", "JavaScript", "Tailwind", "GSAP"],
        preview: 'portfolio.webp',
        type: 'Personal Project'
    },
    {
        id: 6,
        idName: "slice-recipes",
        title: "Slice",
        linkName: "demo",
        link: "https://slice-recipes.vercel.app/",
        year: "Jan 2023",
        description: "My next take on creating a project was to further improve my understanding on React, JavaScript, and web development in general. This was along with the incentive to create something that has the potential to be useful to me sometime in the future. Slice, is a recipe sharing application that aims to be of use those who want to safekeep and share recipes that they have created, or was taught to them for future reference. This was made possible by implementing Firebase Firestore for storage and filtering, as well as Firebase Authentication in order for users to create their own accounts and share their recipes on the app.",
        techs: ["React", "TypeScript", "Firebase", "Sass"],
        preview: 'slice.webp',
        type: 'Personal Project'
    },
    {
        id: 7,
        idName: "slice-postgre",
        title: "Slice PostgreSQL",
        linkName: "repo",
        link: "https://github.com/jSunpayco/slice-backend",
        year: "April 2023",
        description: "Due to my curiosity on working with backend technologies, I decided to take a look at what my previous project, Slice's backend would've looked like if I had used PostgreSQL instead of Firebase. Because of that, it gave me the opportunity to work on developing my own APIs using express, writing SQL queries, as well as testing the APIs with Jest to ensure that they behave as expected.",
        techs: ["Node", "Express", "PostgreSQL", "Jest"],
        preview: 'slice-back.webp',
        type: 'Personal Project'
    },
    {
        id: 8,
        idName: "seekr",
        title: "SeekR",
        linkName: "repo",
        link: "https://github.com/jSunpayco/seekr",
        year: "May 2023 - Present",
        description: "Being motivated to create a more personalized platform to help me track my job applications, I decieded to develop a job tracker app that allows me to give me a summary of my journey in looking for a job in Software Development. Whilst the design for the frontend component has been made using Figma, the rest of the features (deployed on AWS Amplify) are still under development. This is the same with the backend component wherein I plan to develop it with .Net C#, and also deploy it on AWS",
        techs: ["AWS", "React", "Typescript", "Figma", "SASS", ".Net"],
        preview: 'seekr.webp',
        type: 'Personal Project'
    }
]

export default experiences;