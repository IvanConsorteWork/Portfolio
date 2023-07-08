import becomingfit from '../assets/becoming-fit.png';
import becomingFitv2 from '../assets/becomingv2-1.png'
import becomingFitv22 from '../assets/becomingv2-2.png'
import becomingFitv23 from '../assets/becomingv2-3.png'
import terralog1 from '../assets/terralog1.png'
import terralog2 from '../assets/terralog2.png'
import terralog3 from '../assets/terralog3.png'
import terralog4 from '../assets/terralog4.png'
import terralog5 from '../assets/terralog5.png'

const ProjectsData = [
    {
        imgs: [becomingFitv2, becomingFitv22, becomingFitv23],
        title: "Becoming-Fit v2",
        stack: "React, Redux Toolkit, Typescript, Bootstrap",
        features: "Shopping Cart, Local Storage",
        text: "A rework of a previous project, with the aims of a more streamlined design and learning the tools used in today's standard products. WORK IN PROGRESS",        
        view: "",
        source: "https://github.com/IvanConsorteWork/Becoming-Fit-v2"
    },
    {
        imgs: [terralog1, terralog2, terralog3, terralog4, terralog5],
        title: "Terralog",
        stack: "React, Redux, Express",
        features: "CRUD features, filtering and sorting content",
        text: "A Full Stack project for developing skills as web developer. This site acts as a countries's database. Includes search, filters, sorts and content creation",        
        view: "https://terralog.vercel.app/",
        source: "https://github.com/IvanConsorteWork/CountriesApp"
    },
    {
        imgs: [becomingfit, becomingfit],
        title: "Becoming-Fit",
        stack: "React, Redux, Bootstrap, Express",
        features: "Authentication, Shopping Cart, Checkout, Admin Dashboard",
        text: "A responsive Full Stack sports outfit's e-commerce project. Includes authentication, shopping cart/checkout and admin functions.",        
        view: "https://becoming-fit-br1oli.vercel.app/",
        source: "https://github.com/IvanConsorteWork/Becoming_Fit"
    },
]

export default ProjectsData;