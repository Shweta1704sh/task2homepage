import "./Cards.css";

export function Cards(props){
    console.log(props.image.search("https"))
    return(
        <div className="cards-frame" key={props.key}>
            <img src={props.name.search("https")?props.image:props.name}></img>
            <p>{props.name.search("https")?props.name:props.image}</p>
        </div>
    )
}