// @flow
import { WeatherInterface } from './WeatherInterface';

/**
 * please finish off the implementation for this Weather model class
 */
export default class Weather implements WeatherInterface {
    _temperature: string;

    getTemperature(): ?string {
        return this._temperature;
    }

    setTemperature(value: string): WeatherInterface {
        this._temperature = value;
        return this;
    }
}
