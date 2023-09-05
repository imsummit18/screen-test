import CreateItem from "./pages/items/createItem"
import Navbar from "./pages/navbar"
import Sidemenu from "./pages/sidemenu"

function App() {

  return (
    <>
   <div className="flex">
   <Sidemenu/>
    <div className="flex flex-col  overflow-hidden ">
    <Navbar/>
    <CreateItem/>
    </div>
   </div>
    
    </>
  )
}

export default App
