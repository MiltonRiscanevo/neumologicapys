import React,{useState} from 'react'
import "./login.css"

const Login = () => {
  const [value, setValue]=useState("")

  const handleChange=
  (e)=>{
    setValue(e.target.value)
  }

//  const labels = document.querySelectorAll(".inputs label")
  //labels.forEach((label)=>{
   // label.innerHTML=label.innerText.split("")
    //.map(
     // (letter, idx)=>{
      //  `<span style="transition-delay:${idx *50}ms">${letter}</span>`
      //}
    //).join("")
  //})
  return (
    <div className='sign_In'> 
        <h2 className='title_signin'>Sign In</h2>
            <div className='inputs'>
                <input type="text" id='textBox' onChange={handleChange} className={`${value?"has-value": ""}`} />
                <label htmlFor="textBox">Usuario</label>
                <div className='underline'/>  
            </div>
            <div className='inputs'>
                <input type="text" id='textBox' onChange={handleChange} className={`${value?"has-value": ""}`} />
                <label htmlFor="textBox">Clave usuario</label>
                <div className='underline'/>  
            </div>
                    
            <button className='btn' type="submit">Ingresar</button>
    </div>
  )
}

export default Login