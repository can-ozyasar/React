import { useState } from 'react'
import './App.css'

// özel isim yapabiliriz export default  olduğu için 
//?import Login from './Login' //<Login yazınca kendi oto ekledi import etti

import Can from './Login'


//import ile özel birşeyi getirme export ile tanımlanan 
import { users } from './Login'
// özel isim yapamıyoruz sadece export olduğu için 

function App() {

  return (
   
      <div>  
   <Can/>   //* buraya bir tane daha logine ekleyelim* / 
   <hr />
   <Can/> //*** istediğimiz kadar çağırabiliriz login'i  */
    </div>
  )
}

export default App
