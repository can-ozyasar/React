import React from 'react'

export const users=[ // bu şekilde dışarda da kullanılabilir 
{
    username:"muhammed",
    password:"1"
},

{
    username:"can",
    password:"2"
}


]




function Login() {

  return (
    <>
<div>

<div>
<p style={{ color:"pink"}}>kulanici adiniz</p>
<input style={{color:"pink"}} type="text" />
</div>


<div>
<p style={{ color:"pink"}}>şifreniz. </p>
<input type="password" />

</div>

<button style={{ color:"red" ,background:"pink",margin:"14px 20px"}}> giriş yap </button>


</div>


    </>
  )
}


//! function Login() {
//! //eğer  return içine birden fazla div yada element yazacaksak ayrı ayrı
//! //bu değerleri temel kapsayan bir div içine almamız gerekir 
//! //örnek
//!     return ( 
//!      <div> 
 
//!       <div> Login1</div>
//!       <div> Login2</div>
      
//!       </div>
//!     )
//!   }

//?
//?   function Login() {
//?     //eğer  return içine birden fazla div yada element yazacaksak ayrı ayrı
//?     // fragment yapısı kullanabiliriz
//?     // <>
//?    // <>
//?     //örnek
//?         return ( 
//?          <> 
     
//?           <div> Login1</div>
//?           <div> Login2</div>
          
//?           </>
//?         )
//?       }

export default Login 

// herşeyi  dışarıda kullanılabili hale getirdik export default ile 
// istediğimiz isimle çağırabiliriz diğer dosyalarda 