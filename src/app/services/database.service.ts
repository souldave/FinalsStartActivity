import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable()
export class DatabaseService {

  constructor(private http: Http) { }

  saveData(data: object){
    return this.http.post ('https://first-5cba1.firebaseio.com/people.json', data);
  }

  getData(){
    return this.http.get ('https://first-5cba1.firebaseio.com/people.json');

  }
}
