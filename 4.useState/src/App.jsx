import { useState } from 'react'// KENDİ İMPORT ETMİŞ usestate  Yİ 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//DERS ADIM 1 
/*
function App() {
//? DEĞİŞKEN TANIMLAMA ,VERİLERİ TUTMA HOOKS = USE STATE
  

const[ firstaName ,setFirstName]=useState(' usestate ile Muhammed  ')
//? önce firstName ile değiken ismi verdik ,Yanına SetFirstName ile o değişkeni değiştirecek fonk u tanımladık
//? en son bunları usestate ye eşitledik usestate içindeki değer değişeknin başlangıç depğerini belirtiyor olacaktır 

const[lastName ,setLastName]=useState(' usestate ile ozyasar')
return (
    <>
      <div>
       Muhammed
       <br />
       {firstaName} {lastName}
      </div>
    </>
  )
}*/



// //! DERS ADIM 2  DEĞİŞKEN DEĞİŞTİRME FONKSIYONU KULLANIMI NASIL OLYR USESTATE İLE 
// function App() {
    
//   const[ firstaName ,setFirstName]=useState(' usestate ile Muhammed ADIM2  ')
//   const[lastName ,setLastName]=useState(' usestate ile ozyasar ADIM2S')
  



//   //? bu kullanmı şekli fonksiyonu fonk ile çağırmak için kullanabiliriz
//   const handleChange=()=>{
//     setFirstName("fonksiyon ile setfirstname yi çağırdık")

//   }



//   //dizi şeklinde 
//   const [names,setNames]=useState(["ahmet","mehmet","kubra","ikra"])



//   //obje şeklinde tanımlama 
//   const [userInfo,setUserInfo]=useState({username:"canoz",password:"2135"})


//   const[show ,setShow]=useState(false)

//   return (
//       <>


//         <div>
//          {firstaName} 
//          {/* normal yöntem ile değiştirme */}
//          </div>


//          <div>
//          {lastName}
//         </div>



//         <div><button onClick={()=>{setFirstName("can")}} style={{color:"red", borderColor:"red",background:"pink"} }>İsmi Değiştir</button></div> 
         


//           {/* fonksiyon yöntem ile değiştirme */}
//         <div><button onClick={handleChange} style={{color:"red", borderColor:"red",background:"pink"} }>İsmi Değiştir</button></div>



//         <br /><hr />
//         <p>dizi şeklinde yazdırma </p>
//         <br />
//         <div>
//         {names.map((name,index)=>(
//           <div key={index}>{name}</div>

//          ))}
//         </div> 



//         <br /><hr />
//         <p>obje şeklinde yazdırma </p>
//         <br />
//         <div>
//         {userInfo.username} {userInfo.password}
        
//         </div>



//         <br /><hr />
//         <p>bir koşul ile yazdırma </p>
//         <br />
//         <div>
//         { show ? <div>{userInfo.username} {userInfo.password}</div> : <div>bilgileri gosterme için true olmalı</div>}
        
//         </div>
//       </>
//     )
//   }



//! adım 3 en önemli kullanımı
  function App() {
  // useState : bir satate in değerini set emetodu kullanarak değiştrdiğinde component yeniden render edilir
  


        const [count ,setCount]=useState(0);
        const arttir=()=>{
        setCount(count+1)
         }

        const azalt=()=>{
          if(count>0)
           setCount(count-1) 
          
          }
      
        console.log("component render edildi") // her basışta tekrar render edilir bunu console de görmke için yazdırdık debugger gibi yani 
//! bu oldukça saçma neden tüm kodu app i yani  tekrar çalıştırıyor bunu çözebilriz
//! ileriki derslerde bunu çözeceğiz ilerde    
return (
        <>
          <div style={{background:"#ADCAFA",color:"#F10E88",borderRadius:"5px",marginBottom:"5px"}}>{count}</div>
          <div ><button onClick={arttir}   style={{color:"red", borderColor:"red",background:"pink",marginBottom:"5px"} } >Arttır</button></div>
          <div ><button onClick={azalt}   style={{color:"red", borderColor:"red",background:"pink"} } >Azalt</button></div>

        </>
  
      )
    }
export default App
