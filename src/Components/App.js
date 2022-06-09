import './App.css';
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel';
import Main from './Main/Main';
import {BrowserRouter} from "react-router-dom";

function App(props) {
  return (
   
    <BrowserRouter>
      <div className="App">
        <LeftPanel/>
        <Main/>
        <RightPanel/>
      </div>
    </BrowserRouter>
  );
}

export default App;
