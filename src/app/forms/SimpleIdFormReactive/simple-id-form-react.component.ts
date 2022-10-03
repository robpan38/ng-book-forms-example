import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";

@Component({
    selector: 'simple-id-form-react',
    templateUrl: 'simple-id-form-react.component.html',
    styleUrls: ['simple-id-form-react.component.scss'],
})
export class SimpleIdFormReactComponent {
    myForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.myForm = _fb.group({
            'id': ['ceva!!', Validators.compose([
                Validators.required,
                this.myValidator,
            ])],
        });
    }

    onSubmit(value: any) {
        console.log(value);
    }

    /* valoarea trebuie sa inceapa cu matei */
    myValidator(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).startsWith('matei')) {
            return null;
        }

        return {
            mateiError: true
        };
    }
}