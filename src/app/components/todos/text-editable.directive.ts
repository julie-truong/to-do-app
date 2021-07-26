// Credit: https://allenhwkim.medium.com/angular-make-div-tag-editable-37f90b35acbd

import { Component, ElementRef, HostListener, forwardRef, AfterViewInit } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: '[text-editable]',
  template: '<ng-content></ng-content>',
  providers: [ { 
    provide: NG_VALUE_ACCESSOR, 
    useExisting: forwardRef(() => TextEditableComponent), multi: true 
  }],
  styles: [`
  :host {
    padding: 2px 4px;
  }
  :host:empty::before {
    content: attr(placeholder);
    color: #9D9D9D;
  }
  `]
})
export class TextEditableComponent implements ControlValueAccessor, AfterViewInit {
  @HostListener('input') callOnChange() {
    this.onChange(this.el.nativeElement.textContent);
  }
  @HostListener('blur') callOnTouched() { this.onTouched(); }

  onChange: (value: string) => void; // init by this.registerOnChange
  onTouched: () => void; // init by this.registerOnTouched

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.setAttribute('contenteditable', 'true');
  }

  // called when model is written to view. (model -> view)
  writeValue(value) {
    this.el.nativeElement.textContent = value || '';
  }

  registerOnChange(fn) { console.log(fn); this.onChange = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }

  // called when element property disabled is changed 
  setDisabledState(val: boolean): void {
    this.el.nativeElement.setAttribute('disabled', String(val));
    this.el.nativeElement.setAttribute('contenteditable', String(!val));
  }

}