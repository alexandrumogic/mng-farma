import { Component, OnInit } from '@angular/core';
import { DrugsService } from '../drugs.service';
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'drugs-search',
  templateUrl: './drugs-search.component.html',
  styleUrls: ['./drugs-search.component.css'],
  providers: [DrugsService]
})
export class DrugsSearchComponent implements OnInit {

  drugs;
  startAt = new Subject()
  endAt = new Subject()

  constructor(private drugsSvc: DrugsService) { }

  ngOnInit() {
    this.drugsSvc.getDrugs(this.startAt, this.endAt).subscribe(drugs => this.drugs = drugs)
    this.startAt.next('A');
    this.endAt.next('Z');
  }

  search($event) {
    console.log($event)
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
  }

}
