import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  getFriends(){
    return [{ name: 'Ram' , age: 20},{ name : 'OM',age: 25},{ name : 'Raj',age: 25}];
  }
}
