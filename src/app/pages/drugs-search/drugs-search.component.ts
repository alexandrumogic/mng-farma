import { Component, OnInit } from '@angular/core';
import { DrugsService } from '../../providers/drugs.service';
import { Subject } from 'rxjs/Subject'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDialogComponent } from '../../components/order-dialog/order-dialog.component';


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

  constructor(private drugsSvc: DrugsService, private modalService: NgbModal ) { }

  open(drug: any) {
    const modalRef = this.modalService.open(OrderDialogComponent);
    modalRef.componentInstance.title = drug.Title ;
    modalRef.componentInstance.price = drug.Price;
    modalRef.componentInstance.key = drug.$key;
  }

  ngOnInit() {
    this.drugsSvc.getDrugs(this.startAt, this.endAt).subscribe(drugs => this.drugs = drugs)
    this.startAt.next('A');
    this.endAt.next('Z');
  }

  search($event) {
    console.log(this.drugs);
    console.log($event)
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
  }

}
