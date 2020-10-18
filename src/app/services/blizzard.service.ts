import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {switchMap, take} from 'rxjs/operators';
import {Observable, ReplaySubject, Subject} from 'rxjs';

interface TokenReponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}
@Injectable({
  providedIn: 'root'
})
export class BlizzardService {
  private token$: ReplaySubject<string> = new ReplaySubject<string>(1);
  private baseUrl = 'https://eu.api.blizzard.com';

  constructor(private httpClient: HttpClient) {
    const f = new FormData();
    f.append('grant_type', 'client_credentials');
    this.httpClient.post<TokenReponse>('https://us.battle.net/oauth/token', f, {
      headers: {
        Authorization: 'Basic ' + btoa('923d4b921daa4f3ab84a06deb0e17154:4aoWudBWQ7b4dcGSIBc77i80Tt8ul4xe')
      }
    }).pipe(
      take(1)
    ).subscribe((res) => this.token$.next(res.access_token));
  }

  public getCharEquipment(realm: string, name: string): Observable<any> {
    return this.token$.pipe(
      switchMap((token) =>
        this.httpClient.get(this.baseUrl + '/profile/wow/character/' + realm + '/' + name + '/equipment?namespace=profile-eu&locale=en_gb&access_token=' + token)
      )
    );
  }
  public getItemAppearance(id: string): Observable<any>{
    return this.token$.pipe(
      switchMap((token) =>
        this.httpClient.get(this.baseUrl + '/data/wow/media/item/' + id + '?namespace=static-eu&locale=en_gb&access_token=' + token)
      )
    );
  }
  public getItemName(id: string): Observable<any>{
    return this.token$.pipe(
      switchMap((token) =>
        this.httpClient.get(this.baseUrl + '/data/wow/item/' + id + '?namespace=static-eu&locale=en_gb&access_token=' + token)
      )
    );
}
}

