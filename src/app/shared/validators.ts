
import { Directive } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[validateAttribute][ngModel]',
    providers: [
    { provide: NG_VALIDATORS, useValue: CustomValidators.attributeValidator, multi: true }
  ]
})
export class CustomValidators {

    static attributeValidator(control: FormControl ) {
            if (!control.value)
                return;

        /*if (!control.value.match(/\d{1,2}/)) {

            return { 'invalidAttribute': true };
        } else { */
            if (+control.value < 1 || +control.value > 20) {
                  return { 'invalidAttribute': true };
            }
        //}
    }
}