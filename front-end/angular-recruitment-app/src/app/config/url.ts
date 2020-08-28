export const url = "http://localhost:3000/";

export function statusCode(code) {
    switch (code) {
        case 404:
            return "Nie znaleziono";
        case 500:
            return "Serwer nie odpowiada";
        case 401:
            return "Brak autoryzacji";
        default:
            return "Niezanany błąd"
    }
}