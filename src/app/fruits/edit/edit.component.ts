import { FruitsService } from './../fruits.service';
import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  fruitsForm : Fruits = {
    id:0,
    name:'',
    price:0,
    quantity:0
  }
  constructor(private fruitsService:FruitsService,
    private router:Router,
    private route:ActivatedRoute) {

   }



  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'));
      this.getById(id)
    })
  }
  getById(id:number){
    this.fruitsService.getByID(id).subscribe((data)=>{
      this.fruitsForm = data
    })
   }

   update(){
    this.fruitsService.update(this.fruitsForm).subscribe({
      next: (data)=>{
        this.router.navigate(["/fruits/home"]);
    },
    error: (error) =>{
      console.log(error);

    }
   })
}
}
