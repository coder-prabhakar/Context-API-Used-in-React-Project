function Card(props) {
    return (
        <div>
            <p>{props.name}</p>
            <button onClick={()=>props.addToSidebar(props.name)}>Add To Sidebar</button>
        </div>
    )
}

export default Card;