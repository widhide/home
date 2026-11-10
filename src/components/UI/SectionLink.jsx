export default function SectionLink({ to, children, ...rest }) {
    // Scroll in place instead of routing, so HashRouter URLs stay clean (no `#/%23section`).
    const handleClick = (e) => {
        e.preventDefault()
        document.getElementById(to)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <a href={`#${to}`} onClick={handleClick} {...rest}>
            {children}
        </a>
    )
}
