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
        preview: 'secondhand.png',
        type: 'Academic Project'
    },
    {
        id: 2,
        idName: "pasakay",
        title: "Pasakay Prototype",
        linkName: "demo",
        link: "https://www.figma.com/proto/ENVUAYEbFn2q43IMysKRf9/Pasakay-Application-Prototype?node-id=230%3A2888&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=230%3A2888&show-proto-sidebar=1",
        year: "Mar - Jun 2022",
        description: "A prototype for a carpooling application directed towards a university's students, professors, staff, and alumni. This is the product of a group project I participated in during an entrepreneurship subject directed towards software developers. The development of the project began from determining the existence of a certain market and ended with providing a minimum viable product for their problems. After creating the original prototype using Figma, the design and overall structure was modified after every iteration that included UX testing with target customers.",
        techs: ["Figma", "UX Design"],
        preview: 'pasakay.png',
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
        preview: 'escience.png',
        type: 'Professional Experience'
    },
    {
        id: 4,
        idName: "dota-drafter",
        title: "DOTA Drafter",
        linkName: "demo",
        link: "https://dota-drafter.vercel.app/",
        year: "Nov 2022",
        description: "My first take on a full-stack project, I had decided to branch out of just learning one JavaScript framework and decided to go for React. Hearing from friends and reading other testimonies online on the so-called more streamlined version of a JS framework, I was obviously curious how different it could be from Angular. Turns out, the reusablility part of React is what drew developers towards it. By creating a template that can be used as many times as you want, you wouldn't need to do so much to perform changes. Additionally, I also took the opportunity to learn some backend development by uploading my data on Mongo Atlas, and then calling them via my own api.",
        techs: ["MERN", "CSS", "MantineUI", "TypeScript"],
        preview: 'drafter.png',
        type: 'Personal Project'
    },
    {
        id: 5,
        idName: "my-portfolio-client",
        title: "Julian Sunpayco",
        linkName: "demo",
        link: "http://localhost:5173/",
        year: "Dec 2022",
        description: "This is where you're currently at! This was made in hopes of expanding my knowledge on JS frameworks while showcasing my past experiences in the field. This is the first web application I made with Vue JS, and yet another experience added when it comes down to component-based frameworks. Additionally, after learning much CSS, I've decided to give Tailwind a try to see what benefits do styling frameworks provide to developers. One last thing is the integration of an animations library, wherein I used GSAP for this project in order for me to get creative in showing changes in data, or conveying that a component is interactive.",
        techs: ["Vue", "JavaScript", "Tailwind", "GSAP"],
        preview: 'portfolio.png',
        type: 'Personal Project'
    }
]

export default experiences;