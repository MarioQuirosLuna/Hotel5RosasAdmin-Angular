import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private isAuthenticated = false;

    login() {
        this.isAuthenticated = true;
        localStorage.setItem('isAuthenticated', 'true');
    }

    logout() {
        this.isAuthenticated = false;
        localStorage.removeItem('isAuthenticated');
    }

    isLoggedIn(): boolean {
        if (!localStorage.getItem('isAuthenticated')) {
            this.isAuthenticated = false;
        }
        return this.isAuthenticated;
    }
}