const searchButton = document.getElementById('searchButton');
const countryInput = document.getElementById('countryInput');
const countryInfoContainer = document.getElementById('countryInfoContainer');


searchButton.addEventListener('click', async() =>{
const Countryname = countryInput.Value;

const response = await fetch('https://restcountries.com/v3.1/name/($countryName)');
const data =await response.json();

if(data.lenght>0){
    const country = data = [0];
    const [name, capital, region, population, flags] = country;
    countryInfoContainer.innerHTML =
    '<h2>Informações do País</h2>'
    '<ul>
        <li><strong>Nome:</strong>[$name.commom]</li>
        <li><strong>capital:</strong>[$capital]</li>
        <li><strong>Região:</strong>[$region]</li>
        <li><strong>População:</strong>[$population]</li>
        <li><Image.scr= "flags.png">Nome:</strong>[$name.commom]</li>
    </ul>';

else {countryInfoContainer.innerHTML = 'Nenhum país encontrado'};

});