window.addEventListener("DOMContentLoaded", () => {

    const sliderRange = document.querySelector(".range__input")
    const valueNumber = document.querySelector(".range__value")
    const form = document.querySelector(".section__form")
    const minus = document.querySelector("#minusculas")
    const mayus = document.querySelector("#mayusculas")
    const number = document.querySelector("#number")
    const symbol = document.querySelector("#symbol")
    const passwdText = document.querySelector(".info__title")
    const copyPasswd = document.querySelector(".info__icon")
    const notify = document.querySelector(".notify")
    
    let currentNumber = 5

    sliderRange.addEventListener("input", () => {
        currentNumber =  sliderRange.value
        valueNumber.innerText = currentNumber
    })
    
    function getLower(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }

    function getMayus(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }

    function getNumber(){
        return Math.floor(Math.random() * 10)
    }

    function getSymbol(){
        return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        
        let password = ""
        let count = 0

        if(minus.checked || mayus.checked || number.checked || symbol.checked){
            do{
                if(minus.checked && count < currentNumber){
                    password += getLower()
                    count++
                }
        
                if(mayus.checked && count < currentNumber){
                    password += getMayus()
                    count++
                }
        
                if(number.checked && count < currentNumber){
                    password += getNumber()
                    count++
                }
        
                if(symbol.checked && count < currentNumber){
                    password += getSymbol()
                    count++
                }
            } while(count < currentNumber);
            passwdText.innerText = password
        }
    })

    copyPasswd.addEventListener("click", () => {

        let password = passwdText.innerText
        navigator.clipboard.writeText(password)
        notify.classList.add("show")

        setTimeout(() => {
            notify.classList.remove("show")
        }, 3000)

    })

})