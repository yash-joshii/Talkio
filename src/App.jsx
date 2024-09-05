
import Details from "./components/detail/Details"
import Chats from "./components/chat/Chats"
import Lists from "./components/list/Lists"
const App = () => {
  return (
    <div className='container'>
       <Lists/>
      <Chats/>
    <Details/>
   
    </div>
  )
}

export default App