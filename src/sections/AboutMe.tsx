import { useRef } from "react";

import { Image, DialogAction } from "../interfaces/Interfaces"

import { AboutMeData } from "../data/AboutMeData"

import Journey from "../components/Journey"
import Dialog from "../components/Dialog";
import FadeAnimation from "../components/FadeAnimation";

const HeadingStyle = "text-blue-800 text-[2rem] font-bold text-center"

export default function AboutMe({ RefProp }: { RefProp: React.RefObject<HTMLElement | null> }) {
    const DialogRef = useRef<DialogAction>(null);
    
    const OpenDialog = (Images: Image[], Index: number) => {
        DialogRef.current?.Open(Images, Index);
    }
    
    return (
        <>
            <section ref={RefProp} className="w-full bg-white flex justify-center items-center">
                <div className="w-[80%] my-[6rem] flex items-center flex-col gap-[2rem] border-[0.05rem] border-solid border-blue-800 border-opacity-[0.2] shadow-[0.01rem_0.01rem_0.155rem] shadow-blue-800 p-10 bg-blue-800 bg-opacity-[0.1]">
                    <div className="w-full">
                        <h1 className={HeadingStyle}>
                            About Me
                        </h1>
                        
                        <FadeAnimation className="w-full bg-blue-800 bg-opacity-[0.1] p-[2rem] my-[2rem]" Direction="right">
                            <p className="text-justify">
                                Hello 👋 my name is Ivander Hanson Setyawan, you can called me Hanson.
                                <br />
                                <br />
                                I am currently in the sixth semester of Computer Science undergraduate program at BINUS University. I am an innovative and disciplined person who loves technology and its applications. I filled my free time by being active in Bina Nusantara Computer Club and working part-time in Bina Nusantara IT Division to develop my skills and expand my connections.
                            </p>
                        </FadeAnimation>
                    </div>

                    <div className="w-full">
                        <h1 className={HeadingStyle}>
                            Education &amp; Scholarship
                        </h1>
                        <Journey Props={AboutMeData.EducationAndScholarship} />
                    </div>

                    <div className="w-full">
                        <h1 className={HeadingStyle}>
                            Work Experience
                        </h1>
                        <Journey Props={AboutMeData.WorkExperience} />
                    </div>

                    <div className="w-full">
                        <h1 className={HeadingStyle}>
                            Organization Experience
                        </h1>
                        <Journey Props={AboutMeData.OrganizationExperience} />
                    </div>

                    <div className="w-full">
                        <h1 className={HeadingStyle}>
                            Skills
                        </h1>
                        <div className="my-[2rem] flex flex-col gap-[2rem]">
                            <div className="w-full flex justify-between items-center flex-wrap">
                                <FadeAnimation className="w-[calc(50%-1rem)] h-[20rem] bg-blue-800 bg-opacity-[0.1] p-[1rem]" Direction="right">
                                    <h2 className="text-blue-800 font-bold text-center text-[1.5rem]">
                                        Soft Skills
                                    </h2>
                                    <div className="h-[15rem] mt-[1rem] flex justify-center items-center flex-wrap gap-[2rem] p-[1rem]">
                                        {AboutMeData.SoftSkills.map((SoftSkill, SoftSkillIndex) => (
                                            <div className="w-[calc(50%-1rem)] bg-blue-800 text-white text-center rounded-[0.5rem] p-[0.25rem] shadow-[0.2rem_0.2rem_0.155rem] shadow-blue-500" key={SoftSkillIndex}>
                                                <h2>
                                                    {SoftSkill}
                                                </h2>
                                            </div>
                                        ))}
                                    </div>
                                </FadeAnimation>

                                <FadeAnimation className="w-[calc(50%-1rem)] h-[20rem] bg-blue-800 bg-opacity-[0.1] p-[1rem]" Direction="left">
                                    <h2 className="text-blue-800 font-bold text-center text-[1.5rem]">
                                        Languages
                                    </h2>
                                    <div className="h-[15rem] mt-[1rem] flex justify-center items-center flex-wrap p-[1rem]">
                                        {AboutMeData.Languages.map((Language, LanguageIndex) => (
                                            <div className="w-full bg-blue-700 text-white text-center rounded-[0.5rem]" key={LanguageIndex}>
                                                <div className="bg-blue-800 p-[0.25rem] rounded-t-[0.5rem]">
                                                    <h2 className="font-bold">
                                                        {Language.Language}
                                                    </h2>
                                                </div>
                                                <div className="p-[0.25rem]">
                                                    <p>
                                                        {Language.Description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </FadeAnimation>
                            </div>
                            
                            <FadeAnimation className="w-full bg-blue-800 bg-opacity-[0.1] p-[1rem]" Direction="up">
                                <h2 className="text-blue-800 font-bold text-center text-[1.5rem]">
                                    Hard Skills
                                </h2>
                                <div className="mt-[1rem] flex items-center gap-x-[calc(15%/4)] gap-y-[2rem] flex-wrap p-[1rem]">
                                    {AboutMeData.HardSkills.map((HardSkill, HardSkillIndex) => (
                                        <div className="w-[17%] bg-blue-800 text-white text-center rounded-[0.5rem] p-[0.5rem] shadow-[0.2rem_0.2rem_0.155rem] shadow-blue-500 flex justify-center items-center gap-[1rem]" key={HardSkillIndex}>
                                            <img src={HardSkill.Source} alt={HardSkill.Alternative} className="h-[2rem]" />
                                            <h2>
                                                {HardSkill.Alternative}
                                            </h2>
                                        </div>
                                    ))}
                                </div>
                            </FadeAnimation>
                        </div>
                    </div>

                    <div className="w-full">
                        <h1 className={HeadingStyle}>
                            Certifications
                        </h1>
                        
                        <FadeAnimation className="w-full bg-blue-800 bg-opacity-[0.1] p-[2rem] mt-[2rem] flex justify-center items-center flex-col" Direction="right">
                            <div className="mb-[2rem] w-full flex justify-between">
                                {AboutMeData.Certifications.slice(0, 5).map((Certification, CertificationIndex) => (
                                    <div className="w-[17%] flex justify-start items-center flex-col" key={CertificationIndex}>
                                        <img src={Certification.Source} alt={Certification.Alternative} className="h-[8rem] rounded-[0.5rem] cursor-pointer transition-all duration-300 hover:scale-[105%]" title="View Certificate" onClick={() => OpenDialog(AboutMeData.Certifications, CertificationIndex)} />
                                        <p className="mt-[0.5rem] px-[0.5rem] text-center">
                                            {Certification.Alternative}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="group box-content w-[10%] pr-[0.2rem] pb-[0.2rem] hover:pr-0 hover:pb-0 hover:pt-[0.2rem] hover:pl-[0.2rem] cursor-pointer" onClick={() => OpenDialog(AboutMeData.Certifications, 5)}>
                                <div className="
                                        w-full bg-blue-800 text-white text-center rounded-[0.5rem] p-[0.25rem] shadow-[0.2rem_0.2rem_0.155rem] shadow-blue-500
                                        group-hover:shadow-none
                                ">
                                    View More
                                </div>
                            </div>
                        </FadeAnimation>
                        <Dialog ref={DialogRef} />
                    </div>
                </div>
            </section>
        </>
    )
}