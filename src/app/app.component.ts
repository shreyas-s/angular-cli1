import { Component,OnInit,OnChanges, OnDestroy } from '@angular/core';
import { FriendsService } from './friends.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy{
  title = 'app';
  charName = '';
  backgroundClr = 'blue';
  isSel = true;
  titleLogo = 'Ang';
  friends: any;
 // friends : any = [{ name: 'Ram' , age: 20},{ name : 'Raj',age: 25}];
  showHid : boolean = false;
  showHidBtnVal = 'Show';
  changeShowHideStatus(){
    this.showHid = !this.showHid;
    if(this.showHid == false){ // 
      this.showHidBtnVal = 'Show';
    }
    else{
      this.showHidBtnVal = 'Hide';
    }
  }
  public constructor(private friendService: FriendsService){
    this.friends = friendService.getFriends();
  }
  ngOnInit(){
    console.log("initialization of ngOninit");
  }

  ngOnChanges(){
    console.log("Inside of ngOnChnges");
  }
  ngOnDestroy(){
    console.log(" on Destroy lifecycle hook called");
  }
}
