import { JourneyProps } from "../interfaces/Interfaces"

import BINUSLogo from '../assets/sections/AboutMe/BINUS Logo.png'
import BCALogo from '../assets/sections/AboutMe/BCA Logo.webp'
import BinaNusantaraITDivisionLogo from '../assets/sections/AboutMe/Bina Nusantara IT Division Logo.png'
import ITDivisionCertificate from '../assets/sections/AboutMe/IT Division Certificate.png'
import SSG2BukaPuasaBersama2024 from '../assets/sections/AboutMe/SSG 2 Buka Puasa Bersama 2024.jpg'
import SSG2GatheringEvent2024 from '../assets/sections/AboutMe/SSG 2 Gathering Event 2024.jpeg'
import BNCCLogo from '../assets/sections/AboutMe/BNCC Logo.png'
import BackEndDevelopmentTutorCertificate from '../assets/sections/AboutMe/Back-End Development Tutor Certificate.jpg'
import BE_D from '../assets/sections/AboutMe/BE_D.jpg'
import BE_J from '../assets/sections/AboutMe/BE_J.jpg'

interface AboutMeDataStructure {
    EducationAndScholarship: JourneyProps[];
    WorkExperience: JourneyProps[];
    OrganizationExperience: JourneyProps[];
}

export const AboutMeData: AboutMeDataStructure = {
    EducationAndScholarship: [
        {
            Position: 'Bachelor\'s Degree',
            Type: 'Computer Science',
            OrganizationName: 'BINUS University',
            Periode: '2022 - 2026',
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
            Place: 'Jakarta, Syahdan Campus',
            OrganizationImage: {
                Source: BinaNusantaraITDivisionLogo,
                Alternative: 'Bina Nusantara IT Division Logo'
            },
            Description: 'Here I worked in Software Solution Group 2 that handles Customer Relationship Management. As a Programmer, I had the following job description:\n1. Developed web applications to maintain Customer Relationships.\n2. Developed BINUS Chatbot (CODY).\n3. Conducted testing to ensure that the software created met UI/UX requirements.\n4. Contributed to the Proof of Concept for a Generative AI Chatbot.\n5. Migrated a project from Salesforce Classic to Lightning Experience.\n6. Developed REST API in Salesforce.',
            Images: [
                {
                    Source: ITDivisionCertificate,
                    Alternative: 'IT Division Certificate'
                },
                {
                    Source: SSG2BukaPuasaBersama2024,
                    Alternative: 'SSG2 Buka Puasa Bersama 2024'
                },
                {
                    Source: SSG2GatheringEvent2024,
                    Alternative: 'SSG2 Gathering Event 2024'
                }
            ]
        },
        {
            Position: 'Back-End Development Tutor',
            Type: 'Part-Time',
            OrganizationName: 'Bina Nusantara Computer Club',
            Periode: 'Oct 2023 - Sept 2024',
            Place: 'Online, Discord',
            OrganizationImage: {
                Source: BNCCLogo,
                Alternative: 'BNCC Logo'
            },
            Description: 'As a Back-End Development Tutor, I taught Laravel framework for BE-D and BE-J classes, each with about ten members. I was very happy to share my experiences with members, as it allowed me to improve my skills and learn new things. I had the following job description:\n1. Taught and prepared materials for 13 sessions.\n2. Ensured class members could understand the material.\n3. Assessed Mid Projects and Final Projects.',
            Images: [
                {
                    Source: BackEndDevelopmentTutorCertificate,
                    Alternative: 'Back-End Development Tutor Certificate'
                },
                {
                    Source: BE_D,
                    Alternative: 'BE_D'
                },
                {
                    Source: BE_J,
                    Alternative: 'BE_J'
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
            Place: 'Jakarta',
            OrganizationImage: {
                Source: BNCCLogo,
                Alternative: 'BNCC Logo'
            },
            Description: '',
            Images: [
                
            ]
        },
        {
            Position: 'Activist',
            Type: '',
            OrganizationName: 'Bina Nusantara Computer Club',
            Periode: 'Nov 2022 - Oct 2023',
            Place: 'Jakarta',
            OrganizationImage: {
                Source: BNCCLogo,
                Alternative: 'BNCC Logo'
            },
            Description: '',
            Images: [
                
            ]
        }
    ]
}