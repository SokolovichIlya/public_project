export interface IPagination {
    current_page: number,
    prev_page: number | null,
    next_page: number | null,
    start: number,
    end: number,
    total: number,
    per_page: number | null,
    total_pages: number,
}