type HeaderProps = {
    children: string
}
export const Heading = (props: HeaderProps) => {
    return (
        <h2><u>{props.children}</u></h2>
    )
}