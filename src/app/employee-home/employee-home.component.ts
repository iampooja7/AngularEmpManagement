import { Component, OnInit } from '@angular/core';
import { Employees } from '../services/Employees';
import { EmployeeService } from '../services/employeeservice.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

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
