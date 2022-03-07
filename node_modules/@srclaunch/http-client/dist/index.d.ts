import { HttpRequestBody, HttpRequestResource, HttpResponse, HttpResponseBody } from '@srclaunch/types';
import { HttpClientConfig, HttpClientRequestOptions } from './types';
export type { HttpClientConfig, HttpClientRequestOptions };
export declare type HttpClientSignature = {
    delete: <T>(resource: HttpRequestResource, options?: HttpClientRequestOptions) => Promise<HttpResponse<HttpResponseBody<T>>>;
    head: (resource: HttpRequestResource, options?: HttpClientRequestOptions) => Promise<HttpResponse<null> | null>;
    get: <T>(resource: HttpRequestResource, options?: HttpClientRequestOptions) => Promise<HttpResponse<HttpResponseBody<T>>>;
    patch: <T>(resource: HttpRequestResource, options?: HttpClientRequestOptions) => Promise<HttpResponse<HttpResponseBody<T>>>;
    post: <T>(resource: HttpRequestResource, body?: HttpRequestBody, options?: HttpClientRequestOptions) => Promise<HttpResponse<HttpResponseBody<T>>>;
    put: <T>(resource: HttpRequestResource, body?: HttpRequestBody, options?: HttpClientRequestOptions) => Promise<HttpResponse<HttpResponseBody<T>>>;
};
export declare function HttpClient(config: HttpClientConfig): HttpClientSignature;
//# sourceMappingURL=index.d.ts.map