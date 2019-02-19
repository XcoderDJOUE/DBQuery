import { Injectable } from '@angular/core';
import { ElectronService } from '../providers/electron.service';
const db = require('electron-db');
@Injectable({
  providedIn: 'root'
})
export class DbElService {

  constructor(public electronService: ElectronService) { 
  }
  
  
  creating(){
	  	db.createTable('Joel', (succ, msg) => {
  // succ - boolean, tells if the call is successful
  console.log("Success: " + succ);
  console.log("Message: " + msg);
});


let obj:any = [];
 
obj.name = "Alexius Academia";
obj.address = "Paco, Botolan, Zambales";
 
db.insertTableContent('Joel', obj, (succ, msg) => {
  // succ - boolean, tells if the call is successful
  console.log("Success2: " + succ);
  console.log("Message2: " + msg);
});  
  }
}
