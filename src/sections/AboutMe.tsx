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
                        <div className="w-full flex flex-col gap-[2rem] my-[2rem] pl-[2rem] border-l-[0.3rem] border-solid border-blue-800 border-opacity-[0.2]">
                            <div className="
                                relative w-full p-[2%] border-[0.05rem] border-solid border-blue-800 border-opacity-[0.2] cursor-pointer transition-all duration-500
                                hover:shadow-[0.01rem_0.01rem_0.155rem] hover:shadow-blue-800
                                before:content-[''] before:absolute before:top-[-0.08rem] before:right-[calc(100%+2rem-0.55rem)] before:bg-blue-800 before:w-[1.5rem] before:h-[1.5rem] before:rounded-[50%] before:border-[0.1rem] before:border-solid before:border-white
                            ">
                                <h2>
                                    Bachelor's Degree
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto ad beatae reiciendis voluptate blanditiis sit saepe aliquid, perferendis voluptatibus illum facere sapiente pariatur ea itaque, iste aperiam minus doloremque minima, ipsam odit! Aut distinctio fugiat laborum optio accusantium quas et vitae quia, ex corrupti, repellendus, minus itaque. Quas libero similique tempore neque commodi voluptate animi. Ipsum facere iure corrupti aperiam modi illum laboriosam, ipsam, obcaecati dolor ducimus perspiciatis, iusto velit facilis cupiditate officia. Iusto, eum aperiam? Sequi architecto inventore quam, quae debitis error rem fugiat ut molestiae optio libero minima, accusantium maiores ex, perspiciatis corporis nesciunt! Quo, possimus assumenda.
                                </p>
                            </div>
                            <div className="
                                relative w-full p-[2%] border-[0.05rem] border-solid border-blue-800 border-opacity-[0.2] cursor-pointer transition-all duration-500
                                hover:shadow-[0.01rem_0.01rem_0.155rem] hover:shadow-blue-800
                                before:content-[''] before:absolute before:top-[-0.08rem] before:right-[calc(100%+2rem-0.55rem)] before:bg-blue-800 before:w-[1.5rem] before:h-[1.5rem] before:rounded-[50%] before:border-[0.1rem] before:border-solid before:border-white
                            ">
                                <h2>
                                    Bachelor's Degree
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto ad beatae reiciendis voluptate blanditiis sit saepe aliquid, perferendis voluptatibus illum facere sapiente pariatur ea itaque, iste aperiam minus doloremque minima, ipsam odit! Aut distinctio fugiat laborum optio accusantium quas et vitae quia, ex corrupti, repellendus, minus itaque. Quas libero similique tempore neque commodi voluptate animi. Ipsum facere iure corrupti aperiam modi illum laboriosam, ipsam, obcaecati dolor ducimus perspiciatis, iusto velit facilis cupiditate officia. Iusto, eum aperiam? Sequi architecto inventore quam, quae debitis error rem fugiat ut molestiae optio libero minima, accusantium maiores ex, perspiciatis corporis nesciunt! Quo, possimus assumenda.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={SubSectionStyle}>
                        <h1 className={HeadingStyle}>
                            Work Experience
                        </h1>
                        <div className="w-full flex flex-col gap-[2rem] my-[2rem] pl-[2rem] border-l-[0.3rem] border-solid border-blue-800 border-opacity-[0.2]">
                            <div className="
                                relative w-full p-[2%] border-[0.05rem] border-solid border-blue-800 border-opacity-[0.2] cursor-pointer transition-all duration-500
                                hover:shadow-[0.01rem_0.01rem_0.155rem] hover:shadow-blue-800
                                before:content-[''] before:absolute before:top-[-0.08rem] before:right-[calc(100%+2rem-0.55rem)] before:bg-blue-800 before:w-[1.5rem] before:h-[1.5rem] before:rounded-[50%] before:border-[0.1rem] before:border-solid before:border-white
                            ">
                                <h2>
                                    Bachelor's Degree
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto ad beatae reiciendis voluptate blanditiis sit saepe aliquid, perferendis voluptatibus illum facere sapiente pariatur ea itaque, iste aperiam minus doloremque minima, ipsam odit! Aut distinctio fugiat laborum optio accusantium quas et vitae quia, ex corrupti, repellendus, minus itaque. Quas libero similique tempore neque commodi voluptate animi. Ipsum facere iure corrupti aperiam modi illum laboriosam, ipsam, obcaecati dolor ducimus perspiciatis, iusto velit facilis cupiditate officia. Iusto, eum aperiam? Sequi architecto inventore quam, quae debitis error rem fugiat ut molestiae optio libero minima, accusantium maiores ex, perspiciatis corporis nesciunt! Quo, possimus assumenda.
                                </p>
                            </div>
                            <div className="
                                relative w-full p-[2%] border-[0.05rem] border-solid border-blue-800 border-opacity-[0.2] cursor-pointer transition-all duration-500
                                hover:shadow-[0.01rem_0.01rem_0.155rem] hover:shadow-blue-800
                                before:content-[''] before:absolute before:top-[-0.08rem] before:right-[calc(100%+2rem-0.55rem)] before:bg-blue-800 before:w-[1.5rem] before:h-[1.5rem] before:rounded-[50%] before:border-[0.1rem] before:border-solid before:border-white
                            ">
                                <h2>
                                    Bachelor's Degree
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto ad beatae reiciendis voluptate blanditiis sit saepe aliquid, perferendis voluptatibus illum facere sapiente pariatur ea itaque, iste aperiam minus doloremque minima, ipsam odit! Aut distinctio fugiat laborum optio accusantium quas et vitae quia, ex corrupti, repellendus, minus itaque. Quas libero similique tempore neque commodi voluptate animi. Ipsum facere iure corrupti aperiam modi illum laboriosam, ipsam, obcaecati dolor ducimus perspiciatis, iusto velit facilis cupiditate officia. Iusto, eum aperiam? Sequi architecto inventore quam, quae debitis error rem fugiat ut molestiae optio libero minima, accusantium maiores ex, perspiciatis corporis nesciunt! Quo, possimus assumenda.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={SubSectionStyle}>
                        <h1 className={HeadingStyle}>
                            Organization Experience
                        </h1>
                        <div className="w-full flex flex-col gap-[2rem] my-[2rem] pl-[2rem] border-l-[0.3rem] border-solid border-blue-800 border-opacity-[0.2]">
                            <div className="
                                relative w-full p-[2%] border-[0.05rem] border-solid border-blue-800 border-opacity-[0.2] cursor-pointer transition-all duration-500
                                hover:shadow-[0.01rem_0.01rem_0.155rem] hover:shadow-blue-800
                                before:content-[''] before:absolute before:top-[-0.08rem] before:right-[calc(100%+2rem-0.55rem)] before:bg-blue-800 before:w-[1.5rem] before:h-[1.5rem] before:rounded-[50%] before:border-[0.1rem] before:border-solid before:border-white
                            ">
                                <h2>
                                    Bachelor's Degree
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto ad beatae reiciendis voluptate blanditiis sit saepe aliquid, perferendis voluptatibus illum facere sapiente pariatur ea itaque, iste aperiam minus doloremque minima, ipsam odit! Aut distinctio fugiat laborum optio accusantium quas et vitae quia, ex corrupti, repellendus, minus itaque. Quas libero similique tempore neque commodi voluptate animi. Ipsum facere iure corrupti aperiam modi illum laboriosam, ipsam, obcaecati dolor ducimus perspiciatis, iusto velit facilis cupiditate officia. Iusto, eum aperiam? Sequi architecto inventore quam, quae debitis error rem fugiat ut molestiae optio libero minima, accusantium maiores ex, perspiciatis corporis nesciunt! Quo, possimus assumenda.
                                </p>
                            </div>
                            <div className="
                                relative w-full p-[2%] border-[0.05rem] border-solid border-blue-800 border-opacity-[0.2] cursor-pointer transition-all duration-500
                                hover:shadow-[0.01rem_0.01rem_0.155rem] hover:shadow-blue-800
                                before:content-[''] before:absolute before:top-[-0.08rem] before:right-[calc(100%+2rem-0.55rem)] before:bg-blue-800 before:w-[1.5rem] before:h-[1.5rem] before:rounded-[50%] before:border-[0.1rem] before:border-solid before:border-white
                            ">
                                <h2>
                                    Bachelor's Degree
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto ad beatae reiciendis voluptate blanditiis sit saepe aliquid, perferendis voluptatibus illum facere sapiente pariatur ea itaque, iste aperiam minus doloremque minima, ipsam odit! Aut distinctio fugiat laborum optio accusantium quas et vitae quia, ex corrupti, repellendus, minus itaque. Quas libero similique tempore neque commodi voluptate animi. Ipsum facere iure corrupti aperiam modi illum laboriosam, ipsam, obcaecati dolor ducimus perspiciatis, iusto velit facilis cupiditate officia. Iusto, eum aperiam? Sequi architecto inventore quam, quae debitis error rem fugiat ut molestiae optio libero minima, accusantium maiores ex, perspiciatis corporis nesciunt! Quo, possimus assumenda.
                                </p>
                            </div>
                        </div>
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