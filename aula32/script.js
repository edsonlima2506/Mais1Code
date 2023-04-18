// Obtém elementos do DOM
const searchButton = document.getElementById('searchButton');
const countryInput = document.getElementById('countryInput');
const countryInfoContainer = document.getElementById('countryInfoContainer');

// Adiciona evento de clique ao botão
searchButton.addEventListener('click', async () => {
  const countryName = countryInput.value;

  try {
    // Faz a requisição à API de informações de países
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();

    // Exibe informações do país na página
    if (Array.isArray(data) && data.length > 0) {
      const country = data[0];
      const { name, capital, region, population, flags } = country;
      countryInfoContainer.innerHTML = `
        <h2>Informações do País</h2>
        <ul>
          <li><strong>Nome:</strong> ${name.common}</li>
          <li><strong>Capital:</strong> ${capital}</li>
          <li><strong>Região:</strong> ${region}</li>
          <li><strong>População:</strong> ${population}</li>
          <li><img src="${flags.png}" alt="Bandeira do país ${name.common}"/></li>
        </ul>
      `;
      countryInfoContainer.className = '';
    } else {
      countryInfoContainer.textContent = 'Nenhum país encontrado com o nome digitado.';
      countryInfoContainer.className = 'error-message';
    }
  } catch (error) {
    // Exibe mensagem de erro caso ocorra algum erro na requisição
    countryInfoContainer.textContent = 'Erro ao buscar as informações do país. Por favor, tente novamente mais tarde.';
    countryInfoContainer.className = 'error-message';
  }
});
