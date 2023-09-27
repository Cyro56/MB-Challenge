import Geolocation from 'react-native-geolocation-service';

export class GeolocationService {
  public async getLocation() {
    return new Promise(async (resolve, reject) => {
      Geolocation.getCurrentPosition(
        async position => {
          const {latitude, longitude} = position.coords;

          const apiKey = '848fab72dd4a40e0b62d4e792d0a61c6';
          const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

          try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.results.length > 0) {
              const result = data.results[0];
              const {city, state, country} = result.components;

              const locationString = `${city}, ${state}, ${country}`;
              resolve(locationString);
            } else {
              reject('Localização não encontrada');
            }
          } catch (error: any) {
            reject(error.message);
          }
        },
        error => {
          reject(error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  }
}
