import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestService {

    private headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8' });
    constructor(private http: HttpClient) { }

    post(url: string, data: any) {
        const body = JSON.stringify(data);
       return this.http.post(url, body, {headers: this.headers});
    }

}


// const body = JSON.stringify(obj);
// const headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8'});

// return this.http.post('//localhost/popcorn_back/public/api/registration', body, { headers: headers });

