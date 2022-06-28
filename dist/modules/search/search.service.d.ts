import { SearchParams } from 'meilisearch';
export declare class SearchService {
    private _client;
    constructor();
    private getMovieIndex;
    addDocuments(documents: any): Promise<import("meilisearch").EnqueuedTask>;
    search(text: string, searchParams?: SearchParams): Promise<import("meilisearch").SearchResponse<Record<string, any>>>;
}
