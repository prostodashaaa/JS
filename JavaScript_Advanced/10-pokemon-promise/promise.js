function getPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => {
      return response.json();
    })
    .then((data) => getEffect(data.abilities[0].ability.url))
    .catch((err) => console.log(err));
}

function getEffect(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) =>
      console.log(
        data.effect_entries.find(({ language }) => language.name === "en")
          .effect
      )
    )
    .catch((err) => console.log(err));
}

getPokemon();
