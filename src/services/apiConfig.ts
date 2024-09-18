import { ApiResponse } from '../models/api';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestConfig {
    method: RequestMethod;
    headers?: Record<string, string>;
    body?: string;
}

const createRequest = (method: RequestMethod, bodyData?: object): RequestConfig => {
    const headers = {
        'Content-Type': 'application/json',
    };

    const config: RequestConfig = {
        method,
        headers,
    };

    if (bodyData) {
        config.body = JSON.stringify(bodyData);
    }

    return config;
};

export const apiCommand = <T>(method: RequestMethod) => {

    return async (baseUrl: string, endpoint: string, data?: object): Promise<ApiResponse<T>> => {
        const config = createRequest(method, data);
    
        try {
            const response = await fetch(`${baseUrl}${endpoint}`, config);
            const responseData = (await response.json());
    
            if (!response.ok || (response.status !== 200 && response.status !== 201)) {
                    throw new Error(response.statusText || `API Error on url: ${endpoint}`
                );
            }

            if(responseData.code && responseData.code !== 200) {
                throw new Error(response.statusText || `API Error on url: ${endpoint}`)
            }

            return responseData;
        } catch (error) {
            throw new Error(`API Error: ${(error as Error).message}`);
        }
    };
};
