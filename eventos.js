const BTN_GERAR = document.getElementById("generate-password")
const C_SENHA = document.getElementById("generated-password")

const getLetterLowerCase = () => {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97))
}

const getLetterUpperCase = () => {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 65))
}

const getNumber = () =>{
    return Math.floor(Math.random() * 10).toString();
}


const getSymbol = () => {
    const symbols = "[]{}/*&%$#@*&()@"
    return symbols [Math.floor(Math.random()* symbols.length)]
}

const gerarsenha = (getLetterLowerCase, getLetterUpperCase,getNumber, getSymbol) => {
    let password = ""

    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for( i =0; i< passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValue = 
                generators[Math.floor(Math.random() * generators.length)]()

                password += randomValue;
        })
    }
    password = password.slice(0, passwordLength)

    C_SENHA.style.display = "block"
    C_SENHA.querySelector("h4").innerText = password
}




BTN_GERAR.addEventListener("click", () =>{
    gerarsenha(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    )
})