

export class Employees{
    

    id: number;
    name: string;
    designation: string;
    salary: number;
    doj: string;
    skills: string;
    username: string;
    password: string;
    acctype: string;

    constructor(id,designation,salary,doj,skills,name,username,password,acctype){
        this.id=id;
        this.name=name;
        this.username=username;
        this.password=password;
        this.acctype=acctype;
        this.designation=designation;
        this.salary=salary;
        this.doj=doj;
        this.skills=skills;
    }
    
}