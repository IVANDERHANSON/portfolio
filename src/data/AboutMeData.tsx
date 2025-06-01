import { JourneyProps, Language, Image } from "../interfaces/Interfaces"

import BINUSLogo from '../assets/sections/AboutMe/BINUS Logo.png'

import BCALogo from '../assets/sections/AboutMe/BCA Logo.webp'
import BinaNusantaraITDivisionLogo from '../assets/sections/AboutMe/Bina Nusantara IT Division Logo.png'
import ITDivisionCertificate from '../assets/sections/AboutMe/IT Division Certificate.png'
import SSG2BukaPuasaBersama2024 from '../assets/sections/AboutMe/SSG 2 Buka Puasa Bersama 2024.jpg'
import SSG2GatheringEvent2024 from '../assets/sections/AboutMe/SSG 2 Gathering Event 2024.jpeg'
import BNCCLogo from '../assets/sections/AboutMe/BNCC Logo.png'
import BackEndDevelopmentTutorCertificate from '../assets/sections/AboutMe/Back-End Development Tutor Certificate.jpg'
import BE_D from '../assets/sections/AboutMe/BE-D.jpg'
import BE_J from '../assets/sections/AboutMe/BE-J.jpg'

import RnD from '../assets/sections/AboutMe/Research & Development.jpg'
import TechnoScape2024FirstMeeting from '../assets/sections/AboutMe/TechnoScape 2024 First Meeting.jpg'
import BNCCActivistCertificate from '../assets/sections/AboutMe/BNCC Activist Certificate.jpg'
import TPMCertificate from '../assets/sections/AboutMe/TPM Certificate.png'
import BNCCActivistGatheringEvent from '../assets/sections/AboutMe/BNCC Activist Gathering Event.jpg'
import TechnoScape2023Certificate from '../assets/sections/AboutMe/TechnoScape 2023 Certificate.jpg'
import BNCCOpeningSeason2023 from '../assets/sections/AboutMe/BNCC Opening Season 2023.jpg'

import ReactJS from '../assets/sections/AboutMe/React JS.png'
import TypeScript from '../assets/sections/AboutMe/TypeScript.png'
import Laravel from '../assets/sections/AboutMe/Laravel.png'
import NETCore from '../assets/sections/AboutMe/NET Core.png'
import SQL from '../assets/sections/AboutMe/SQL.png'
import CPP from '../assets/sections/AboutMe/C++.png'
import C from '../assets/sections/AboutMe/C.png'
import Python from '../assets/sections/AboutMe/Python.webp'
import Java from '../assets/sections/AboutMe/Java.png'
import Figma from '../assets/sections/AboutMe/Figma.png'

interface AboutMeDataStructure {
    EducationAndScholarship: JourneyProps[];
    WorkExperience: JourneyProps[];
    OrganizationExperience: JourneyProps[];
    SoftSkills: string[];
    Languages: Language[];
    HardSkills: Image[];
}

export const AboutMeData: AboutMeDataStructure = {
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
            Description: 'Streaming: Software Engineering\nElective Course: Mobile Programming',
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
            Description: 'Here I got the opportunity from the Student Advisory and Support Center (SASC) to become a scholarship mentor during the fifth semester. As a mentor, I helped mentees who still had difficulty in achieving the academic achievement standards set by BINUS University. By helping mentees, I could also improve soft skills, increase academic knowledge, and get a tuition scholarship of 16 credits.',
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
            Description: '1. Developed web applications to maintain Customer Relationships.\n2. Developed BINUS Chatbot (CODY).\n3. Conducted testing to ensure that the software created met UI/UX requirements.\n4. Contributed to the Proof of Concept for a Generative AI Chatbot.\n5. Migrated a project from Salesforce Classic to Lightning Experience.\n6. Developed REST API in Salesforce.',
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
            Description: '1. Taught and prepared materials (Laravel framework) for 13 sessions.\n2. Ensured class members could understand the material.\n3. Assessed Mid Projects and Final Projects.',
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
            Description: '1. Led Learning Management System development project for members.\n2. Led Design System development project for BNCC.\n3. Led RnD team weekly stand-up meetings regularly.\n4. Migrated old server to new server.\n5. Maintained new server, databases, and websites.\n6. Conducted relevant technology research to improve BNCC operational activities.\n7. Handled Knowledge Management Programs to prepare Activists to become the next RnD.\n8. Conducted documentation for all RnD programs.\n9. Led TechnoScape 2024 website project.',
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
            Description: '1. Project Manager and Back-End Developer at TPM.\n2. Activist Gathering Event Committee.\n3. Publication Staff at TechnoScape 2023.\n4. Design Coordinator at BNCC Workshop 2023.\n5. Design Staff at BNCC Opening Season 2023.\n6. Design Staff at BNCC Corporate Social Responsibility 2023.\n7. Completed Technical Training (Web Development, Server, & Design System).\n8. Completed Leadership Development Program.',
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
            Source: Figma,
            Alternative: 'Figma'
        }
    ]
}