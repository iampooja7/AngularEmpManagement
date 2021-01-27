


import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employees } from './Employees';
//import { randomFill } from 'crypto';


const headersOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
}
@Injectable({
  providedIn:'root'
})
export class EmployeeService {
  currentEmployee: Employees={
    name: '',
    username: '',
    password: '',
    acctype: '',
    designation: '',
    skills: '',
    salary: 0,
    doj: '',
    id: 0
  }
  
  
  constructor(private http : HttpClient ) { }

  url : string = "http://localhost:3000/login";

  //To get employee login data from json file
  getEmployees(): Observable<Employees[]>{
    try{
    return this.http.get<Employees[]>(this.url,headersOptions);
    }
    catch(exception){
      return of([]);
    }
  }
  addEmployee(empdata){
    try{
    empdata.password=Math.random().toString()+empdata.name;
    return this.http.post(this.url,empdata,headersOptions);
    }
    catch(exception ){ return of([]);}
    
}
//To delete employee from json file..
deleteUser(id): Observable<Employees>{
  try{
    return this.http.delete<Employees>(this.url+'/'+id,headersOptions);
  }
  catch(exception){
    
  }
    
}

 //To update appointment from json file
 updateEmployee(empdata){
  try{
   
  return this.http.put(this.url+'/'+empdata.id,empdata,headersOptions);
  }
  catch(exception){
    return of([]);
  }
  
}
 }
