import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthor } from 'src/app/shared/types/author.interface';

@Component({
  selector: 'app-author-input',
  templateUrl: './author-input.component.html',
  styleUrls: ['./author-input.component.scss'],
})
export class AuthorInputComponent implements OnInit {
  @Output() readonly addAuthor = new EventEmitter<IAuthor>();

  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      patronymic: ['', Validators.required],
      birthday: ['', Validators.required],
    });
  }

  onSubmit() {
    const form = this.form.value;
    const author: IAuthor = {
      id: form.id,
      name: form.name.trim(),
      surname: form.surname.trim(),
      patronymic: form.patronymic.trim(),
      birthday: form.birthday,
    };
    this.addAuthor.emit(author);
    this.form.reset();
  }
}
