import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];

  constructor(private dataService:DataService) { 

  }

  ngOnInit() {
  	this.name  = 'Harish';
  	this.age = 31;
  	this.email="bkholyharish@gmail.com";
  	this.address = {street: "Gudimalkapur", city : "Mehdipatnam", state: "Hyderabad"};
  	this.hobbies = ["music","movies","sports"];
  	this.hello = "I am any";
  	this.dataService.getPosts().subscribe((posts) => {
  		//console.log(posts);
  		this.posts = posts;
  	});
  }

  onClick() { console.log("came to change name");
    this.name='M Harish Kumar';
    this.hobbies.push('New Hobby by click me');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }

}

interface Address{
  	street: string,
  	city: string,
  	state: string
  }

interface Post {
	id: number;
	title: string,
	userId: number,
	body: string
}