let request = new XMLHttpRequest();

request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
  const firstData = data.abilities[0];
  console.log(firstData);

  let request = new XMLHttpRequest();

  request.open("GET", firstData.ability.url);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.effect_entries[1].effect);
  });
});
