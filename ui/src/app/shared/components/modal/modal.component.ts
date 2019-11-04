import { Component, OnInit, ApplicationRef, Input, EventEmitter, Output } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  closeButton = true;

  @Input()
  backdropClose = true;

  @Input()
  fullScreen = false;

  // @Output()
  onClose = new EventEmitter();

  modal: any;

  constructor(
    private modalService: ModalService,
  ) {
   }

  ngOnInit(): void {
    this.modal = this.modalService.getModal();
  }

  removeModal() {
    this.onClose.emit(true);
    this.modalService.destroy(this.modal);
  }

}
