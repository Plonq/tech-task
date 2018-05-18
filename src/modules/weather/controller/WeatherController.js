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
            console.log('WeatherContoller....');
            // const location = this._locationFactory.createInstance();
            // please finish of the implementation by using the weatherRepository to get the current temperature
            // for your location
            let temp = 'loading...';
            const location: LocationInterface = this._locationFactory.createInstance();
            console.log('WeatherContoller.... after location creation');
            this._weatherRepository.getWeatherByGeolocation(location).then((value) => {
                console.log('Got response from repo');
                console.log(value);
                temp = value.getTemperature();

                res.render('weather/views/index.hbs', {
                    viewModel: {
                        variable1: temp,
                        variable2: location.getLongitude(),
                    }
                });
            });
        } catch (error) {
            res.json({ error });
        }
    }
}
