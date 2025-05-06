export default function NavBar() {
    return (
        <>
            <nav className="top-0 left-0 right-0 z-[9999] fixed">
                <div className="w-full h-[4.55rem] bg-white flex justify-evenly items-center border-b-[0.05rem] border-solid border-black border-opacity-[0.5] shadow-[0.01rem_0.01rem_0.31rem] shadow-black">
                    <a href="#home" className="text-[1.25rem] text-black duration-300 ease-linear hover:text-blue-800 after:content-[''] after:block after:pb-[0.625rem] after:border-b-[0.05rem] border-solid after:border-blue-800 after:scale-x-0 after:duration-300 after:ease-linear hover:after:scale-x-100">Home</a>
                    <a href="#about-me" className="text-[1.25rem] text-black duration-300 ease-linear hover:text-blue-800 after:content-[''] after:block after:pb-[0.625rem] after:border-b-[0.05rem] border-solid after:border-blue-800 after:scale-x-0 after:duration-300 after:ease-linear hover:after:scale-x-100">About Me</a>
                    <a href="#project" className="text-[1.25rem] text-black duration-300 ease-linear hover:text-blue-800 after:content-[''] after:block after:pb-[0.625rem] after:border-b-[0.05rem] border-solid after:border-blue-800 after:scale-x-0 after:duration-300 after:ease-linear hover:after:scale-x-100">Project</a>
                    <a href="#contact" className="text-[1.25rem] text-black duration-300 ease-linear hover:text-blue-800 after:content-[''] after:block after:pb-[0.625rem] after:border-b-[0.05rem] border-solid after:border-blue-800 after:scale-x-0 after:duration-300 after:ease-linear hover:after:scale-x-100">Contact</a>
                </div>
            </nav>
        </>
    );
}
