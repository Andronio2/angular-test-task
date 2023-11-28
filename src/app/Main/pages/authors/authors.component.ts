import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { AuthorService } from 'src/app/shared/services/author.service';
import { IAuthor } from 'src/app/shared/types/author.interface';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  constructor(private authorService: AuthorService, private modalService: NgbModal) {}

  protected authorList: IAuthor[] = [];

  ngOnInit(): void {
    this.authorList = this.authorService.getAuthorList();
  }

  addAuthor(author: IAuthor) {
    if (!this.findAuthor(author)) {
      const id = this.authorList.length > 0 ? this.authorList[this.authorList.length - 1].id + 1 : 1;
      this.authorList = [...this.authorList, { ...author, id }];
      this.authorService.saveAuthorList(this.authorList);
    } else {
      console.warn('this author is exist', author);
      this.modalService.open(ModalComponent);
    }
  }

  findAuthor(author: IAuthor): IAuthor | undefined {
    return this.authorList.find(item => {
      return (
        item.name === author.name &&
        item.surname === author.surname &&
        item.patronymic === author.patronymic &&
        item.birthday === author.birthday
      );
    });
  }
}
