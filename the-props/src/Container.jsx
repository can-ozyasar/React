import React from 'react'

function Container({children}) { // burda children yazmamız gerek çünkü oluşan nesne children ile oluşuyor başka isim verilirse çalışmaz 
  return (
    <div>
       
      Container çalıştı  
      {children }
    </div>
  )
}

export default Container
