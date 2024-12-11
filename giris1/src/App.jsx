import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
//** return dışına javascript kodları yazılır  return değerine ise html kosları yazılır genel kural gibi bişey   */
  
/*
// return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )*/

    // DERS4 JSX NEDİR NERDE KULLANILIR
    // ÖRNEK JSX YAZIMI

  let a=15;

  const firstName ="ikra";
  let vize =70;
  let final=80;

  let sonuc =true;
  let isimler =[
    {"isim" :"ayse",
    "id":"13"},
    {"isim" :"kubra",
      "id":"14"},
      {"isim" :"sofia",
        "id":"4"},
        {"isim" :"dommy",
          "id":"3"},
    {"isim" :"cano"},
    {"id":"47"},
   
  ]


  return( //tam burada jsx deverye giriyor
  // burda üstte tanılannan a yı görmedi
  /*
<div>
      <p> a değişkenin değeri : a</p> 
  </div>
  */


// bu işi {} ile çözdük jsx yani
// html ile javascripti birleştirdik 
<div>
<p> Value of variable 'a' :{a} </p> 
<p> first commandment  : {firstName}</p>
<p>ortalama : {(vize+final)/2} </p>

{sonuc ? <p>you can get a driver's license slayy  </p>:<p>you can't get driver's license ! get out</p> }

{(vize+final)/2 >=50 ? <p>sen okuyacan gectin afferin </p>: <p>dersten kaldiniz</p>}


{ // for döngüsü gibi  key yazman-mızın nedeni ise benzersiz olası için divlerin 
//css yazarken sytle ile ilk {} parantez jsx için ikinci aprantez de css için gerekli
isimler.map((isim,index)=>(
<div style={ {
  backgroundColor: 'black;',
  color:'orange',
  border:'3px solid black'
  
  }} key={isim.id}>{isim.isim} 
  </div>
))

}


</div>

  )





  ///return <div>Muhammed Can</div>
}

export default App //**başka yerde kullanabilmek için export etmek gerekiyor 
/***dışarı açmak gibi ***/
