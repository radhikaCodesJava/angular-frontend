import { Component, OnInit } from '@angular/core';
import {User } from '../user';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user : User = new User();  //if donot initialize with new user() then error is shown: Cannot read properties of undefined

  constructor(private userServiceService: UserServiceService,
  private route: ActivatedRoute, 
      private router: Router
      ) { }

  ngOnInit() {
  }

  //saveEmployee(){
  //  this.userServiceService.save(this.user).subscribe(data =>{
      //console.log(data);
     // this.goToEmployeeList();
    //},
    //error => console.log(error));
  //}

  goToUserList(){
   this.router.navigate(['/users']);
  }

  onSubmit(){
    //this.userServiceService.save(this.user).subscribe(data =>{
    //  this.router.navigate(['/users']);
    //});
    //console.log(this.user);
   // this.saveEmployee();
    
    this.userServiceService.save(this.user).subscribe(result => this.goToUserList());
  }

}
