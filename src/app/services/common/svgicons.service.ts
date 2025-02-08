import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SvgIconSet } from 'src/app/models/common.model';

@Injectable({
  providedIn: 'root'
})
export class SvgiconsService {

  private iconsUrl = 'assets/svg-icons.json';

  constructor(private http: HttpClient) {}

  // Fetch SVGs from JSON
  getSvgIcons(): Observable<SvgIconSet> {
    return this.http.get<SvgIconSet>(this.iconsUrl);
  }
}
