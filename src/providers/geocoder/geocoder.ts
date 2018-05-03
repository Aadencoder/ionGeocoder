import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {
  NativeGeocoder,
  NativeGeocoderReverseResult,
  NativeGeocoderForwardResult
} from '@ionic-native/native-geocoder';


@Injectable()
export class GeocoderProvider {
public results: any;
  constructor(public http: Http,
    private _GEOCODE: NativeGeocoder) {

  }



  /**
    *
    * Perform reverseGeocoding operation and return address details
    *
    * @public
    * @method reverseGeocode
    * @return {Promise}
    *
    */
  reverseGeocode(lat: number, lng: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this._GEOCODE.reverseGeocode(lat, lng)
        .then((result: NativeGeocoderReverseResult) => {
         this.results = result
          resolve(this.results);
        })
        .catch((error: any) => {
          console.log(error);
          reject(error);
        });
    });
  }




  /**
    *
    * Perform forwardGeocode operation and return latitude/longitude details
    *
    * @public
    * @method forwardGeocode
    * @return {Promise}
    *
    */
  forwardGeocode(keyword: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._GEOCODE.forwardGeocode(keyword)
        .then((coordinates: NativeGeocoderForwardResult) => {
          console.log(JSON.stringify(coordinates));
          this.results = coordinates;
          resolve(this.results);
        })
        .catch((error: any) => {
          console.log(error);
          reject(error);
        });
    });
  }

}