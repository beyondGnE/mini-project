import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/Model/Place';
import { PlaceService } from 'src/app/service/place.service';
import { Comment } from 'src/app/Model/Comment';
import { CommentsService } from 'src/app/service/comments.service';


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  places: Array<Place> = [];

  constructor(private pservice: PlaceService) {}

  ngOnInit(): void {
      this.pservice.getAllPlaces().subscribe(data =>{
         this.places= data; 
         console.log(this.places)
      });
      // console.log(this.places);
  }

}
