import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box/Box';
import styled from 'styled-components';
function App() {
  const animationDiv=styled.div`

    width: 100px;
    height: 100px;
    position: relative;
    animation-name: boxes;
    animation-duration: 4s;
    animation-delay: 3s;
  
  `;
  

  const [favoriteColor,setColor] = useState("red");
//   function MyComponent() {
//   useEffect(() => {
//     setTimeout(()=>
//     {
//       setColor("pink");
//     },1000)
//   }, []);
// }
const [box1,setBox1]=useState("");
const [box2,setBox2]=useState("");
const [box3,setBox3]=useState("");
function ShowBoxes() {
  useEffect(() => {
    setTimeout(()=>
    {
      setBox1(<div style={{background:"pink",width:'150px',height:'150px'}}></div>)
      setBox2(<div style={{background:"pink",width:'100px',height:'100px'}}></div>)
      setBox3(<div style={{background:"pink",width:'50px',height:'50px'}}></div>)
    },3000)

    setTimeout(()=>{
      setBox1("")
      setBox2("")
      setBox3("")

    },6000)
  }, []);
}

 

  return (
    <div className="App">
     {/* <h1>My favorite color is: {favoriteColor}</h1> */}
    
     <div id='color'>
    {/* {MyComponent()} */}
     </div>
     <div className='show'>
     {ShowBoxes()}
    
 
     {box1}
     <br/>
     {box2}
     <br/>
     {box3}
     </div>
     
    </div>
  )
}

export default App
