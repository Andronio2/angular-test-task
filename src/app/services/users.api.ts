import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

const DELAY = 500; //ms

@Injectable({ providedIn: 'root' })
export class UsersApi {
  private DB: UserDto[] = [
    { id: 'u1', user_name: 'Ivan Z.', is_active: true },
    { id: 'u2', user_name: 'Mikhail X.', is_active: true },
    { id: 'u3', user_name: 'Ivan C.', is_active: true },
    { id: 'u4', user_name: 'Petr V.', is_active: true },
    { id: 'u5', user_name: 'Artyom B.', is_active: true },
    { id: 'u6', user_name: 'Gleb N.', is_active: true },
    { id: 'u7', user_name: 'Anton M.', is_active: true },
    { id: 'u8', user_name: 'Semyon A.', is_active: true },
    { id: 'u9', user_name: 'Arseniy S.', is_active: true },
    { id: 'u10', user_name: 'Nick D.', is_active: true },
    { id: 'u11', user_name: 'Alex F.', is_active: true },
    { id: 'u12', user_name: 'Kirill G.', is_active: true },
    { id: 'u13', user_name: 'Stas H.', is_active: true },
    { id: 'u14', user_name: 'Yuriy J.', is_active: true },
    { id: 'u15', user_name: 'Roman K.', is_active: true },
    { id: 'u16', user_name: 'Ivan L.', is_active: true },
    { id: 'u17', user_name: 'Ivan Q.', is_active: true },
  ];

  getList(request: ListRequest): Observable<UserListResponseDto> {
    const list = request.search
      ? this.DB.filter(item => item.user_name.toLowerCase().startsWith(request.search!.toLowerCase()))
      : this.DB;
    const start = (request.pageNumber - 1) * request.itemsPerPage;
    const end = start + request.itemsPerPage;
    const slice = list.slice(start, end);
    const obj: UserListResponseDto = {
      items: slice,
      total_count: list.length,
    };
    return of(obj).pipe(delay(DELAY));
  }

  getById(id: string): Observable<UserDto> {
    return of(this.DB.find(item => item.id === id)!).pipe(delay(DELAY));
  }

  remove(id: string): Observable<void> {
    this.DB = this.DB.filter(item => item.id !== id);
    return of(void 0).pipe(delay(DELAY));
  }
}

export interface UserDto {
  id: string;
  user_name: string;
  is_active: boolean;
}

export interface ListRequest {
  pageNumber: number;
  search?: string;
  itemsPerPage: PageLimit;
}

export interface UserListResponseDto {
  total_count: number;
  items: UserDto[];
}

export enum PageLimit {
  'max5' = 5,
  'max10' = 10,
  'max15' = 15,
}
