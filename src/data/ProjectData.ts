import { IExperience, IProject, ISkills } from "../interface/Types";
import bankManagment from '../assets/images/bankManagement.png'
import eCommerce from '../assets/images/eCommercepng.png'
import movieApp from '../assets/images/movieApp.png'

export const experiences: IExperience[] = [
    {
        time: "24 February 2023 - 10 December 2023",
        header: "Front end developer",
        contents: "Front end developer  in Coders Azerbaijan",
        skils: ["HTML5", "CSS", "SCSS", "Bootstrap", "React", "Redux", "Redux Toolkit"]
    },
    // {
    //     time: "12 January 2021 - 20 December 2023",
    //     header: "Front end developer",
    //     contents: "Front end developer FreeLancer in Coders Azerbaijan",
    //     skils: ["HTML5", "CSS", "SCSS", "Bootstrap", "React", "Redux", "Redux Toolkit"]
    // },
    // {
    //     time: "13 February 2022 - 20 October 2022",
    //     header: "StartUp",
    //     contents: "Front end developer Remote in Insightify",
    //     skils: ["HTML5", "CSS", "SCSS", "Bootstrap", "Angular", "Rxjs", "NgRx", "AntDesign", "Angular Material", "Firabase", "NgBootstrap", "NgxBootstrap", "NgxSpinner", "NgxToastr"]
    // },
    {
        time: "13 January 2023 - 20 October 2023",
        header: "Freelancer",
        contents: "Front end developer Remote in Insightify",
        skils: ["HTML5", "CSS", "SCSS", "Bootstrap", "Angular", "Rxjs", "NgRx", "AntDesign", "Angular Material", "Firabase", "NgBootstrap", "NgxBootstrap", "NgxSpinner", "NgxToastr"]
    },
    {
        time: "24 July 2023 - On Going",
        header: "Angular Developer",
        contents: "Angular Developer in AzeriMed LLC",
        skils: ["Angular", "Angular Material", "TypeScript", "Rxjs", "NgRx", "Firabase", "Scss", "PrimeNg", "NgBootstrap", "NgxBootstrap", "NgxSpinner", "NgxToastr", "jqxGrid"]
    },
    {
        time: "10 March 2024 - On Going",
        header: "Freelancer | Support",
        contents: "Front end developer in Coders Azerbaijan",
        skils: ["HTML5", "CSS", "SCSS", "Bootstrap", "React", "Redux Toolkit", "Material UI", "Next js", "Tailwind CSS", "React Query RTK", "Micro Frontends Architecture"]
    },
]

export const educations: IExperience[] = [
    {
        time: "21 June 2023 - 12 August 2023",
        header: "Coders Azerbaijan",
        contents: "Advanced Front-end Developer Bootcamp",
        skils: ["React with TypeScript", "Jest", "React testing library", "React Query RTK", "Micro Frontends Architecture", "Material UI", "Next js", "Prizma", "Supabase"]
    },
    // {
    //     time: "08 June 2020 - 08 October 2020",
    //     header: "Coders Azerbaijan",
    //     contents: "Front-end Developer Bootcamp",
    //     skils: ["HTML5", "CSS", "SCSS", "Bootstrap", "React", "Redux", "Redux Toolkit"]
    // },
    {
        time: '2018-2022',
        header: "Bachelors",
        contents: "I have completed my bachelor's degree in Computer Engineer at UTECA"
    }
]

export const projects: IProject[] = [
    {
        header: 'React Redux-toolkit MaterialUI PrimeReact Node.js MongoDB ',
        title: 'Bank Management',
        contents: 'BAK Management App , React Redux-toolki',
        // status: 'On Going',
        image: bankManagment,
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/bank-management-system',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: 'https://bank-management-system-murex.vercel.app',
                status: false,
                disabled: false
            }

        ]
    },
    {
        header: 'Angular AngularMaterial TypeScript  JSON-Server ',
        title: 'eCommerce',
        contents: 'eCommerce App',
        image: eCommerce,
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/Ecommerce_Shop__React.js',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: 'https://ecommerce-angular-peach.vercel.app/',
                status: false,
                disabled: false
            }

        ]
    },
    {
        header: 'Angular AngularMaterial TypeScript  Movie-Api ',
        title: 'Movie App',
        contents: 'Simple responsive Movie app , Angular Material was used',
        image: movieApp,
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/Movie-App-Angular',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: 'https://movie-app-angular-delta.vercel.app/',
                status: false,
                disabled: false
            }

        ]
    },
    {
        header: 'HTML CSS SCSS React Redux-toolkit Node.js MongoDB ',
        title: 'About',
        contents: 'About Task',
        // image: about,
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/Ecommerce_Shop__React.js',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: 'https://react-blogg-nu.vercel.app/',
                status: false,
                disabled: false
            }

        ]
    },
    {
        header: 'Node.js Express.js MongoDB JWT Socket.io',
        title: 'Bank Managment Back End',
        contents: ' Bank Managment Api,login register',
        status: 'Not Deployed',
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/BankManagement_Back-End',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: '',
                status: false,
                disabled: true
            }

        ]
    }, {
        header: 'Node.js Express.js MongoDB JWT Socket.io',
        title: 'eCommerce back-ends',
        contents: 'eCommerce back-end Api,login register',
        status: 'Not Deployed',
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/Ecomemrce-backEnd',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: '',
                status: false,
                disabled: true
            }

        ]
    },
    {
        header: ' React Redux-toolkit JSON-server',
        title: 'eCommerce',
        contents: 'eCommerce App',
        status: 'Not Deployed',
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/Ecommerce_Shop__React.js',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: '',
                status: false,
                disabled: true
            }

        ]
    },
    {
        header: ' Angualr Angular-Material TypeScript Scss',
        title: 'Task Managment',
        contents: 'Task Managment Admin User ',
        status: 'Not Deployed',
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/Task_Management-Angular',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: '',
                status: false,
                disabled: true
            }

        ]
    },
    {
        header: 'HTML SCSS JavaScript',
        title: 'Car Product',
        contents: 'Rentacar Car Product web site',
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/car-product',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: 'https://samir1009ms.github.io/car-product/',
                status: false,
                disabled: false
            }

        ]
    },
    {
        header: 'HTML SCSS JavaScript',
        title: 'Scissors game',
        contents: 'Scissors game , 2player(1 vs 1bot)',
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/game',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: 'https://samir1009ms.github.io/game/',
                status: false,
                disabled: false
            }

        ]
    },
    {
        header: 'HTML SCSS JavaScript',
        title: 'Tic-Tak-Toe game',
        contents: 'Tic-Tak-Toe game , 2player',
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/Tic_Tac_Toe',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: 'https://samir1009ms.github.io/Tic_Tac_Toe/',
                status: false,
                disabled: false
            }

        ]
    },
    {
        header: 'HTML SCSS JavaScript',
        title: 'Video Player',
        contents: 'Only focused logic',
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/video-player',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: 'https://samir1009ms.github.io/video-player/',
                status: false,
                disabled: false
            }

        ]
    },
    {
        header: 'HTML SCSS JavaScript',
        title: 'Music Player',
        contents: 'Only focused logic',
        buttons: [
            {
                name: 'github',
                link: 'https://github.com/Samir1009ms/music_player',
                status: true,
                disabled: false
            },
            {
                name: 'live',
                link: 'https://samir1009ms.github.io/music_player/',
                status: false,
                disabled: false
            }

        ]
    }
]

export const skills: ISkills[] = [
    {
        header: 'Programming-languages',
        text: 'Javascript (Typescript)'
    },
    {
        header: 'Other',
        text: 'HTML5 CSS SCSS Node.js - (beginner) Bootstrap Material-Ui RestApi Angular-Material React-Icons PrimeReact PrimeNG Figma'
    },
    {
        header: 'Tools',
        text: 'VSCode WebStorm'
    },
    {
        header: 'DataBases',
        text: 'MongoDB - (beginner)'
    },
    {
        header: 'Frameworks',
        text: 'React Angular Vue Next.js Express.js - (beginner)'
    },

]
