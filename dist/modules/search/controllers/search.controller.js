"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const search_movie_dto_1 = require("../dto/search-movie.dto");
const search_service_1 = require("../search.service");
let SearchController = class SearchController {
    constructor(searchService) {
        this.searchService = searchService;
    }
    async getSearch() {
        const resp = await this.searchService.addDocuments([
            { id: 1, title: 'Carol', genres: ['Romance', 'Drama'] },
            { id: 2, title: 'Wonder Woman', genres: ['Action', 'Adventure'] },
            { id: 3, title: 'Life of Pi', genres: ['Adventure', 'Drama'] },
            {
                id: 4,
                title: 'Mad Max: Fury Road',
                genres: ['Adventure', 'Science Fiction'],
            },
            { id: 5, title: 'Moana', genres: ['Fantasy', 'Action'] },
            { id: 6, title: 'Philadelphia', genres: ['Drama'] },
            { id: 7, title: 'Kung Fu Panda', genres: ['Cartoon', 'Drama'] },
        ]);
        console.log(resp);
    }
    async searchMovie(search) {
        return await this.searchService.search(search.text, {
            attributesToHighlight: ['*'],
        });
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getSearch", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_movie_dto_1.SearchMovieDto]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "searchMovie", null);
SearchController = __decorate([
    (0, swagger_1.ApiTags)('Search'),
    (0, common_1.Controller)('search'),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchController);
exports.SearchController = SearchController;
//# sourceMappingURL=search.controller.js.map