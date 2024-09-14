import Card from './Card'

function Main() {

    const nameData = ['Prabhakar','Diwakar','Suraj','Priyanshu','Kunal','Nagmani','Aditya','Wasim','Amit'];

    return (
      <div className="Main">
        {
          nameData.map((title,index)=>
            <Card name={title} key={index}/>
          )
        }
      </div>
    )
}
  
export default Main;