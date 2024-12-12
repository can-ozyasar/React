import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'





// e function App() { 
  
// const productname ="buzdolabı";

//   return (
//     <div>
//        <Product ProductName ="props ile ayakkabı " ProductPrice={3200}/> {/* PROPS İLE KULLANIMI DEĞER TAŞIYACAK   */}
// {       /* taşıyacağı değerleri tanımladık productname ve productprice olarak ve değerlerinşd yazdık*/}
//      { /* int yazmak için {} kullnadık string içindde " " içine yazılabilir */ }  
    
//       <br/><br/><hr /> 
    
    
//     <Product ProductName ="props ile çanta " ProductPrice={700}/>
// {    /*   İKİNCİ KEZ ÇAĞIRMA İŞLEMİ AYNI FONKSİYON GİBİ PROPS */ }
   
// <br/><br/><hr /> 
//     <Product ProductName ={productname} ProductPrice={15000}/>

//     </div>      
//     // yakalamak için diğer product.jsx de o tarafa gidelim işlemlere bakalım 
//   )
// }



function App() {
  
  const productname ="buzdolabı";
  
    return (
      <div>
         <Container>

          <Product ProductName ="component içinde component ile ayakkabı " ProductPrice={3200}/> {/* PROPS İLE KULLANIMI DEĞER TAŞIYACAK   */}
<hr />
<Product ProductName ="component içinde component ile çanta " ProductPrice={200}/> {/* PROPS İLE KULLANIMI DEĞER TAŞIYACAK   */}


         </Container>
      </div>      
      //componet içinde component tanımladık bu sayede container de props içinde product olacak deneylim 
    )
  }

export default App
