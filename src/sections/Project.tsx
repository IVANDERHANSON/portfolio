import Carousel from "../components/Carousel"

export default function Project({ RefProp }: { RefProp: React.RefObject<HTMLElement | null> }) {
    return (
        <>
            <section ref={RefProp} className="w-full h-screen bg-blue-800 flex justify-center items-center">
                <div className="w-[80%] h-[calc(100vh-2*6rem)]">
                    <Carousel />
                </div>
            </section>
        </>
    )
}