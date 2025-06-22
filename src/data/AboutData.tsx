import { JourneyProps, Language, Image } from "../interfaces/Interfaces"

import BINUSLogo from '../assets/sections/About/BINUS Logo.png'

import BCALogo from '../assets/sections/About/BCA Logo.webp'
import BinaNusantaraITDivisionLogo from '../assets/sections/About/Bina Nusantara IT Division Logo.png'
import ITDivisionCertificate from '../assets/sections/About/IT Division Certificate.png'
import SSG2BukaPuasaBersama2024 from '../assets/sections/About/SSG 2 Buka Puasa Bersama 2024.jpg'
import SSG2GatheringEvent2024 from '../assets/sections/About/SSG 2 Gathering Event 2024.jpeg'
import BNCCLogo from '../assets/sections/About/BNCC Logo.png'
import BackEndDevelopmentTutorCertificate from '../assets/sections/About/Back-End Development Tutor Certificate.jpg'
import BE_D from '../assets/sections/About/BE-D.jpg'
import BE_J from '../assets/sections/About/BE-J.jpg'

import RnD from '../assets/sections/About/Research & Development.jpg'
import TechnoScape2024FirstMeeting from '../assets/sections/About/TechnoScape 2024 First Meeting.jpg'
import BNCCActivistCertificate from '../assets/sections/About/BNCC Activist Certificate.jpg'
import TPMCertificate from '../assets/sections/About/TPM Certificate.png'
import BNCCActivistGatheringEvent from '../assets/sections/About/BNCC Activist Gathering Event.jpg'
import TechnoScape2023Certificate from '../assets/sections/About/TechnoScape 2023 Certificate.jpg'
import BNCCOpeningSeason2023 from '../assets/sections/About/BNCC Opening Season 2023.jpg'

import ReactJS from '../assets/sections/About/React JS.png'
import TypeScript from '../assets/sections/About/TypeScript.png'
import TailwindCSS from '../assets/sections/About/Tailwind CSS.png'
import Laravel from '../assets/sections/About/Laravel.png'
import NETCore from '../assets/sections/About/NET Core.png'
import SQL from '../assets/sections/About/SQL.png'
import CPP from '../assets/sections/About/C++.png'
import C from '../assets/sections/About/C.png'
import Python from '../assets/sections/About/Python.webp'
import Java from '../assets/sections/About/Java.png'
import AndroidStudio from '../assets/sections/About/Android Studio.png'
import git from '../assets/sections/About/git.png'
import Figma from '../assets/sections/About/Figma.png'
import AfterEffects from '../assets/sections/About/After Effects.webp'
import OutSystems from '../assets/sections/About/OutSystems.png'

import TrainingTeknisOutSystems from '../assets/sections/About/Training Teknis OutSystems.png'
import BasicConceptofProjectManagement from '../assets/sections/About/Basic Concept of Project Management.jpg'
import FrontEndDevelopment from '../assets/sections/About/Front-End Development.png'
import BackEndDevelopment from '../assets/sections/About/Back-End Development.png'
import BackEndTutoratTPM from '../assets/sections/About/Back-End Tutor at TPM.png'
import MicrosoftAIOverview from '../assets/sections/About/Microsoft AI Overview.png'
import MicrosoftComputerVision from '../assets/sections/About/Microsoft Computer Vision.png'
import MicrosoftDocumentIntelligenceandKnowledgeMining from '../assets/sections/About/Microsoft Document Intelligence and Knowledge Mining.png'
import MicrosoftGenerativeAI from '../assets/sections/About/Microsoft Generative AI.png'
import MicrosoftNaturalLanguageProcessing from '../assets/sections/About/Microsoft Natural Language Processing.png'
import AdvancedSQL from '../assets/sections/About/SQL (Advanced).png'
import IntroductiontoHTML from '../assets/sections/About/Introduction to HTML.jpg'
import IntroductiontoCSS from '../assets/sections/About/Introduction to CSS.jpg'
import JavaScriptIntermediate from '../assets/sections/About/JavaScript Intermediate.jpg'
import PHP from '../assets/sections/About/PHP.jpg'
import IntroductiontoCSharp from '../assets/sections/About/Introduction to C Sharp.jpg'
import IntroductiontoPython from '../assets/sections/About/Introduction to Python.jpg'
import CIntermediate from '../assets/sections/About/C Intermediate.jpg'

interface AboutDataStructure {
    EducationAndScholarship: JourneyProps[];
    WorkExperience: JourneyProps[];
    OrganizationExperience: JourneyProps[];
    SoftSkills: string[];
    Languages: Language[];
    HardSkills: Image[];
    Certifications: Image[];
}

export const AboutData: AboutDataStructure = {
    EducationAndScholarship: [
        {
            Position: 'Bachelor\'s Degree',
            Type: 'Computer Science',
            OrganizationName: 'BINUS University',
            Periode: '2022 - 2026',
            Duration: '',
            Place: 'Jakarta',
            OrganizationImage: {
                Source: BINUSLogo,
                Alternative: 'BINUS Logo'
            },
            Description: '• Streaming: Software Engineering\n• Elective Course: Mobile Programming',
            Images: [
                
            ]
        },
        {
            Position: 'Scholarship Mentor',
            Type: '',
            OrganizationName: 'BINUS University',
            Periode: 'Sep 2024 - Jan 2025',
            Duration: '5 Months',
            Place: 'Jakarta',
            OrganizationImage: {
                Source: BINUSLogo,
                Alternative: 'BINUS Logo'
            },
            Description: 'I got the opportunity from the Student Advisory and Support Center (SASC) to become a scholarship mentor during the fifth semester. As a mentor, I helped mentees who still had difficulty in achieving the academic achievement standards set by BINUS University. By helping mentees, I could also improve soft skills, increase academic knowledge, and get a tuition scholarship of 16 credits.',
            Images: [
                
            ]
        }
    ],
    WorkExperience: [
        {
            Position: 'Application Developer',
            Type: 'Internship',
            OrganizationName: 'PT Bank Central Asia Tbk',
            Periode: 'Feb 2025 - Aug 2025',
            Duration: '7 Months',
            Place: 'Jakarta, Menara BCA',
            OrganizationImage: {
                Source: BCALogo,
                Alternative: 'BCA Logo'
            },
            Description: '',
            Images: [
                
            ]
        },
        {
            Position: 'Programmer',
            Type: 'Part-Time',
            OrganizationName: 'Bina Nusantara IT Division',
            Periode: 'Mar 2024 - Jan 2025',
            Duration: '11 Months',
            Place: 'Jakarta, Syahdan Campus',
            OrganizationImage: {
                Source: BinaNusantaraITDivisionLogo,
                Alternative: 'Bina Nusantara IT Division Logo'
            },
            Description: '• Developed web applications to maintain Customer Relationships.\n• Developed BINUS Chatbot (CODY).\n• Conducted testing to ensure that the software created met UI/UX requirements.\n• Contributed to the Proof of Concept for a Generative AI Chatbot.\n• Migrated a project from Salesforce Classic to Lightning Experience.\n• Developed REST API in Salesforce.',
            Images: [
                {
                    Source: ITDivisionCertificate,
                    Alternative: 'IT Division Certificate'
                },
                {
                    Source: SSG2BukaPuasaBersama2024,
                    Alternative: 'SSG-2 Buka Puasa Bersama 2024'
                },
                {
                    Source: SSG2GatheringEvent2024,
                    Alternative: 'SSG-2 Gathering Event 2024'
                }
            ]
        },
        {
            Position: 'Back-End Development Tutor',
            Type: 'Part-Time',
            OrganizationName: 'Bina Nusantara Computer Club',
            Periode: 'Oct 2023 - Sept 2024',
            Duration: '1 Year',
            Place: 'Online, Discord',
            OrganizationImage: {
                Source: BNCCLogo,
                Alternative: 'BNCC Logo'
            },
            Description: '• Taught and prepared materials (Laravel framework) for 13 sessions.\n• Ensured class members could understand the material.\n• Assessed Mid Projects and Final Projects.',
            Images: [
                {
                    Source: BackEndDevelopmentTutorCertificate,
                    Alternative: 'Back-End Development Tutor Certificate'
                },
                {
                    Source: BE_D,
                    Alternative: 'BE-D'
                },
                {
                    Source: BE_J,
                    Alternative: 'BE-J'
                }
            ]
        }
    ],
    OrganizationExperience: [
        {
            Position: 'Research & Development Manager',
            Type: '',
            OrganizationName: 'Bina Nusantara Computer Club',
            Periode: 'Oct 2023 - Oct 2024',
            Duration: '1 Year 1 Month',
            Place: 'Jakarta',
            OrganizationImage: {
                Source: BNCCLogo,
                Alternative: 'BNCC Logo'
            },
            Description: '• Led Learning Management System development project for members.\n• Led Design System development project for BNCC.\n• Led RnD team weekly stand-up meetings regularly.\n• Migrated old server to new server.\n• Maintained new server, databases, and websites.\n• Conducted relevant technology research to improve BNCC operational activities.\n• Handled Knowledge Management Programs to prepare Activists to become the next RnD.\n• Conducted documentation for all RnD programs.\n• Led TechnoScape 2024 website project.',
            Images: [
                {
                    Source: RnD,
                    Alternative: 'Research & Development'
                },
                {
                    Source: TechnoScape2024FirstMeeting,
                    Alternative: 'TechnoScape 2024 First Meeting'
                }
            ]
        },
        {
            Position: 'Activist',
            Type: '',
            OrganizationName: 'Bina Nusantara Computer Club',
            Periode: 'Nov 2022 - Oct 2023',
            Duration: '1 Year',
            Place: 'Jakarta',
            OrganizationImage: {
                Source: BNCCLogo,
                Alternative: 'BNCC Logo'
            },
            Description: '• Project Manager and Back-End Developer at TPM.\n• Activist Gathering Event Committee.\n• Publication Staff at TechnoScape 2023.\n• Design Coordinator at BNCC Workshop 2023.\n• Design Staff at BNCC Opening Season 2023.\n• Design Staff at BNCC Corporate Social Responsibility 2023.\n• Completed Technical Training (Web Development, Server, & Design System).\n• Completed Leadership Development Program.',
            Images: [
                {
                    Source: BNCCActivistCertificate,
                    Alternative: 'BNCC Activist Certificate'
                },
                {
                    Source: TPMCertificate,
                    Alternative: 'TPM Certificate'
                },
                {
                    Source: BNCCActivistGatheringEvent,
                    Alternative: 'BNCC Activist Gathering Event'
                },
                {
                    Source: TechnoScape2023Certificate,
                    Alternative: 'TechnoScape 2023 Certificate'
                },
                {
                    Source: BNCCOpeningSeason2023,
                    Alternative: 'BNCC Opening Season 2023'
                }
            ]
        }
    ],
    SoftSkills: [
        'Leadership',
        'Communication',
        'Innovative',
        'Teamwork',
        'Time Management',
        'Critical Thinking'
    ],
    Languages: [
        {
            Language: 'English',
            Description: 'Professional working proficiency'
        },
        {
            Language: 'Indonesian',
            Description: 'Native or bilingual proficiency'
        }
    ],
    HardSkills: [
        {
            Source: ReactJS,
            Alternative: 'React.JS'
        },
        {
            Source: TypeScript,
            Alternative: 'TypeScript'
        },
        {
            Source: TailwindCSS,
            Alternative: 'Tailwind CSS'
        },
        {
            Source: Laravel,
            Alternative: 'Laravel'
        },
        {
            Source: NETCore,
            Alternative: '.NET Core'
        },
        {
            Source: SQL,
            Alternative: 'SQL'
        },
        {
            Source: CPP,
            Alternative: 'C++'
        },
        {
            Source: C,
            Alternative: 'C'
        },
        {
            Source: Python,
            Alternative: 'Python'
        },
        {
            Source: Java,
            Alternative: 'Java'
        },
        {
            Source: AndroidStudio,
            Alternative: 'Android Studio'
        },
        {
            Source: git,
            Alternative: 'git'
        },
        {
            Source: Figma,
            Alternative: 'Figma'
        },
        {
            Source: AfterEffects,
            Alternative: 'After Effects'
        },
        {
            Source: OutSystems,
            Alternative: 'OutSystems'
        }
    ],
    Certifications: [
        {
            Source: TrainingTeknisOutSystems,
            Alternative: 'Training Teknis OutSystems'
        },
        {
            Source: ITDivisionCertificate,
            Alternative: 'IT Division'
        },
        {
            Source: BasicConceptofProjectManagement,
            Alternative: 'Basic Concept of Project Management'
        },
        {
            Source: FrontEndDevelopment,
            Alternative: 'Front-End Development'
        },
        {
            Source: BackEndDevelopment,
            Alternative: 'Back-End Development'
        },
        {
            Source: BackEndTutoratTPM,
            Alternative: 'Back-End Tutor at TPM'
        },
        {
            Source: BackEndDevelopmentTutorCertificate,
            Alternative: 'Back-End Development Tutor'
        },
        {
            Source: TechnoScape2023Certificate,
            Alternative: 'TechnoScape 2023'
        },
        {
            Source: TPMCertificate,
            Alternative: 'TPM'
        },
        {
            Source: BNCCActivistCertificate,
            Alternative: 'BNCC Activist'
        },
        {
            Source: MicrosoftAIOverview,
            Alternative: 'Microsoft Azure AI Fundamentals - AI Overview'
        },
        {
            Source: MicrosoftComputerVision,
            Alternative: 'Microsoft Azure AI Fundamentals - Computer Vision'
        },
        {
            Source: MicrosoftDocumentIntelligenceandKnowledgeMining,
            Alternative: 'Microsoft Azure AI Fundamentals - Document Intelligence and Knowledge Mining'
        },
        {
            Source: MicrosoftGenerativeAI,
            Alternative: 'Microsoft Azure AI Fundamentals - Generative AI'
        },
        {
            Source: MicrosoftNaturalLanguageProcessing,
            Alternative: 'Microsoft Azure AI Fundamentals - Natural Language Processing'
        },
        {
            Source: AdvancedSQL,
            Alternative: 'SQL (Advanced)'
        },
        {
            Source: IntroductiontoHTML,
            Alternative: 'Introduction to HTML'
        },
        {
            Source: IntroductiontoCSS,
            Alternative: 'Introduction to CSS'
        },
        {
            Source: JavaScriptIntermediate,
            Alternative: 'JavaScript Intermediate'
        },
        {
            Source: PHP,
            Alternative: 'PHP'
        },
        {
            Source: IntroductiontoCSharp,
            Alternative: 'Introduction to C#'
        },
        {
            Source: IntroductiontoPython,
            Alternative: 'Introduction to Python'
        },
        {
            Source: CIntermediate,
            Alternative: 'C Intermediate'
        },
    ]
}