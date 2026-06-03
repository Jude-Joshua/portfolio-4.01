import caseStudyImage from '../../assets/images/fmta-screen.webp';
import diagramImage from '../../assets/images/diagram.png';
import CopierImage from '../../assets/images/copier.png';
import IdeaImage from '../../assets/images/fmt2.webp';
import SolutionImage from '../../assets/images/fmt3.webp';


import ArrowPointImage from '../../assets/images/arrow-point.png';
import ConstraintsImage from '../../assets/images/constraints.png';
import BoxImage from '../../assets/images/box.png';
import DiceImage from '../../assets/images/dice.png';
import PaintImage from '../../assets/images/paint.png';

import SampleImage from '../../assets/images/fmta-screen.webp'

export const projects = [

    {
        name: "FirstMedtrade",
        slug: "firstmedtrade",
        title: "Designing a unified B2B and B2C web app for healthcare providers and seekers.",
        cover: 'fmta.jpg',
        tag: "UI/UX",
        hmw: "How might we reduce cognitive load and make ordering medical supplies feel immediate, controlled, and trustworthy?",
        link: "/projects/firstmedtrade",
        completed: true,
        detail: {
            heroImage: caseStudyImage,
            role: "Product Designer",
            scope: "UX strategy, UI redesign, interaction design",
            focus: "Reduce friction in product discovery and checkout.",
            copierImage: CopierImage,
            arrowPointImage: ArrowPointImage,
            boxImage: BoxImage,
            diceImage: DiceImage,
            paintImage: PaintImage,
            contextTitle: "Users are not buying from the website.",
            contextParagraphs: [
                "FirstMedtrade is an online marketplace connecting healthcare providers and individuals to verified medical supplies. The platform offered a wide catalogue of products, but the buying experience did not match the urgency and precision required in healthcare procurement.",
                "I was responsible for rethinking the product experience from discovery to checkout, with the goal of reducing user drop-off rates at checkout."
            ],
            monitorTitle: "The user pattern after monitoring the website for a month looked like this:",
            monitorImage: diagramImage,
            tensionTitle: "Buyers on the platform are under pressure. They do not browse for products casually.",
            personas: [
                {
                    id: 1,
                    meta: {
                        role: "Sample Doctor",
                        name: "Dr. Ibrahim Okafor",
                        age: 45,
                        avatar: "persona-doctor.png",
                        tagStyle: {
                            backgroundColor: "#c2ddf2"
                        }
                    },
                    content: {
                        bio: "Dr. Ibrahim runs a busy neighborhood clinic. He treats between 30–40 patients daily and is responsible for ensuring the clinic always has the medical supplies needed for treatment.",
                        quote: "When I’m ordering supplies, I don’t want to browse. I want to find what I need and complete the order immediately."
                    }
                },
                {
                    id: 2,
                    meta: {
                        role: "Sample Buyer",
                        name: "Sarah Adeyemi",
                        age: 32,
                        avatar: "persona-buyer.png",
                        tagStyle: {
                            backgroundColor: "#f4beaf"
                        }
                    },
                    content: {
                        bio: "Sarah occasionally buys medical supplies for personal use and for family members. She is not a medical professional, so she relies heavily on product descriptions and platform guidance when choosing the right items.",
                        quote: "I need to understand what I’m buying before I add it to my cart."
                    }
                }
            ],
            begin: {
                heading: "Here is what we already know ...",
                problems: [
                    {
                        id: 1,
                        title: "Problem 1: Having a homepage with too much information at once might work for a normal e-commerce website but it'll fail for these set of users.",
                        image: IdeaImage,
                        alt: "idea-image"
                    },
                    {
                        id: 2,
                        title: "Problem 2: Too many registration points. The registration.",
                        image: SolutionImage,
                        alt: "solution-image"
                    }
                ]
            },
            goal: {
                heading: "Simplify the shopping experience so users can easily buy on the platform.",
                description: "Early conversations with stakeholders revealed a shared priority. The experience needed to become faster for users, but without introducing complexity into the system or delaying implementation. Each stakeholder approached the problem from a different angle, raising practical concerns that shaped the direction of the designs.",
                priorities: [
                    {
                        owner: "Product Owner",
                        bullets: [
                            "We need to make ordering faster and more reliable for users, especially for healthcare providers who depend on this daily. But we cannot risk breaking the existing system.",
                            "The redesign focused on improving clarity and speed without the current structure, avoiding changes that would require a full system overhaul."
                        ]
                    },
                    {
                        owner: "Product Manager",
                        bullets: [
                            "How do we reduce friction in the buying experience without increasing operational complexity for the business?",
                            "Design decisions had to balance user efficiency with business workflows, ensuring that improvements remained practical and scalable."
                        ]
                    },
                    {
                        owner: "Developer",
                        bullets: [
                            "The checkout flow and product structure are already tightly connected to the backend. Major changes will take time and may introduce risk.",
                            "The solution prioritised frontend and interaction improvements, working with existing technical boundaries instead of restructuring the system."
                        ]
                    }
                ],
                constraintsImage: ConstraintsImage
            },
            decision: {
                title: "DECISIONS",
                description: "FirstMedtrade is an online marketplace connecting healthcare providers and individuals to verified medical supplies.",
                categories: [
                    {
                        title: "Priority 1",
                        bullets: [
                            "Guest checkout",
                            "Minimal home page",
                            "Cleaner secondary links for navigation",
                            "Improved search, filter and categories",
                            "Easier registration flow",
                            "Separate buyer and seller registration points",
                            "Cleaner error states",
                            "Error affordance for users"
                        ]
                    },
                    {
                        title: "Priority 2",
                        bullets: [
                            "Improved search and filter and categories",
                            "Add team-mate to dashboard",
                            "Send a list (improved request a quote)"
                        ]
                    },
                    {
                        title: "Priority 3",
                        bullets: [
                            "Personalised dashboard with easy chat access",
                            "Add team-mate to dashboard",
                            "Easier order tracking"
                        ]
                    }
                ]
            },
            visual: {
                title: "VISUAL",
                description: "FirstMedtrade is an online marketplace connecting healthcare providers and individuals to verified medical supplies.",
                categories: [
                    {
                        title: "Priority 1",
                        bullets: [
                            "Guest checkout",
                            "Minimal home page",
                            "Cleaner secondary links for navigation",
                            "Improved search, filter and categories",
                            "Easier registration flow",
                            "Separate buyer and seller registration points",
                            "Cleaner error states",
                            "Error affordance for users"
                        ]
                    },
                    {
                        title: "Priority 2",
                        bullets: [
                            "Improved search and filter and categories",
                            "Add team-mate to dashboard",
                            "Send a list (improved request a quote)"
                        ]
                    },
                    {
                        title: "Priority 3",
                        bullets: [
                            "Personalised dashboard with easy chat access",
                            "Add team-mate to dashboard",
                            "Add team-mate to dashboard",
                            "Easier order tracking"
                        ]
                    }
                ]
            }
        }
    },
    {
        name: "Greenstixz Networks",
        slug: "greenstixz",
        title: "Reframing Greenstixz Networks to drive 32% increased CVR.",
        cover: 'greenstixz.jpg',
        tag: "Branding",
        hmw: "How might we reshape the brand to better communicate value, build trust, and improve conversion across digital touchpoints?",
        link: "/projects/greenstixz",
        completed: false
    },
    {
        name: "Thompson & Grace Institute of Technology",
        slug: "thompson-and-grace",
        title: "Repositioning Thompson & Grace Institute for investor confidence.",
        tag: "Website Redesign",
        hmw: "How might we elevate the institute’s digital presence to clearly communicate its value and support high-stakes investor conversations?",
        link: "/projects/thompson-and-grace",
        completed: false
    },
];