import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Filter from './Comp/Filter';
import { Provider } from "react-redux";
import storage from "./Redux/storage";

function App() {
  return (
    <>
    <Provider store={storage}>
        <Filter />      
    </Provider>
    </>
  );
}

export default App;
