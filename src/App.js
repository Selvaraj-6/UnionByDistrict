import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import DistrictTalukSelector from './Districts';
function App() {
  return (
    <div className='all-app'>
    <div className="App">
      <h2 className='app-text'>Hello React</h2>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DistrictTalukSelector/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    </div>
  );
}

export default App;
