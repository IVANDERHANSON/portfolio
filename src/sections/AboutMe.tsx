const HeadingStyle = "text-blue-800 text-[2rem] font-bold text-center"

export default function AboutMe({ RefProp }: { RefProp: React.RefObject<HTMLElement | null> }) {
    return (
        <>
            <section ref={RefProp} className="w-full h-[200vh] bg-white flex justify-center items-center">
                <div className="w-[90%] h-[calc(100%-2*6rem)] flex items-center flex-col gap-[5rem]">
                    <div className="w-full border-b-[0.1rem] border-dotted border-blue-800">
                        <h1 className={HeadingStyle}>
                            About Me
                        </h1>
                        <p>
                            <br />
                            Hello 👋 my name is Ivander Hanson Setyawan, you can called me Hanson.
                            <br />
                            <br />
                            I am currently in the sixth semester of Computer Science undergraduate program at BINUS University. I am an innovative and disciplined person who loves technology and its applications. I filled my free time by being active in Bina Nusantara Computer Club and working part-time in Bina Nusantara IT Division to develop my skills and expand my connections.
                            <br />
                            <br />
                        </p>
                    </div>

                    <div className="w-full border-b-[0.1rem] border-dotted border-blue-800">
                        <h1 className={HeadingStyle}>
                            Education
                        </h1>
                    </div>

                    <div className="w-full border-b-[0.1rem] border-dotted border-blue-800">
                        <h1 className={HeadingStyle}>
                            Work Experience
                        </h1>
                    </div>

                    <div className="w-full border-b-[0.1rem] border-dotted border-blue-800">
                        <h1 className={HeadingStyle}>
                            Organization Experience
                        </h1>
                    </div>

                    <div className="w-full border-b-[0.1rem] border-dotted border-blue-800">
                        <h1 className={HeadingStyle}>
                            Skills
                        </h1>
                    </div>

                    <div className="w-full border-b-[0.1rem] border-dotted border-blue-800">
                        <h1 className={HeadingStyle}>
                            Certifications
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}