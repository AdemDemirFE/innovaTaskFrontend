import { Injectable } from '@angular/core';
import { GeneralSettings } from 'src/app/pages';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { account } from 'src/app/pages';
@Injectable()
export class Service {
    public resourceUrl = GeneralSettings.url;

    constructor(private http: HttpClient) {

    }

}