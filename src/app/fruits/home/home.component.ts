import { FruitsService } from './../fruits.service';
import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';

declare var window:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allFruits: Fruits[] =[];

  constructor(private fruitsService: FruitsService) { }

  deleteModal:any;
  idToDelete :number = 0;
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
    this.get();
  }

  get(){
    this.fruitsService.getFruits().subscribe((data)=>{
      this.allFruits = data;
      console.log(this.allFruits);

    })
  }
  openDeleteModal(id:number){
    this.idToDelete = id;
    this.deleteModal.show();
  }

  delete(){
    this.fruitsService.delete(this.idToDelete).subscribe((data)=>{
      this.allFruits = this.allFruits.filter(_ => _.id !== this.idToDelete);
      this.deleteModal.hide();
    })
  }
}
