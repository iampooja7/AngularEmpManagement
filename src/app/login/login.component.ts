import { EmployeeService } from './../services/employeeservice.service';
import { Component, OnInit } from '@angular/core';
import { Employees } from '../services/Employees';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  list: Employees[]=[];

  constructor(private es:EmployeeService,private router: Router) { }

  loginUser(){
   
    const user=(document.getElementById("username") as HTMLInputElement).value
    const password=(document.getElementById("password") as HTMLInputElement).value
   console.log(user+" "+password)
   this.es.getEmployees().subscribe
   (
     (response)=>
     {
       var i: number;
       var status=true;
       this.list = response;
       for(i=0;i<this.list.length;i++)
       {
          if(this.list[i].username==user && this.list[i].password==password ){
           
            status=false;
            if(this.list[i].acctype=="Admin"){
            localStorage.setItem('currentUser',this.list[i].name);
           localStorage.setItem('currentUserName',this.list[i].username);
            localStorage.setItem('currentDesig',this.list[i].designation);
            localStorage.setItem('currentDoj',this.list[i].doj);
            localStorage.setItem('currentSalary',this.list[i].salary.toString());
            localStorage.setItem('currentSkill',this.list[i].skills);
            localStorage.setItem('currentPassword',this.list[i].password);
            localStorage.setItem('currentAcctype',this.list[i].acctype);
            localStorage.setItem('currentId',this.list[i].id.toString());
            this.router.navigateByUrl("admin-home");
            
            }
           else{
            localStorage.setItem('currentUser',this.list[i].name);
            localStorage.setItem('currentUserName',this.list[i].username);
             localStorage.setItem('currentDesig',this.list[i].designation);
             localStorage.setItem('currentDoj',this.list[i].doj);
             localStorage.setItem('currentSalary',this.list[i].salary.toString());
             localStorage.setItem('currentSkill',this.list[i].skills);
             localStorage.setItem('currentPassword',this.list[i].password);
             localStorage.setItem('currentAcctype',this.list[i].acctype);
             localStorage.setItem('currentId',this.list[i].id.toString());
             
           this.router.navigateByUrl("employee-home");
           }
          }
       }
       if(status){
         alert("Invalid Credentials")
       }
     },
     (error)=>
     {
       console.log("Error :"+error);
     }
   )
  }
  ngOnInit() {
  }

}
