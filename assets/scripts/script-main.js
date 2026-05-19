 let sum = 0;
function yes() {
 let pur = Number(document.getElementById("input1").value);
 let pur2 = Number(document.getElementById("input4").value);
 let purity;
 let weight = Number(document.getElementById("input2").value);
 let unit = document.getElementById("input3").value;
 if(pur2 > 0){
  purity = pur2
  }else{
  purity = pur
  }

 if(purity <= 0){
  alert("Choose a purity")
  }else{
    if(purity > 1){
     alert("Purity cannot be more than 100%")
     }else{
    if(weight <= 0){
     alert("Enter a weight in " + unit)
    }else{
      sum = weight * purity
     document.getElementById("output1").textContent = sum.toFixed(4) + " " + unit + " of  pure silver."
   }
  }
 }
}
function site(){
let unit = document.getElementById("input3").value;
let cur = document.getElementById("currency").value
if(unit === 'g'){
  let sumA = sum / 28.35
  if (sumA === 0){
   alert("Please calculate a weight")
  }else{
  let URL = "https://www.xe.com/en-ca/currencyconverter/convert/?Amount=" + sumA + "&From=XAG&To=" + cur
  window.open(URL)
  }
 }else{
  if (sum === 0){
   alert("Please calculate a weight")
  }else{
  let URL = "https://www.xe.com/en-ca/currencyconverter/convert/?Amount=" + sum + "&From=XAG&To=" + cur
  window.open(URL)
   }
  }
}
