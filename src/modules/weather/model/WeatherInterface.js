// @flow
export interface WeatherInterface {
    getTemperature(): ?string;
    getSummary(): ?string;
    getPrecipitation(): ?string;
    getHumidity(): ?string;
    getWindSpeed(): ?string;

    setTemperature(value: string): WeatherInterface;
    setSummary(value: string): WeatherInterface;
    setPrecipitation(value: string): WeatherInterface;
    setHumidity(value: string): WeatherInterface;
    setWindSpeed(value: string): WeatherInterface;
}
