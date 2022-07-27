const BASE_URL = "http://localhost:8080/";

export default {
    get(endPoint) {
        return ajax(endPoint);
    },
    post(endPoint, data) {
        return ajax(endPoint, "POST", data)
    },
    put(endPoint, data) {
        return ajax(endPoint, "PUT", data)
    },
    delete(endPoint, data) {
        return ajax(endPoint, "DELETE", data)
    }
}

async function ajax(endPoint, method = "GET", data = {}) {
    try {
        const response = await fetch(`${BASE_URL}${endPoint}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: method,
            body: method === "GET" ? null : JSON.stringify(data)
        });
        const json = await response.json();
        if (json.error) throw json.error;
        return json;
    } catch (error) {
        throw error;
        //return { error: true, message: "server error" };
    }
}

export async function uploadFile(endPoint, method = "POST", data = {}) {
    try {
        const response = await fetch(`${BASE_URL}${endPoint}`, {
            method: method,
            body: data
        });
        const json = await response.json();
        if (json.error) throw json.error;
        return json;
    } catch (error) {
        throw error;
    }
}