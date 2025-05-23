import { useEffect, useRef, useState } from "react";

const NavMenuStyle = "text-[1.25rem] text-black duration-300 ease-linear hover:text-blue-800 after:content-[''] after:block after:pb-[0.625rem] after:border-b-[0.05rem] border-solid after:border-blue-800 after:scale-x-0 after:duration-300 after:ease-linear hover:after:scale-x-100"
const NavMenuActiveStyle = "text-[1.25rem] text-blue-800 duration-300 ease-linear after:content-[''] after:block after:pb-[0.625rem] after:border-b-[0.05rem] border-solid after:border-blue-800 after:scale-x-100 after:duration-300 after:ease-linear"

export default function NavBar() {
    const [ActiveNavMenu, SetActiveNavMenu] = useState('Home');
    const lastScrollTop = useRef(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            scrollTop > lastScrollTop.current ? setIsHidden(true) : setIsHidden(false);
            lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <>
            <nav className="top-0 left-0 right-0 z-[9999] fixed">
                <div className={`relative left-[5%] w-[90%] top-[1rem] h-[4.55rem] ${isHidden ? '-translate-y-[5.55rem]' : 'translate-y-0'} transition-transform duration-300 bg-white flex justify-evenly items-center border-[0.05rem] border-solid border-black border-opacity-[0.5] shadow-[0.01rem_0.01rem_0.31rem] shadow-black rounded-full`}>
                    <a href="#home"
                        className={ActiveNavMenu === 'Home' ? NavMenuActiveStyle : NavMenuStyle}
                        onClick={() => SetActiveNavMenu('Home')}
                    >
                        Home
                    </a>

                    <a href="#about-me"
                        className={ActiveNavMenu === 'AboutMe' ? NavMenuActiveStyle : NavMenuStyle}
                        onClick={() => SetActiveNavMenu('AboutMe')}
                    >
                        About Me
                    </a>

                    <a href="#project"
                        className={ActiveNavMenu === 'Project' ? NavMenuActiveStyle : NavMenuStyle}
                        onClick={() => SetActiveNavMenu('Project')}
                    >
                        Project
                    </a>

                    <a href="#publication"
                        className={ActiveNavMenu === 'Publication' ? NavMenuActiveStyle : NavMenuStyle}
                        onClick={() => SetActiveNavMenu('Publication')}
                    >
                        Publication
                    </a>
                </div>
            </nav>
        </>
    );
}
