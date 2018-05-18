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
         return weather.
         setTemperature(response.data.currently.temperature).
         setSummary(response.data.currently.summary).
         setPrecipitation(response.data.currently.precipProbability).
         setHumidity(response.data.currently.humidity).
         setWindSpeed(response.data.currently.windSpeed);
     }
}
