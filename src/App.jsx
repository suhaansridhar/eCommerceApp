import ItemsComponent from "./Components/ItemsComponent"

function App(){
  return(
    <div>
      <h1>Ecommerce Application</h1>
      <div className="items--container">
        <ItemsComponent />
      </div>
    </div>
  )
}

export default App