

import { Employees } from './../../services/Employees';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employeeservice.service';
import { DatePipe, formatDate } from '@angular/common';


@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  list : Employees[] = [];
  namesearch: string;
  searchsalary: string;
  searchdate: string;
  searchdesig: string;
  searchskill: string;
  startdate: Date;
  enddate: Date;
  constructor(private es: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
   
  }
  getEmployee(){
    this.es.getEmployees().subscribe
    (
      (response)=>
      {
        this.list = response;
      },
      (error)=>
      {
        console.log("Error :"+error);
      }
    )
  }
  deleteEmployee(id: number){
    
    this.es.deleteUser(id).subscribe(
      (data: Employees)=>{
        this.getEmployee();
      }
    );
  }
  //Click event of edit button.It will display edit form
  editForm(data){
  
    document.getElementById("myForm").style.display = "block";
    this.es.currentEmployee = Object.assign({}, data);
  }
   //To update appointment from json file
   createAndUpdate(data){
    this.es.updateEmployee(data).subscribe ();
   alert("Data Updated")

    location.reload();
  }
  searchEvent(e){
    this.ngOnInit();
    var x=e.target.value;
    
    if(x=="name")
    {
      document.getElementById("searchdate").style.display = "none";
      document.getElementById("searchname").style.display = "block";
      document.getElementById("searchsalary").style.display = "none";
      document.getElementById("searchdesig").style.display = "none";
      document.getElementById("searchskill").style.display = "none";
      document.getElementById("startdate").style.display = "none";
      document.getElementById("enddate").style.display = "none";
    }
    else if(x=="salary"){
      document.getElementById("searchdate").style.display = "none";
      document.getElementById("searchname").style.display = "none";
      document.getElementById("searchsalary").style.display = "block";
      document.getElementById("searchdesig").style.display = "none";
      document.getElementById("searchskill").style.display = "none";
      document.getElementById("startdate").style.display = "none";
      document.getElementById("enddate").style.display = "none";
    }
    else if(x=="DOJ"){
      document.getElementById("searchdate").style.display = "block";
      document.getElementById("searchname").style.display = "none";
      document.getElementById("searchsalary").style.display = "none";
      document.getElementById("searchdesig").style.display = "none";
      document.getElementById("searchskill").style.display = "none";
      document.getElementById("startdate").style.display = "none";
      document.getElementById("enddate").style.display = "none";
    }
    else if(x=="Designation"){
      document.getElementById("searchdate").style.display = "none";
      document.getElementById("searchname").style.display = "none";
      document.getElementById("searchsalary").style.display = "none";
      document.getElementById("searchdesig").style.display = "block";
      document.getElementById("searchskill").style.display = "none";
      document.getElementById("startdate").style.display = "none";
      document.getElementById("enddate").style.display = "none";
    }
    else if(x=="skill"){
      document.getElementById("searchdate").style.display = "none";
      document.getElementById("searchname").style.display = "none";
      document.getElementById("searchsalary").style.display = "none";
      document.getElementById("searchdesig").style.display = "none";
      document.getElementById("searchskill").style.display = "block";
      document.getElementById("startdate").style.display = "none";
      document.getElementById("enddate").style.display = "none";
    }
    else if(x=="range"){
      document.getElementById("searchdate").style.display = "none";
      document.getElementById("searchname").style.display = "none";
      document.getElementById("searchsalary").style.display = "none";
      document.getElementById("searchdesig").style.display = "none";
      document.getElementById("searchskill").style.display = "none";
      document.getElementById("startdate").style.display = "block";
      document.getElementById("enddate").style.display = "block";
    }
    
}
searchName(){
  if(this.namesearch!=""){
    this.list=this.list.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.namesearch.toLocaleLowerCase());
    })
  }
  else if(this.namesearch==""){
    this.ngOnInit();
  }
 
}
searchSalary(){
  var s:string;
  if(this.searchsalary!=""){
    this.list=this.list.filter(res=>{
     s= res.salary.toString();
      return s.startsWith(this.searchsalary);
    })
  }
  else if(this.searchsalary==""){
    this.ngOnInit();
  }
 
}
searchDate(){
 
 
  if(this.searchdate!=""){
    this.list=this.list.filter(res=>{
   
     return res.doj.match(this.searchdate);
    })
  }
  else if(this.searchdate==""){
    this.ngOnInit();
  }
 
}
searchDesig(e){
 // this.ngOnInit();
  if(this.searchdesig!="No data"){
    this.list=this.list.filter(res=>{
      var x=e.target.value;
      return res.designation.startsWith(x);
      
    })
  }
  else if(this.searchdesig=="No data"){
    this.ngOnInit();
  }
 
}
searchSkill(){
  if(this.searchskill!=""){
    this.list=this.list.filter(res=>{
      return res.skills.toLocaleLowerCase().match(this.searchskill.toLocaleLowerCase());
    })
  }
  else if(this.searchskill==""){
    this.ngOnInit();
  }
 
}
searchDateRange(){
  this.list=this.list.filter(res=>{
    const d=formatDate(new Date(res.doj), 'yyyy-MM-dd', 'en');
 
   return (new Date(res.doj)>=new Date(this.startdate) && new Date(res.doj)<=new Date(this.enddate) );
  })
}
}
