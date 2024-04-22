import { Provider } from "react-redux"
import ItemsComponent from "./Components/ItemsComponent"
import store from "./redux/store"

function App(){
  return(
    <Provider store={store}>
      <div>
        <h1>Ecommerce Application</h1>
        <div className="items--container">
          <ItemsComponent />
        </div>
      </div>
    </Provider>
  )
}

export default App