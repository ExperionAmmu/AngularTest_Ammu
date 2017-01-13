import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  selectactive1: string = 'select';
  selectactive2: string = 'selectorder';
  value1;
  value2;
  array_label;
  typevalue;
  currentid;
  ordervalue;
  orderid;
  selectype = ["Select",
                "Textbox",
                "Number",
                "Dropdown",
                "Checkbox",
                "Textarea"
                ];
selecorder = ["Select","1","2","3","4","5"];
  users = [];
  details: string [];
  model: any = {};
   
  
  label_Value()
  {

  } 

  // function for selecting the Type drop down list value.
  
  getselecttypeValue(currenttypevalue, currentselectboxid){

    this.typevalue = currenttypevalue;
    this.currentid= currentselectboxid;
  }

  // function for selecting the order drop down list value.

  getselectorderValue(currentordervalue, currentselectorderid){

    this.ordervalue = currentordervalue;
    this.currentid= currentselectorderid;
  }

  // function adding data to local storage

  onAdd(model: any): void {

    this.value1 = { "Label": this.model.labelrow1, "Type": this.typevalue, "visible": this.model.visible, "ReadOnly": this.model.readonly, order:this.ordervalue};
    this.users.push(this.value1);
    console.log(this.model.visible);
    this.value2 = JSON.stringify(this.users);
    localStorage.setItem("users", this.value2);
    alert("Your details added to local storage");  

  }
  // function redirect to form component
  onNext()
  {
         this.router.navigate(['/form']);
  }
     
  
}
