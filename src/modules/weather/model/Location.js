// @flow
import { LocationInterface } from './LocationInterface';

export default class Location implements LocationInterface {
    // please complete the implementation of the concrete class based on the interface it implements
    _latitude;
    _longitude;

    constructor() {
        this._latitude = '-37.9';
        this._longitude = '144.9';
    }

    getLatitude(): ?string {
        return String(this._latitude);
    }

    getLongitude(): ?string {
        return String(this._longitude);
    }
}
