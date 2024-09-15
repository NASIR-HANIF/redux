

import User from './Comp/User';
import UserGlobel from './Comp/UserGlobel';
import Regester from './Comp/Regester';
import { createStore } from 'redux'; // redux function
import { Provider } from "react-redux" // compunent
import Signup from './Comp/Signup';

function App() {
  const reducer = (state={}, action) => {
    if(action.type === "testing"){
      return state = {
        message: "login success"
      }
    }else{
      return state = {
        message: "login failed"
      }
    }
  }

  const store = createStore(reducer);

  return (
    <>

      <Provider store={store}>
        {/* <User /> */}
        {/* <UserGlobel /> */}
        {/* <Regester /> */}

          <Signup />

      </Provider>
    </>
  );
}

export default App;
