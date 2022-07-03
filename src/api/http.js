const BASE_URL = "http://localhost:3000/";

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
            data: method === "GET" ? null : JSON.stringify(data)
        });
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.log(error);
        throw error;
        //return { error: true, message: "server error" };
    }
}