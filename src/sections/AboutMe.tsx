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