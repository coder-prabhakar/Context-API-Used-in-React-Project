import { useContext } from 'react';
import {CommonContext} from '../ContextAPI/ContextAPI';

function Card(props) {

    const {addToSidebar} = useContext(CommonContext);

    return (
        <div>
            <p>{props.name}</p>
            <button onClick={()=>addToSidebar(props.name)}>Add To Sidebar</button>
        </div>
    )
}

export default Card;