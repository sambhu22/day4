import { Component } from '@angular/core';
import { district } from 'src/assets/data/district';
import { Router } from '@angular/router';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
  constructor(private router:Router){

  }
  database=district
  goto(name:string){
   let place= localStorage.setItem('id',name)
   this.router.navigate(['/single'])
  }
}
