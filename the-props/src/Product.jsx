import React from 'react'

 //todo statik olark yazdırma kodumuz

//?function Product() {
//?   return (
//?     <div>
//?         <div>Urun Bilgileri</div>
//?     <div>
//? <hr />
//?         <div>Isim : Ayakkai</div>
//?         <div>Fiyat : 3199,90 TL</div>  
//?     </div>
//?     </div>
//?   )
//? }/

//todo      Dinamik olarka değer alarak yazdıran kodumuz 
//todo      Yani props ile 

 function Product( props) {  // paramtere kımına props yazalım ki yakalalayabilemek için 
    
     const {ProductName,ProductPrice}=props;
     return (
       <div>
           <div>Urun Bilgileri</div>
       <div>
   <hr />
            <div>Isim : {props.ProductName}</div>  {/* app jsx de ne isim verdiysek aynı isim ile çağırırız */}
           <div>Fiyat : {props.ProductPrice} TL</div>
           <div>Isim : {ProductName}</div>  {/* üsstte cons ile tanımladık orda da aynı isimleri vermeliyiz direkt olarak değişken atamış olduk */}
          <div>Fiyat : {ProductPrice} TL</div>
       </div>
  
        
  
       </div>
     )
   }


// //Todo  bu şekilde direkt olrak ayrıştırılmış şekilde de alınablir  daha kolay gibi 

//   function Product( ProductName ,ProductPrice) {  // paramtere kımına props yazalım ki yakalalayabilemek için 
    
//     return (
//       <div>
//           <div>Urun Bilgileri</div>
//       <div>
//   <hr />
           
//           <div>Isim : {ProductName}</div>  {/* üsstte cons ile tanımladık orda da aynı isimleri vermeliyiz direkt olarak değişken atamış olduk */}
//           <div>Fiyat : {ProductPrice} TL</div>
//       </div>
  
        
  
//       </div>
//     )
//   }

export default Product

