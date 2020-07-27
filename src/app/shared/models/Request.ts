export namespace Request {
    export interface Success {
        status: string;
        status_code: number;
        message: string;
        result: {
            data: any[];
            pagination: Pagination;
        };
    }

    export interface Pagination{
        total: number;
        count: number;
        per_page: number;
        current_page: number;
        total_pages: number;
    }

    export interface Error {
        status: string;
        status_code: number;
        message: string;
    }
}

