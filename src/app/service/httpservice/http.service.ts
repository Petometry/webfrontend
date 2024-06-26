import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly domain: string;
  private readonly prefix: string;

  constructor(private httpClient: HttpClient) {
    this.domain = "." + environment.baseDomain + "/api/";
    this.prefix = environment.httpProtocol + "://" + environment.servicePrefix;
  }

  public sendPostRequest(service: string, path: string, body: any): Observable<any> {
    let url = this.prefix + service + this.domain + path;
    console.log("Calling url: " + url)
    return this.httpClient.post(url, body)
  }

  public sendGetRequest(service: string, path: string): Observable<any> {
    let url = this.prefix + service + this.domain + path;
    console.log("Calling url: " + url)
    return this.httpClient.get(url)
  }

  public sendPutRequest(service: string, path: string, body: any): Observable<any> {
    let url = this.prefix + service + this.domain + path;
    console.log("Calling url: " + url)
    return this.httpClient.put(url,body)
  }

  public sendDeleteRequest(service: string, path: string): Observable<any> {
    let url = this.prefix + service + this.domain + path;
    console.log(url)
    return this.httpClient.delete(url)
  }
}
