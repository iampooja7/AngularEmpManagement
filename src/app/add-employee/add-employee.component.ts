import { Component, OnInit } from '@angular/core';
import { Employees } from '../services/Employees';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employeeservice.service';
import { Empdata } from '../services/Empdata';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})


export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private es: EmployeeService,private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      salary:["",[Validators.required]],
      designation:["",[Validators.required]],
      doj:["",[Validators.required]],
      skill:["",[Validators.required]],
      acctype:["",[Validators.required]],
      password:["",[Validators.required]]


    });
  }
  addEmployee(){
        
        this.es.addEmployee( new Empdata(this.employeeForm.value.name,
          this.employeeForm.value.email,
          this.employeeForm.value.acctype,
          this.employeeForm.value.designation,
          this.employeeForm.value.salary,
          this.employeeForm.value.doj,
          this.employeeForm.value.skill,
         "Nodata"
          )).subscribe();
          alert("Data stored");
        this.employeeForm.reset();
    }
    
}
