
// THis class simulates an authentication
export class FakeAuthService {
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 2000);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}