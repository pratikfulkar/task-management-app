import './App.css';
import AddTask from './components/AddTask';
// import Card from './components/Card';
import {GlobalProvider} from "./context/GlobalState"
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <AddTask/>
      </div>
    </GlobalProvider>
  );
}

export default App;
