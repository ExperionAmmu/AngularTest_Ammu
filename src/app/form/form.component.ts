import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 
  constructor() { }
  userdetails;
  label;
  type;
  visible;
  order;
  user_Details = [];

  // function to generate controls in form component
  ngOnInit() {

    this.userdetails = JSON.parse(localStorage.getItem('users'));
    for ( var i = 0; i < this.userdetails.length; i++ ) {

               this.label = this.userdetails[i].Label;
               this.type = this.userdetails[i].Type;
               this.visible = this.userdetails[i].visible;
               this.order = this.userdetails[i].ordrer;

                this.user_Details.push(this.label);
                this.user_Details.push(this.type);
                // this.user_Details.push(this.visible);
                this.user_Details.push(this.order);
        }
  }

 }
