import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/Model/Place';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private pService: PlaceService) { }

  place?: Place;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const placeId = Number(routeParams.get('placeId'));

    // Find the product that corresponds with the id in the route.
    this.pService.getAPlace(placeId).subscribe(result => this.place = result );
  }

}
