import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/shared/services/author.service';
import { IAuthor } from 'src/app/shared/types/author.interface';
import { IBook } from 'src/app/shared/types/book.interface';

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrls: ['./book-input.component.scss'],
})
export class BookInputComponent implements OnInit {
  @Output() readonly addBook = new EventEmitter<IBook>();

  form!: FormGroup;
  authorList: IAuthor[] = [];
  currentYear = new Date().getFullYear();
  selectedAuthor: IAuthor | null = null;

  constructor(private fb: FormBuilder, private autherService: AuthorService) {}

  ngOnInit(): void {
    this.authorList = this.autherService.getAuthorList();
    this.form = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      publisher: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  onSubmit() {
    const form = this.form.value;
    const book: IBook = {
      id: form.id,
      name: form.name.trim(),
      author: this.selectedAuthor!,
      publisher: form.publisher.trim(),
      year: form.year,
    };
    this.addBook.emit(book);
    this.form.reset();
  }

  onSelect(author: IAuthor) {
    this.selectedAuthor = author;
    this.form.controls['author'].setValue(`${author.surname} ${author.name} ${author.patronymic}`);
  }
}
