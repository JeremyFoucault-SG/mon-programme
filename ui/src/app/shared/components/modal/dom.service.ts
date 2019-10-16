import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DomService {

  // private childComponentRef:any;
  private modals: ComponentRef<any>[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  // tslint:disable-next-line: no-shadowed-variable
  public appendComponentTo(parentId: string, child: any, childConfig?: any): ComponentRef<any> {
    // Create a component reference from the component
    const childComponentRef: ComponentRef<any> = this.componentFactoryResolver
      .resolveComponentFactory(child)
      .create(this.injector);

    // Attach the config to the child (inputs and outputs)
    this.attachConfig(childConfig, childComponentRef);

    // this.childComponentRef = childComponentRef;
    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(childComponentRef.hostView);

    // Get DOM element from component
    const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.getElementById(parentId).appendChild(childDomElem);

    this.modals.push(childComponentRef);
    return childComponentRef;
  }

  public removeComponent(compModal?: ComponentRef<any>) {
    if (compModal) {
      this.appRef.detachView(compModal.hostView);
      compModal.destroy();
      return;
    }
    this.modals.forEach(modal => {
      this.appRef.detachView(modal.hostView);
      modal.destroy();
    });
    this.modals = [];

  }

  public getModal(): ComponentRef<any> {
    return this.modals[this.modals.length - 1];
  }


  private attachConfig(config, componentRef: ComponentRef<any>) {
    const inputs = config.inputs;
    const outputs = config.outputs;
    // tslint:disable-next-line: forin
    for (const key in inputs) {
      componentRef.instance[key] = inputs[key];
    }
    // tslint:disable-next-line: forin
    for (const key in outputs) {
      componentRef.instance[key] = outputs[key];
    }

  }
}
// tslint:disable-next-line: class-name
interface childConfig {
  inputs: object;
  outputs: object;
}
