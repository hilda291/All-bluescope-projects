import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatajsonModule } from './datajson/datajson.module';
import { ListjsonModule } from './listjson/listjson.module';
import { DetailjsonModule } from './detailjson/detailjson.module';

@Injectable({
  providedIn: 'root'
})
export class BootServiceService {

  private baseUrl = 'http://localhost:8080/ftlCheck';

  constructor(private http: HttpClient) {}

  sendUserData(inputData: any): Observable<any> {
    return this.http.post(this.baseUrl, inputData);
  }

  createGenerateJsonToJson(jsonContent: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, jsonContent);
  }  

  listGenerateJsonToJson(jsonContent: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/list`, jsonContent);
  }  

  detailGenerateJsonToJson(jsonContent: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/detail`, jsonContent);
  }
  generateJson(jsonContent: DatajsonModule): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/dataforjson`, jsonContent);
    }  

  generateListJSon(jsonContent: ListjsonModule): Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/dataforListjson`,jsonContent);
  }

  generateDetailJSon(jsonContent: DetailjsonModule): Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/inputFormDetailjson`,jsonContent);
  }
}
