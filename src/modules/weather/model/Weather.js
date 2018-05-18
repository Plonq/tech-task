// @flow
import { WeatherInterface } from './WeatherInterface';

/**
 * please finish off the implementation for this Weather model class
 */
export default class Weather implements WeatherInterface {
    _temperature: string;
    _summary: string;
    _precipitation: string;
    _humidity: string;
    _windSpeed: string;

    getTemperature(): ?string {
        return this._temperature;
    }

    getSummary(): ?string {
        return this._summary;
    }

    getPrecipitation(): ?string {
        return this._precipitation;
    }

    getHumidity(): ?string {
        return this._humidity;
    }

    getWindSpeed(): ?string {
        return this._windSpeed;
    }

    setTemperature(value: string): WeatherInterface {
        this._temperature = value;
        return this;
    }

    setSummary(value: string): WeatherInterface {
        this._summary = value;
        return this;
    }

    setPrecipitation(value: string): WeatherInterface {
        this._precipitation = value;
        return this;
    }

    setHumidity(value: string): WeatherInterface {
        this._humidity = value;
        return this;
    }

    setWindSpeed(value: string): WeatherInterface {
        this._windSpeed = value;
        return this;
    }
}
