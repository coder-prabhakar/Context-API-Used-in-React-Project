import { CommonContext } from "./CommonContext";

function Card(props) {
    return (
        <div>
            <p>{props.name}</p>
            <CommonContext.Consumer>
                {
                    ({addToSidebar})=> <button onClick={()=>addToSidebar(props.name)}>Add To Sidebar</button>
                }
            </CommonContext.Consumer>
        </div>
    )
}

export default Card;