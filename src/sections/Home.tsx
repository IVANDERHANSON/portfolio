import FotoProfile from '../assets/Foto Profile.png'
import LinkedInLogo from '../assets/LinkedIn.svg'

export default function Home({ RefProp }: { RefProp: React.RefObject<HTMLElement | null> }) {
    return (
        <>
            <section ref={RefProp} className="w-full h-screen bg-white flex">
                <div className="relative w-[50%] h-screen flex items-center">
                    <div className="
                        relative w-[45vh] h-[45vh] rounded-[50%] bg-white overflow-hidden left-[20%]
                        before:content-[''] before:absolute before:inset-y-[-2vh] before:inset-x-[16vh] before:duration-500 before:animate-[spin_4s_linear_infinite] before:z-[1] before:bg-blue-800
                        hover:before:inset-x-[0px] group
                        after:content-[''] after:absolute after:rounded-[50%] after:inset-[1vh] after:z-[2] after:bg-white
                    ">
                        <div className="absolute inset-[1vh] rounded-[50%] overflow-hidden z-[3] flex justify-center items-center flex-col gap-10">
                            <img
                                className="absolute top-0 left-0 w-full h-full object-cover duration-500 pointer-events-none z-[4] group-hover:opacity-0"
                                src={FotoProfile}
                                alt="Foto Profile"
                            />

                            <h1 className="relative text-blue-800 text-[1.5rem] text-center font-bold">
                                Find out more about me!
                            </h1>
                            <a href="https://www.linkedin.com/in/ivanderhansonsetyawan" target="_blank" rel="noopener noreferrer" className="relative flex justify-center items-center flex-wrap gap-4">
                                <img src={LinkedInLogo} alt="LinkedInLogo" className="w-[2rem] h-[2rem]" />
                                <span className="text-blue-800 text-[1.4rem] text-center font-bold">Ivander Hanson Setyawan</span>
                            </a>
                        </div>
                    </div>

                    <div className="absolute border-t-[50vh] border-l-[55vw] border-l-transparent border-t-blue-800 top-0 right-0"></div>
                    <div className="absolute border-b-[50vh] border-l-[55vw] border-l-transparent border-b-blue-800 bottom-0 right-0"></div>
                </div>

                <div className="w-[50%] h-screen bg-blue-800 flex justify-center items-center flex-col gap-10 text-white text-[2rem] font-bold text-center">
                    <div className='w-[80%]'>
                        <h1>Welcome to my portfolio!</h1>
                        <h1>My name is Ivander Hanson Setyawan</h1>
                        <h1>
                            I'm <span className='relative text-yellow-100 before:content-["a Student"] before:animate-[words_20s_infinite] after:content-[""] after:absolute after:w-[calc(100%+0.5rem)] after:h-[calc(100%+0.5rem)] after:bg-blue-800 after:border-l-[0.3rem] after:border-solid after:border-yellow-100 after:right-[-0.5rem] after:animate-[cursor_0.8s_infinite_,_type_20s_steps(32)_infinite]'></span>
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}