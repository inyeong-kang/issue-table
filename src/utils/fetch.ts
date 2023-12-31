const headers = {
    'Content-Type': 'application/json',
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`, // 여기에 토큰을 넣어주세요!!
};

export const getFetch = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, {
        method: 'GET',
        headers,
    });

    if (!response.ok) {
        const errorText = await response.text();
        const originError: Error = JSON.parse(errorText);
        const error = { status: response.status, message: originError.message };

        throw new Error(JSON.stringify(error));
    }

    const data = await response.json();

    return data;
};

export const postFetch = async <T>(url: string, body: T) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers,
    });

    if (!response.ok) {
        const errorText = await response.text();
        const error: Error = JSON.parse(errorText);

        throw new Error(error.message);
    }
};
