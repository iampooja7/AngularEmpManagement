import { EmployeeService } from 'src/app/services/employeeservice.service';
import { Employees } from './../services/Employees';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
name: string;
  desig: string;
  list :Employees;
  doj: string;
  username: string;
  password: string;
  acctype: string;
  skill: string;
  salary: number;
  id: number;
  constructor(private es:EmployeeService) { }

  ngOnInit() {
    this.list=new Employees(parseInt(localStorage.getItem('currentId')),
    localStorage.getItem('currentDesig'),
    parseInt(localStorage.getItem('currentSalary')),
    localStorage.getItem('currentDoj'),
    localStorage.getItem('currentSkill'),
    localStorage.getItem('currentUser'),
    localStorage.getItem('currentUserName'),
    localStorage.getItem('currentPassword'),
    localStorage.getItem('currentAcctype')
    )
  
  }
editProfile(){
  document.getElementById("myForm").style.display = "block";
  
  this.es.currentEmployee=Object.assign({}, this.list);
  console.log(this.es.currentEmployee.name)
}
//To update appointment from json file
createAndUpdate(data:Employees){
  this.es.updateEmployee(data).subscribe ();
 alert("Data Updated")
 localStorage.setItem('currentSkill',data.skills)
 localStorage.setItem('currentUser',data.name)
 localStorage.setItem('currentDesig',data.designation)
  location.reload();
}
}
