import { useState } from 'react'
import './App.css'

// özel isim yapabiliriz export default  olduğu için 
//?import Login from './Login' //<Login yazınca kendi oto ekledi import etti

import Can from './Login'

//import ile özel birşeyi getirme export ile tanımlanan 
import { users } from './Login'
import Hello from './Hello'
// özel isim yapamıyoruz sadece export olduğu için 

// function App() {

//   return (
   
//   <div>  
//   <Can/>   //* buraya bir tane daha logine ekleyelim* / 
//   <hr />
//   <Can/> //*** istediğimiz kadar çağırabiliriz login'i  */
  
//   </div>
//   )
// }

function App(){

return(

<div>
  
  <hr />
<Hello/>
<hr />

</div> // eğer dosya ismini Hello.js yaparsak hata laırız çünkü html uzantılarını direkt olarak veremeyiz js de 
//React createElement i kullanmak gerrekir 
//jsk sugar diye geçer daha kolay yazımı vardır 

 
)


}

export default App
