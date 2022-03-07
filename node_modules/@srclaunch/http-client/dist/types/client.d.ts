import { HttpRequestBody, HttpRequestHeaders, HttpRequestHost, HttpRequestResource, HttpResponse } from '@srclaunch/types';
import { AxiosError } from 'axios';
export declare type HttpClientRequestOptions = {
    headers?: HttpRequestHeaders;
    retries?: number;
    retryDelay?: number;
    retryCondition?: (err: AxiosError) => boolean;
};
export interface HttpClientRequestBaseArgs {
    resource: HttpRequestResource;
    options?: HttpClientRequestOptions;
}
export declare type HttpClientDeleteMethodRequestArgs = HttpClientRequestBaseArgs;
export declare type HttpClientGetMethodRequestArgs = HttpClientRequestBaseArgs;
export declare type HttpClientHeadMethodRequestArgs = HttpClientRequestBaseArgs;
export interface HttpClientPostMethodRequestArgs extends HttpClientRequestBaseArgs {
    body?: HttpRequestBody;
}
export interface HttpClientPutMethodRequestArgs extends HttpClientRequestBaseArgs {
    body?: HttpRequestBody;
}
export declare type HttpClientRequestMethodArgs = HttpClientDeleteMethodRequestArgs | HttpClientGetMethodRequestArgs | HttpClientHeadMethodRequestArgs | HttpClientPostMethodRequestArgs | HttpClientPutMethodRequestArgs;
export declare type HttpClientRequest<T> = (resource: HttpRequestResource, args: HttpClientRequestMethodArgs) => Promise<HttpResponse<T>>;
export declare type HttpClientConfig = {
    basePath?: string;
    host?: HttpRequestHost;
    headers?: HttpRequestHeaders;
    withCredentials?: boolean;
    options?: HttpClientRequestOptions;
    responseType?: 'json' | 'text';
    preAuthResourceIncludes?: string;
};
//# sourceMappingURL=client.d.ts.map