import React,{useState} from 'react'

export default function About(props) {


    // const[myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // });
    
    let myStyle={
        color: props.mode === 'dark'?'white':'rgb(52,53,65)',
        backgroundColor:props.mode==='dark'?'rgb(52,53,65)':'white'
    }

    
    
  return (
    <div className='container' style={myStyle}>
        <h2 className='my-3'>About Us</h2>
        <div className="accordion mx-2" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                     textUtils can count the number of words in the text as well as the average time required to read the text 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Features
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is text utilization tool that can be used to edit text and copy the text for further use . It includes conversion to lowercase ,uppercase, captialization along with a sapce remover to remove the extra spaces between the words  </div>
                </div>
            </div>
            
        </div>
        <div className='container'>

        
        </div>
    </div>
  )
}
