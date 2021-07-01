import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  states = ['Andhra Pradesh', 'Assam', 'Bihar', 'Goa', 'Gujarat', 'Haryana', 'Karnataka','Kerala', '	Maharashtra',
            'Meghalaya', 'Punjab', 'Rajasthan', 'Tamil Nadu' , 'Telangana', 'West Bengal', 'Uttar Pradesh'  ];
  title = 'Angular-Forms';

  submit(myForm:any){
    console.log(myForm);
  }


}
