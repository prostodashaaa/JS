function findCoordinate() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        if (GeolocationPositionError.TIMEOUT > 5000) {
          reject("Время получения геолокации истекло");
        }
        if (GeolocationPositionError.PERMISSION_DENIED) {
          reject("Пользователь запретил отслеживание своей геопозиции");
        }
        if (GeolocationPositionError.POSITION_UNAVAILABLE) {
          reject("Получить местоположение не удалось");
        } else {
          reject(error.message);
        }
      }
    );
  });
}

function getLocation(data) {
  const { latitude, longitude } = data;
  let div = document.createElement("div");
  div.className = "coordinate";

  if (!latitude || !longitude) {
    div.innerHTML = `Ошибка! ${data}`;
  } else {
    div.innerHTML = `Широта: ${latitude} <br> Долгота: ${longitude}`;
  }
  document.body.append(div);
}

findCoordinate().then(getLocation).catch(getLocation);
