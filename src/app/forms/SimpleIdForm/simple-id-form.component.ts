import { Component } from '@angular/core';

@Component({
    selector: 'simple-id-form',
    templateUrl: 'simple-id-form.component.html',
    styleUrls: ['simple-id-form.component.scss'],
})
export class SimpleIdFormComponent {
    onSubmit(value: any) {
        console.log(value);
    }   
}