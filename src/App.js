
import { useState } from 'react';
import { Route,BrowserRouter,Routes} from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const[Mode,setMode]=useState('light'); //Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{

          
        setAlert({
              msg:message,
              type:type
                })
              setTimeout(() => {
                setAlert(null);
              }, 1500);
             
  }

  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(52,53,65)';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <BrowserRouter>
    <div className="App">
      
      
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container'>
          <Routes>
            <Route path='/Home' element={<TextForm showAlert={showAlert} heading="Enter The text to analyze Below" mode={Mode}/>}></Route>
            <Route path='/About' element={<About mode={Mode}/> }></Route>
          </Routes>
          
          
        </div>
       
        
    </div>
    </BrowserRouter>
  );
}

export default App;


