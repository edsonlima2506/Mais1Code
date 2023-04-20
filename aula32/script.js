const countryInput = document.querySelector('#countryInput')
const searchButton = document.querySelector('#searchButton')
const countryInfoContainer = document.querySelector('#countryInfoContainer')

const searchInfo = async () => {
    try{
        const countryName = countryInput.value
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const data = await response.json()

        if(data.length > 0){
            const country = data[0]
            const { name, capital, continents, population, currencies, flags, languages } = country
    
            const money = Object.values(Object.values(currencies)[0])[0]
            const language = Object.values(languages)[0]
    
            countryInfoContainer.innerHTML = `
            <h2>Informações do país</h2>
            <ul>
                <li>Nome: ${name.common}</li>
                <li>Capital: ${capital}</li>
                <li>Continente: ${continents}</li>
                <li>População: ${population.toLocaleString('pt-BR')}</li>
                <li>Idioma: ${language}</li>
                <li>Moeda: ${money}</li>
                <li><img src='${flags.png}'</li>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22125429.644133613!2d!3d!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s{${name.common}}!2s{${name.common}}!5e0!3m2!1sen!2sus!4v1682055079986!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </ul>
            `
        } else{
            countryInfoContainer.innerHTML = 'Por favor, insira um país válido.'
        }

    } catch{
        countryInfoContainer.innerHTML = 'Não conseguimos encontrar seu país :/ <br> Por favor, tente novamente.'
    }
}

searchButton.addEventListener('click', searchInfo)

//comando para usar no terminal: git push --set-upstream origin leonardo