import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Teste from './Teste';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
             <Route path='/'  element={<Login/>}/>
             <Route path='/teste'  element={<Teste/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
