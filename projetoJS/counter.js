(() => {
   const minusButton =  document.querySelector(".minus-button")
   const plusButton =  document.querySelector(".plus-button")
   const counterValueSpan =  document.querySelector(".counter-value")

   function minusButtonHandler(){
    let counterCurrentValue = +counterValueSpan.innerHTML
    counterCurrentValue--
    if(counterCurrentValue >= 0){
        counterValueSpan.innerHTML = counterCurrentValue
    }
   }

   function plusButtonHandler(){
    let counterCurrentValue = +counterValueSpan.innerHTML
    counterCurrentValue++
    counterValueSpan.innerHTML = counterCurrentValue

}

   minusButton.addEventListener("click", minusButtonHandler)
   plusButton.addEventListener("click", plusButtonHandler)
})()