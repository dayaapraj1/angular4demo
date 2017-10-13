import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'daya pooja';
  dob = '1221'
  name =["pooja","daya","tanu"]
  //private myUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
   private myUrl = 'http://192.168.0.104/icittest/sql_php.php';
  data: any = {};
   HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];

constructor(private http:Http){
	this.getContacts();
	
	
}
getData(){
	return this.http.get(this.myUrl)
	.map((res:Response) => res.json())
	
}
getContacts(){
	this.getData().subscribe(data => {
		this.data =data
		console.log(data)
	})
	
}
}
	