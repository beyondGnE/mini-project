import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/Model/Comment';
import { Place } from 'src/app/Model/Place';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  // cPlace: Place = {id: 0, title: ""}; 
  placeComments: Array<Comment> = [];

  constructor(private cservice: CommentsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log("This is a place: " + this.cPlace);
    const routeParams = this.route.snapshot.paramMap;
    const placeId = Number(routeParams.get('placeId'));

    this.cservice.getCommentsForPlace(placeId).subscribe(data => this.placeComments = data);
  //  this.commentsForPlace = this.cPlace.comments as unkno
    
  }

}
