import { useContext } from 'react';
import { CommonContext } from '../ContextAPI/ContextAPI'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {

    const {nameList, deleteFromSidebar} = useContext(CommonContext);

    return (
      <div className='Sidebar'>
        {
            nameList.map((item,index)=>
              <div key={index}>
                <span>{item}</span>
                <span 
                  className='delete'
                  onClick={()=>deleteFromSidebar(item)}
                ><FontAwesomeIcon icon={faTrash} /></span>
              </div>
            )
        }
      </div>
    )
}
  
  export default Sidebar;