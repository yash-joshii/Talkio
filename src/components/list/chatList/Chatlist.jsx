import { useState } from "react"
import"./chatList.css" 

function Chatlist() {
  const [addMode,setAddMode]= useState(false)
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="search" />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt=""  className="plus"
        onClick={()=>setAddMode((prev) => !prev) }/>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Dose</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Dose</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Dose</span>
          <p>hello</p>
        </div>
      </div>
      
    </div>
  )
}

export default Chatlist