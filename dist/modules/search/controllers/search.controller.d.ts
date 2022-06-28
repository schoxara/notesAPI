import { SearchMovieDto } from '../dto/search-movie.dto';
import { SearchService } from '../search.service';
export declare class SearchController {
    private searchService;
    constructor(searchService: SearchService);
    getSearch(): Promise<void>;
    searchMovie(search: SearchMovieDto): Promise<import("meilisearch").SearchResponse<Record<string, any>>>;
}
