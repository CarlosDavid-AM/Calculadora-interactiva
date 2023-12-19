import Boton from './components/Boton'
import './App.css'
import Pantalla from './components/Pantalla'
import Clear from './components/Clear'
import { useState } from 'react'
import { evaluate } from 'mathjs'

const App =  () => {

  const [imput, setImput] = useState('')

  const addImput = val => {
    setImput(imput + val)
  }

  const limpieza = () => {
    setImput('')
  }

  const result = () => {
    if(imput) {
      setImput(evaluate(imput))
    } else {
      alert("Por favor ingresar valores para realizar los calculos.")
    }
  }
  
  return(
   <div className='bg-slate-300 rounded-lg border border-white flex mx-auto w-80 h-full mt-10'>
      <div className='w-full mx-6'>
        <Pantalla inpu={imput} />
        <div className='fila'>
          <Boton click={addImput} >1</Boton> 
          <Boton click={addImput}>2</Boton>
          <Boton click={addImput}>3</Boton> 
          <Boton click={addImput}>+</Boton> 
        </div>
        <div className='fila'>
          <Boton click={addImput}>4</Boton> 
          <Boton click={addImput}>5</Boton>
          <Boton click={addImput}>6</Boton> 
          <Boton click={addImput}>-</Boton> 
        </div>
        <div className='fila'>
          <Boton click={addImput}>7</Boton> 
          <Boton click={addImput}>8</Boton>
          <Boton click={addImput}>9</Boton> 
          <Boton click={addImput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton click={result}>=</Boton> 
          <Boton click={addImput}>0</Boton>
          <Boton click={addImput}>.</Boton> 
          <Boton click={addImput}>/</Boton>
        </div>
        <div className='fila'>
          <Clear clean={limpieza} />
        </div>
      </div> 
   </div> 
  )
}

export default App