import { CommonContext } from "./CommonContext";
import Card from './Card'

function Main() {
    return (
      <div className="Main">
        <CommonContext.Consumer>
          {
            ({addToSidebar})=>['Prabhakar','Diwakar','Suraj','Priyanshu','Kunal','Nagmani',
              'Aditya','Wasim','Amit'].map((title,index)=>
              <Card name={title} key={index} addToSidebar={addToSidebar}/>)
          }
        </CommonContext.Consumer>
      </div>
    )
}
  
export default Main;