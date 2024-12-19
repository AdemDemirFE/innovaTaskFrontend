import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { GeneralSettings, account } from 'src/app/pages';
import { timeout } from 'rxjs/operators';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  public static API_URL: string = GeneralSettings.url;


  constructor(public http: HttpClient) {

  }

  get(endpoint: string, params?: any, headers?: any) {

    let reqOpts = new HttpParams();
    if (params) {

      for (let k in params) {
        reqOpts = reqOpts.set(k, params[k]);
      }
    }


    return this.http.get(GeneralSettings.url + '/' + endpoint + "?tgt=" + account.tgt + "&username=" + account.username, { headers: headers, params: params, withCredentials: false, observe: 'response' });
  }

  get2(endpoint: string, params?: any) {

    let result;
    let reqOpts = new HttpParams();
    if (params) {
      for (let k in params) {
        reqOpts = reqOpts.set(k, params[k]);
      }
    }

    result = this.http.get(GeneralSettings.url + "/get2" + "?tgt=" + account.tgt + "&username=" + account.username + "&service=" + endpoint + "&cookie=" + account.cookie, {
      params: params,
      withCredentials: true, observe: 'response'
    }).pipe(timeout(5000000));

    return result;
  }

  postMethod(endpoint: string, params?: any) {
    let result;
    let reqOpts = new HttpParams();
    if (params) {
      for (let k in params) {
        reqOpts = reqOpts.set(k, params[k]);
      }
    }
    params = {
      cookie: account.cookie,
      service: endpoint + "?tgt=" + account.tgt + "&username=" + account.username + "&service=localhost",
      data: reqOpts.toString()
    };

    result = this.http.post(GeneralSettings.url + "/postMethod", params);

    return result;
  }

  postRequestParam(endpoint: string, params?: any) {
    let result;
   

   let body = { 
      cookie: account.cookie,
      service: endpoint + "?tgt=" + account.tgt + "&username=" + account.username + "&service=localhost",
      data: params
    };
    result = this.http.post(GeneralSettings.url+ "/postRequestParam" ,body);

    return result;
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(GeneralSettings.url + '/' + endpoint, body, reqOpts);
  }


  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(GeneralSettings.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(GeneralSettings.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(GeneralSettings.url + '/' + endpoint, body, reqOpts);
  }

  saveOrUpdateBildirimiZorunluHastalik(endpoint: string, params?: any) {
    let result;
   

   let body = { 
      cookie: account.cookie,
      service: endpoint + "?tgt=" + account.tgt + "&username=" + account.username + "&service=localhost",
      data: params.data,
      taniTipi : params.taniTipi,
      hastaTaniId : params.hastaTaniId,
      partnerGrid : params.partnerGrid,
      gridSeyahat : params.gridSeyahat
    };
    result = this.http.post(GeneralSettings.url+ "/saveOrUpdateBildirimiZorunluHastalik" ,body);

    return result;
  }

}
