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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const meilisearch_1 = require("meilisearch");
let SearchService = class SearchService {
    constructor() {
        this._client = new meilisearch_1.default({
            host: 'http://192.168.1.141:7700/',
        });
    }
    getMovieIndex() {
        return this._client.index('movies');
    }
    async addDocuments(documents) {
        const index = this.getMovieIndex();
        return await index.addDocuments(documents);
    }
    async search(text, searchParams) {
        console.log(searchParams);
        const index = this.getMovieIndex();
        return await index.search(text, searchParams);
    }
};
SearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map