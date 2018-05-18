// @flow
import WeatherRepository from '../repository/WeatherRepository';
import { FactoryInterface } from '../../../lib/FactoryInterface';

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
                        temperature: weather.getTemperature(),
                        summary: weather.getSummary(),
                        precipitation: weather.getPrecipitation(),
                        humidity: weather.getHumidity(),
                        windSpeed: weather.getWindSpeed(),
                    }
                });
            });
        } catch (error) {
            res.json({ error });
        }
    }
}
