import React from 'react'
import '../css/Botom.css'

export default function Boton({children, click}) {

  const esOperador = (valor) => {
    // eslint-disable-next-line eqeqeq
    return isNaN(valor) && (valor != '.') && (valor != '=')
  }

  return (
    <div className={`boton-contenedor ${esOperador(children) ? 'opeador' : null}`}
      onClick={() => click(children)}
    >

      {children}
      
    </div>
  )
}
