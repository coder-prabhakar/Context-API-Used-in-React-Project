import Card from './Card'

function Main() {
    return (
      <div className="Main">
        {
          ['Prabhakar','Diwakar','Suraj','Priyanshu','Kunal','Nagmani','Aditya','Wasim','Amit'].map(
            (title,index)=>(
            <Card name={title} key={index}/>
          ))
        }
      </div>
    )
}
  
export default Main;