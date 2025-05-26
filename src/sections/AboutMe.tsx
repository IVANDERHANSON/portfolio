import BNCCLogo from '../assets/BNCCLogo.png'

const SubSectionStyle = "w-full border-b-[0.05rem] border-solid border-blue-800 border-opacity-[0.2]"
const HeadingStyle = "text-blue-800 text-[2rem] font-bold text-center"

export default function AboutMe({ RefProp }: { RefProp: React.RefObject<HTMLElement | null> }) {
    return (
        <>
            <section ref={RefProp} className="w-full bg-white flex justify-center items-center">
                <div className="w-[80%] my-[6rem] flex items-center flex-col gap-[2rem] border-[0.05rem] border-solid border-blue-800 border-opacity-[0.5] shadow-[0.01rem_0.01rem_0.31rem] shadow-blue-800 p-10">
                    <div className={SubSectionStyle}>
                        <h1 className={HeadingStyle}>
                            About Me
                        </h1>
                        <p className="my-[2rem]">
                            Hello 👋 my name is Ivander Hanson Setyawan, you can called me Hanson.
                            <br />
                            <br />
                            I am currently in the sixth semester of Computer Science undergraduate program at BINUS University. I am an innovative and disciplined person who loves technology and its applications. I filled my free time by being active in Bina Nusantara Computer Club and working part-time in Bina Nusantara IT Division to develop my skills and expand my connections.
                        </p>
                    </div>

                    <div className={SubSectionStyle}>
                        <h1 className={HeadingStyle}>
                            Education
                        </h1>
                    </div>

                    <div className={SubSectionStyle}>
                        <h1 className={HeadingStyle}>
                            Work Experience
                        </h1>
                        <div className="w-[calc(100%-0.6rem)] ml-[0.6rem] flex flex-col gap-[2rem] my-[2rem] pl-[2rem] border-l-[0.3rem] border-solid border-blue-800 border-opacity-[0.2]">
                            <div className="
                                relative w-full p-[2%] border-[0.05rem] border-solid border-blue-800 border-opacity-[0.2] cursor-pointer transition-all duration-500
                                hover:shadow-[0.01rem_0.01rem_0.155rem] hover:shadow-blue-800
                                before:content-[''] before:absolute before:top-[-0.08rem] before:right-[calc(100%+2rem-0.55rem)] before:bg-blue-800 before:w-[1.5rem] before:h-[1.5rem] before:rounded-[50%] before:border-[0.1rem] before:border-solid before:border-white
                            ">
                                <div className='w-full flex justify-between'>
                                    <div>
                                        <div className="flex items-center gap-[0.3rem] font-bold">
                                            <h2>
                                                Back-End Tutor
                                            </h2>
                                            <div className="w-[0.3rem] h-[0.3rem] bg-black opacity-[0.5] rounded-[50%]"></div>
                                            <h2>Part-time</h2>
                                        </div>
                                        <h2 className="opacity-[0.5]">
                                            Bina Nusantara Computer Club
                                            <br />
                                            Oct 2023 - Sept 2024
                                            <br />
                                            Jakarta
                                        </h2>
                                    </div>
                                    <img src={BNCCLogo} alt="BNCCLogo" className='h-[2rem]' />
                                </div>
                                
                                <div className='my-[1rem]'>
                                    <p>
                                        As a Back-End Tutor, I taught Laravel framework for BE-D and BE-J classes, each with about ten members. I was very happy to share my experiences with members, as it allowed me to improve my skills and learn new things. I had the following job description:
                                        <br />1. Taught and prepared materials for 13 sessions.
                                        <br />2. Ensured class members could understand the material.
                                        <br />3. Assessed Mid Projects and Final Projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={SubSectionStyle}>
                        <h1 className={HeadingStyle}>
                            Organization Experience
                        </h1>
                    </div>

                    <div className={SubSectionStyle}>
                        <h1 className={HeadingStyle}>
                            Skills
                        </h1>
                    </div>

                    <div className={SubSectionStyle}>
                        <h1 className={HeadingStyle}>
                            Certifications
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}