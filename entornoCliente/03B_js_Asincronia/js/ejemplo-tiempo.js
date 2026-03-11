async function obtenerClima(ciudad) {
  const btnCargar = document.getElementById('btnCargar');
  const ak = 'ff0b129d8233ef61dc65776276335811';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}`,
  );
  const datos = await response.json();
  document.getElementById('temperatura').textContent = datos.main.temp;
}
