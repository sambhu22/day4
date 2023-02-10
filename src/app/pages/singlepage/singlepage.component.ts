import { Component } from '@angular/core';
import { district } from 'src/assets/data/district';
@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  single:any
  ngOnInit():void{
   let placename= localStorage.getItem("id")
   let database=district
   this.single=database.filter(a => a.name === placename)
  }
}
