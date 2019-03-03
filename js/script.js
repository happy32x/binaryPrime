
let value = document.getElementById("value")
let result = document.getElementById("result")
let select = document.getElementById("select")
            
function valueFocus(){
  value.focus();
}

function warning(message){
  result.style.color = "red";
  result.innerHTML = message
}

function binaire(nbr){
  let rest = nbr
  let tab = []
  do {
    tab.push(rest%2)
    rest = Math.floor(rest/2)
  }while(rest) 

  return tab.reverse().join("");
}

function premier(nbr){
  for(let i=2,s=Math.sqrt(nbr); i<=s; i++)
    if(nbr%i===0) return false;
  return nbr!==1 && nbr!==0
}

function listePremier(nbr){
  let tab = []
  for(let i=0; i<=nbr; i++){
    if(premier(i))
      tab.push(i)
  }

  return tab.join(" - ")
}

function reviewNumber(nbr){
  nbr>1 || select.value === "binaire" ? oparate(nbr) : warning("Liste non disponible")
}

function oparate(nbr){
  result.style.color = "green";
  result.innerHTML = select.value === "binaire" ? binaire(nbr) : listePremier(nbr)
}

function verify(){
  valueFocus()
  let val = value.value
  let nbr = parseInt(val)
  !isNaN(nbr) ? reviewNumber(nbr) : val !== '' && !/[\s*]/.test(val) ? warning("Element non pris en charge") : null
}

function keyTrigger(e){              
  (e.which || e.keyCode) === 13 ? EnterTrigger(e) : null              
}

function EnterTrigger(e){
  e.preventDefault()
  verify()
}

valueFocus()
value.value = ''
