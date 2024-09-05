import Chatlist from "./chatList/Chatlist"
import "./list.css"
import Userinfo from "./userinfo/userinfo"



const Lists = () => {
    return (
      <div className='list'>
        <Userinfo/>
        <Chatlist/>
      </div>
    )
  }
  
  export default  Lists