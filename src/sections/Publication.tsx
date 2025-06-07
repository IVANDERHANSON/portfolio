export default function Publication({ RefProp }: { RefProp: React.RefObject<HTMLElement | null> }) {
    return (
        <>
            <section ref={RefProp} className="w-full h-screen bg-white">

            </section>
        </>
    )
}