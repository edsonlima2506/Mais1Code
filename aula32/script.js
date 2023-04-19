const countryInput = document.querySelector('#countryInput')
const searchButton = document.querySelector('#searchButton')
const countryInfoContainer = document.querySelector('#countryInfoContainer')

const searchInfo = async () => {
    const countryName = countryInput.value
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json()

    if(data.length > 0){
        const country = data[0]
        const { name, capital, region, population, flags } = country

        countryInfoContainer.innerHTML = `
        <h2>Informações do país</h2>
        <ul>
            <li>Nome: ${name.common}</li>
            <li><img src='${flags.png}'</li>
        </ul>
        `
    } else{
        
    }
}

searchButton.addEventListener('click', searchInfo)