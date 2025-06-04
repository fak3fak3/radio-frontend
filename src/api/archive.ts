import { API_URL } from ".";

export async function fetchMedias() {
    console.log(123);

    const response = await fetch(API_URL + "/media");
    if (!response.ok) {
        throw new Error("Failed to fetch media");
    }
    return response.json();
}
