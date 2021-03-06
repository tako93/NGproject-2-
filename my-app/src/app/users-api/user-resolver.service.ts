import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';

import { IUsersData, IUsers } from './users-api';
import { UsersService } from './users-api.service';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})

export class UserResolver implements Resolve<IUsers> {

    constructor(private _usersService: UsersService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<IUsers> {
        return this._usersService.getUsers()
        .pipe(catchError((err) => of(err)))

    }
}