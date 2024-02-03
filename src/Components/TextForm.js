import React,{useState} from 'react'



export default function TextForm(props) {


    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    
    const handleClearClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText="";
        setText(newText);
    }

    function capitalizeText(text) {
        return text.replace(/\b\w/g, function (match) {
            return match.toUpperCase();
        });
    }
    const handleCapitalizeClick=()=>{
        
        let  capitalizedText = capitalizeText(text);
        setText(capitalizedText);
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text,setText]=useState('');
    //  text="new text";  // wrong way to change the state
    //correct way :  setText("new text");

  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className='mb-3 my-3'>
                {/* <label for="myBox" className='form-label'>Example Teaxtarea</label> */}
                <textarea className='form-control' value={text} id='myBox' rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase </button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase </button>
            <button className='btn btn-primary mx-2' onClick={handleCapitalizeClick}>Capitalize text</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
        </div>
        <hr/>
        <div className='container my-4'>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <hr/>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
    </>
  );
}


//          In JavaScript, /\b\w/g is a regular expression used for pattern matching in strings. Let's break down this regular expression:

//          /\b: This is the word boundary anchor. It matches the position between a word character (as defined by \w) and a non-word character. It doesn't consume any characters; it only asserts whether a certain position in the string is a word boundary.

//          \w: This is a shorthand character class that matches any word character. In JavaScript, a word character is defined as any alphanumeric character (equivalent to [a-zA-Z0-9_]).

//          /g: This is the global flag, which means the regular expression will match all occurrences in the string, not just the first one.

//      So, /\b\w/g is essentially looking for all word characters that are at the beginning of a word in a string. When used with the replace method, it can be used to operate on each word in the string.

//      For example, in the context of the previous answer about capitalizing text, /\b\w/g is used with replace to match the first letter of each word in a string, and then the toUpperCase function is applied to convert it to uppercase.