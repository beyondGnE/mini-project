import { Component, Input, OnInit } from '@angular/core';
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
  cPlace: Place = {id: 0, title: "", comments: []}; 
  commentsForPlace: Array<Comment> = [];

  constructor(private cservice: CommentsService) {}

  ngOnInit(): void {
    // console.log(this.commentsForPlace);
   //this.cservice.getCommentsForPlace(this.cPlace.id).subscribe(data => this.commentsForPlace = data);
   this.commentsForPlace = this.cPlace.comments as unknown;
  }

}
