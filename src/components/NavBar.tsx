import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

const NavMenuStyle = "text-[1.25rem] text-black text-center duration-300 ease-linear hover:text-blue-800 after:content-[''] after:block after:border-b-[0.05rem] border-solid after:border-blue-800 after:scale-x-0 after:duration-300 after:ease-linear hover:after:scale-x-100"
const NavMenuActiveStyle = "text-[1.25rem] text-blue-800 text-center duration-300 ease-linear after:content-[''] after:block after:border-b-[0.05rem] border-solid after:border-blue-800 after:scale-x-100 after:duration-300 after:ease-linear"

export default function NavBar({ ChangeSection }: { ChangeSection: (Section: string) => void }) {
    const [ActiveNavMenu, SetActiveNavMenu] = useState('Home');
    const LastScrollTop = useRef(0);
    const [IsHidden, SetIsHidden] = useState(false);

    useEffect(() => {
        const HandleScroll = () => {
            const ScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            ScrollTop > LastScrollTop.current ? SetIsHidden(true) : SetIsHidden(false);
            LastScrollTop.current = ScrollTop <= 0 ? 0 : ScrollTop;
        }
        window.addEventListener("scroll", HandleScroll);
        return () => window.removeEventListener("scroll", HandleScroll);
    }, [])

    function HandleOnClick(ClickedMenu: string) {
        SetActiveNavMenu(ClickedMenu);
        ChangeSection(ClickedMenu);
    }

    return (
        <>
            <nav className="top-0 left-0 right-0 z-[9999] fixed">
                <div className={`relative left-[5%] w-[90%] top-[1rem] h-[4.55rem] ${IsHidden ? '-translate-y-[5.85rem]' : 'translate-y-0'} transition-transform duration-300 bg-white flex justify-evenly items-center border-[0.05rem] border-solid border-black border-opacity-[0.2] shadow-[0.01rem_0.01rem_0.155rem] shadow-black rounded-full`}>
                    <Link to=""
                        className={ActiveNavMenu === 'Home' ? NavMenuActiveStyle : NavMenuStyle}
                        onClick={() => HandleOnClick('Home')}
                    >
                        Home
                    </Link>

                    <Link to=""
                        className={ActiveNavMenu === 'AboutMe' ? NavMenuActiveStyle : NavMenuStyle}
                        onClick={() => HandleOnClick('AboutMe')}
                    >
                        About Me
                    </Link>

                    <Link to=""
                        className={ActiveNavMenu === 'Project' ? NavMenuActiveStyle : NavMenuStyle}
                        onClick={() => HandleOnClick('Project')}
                    >
                        Project
                    </Link>

                    <Link to=""
                        className={ActiveNavMenu === 'Publication' ? NavMenuActiveStyle : NavMenuStyle}
                        onClick={() => HandleOnClick('Publication')}
                    >
                        Publication
                    </Link>
                </div>
            </nav>
        </>
    );
}
