import { CommonContext } from './CommonContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
      <div className='Sidebar'>
        <CommonContext.Consumer>
        {
          ({nameList,deleteFromSidebar})=> nameList.map((name,index)=>
            <div>
              <span key={index}>{name}</span>
              <span
                className='delete'
                onClick={()=>deleteFromSidebar(index)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </div>
          )
        }
        </CommonContext.Consumer>
      </div>
    )
  }
  
  export default Sidebar