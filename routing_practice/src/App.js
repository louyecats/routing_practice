import './App.css';
import {Routes, Route} from 'react-router-dom';
import Form from './components/Form';
import Hello from './components/Hello';
import Home from './components/Home';
import Number from './components/Number';
import HelloColorful from './components/HelloColorful';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/form" element={<Form/>}/>
        <Route path="/:num" element={<Number/>}></Route>
        <Route path="/hello/:name" element={<Hello/>}/>
        <Route path="/hello/:textColor/:bgColor" element={<HelloColorful/>}/>
        {/* name can be named anything, we just want route to be dynamic */}
      </Routes>
    </div>
  );
}

export default App;
