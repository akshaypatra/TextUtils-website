
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div className="App">
        <Navbar title="TextUtils"/>
        <div className='container'>

          <TextForm heading="Enter The text to analyze Below"/>
          {/* <About/> */}
        </div>
    </div>
  );
}

export default App;
