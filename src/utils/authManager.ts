export class AuthManager {
    private static TOKEN_KEY = 'api_token';

    static initializeFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('chavePasse');

        if (token) {
            localStorage.setItem(this.TOKEN_KEY, token);
            const newUrl = window.location.pathname + window.location.hash;
            window.history.replaceState({}, document.title, newUrl);
        }
    }

    static getStoredToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    static clearStoredToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }
}