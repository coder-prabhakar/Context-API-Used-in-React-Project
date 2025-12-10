import { useCommonContext } from "../ContextAPI/ContextAPI"; 

function Card(props) {

    const {addToSidebar} = useCommonContext();

    return (
        <div>
            <p>{props.name}</p>
            <button onClick={()=>addToSidebar(props.name)}>Add To Sidebar</button>
        </div>
    )
}

export default Card;