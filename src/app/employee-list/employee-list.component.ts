import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employeeservice.service';
import { Employees } from '../services/Employees';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  list:Employees[]=[];
  namesearch: string;
  searchsalary: string;
  searchdate: string;
  searchdesig: string;
  searchskill: string;
  startdate: string | number | Date;
  enddate: string | number | Date;
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
