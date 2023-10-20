import "./Subtitle.css";

function Subtitle(props) {
    return <h5 className="sub-title-page"><span>{props.number}</span>{props.text}</h5>
}

export default Subtitle;