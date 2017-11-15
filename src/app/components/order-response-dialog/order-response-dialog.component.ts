import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-response-dialog',
  templateUrl: './order-response-dialog.component.html',
  styleUrls: ['./order-response-dialog.component.css']
})
export class OrderResponseDialogComponent implements OnInit {
  @Input() key;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
