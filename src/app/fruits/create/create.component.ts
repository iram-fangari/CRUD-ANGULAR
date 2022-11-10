import { Router, RouterModule } from '@angular/router';
import { FruitsService } from './../fruits.service';
import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  fruitsForm : Fruits = {
    id:0,
    name:'',
    price:0,
    quantity:0
  }
  constructor(private fruitsService:FruitsService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.fruitsService.create(this.fruitsForm).subscribe({
      next: (data) =>{
        this.router.navigate(["/fruits/home"])
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
