import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    search_pokemon: ['', Validators.required],
  });

  onSubmit(input: HTMLInputElement) {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
      input.focus();
    } else {
      return;
    }
  }
}
