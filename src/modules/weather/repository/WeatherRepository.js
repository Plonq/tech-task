// @flow
import WeatherApi from '../service/WeatherApi';
import { WeatherInterface } from '../model/WeatherInterface';
import { FactoryInterface } from '../../../lib/FactoryInterface';
import { LocationInterface } from '../model/LocationInterface';

export default class WeatherRepository {
     _weatherApi: WeatherApi;
     _weatherFactory: FactoryInterface;

     constructor(weatherApi: WeatherApi, weatherFactory: FactoryInterface) {
         this._weatherApi = weatherApi;
         this._weatherFactory = weatherFactory;
     }

     async getWeatherByGeolocation(location: LocationInterface): Promise<WeatherInterface> {
         const response = await this._weatherApi.getWeatherByGeolocation(
             location.getLatitude(),
             location.getLongitude()
         );

         const weather: WeatherInterface = this._weatherFactory.createInstance();
         // please populate the response back from the api into the weather model
         const data = response.data.currently;
         return weather.
         setTemperature(data.temperature).
         setSummary(data.summary).
         setIcon(data.icon).
         setPrecipitation(data.precipProbability).
         setHumidity(data.humidity).
         setWindSpeed(data.windSpeed);
     }
}
