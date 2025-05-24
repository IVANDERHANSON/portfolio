export default function Project({ RefProp }: { RefProp: React.RefObject<HTMLElement | null> }) {
    return (
        <>
            <section ref={RefProp} className="w-full h-screen bg-blue-800">

            </section>
        </>
    )
}