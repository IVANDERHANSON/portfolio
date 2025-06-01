import { AboutMeData } from "../data/AboutMeData"

import Journey from "../components/Journey"

const HeadingStyle = "text-blue-800 text-[2rem] font-bold text-center"

export default function AboutMe({ RefProp }: { RefProp: React.RefObject<HTMLElement | null> }) {
    return (
        <>
            <section ref={RefProp} className="w-full bg-white flex justify-center items-center">
                <div className="w-[80%] my-[6rem] flex items-center flex-col gap-[2rem] border-[0.05rem] border-solid border-blue-800 border-opacity-[0.2] shadow-[0.01rem_0.01rem_0.155rem] shadow-blue-800 p-10 bg-blue-800 bg-opacity-[0.1]">
                    <div className="w-full">
                        <h1 className={HeadingStyle}>
                            About Me
                        </h1>
                        <p className="my-[2rem] text-justify">
                            Hello 👋 my name is Ivander Hanson Setyawan, you can called me Hanson.
                            <br />
                            <br />
                            I am currently in the sixth semester of Computer Science undergraduate program at BINUS University. I am an innovative and disciplined person who loves technology and its applications. I filled my free time by being active in Bina Nusantara Computer Club and working part-time in Bina Nusantara IT Division to develop my skills and expand my connections.
                        </p>
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
                                <div className="w-[calc(50%-1rem)] h-[20rem] bg-blue-800 bg-opacity-[0.1] p-[1rem]">
                                    <h2 className="text-blue-800 font-bold text-center">
                                        Soft Skills
                                    </h2>
                                    <div className="h-[15rem] mt-[1rem] flex justify-center items-center flex-wrap gap-[2rem] p-[1rem]">
                                        {AboutMeData.SoftSkills.map((SoftSkill) => (
                                            <div className="w-[calc(50%-1rem)] bg-blue-800 text-white text-center rounded-[0.5rem] p-[0.25rem] shadow-[0.2rem_0.2rem_0.155rem] shadow-blue-500">
                                                <h2>
                                                    {SoftSkill}
                                                </h2>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-[calc(50%-1rem)] h-[20rem] bg-blue-800 bg-opacity-[0.1] p-[1rem]">
                                    <h2 className="text-blue-800 font-bold text-center">
                                        Languages
                                    </h2>
                                    <div className="h-[15rem] mt-[1rem] flex justify-center items-center flex-wrap p-[1rem]">
                                        {AboutMeData.Languages.map((Language) => (
                                            <div className="w-full bg-blue-500 text-white text-center rounded-[0.5rem]">
                                                <div className="bg-blue-800 p-[0.25rem] rounded-t-[0.5rem]">
                                                    <h2>
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
                                </div>
                            </div>
                            <div className="w-full bg-blue-800 bg-opacity-[0.1] p-[1rem]">
                                <h2 className="text-blue-800 font-bold text-center">
                                    Hard Skills
                                </h2>
                                <div className="mt-[1rem] flex items-center gap-x-[calc(15%/4)] gap-y-[2rem] flex-wrap p-[1rem]">
                                    {AboutMeData.HardSkills.map((HardSkill) => (
                                        <div className="w-[17%] bg-blue-800 text-white text-center rounded-[0.5rem] p-[0.5rem] shadow-[0.2rem_0.2rem_0.155rem] shadow-blue-500 flex justify-center items-center gap-[1rem]">
                                            <img src={HardSkill.Source} alt={HardSkill.Alternative} className="h-[2rem]" />
                                            <h2>
                                                {HardSkill.Alternative}
                                            </h2>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <h1 className={HeadingStyle}>
                            Certifications
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}