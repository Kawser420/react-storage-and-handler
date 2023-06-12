import './App.css';
import Cloath from './components/Cloath/Cloath';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <Cloath></Cloath>
    </div>
  );
}

export default App;
