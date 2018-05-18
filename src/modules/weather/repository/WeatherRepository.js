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
         console.log('WeatherRepository....');
         const response = await this._weatherApi.getWeatherByGeolocation(
             location.getLatitude(),
             location.getLongitude()
         );
         console.log('After API fetch....');

         const weather: WeatherInterface = this._weatherFactory.createInstance();
         console.log('After weather object creation....');
         // please populate the response back from the api into the weather model
         console.log(response.data.currently.temperature);
         return weather.setTemperature(response.data.currently.temperature);
         // weather.getTemperature();
         // const promise = new Promise(((resolve) => {
         //     resolve(weather);
         // }));
         // console.log('after promise created');
         // return promise;
     }
}
