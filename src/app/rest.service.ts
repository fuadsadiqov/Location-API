import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  api: string = "https://ipapi.com/ip_api.php?ip=";
  apiKey: string = "06aa800293023bf67efe3793c593678f";
  flagApi: string = "https://flagcdn.com/256x192/";

  constructor(private http: HttpClient) {}

  getIp(ip: string) {
    const url = "https://ipapi.co/" + ip + "/json/";
    return this.http.get(url).pipe(
      map((res: any) => {
        const countryCode = res.country_code;
        const flagUrl = `${this.flagApi}${countryCode}.png`;
        return {
          ...res,
          flagUrl: flagUrl
        };
      })
    );
  }
}
