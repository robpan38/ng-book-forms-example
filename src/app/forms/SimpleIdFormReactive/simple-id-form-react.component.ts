import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'simple-id-form-react',
    templateUrl: 'simple-id-form-react.component.html',
    styleUrls: ['simple-id-form-react.component.scss'],
})
export class SimpleIdFormReactComponent {
    myForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.myForm = _fb.group({
            'id': ['ceva!!', Validators.required],
        });
    }

    onSubmit(value: any) {
        console.log(value);
    }
}