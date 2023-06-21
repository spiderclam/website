const data = [
    {
        "role": "Freelance Software Engineer",
        "company": "SpoonX Studio",
        "from": "Feb 2012",
        "to": "",
        "description": "Software and design for mobile, web and beyond. With SpoonX Studio I've had the opportunity to work on a diverse set of projects. MVPs, mobile apps, dashboards, APIs and video streaming services just to name a few. Some of the more notable projects I've worked on have their own entries in this list.",
        "tech": "React Native, React Native Web, JavaScript, TypeScript, iOS, Expo, Node.JS, React, GraphQL, Blender, Firebase, Android, Figma, CSS, Threejs"
    },
    {
        "role": "Founder",
        "company": "BlueTour",
        "from": "Feb 2019",
        "to": "Mar 2023",
        "description": "BlueTour offers immersive tour software for museums, galleries and other venues. It's managed through a dashboard to enable (audio-)tours in multiple languages. It includes audio fingerprinting, indoor navigation and hands-free audio tours.",
        "tech": "React Native, React, Figma, React Admin, Google APIs, Node.JS, Firebase, Objective-C, Java"
    },
    {
        "company": "New Dance TV",
        "role": "Freelance Senior Software Engineer",
        "from": "Mar 2021",
        "to": "Aug 2021",
        "description": "New Dance TV is a video streaming platform for dance. I was responsible for setting up the API using lambas and Amazon DynamoDB to allow streaming media to the mobile apps. I set up the architecture and a set of rules to allow for fast and optimized querying of the data.",
        "tech": "Node.JS, AWS, DynamoDB, Lambda, Serverless"
    },




    {
        "company": "iO Digital LTO",
        "role": "Freelance Senior Software Engineer",
        "from": "Sep 2020",
        "to": "Feb 2021",
        "description": "A fun, diverse and complex project that brought together three different CRMs for three different organizations into one coherent system, featuring an admin dashboard, a landing page and a mobile app from scratch. The goal of this project was to allow farmers and gardeners to keep up with news, price trends and share their opinions on important subjects within their areas of interest. Some truly impressive features were built for this project.",
        "tech": "JavaScript, TypeScript, React Native, React, React Admin, Styled Components, React Query, C# .NET, Node.JS, Svelte, Sveltekit"
    },




    {
        "company": "Cloom",
        "role": "Freelance Senior Software Engineer",
        "from": "Sep 2020",
        "to": "Feb 2021",
        "description": "Cloom is platform that offers live video-streamed workouts with a real instructor. I built a POC for full-body tracking on iOS using machine learning and custom quaternion logic for pose validation. I also built the frontend for the web app which included the conference streaming two-way client for both participants and the instructor.",
        "tech": "Node.JS, JavaScript, HTML, CSS, Typescript, Agora, WebRTC, Swift"
    },
    
    
    
    
    
    {
        "role": "Front End Lead",
        "company": "Temper",
        "from": "May 2021",
        "to": "Dec 2021",
        "description": "Temper is a platform that connects freelancers with employers. Within my role I was responsible for team management, code quality and a rewrite. I created a new style guide from Figma using Storybook, wrote all components and architectured the new app using React Native web. Additionally, I created a custom WebFlow plugin for search functionality on the landing page and implemented an elasticsearch server and queries for smarter search result. Due to a shift in leadership, uncertainty regarding the company’s future, and frequent colleague departures, I made the decision to pursue new opportunities.",
        "tech": "React Native Web, Expo, WebFlow, Storybook, ElasticSearch, PHP, Laravel, JavaScript, TypeScript"
    },
    {
        "role": "Founder",
        "company": "Maaloptijd",
        "from": "Mar 2020",
        "to": "Jun 2021",
        "description": "React-Native, React, Firebase, Node.JS, TypeScript, Swift, Objective-C, Kotlin, Java."
    },
    {
        "role": "Freelance Software Engineer",
        "company": "Efteling",
        "from": "Jul 2019",
        "to": "Mar 2020",
        "description": "I'm working on the Efteling app using React Native, Kotlin and Swift. Some Java and Objective-C.",
        "tech": "React Native, Kotlin, Styled components, Objective-C, Cognito, AWS, Firebase, React Query, Figma"
    },
    {
        "role": "Freelance Software Engineer",
        "company": "Vandebron",
        "from": "Sep 2018",
        "to": "Apr 2019",
        "description": "Mainly working with React and React Native. Small amounts of scala."
    },
    {
        "role": "Senior Software Engineer",
        "company": "Tele2 Nederland",
        "from": "Mar 2018",
        "to": "Oct 2018",
        "description": ""
    },
    {
        "role": "Senior Software Engineer",
        "company": "Videodock",
        "from": "Mar 2017",
        "to": "Mar 2018",
        "description": ""
    },
    {
        "role": "Lead Developer",
        "company": "SmartNow",
        "from": "Nov 2015",
        "to": "Mar 2017",
        "description": "Connected Molecules and Sweebr."
    },
    {
        "role": "Senior Software Engineer",
        "company": "Infostrada",
        "from": "Jul 2015",
        "to": "Nov 2015",
        "description": ""
    },
    {
        "role": "Lead Developer",
        "company": "Islive.com BV",
        "from": "Aug 2011",
        "to": "Jul 2015",
        "description": "Lead developer. Working on several platforms, with multiple languages and technologies both infra and software."
    },
    {
        "role": "Software Engineer",
        "company": "Copernica",
        "from": "Mar 2011",
        "to": "Aug 2011",
        "description": "Main development, I work on usability and system features."
    },
    {
        "role": "Software Engineer",
        "company": "CoolCreations",
        "from": "Jan 2011",
        "to": "Mar 2011",
        "description": "Software engineer. Also worked on design, and an iOS application (objective-c)."
    },
    {
        "role": "independent",
        "company": "Solow-Projects",
        "from": "Apr 2007",
        "to": "Jan 2011",
        "description": "Freelancer. Web development."
    },
    // {
    //     "role": "Intern",
    //     "company": "Merx",
    //     "from": "Mar 2008",
    //     "to": "Feb 2009",
    //     "description": "Learning how to work in a team, with developers, designers and advisers. I was on the development side, and learned graphical design from one of my colleagues."
    // }
];

import fs from 'fs';

function carefulThisOverwritesYourExperienceFiles() {
    const dateMap = {
        'Jan': '01',
        'Feb': '02',
        'Mar': '03',
        'Apr': '04',
        'May': '05',
        'Jun': '06',
        'Jul': '07',
        'Aug': '08',
        'Sep': '09',
        'Oct': '10',
        'Nov': '11',
        'Dec': '12',
    };

    data.forEach((item) => {
        const [fromMonth, fromYear] = item.from.split(' ');
        const [toMonth, toYear] = item.to.split(' ');
        const tpl = `---
title: '${item.role}'
company: '${item.company}'
from: '${fromYear}-${dateMap[fromMonth]}'
to: '${item.to ? `${toYear}-${dateMap[toMonth]}` : ''}'
tech: ${item.tech ?? ''}
---

${item.description}`;

        fs.writeFileSync(`./src/content/experience/${item.company.replaceAll(' ', '-').toLowerCase()}.svx`, tpl);
    });
}
