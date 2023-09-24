const number="0123456789";
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const specialChar="!@#$%^&*()|:><.,;'+=_";
let strongPassword=[uppercase,lowercase,specialChar,number]

const result=document.querySelector("#result");

const length=document.querySelector("#length");
const generate=document.querySelector(".btn-generator")
const copy=document.querySelector("#copy-Passowrd");
let allcheck=document.querySelectorAll("input[type='checkbox']")


// let upperSingle=uppercase.charAt(Math.floor(Math.random()*uppercase.length));
// let lowerSingle=lowercase.charAt(Math.floor(Math.random()*lowercase.length));
// let numberSingle=number.charAt(Math.floor(Math.random()*number.length));
// let specialSingle=specialChar.charAt(Math.floor(Math.random()*specialChar.length));


    generate.addEventListener("click",passwordGenrate)
 
function passwordGenrate(){
   
let chars="";
  allcheck.forEach((v,i)=>{
    chars+= (v.checked) ? strongPassword[i] : "";
      // if(v.checked){
      //  chars+=strongPassword[i]
      // }
  })

      let lengthValue=length.value;
      // let upperValue=upper.checked;
      // let lowerValue=lower.checked;
      // let specialValue=special.checked;
      // let numberValue=num.checked;
     
 
     
    //   if(lengthValue==""){
    //     alert("Please select value !")
    //   }else{
    //       if(upperValue=="" && lowerValue=="" && specialValue=="" && numberValue==""){
    //         alert("Please select any criteria")
    //       }
    //  }

// chars+=upperValue ? uppercase :"";

// chars+=lowerValue ? lowercase :"";

// chars+=specialValue ? specialChar :"";

// chars+=numberValue ? number :"";
  

let passwordChoose="";
    for (var i = 0; i < lengthValue; i++) {
   
     passwordChoose += chars.charAt(Math.floor(Math.random()*chars.length));
   
    }
    
result.value=passwordChoose
   

  }

  copy.addEventListener("click",()=>{
    var dataCopy=result.value;
   
 dataCopy.select();
 alert("Ff")
document.execCommand("copy");
  })