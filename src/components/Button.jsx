function Button(props) {
    return <a href={props.href} onClick={props.onClick} className={props.className}>{props.children}</a>
}

export default Button;