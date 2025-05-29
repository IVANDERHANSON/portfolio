import { JourneyProps } from "../interfaces/Interfaces"

import BNCCLogo from '../assets/sections/AboutMe/BNCC Logo.png'
import BackEndTutor from '../assets/sections/AboutMe/Back-End Tutor.jpg'
import BE_D from '../assets/sections/AboutMe/BE_D.jpg'
import BE_J from '../assets/sections/AboutMe/BE_J.jpg'

interface AboutMeDataStructure {
    Education: JourneyProps[];
    WorkExperience: JourneyProps[];
    OrganizationExperience: JourneyProps[];
}

export const AboutMeData: AboutMeDataStructure = {
    Education: [

    ],
    WorkExperience: [
        {
            Position: 'Back-End Tutor',
            Type: 'Part-time',
            OrganizationName: 'Bina Nusantara Computer Club',
            Periode: 'Oct 2023 - Sept 2024',
            Place: 'Jakarta',
            OrganizationImage: {
                Source: BNCCLogo,
                Alternative: 'BNCC Logo'
            },
            Description: 'As a Back-End Tutor, I taught Laravel framework for BE-D and BE-J classes, each with about ten members. I was very happy to share my experiences with members, as it allowed me to improve my skills and learn new things. I had the following job description:\n1. Taught and prepared materials for 13 sessions.\n2. Ensured class members could understand the material.\n3. Assessed Mid Projects and Final Projects.',
            Images: [
                {
                    Source: BackEndTutor,
                    Alternative: 'Back-End Tutor'
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

    ]
}