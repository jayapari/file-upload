import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu1';
  name: string | undefined;
  username:string="";
  selectLang:string="";
  TransLang=[];
  

  // public hobbies:Hobby[]=[
  //   {'id':1, 'name':'john'},
  //   {'id':2, 'name':'marry'}
  // ]
  
  constructor(public translate: TranslateService){
    // translate.addLangs(['en','hi']);
    // translate.setDefaultLang('en');
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|hi/)? browserLang : 'en');

   translate.setDefaultLang('en');
   translate.use('en');
  }
  
  
}
interface Hobby
{
  id:number,
  name:string
}
