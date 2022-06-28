interface PaginationMeta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}
declare class PaginatedDto<TData> {
    items: TData[];
    meta: PaginationMeta;
}
export { PaginationMeta, PaginatedDto };
