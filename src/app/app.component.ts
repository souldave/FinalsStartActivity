import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';
import { NgForm } from '@angular/forms';
import{ Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 person: {firstName: string, lastName: string};

  constructor(private dbConnection: DatabaseService){}

  saveData(formData: NgForm){
    this.person = {
      firstName: formData.value.fname,
      lastName: formData.value.lname

    }

    this.dbConnection.saveData(this.person)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  retrData(){
    this.dbConnection.getData().subscribe(
      (response: Response) => {
        const jsonData = response.json();
        
        console.log(response)
      },
      (error) => console.log(error)
    );

  }

  }


