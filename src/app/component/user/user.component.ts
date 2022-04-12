import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  Usuario: User = {} as User;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.buscar();
  }


  buscar(){

    this.UserService.conseguirUsuario().subscribe((res:any)=>{
      this.Usuario.name = res.results[0].name.first;
      this.Usuario.lastname = res.results[0].name.last;
      this.Usuario.gender = res.results[0].gender;
      this.Usuario.age = res.results[0].dob.age;
      this.Usuario.email = res.results[0].email;
      this.Usuario.picture = res.results[0].picture.large;

     // console.log(this.Usuario)
      
    },(error)=>{

    });
  }

}
