// @flow
import WeatherRepository from '../repository/WeatherRepository';
import { FactoryInterface } from '../../../lib/FactoryInterface';
import { LocationInterface } from '../model/LocationInterface';

export default class WeatherController {
    _weatherRepository: WeatherRepository;
    _locationFactory: FactoryInterface;

    constructor(weatherRepository: WeatherRepository, locationFactory: FactoryInterface) {
        this._weatherRepository = weatherRepository;
        this._locationFactory = locationFactory;
    }

    async index(req: any, res: any): Promise<void> {
        try {
            // const location = this._locationFactory.createInstance();
            // please finish of the implementation by using the weatherRepository to get the current temperature
            // for your location
            const location: LocationInterface = this._locationFactory.createInstance();
            this._weatherRepository.getWeatherByGeolocation(location).then((weather) => {
                res.render('weather/views/index.hbs', {
                    viewModel: {
                        temperature: parseInt(weather.getTemperature(), 10),
                        summary: weather.getSummary(),
                        icon: weather.getIcon(),
                        precipitation: parseFloat(weather.getPrecipitation(), 10) * 100,
                        humidity: parseFloat(weather.getHumidity(), 10) * 100,
                        windSpeed: parseInt(weather.getWindSpeed(), 10),
                    }
                });
            });
        } catch (error) {
            res.json({ error });
        }
    }
}
