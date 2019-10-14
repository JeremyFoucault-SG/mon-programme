import { Injectable, EventEmitter } from '@angular/core';
import { DomService } from './dom.service';

// --> https://itnext.io/angular-create-your-own-modal-boxes-20bb663084a1
@Injectable({providedIn: 'root'})
export class ModalService {

  constructor(private domService: DomService) { }

  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';

  init(component: any, inputs: object, outputs: object) {
    // const onClose = new EventEmitter();
    let componentConfig = {
      inputs: inputs,
      outputs: outputs
    }
    const cmpRef = this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    // document.getElementById(this.modalElementId).classList.add('show');
    document.getElementById(this.modalElementId).classList.remove('pointer-events-none');
    document.getElementById(this.modalElementId).classList.add('opacity-100');
    return {cmpRef/* , onClose: onClose.asObservable() */};
  }

  public getModal() {
    return this.domService.getModal();
  }

  destroy(modal: any) {
    this.domService.removeComponent(modal);
    // document.getElementById(this.modalElementId).className = 'hidden';
    // document.getElementById(this.modalElementId).classList.add('pointer-events-none');
  }
}
