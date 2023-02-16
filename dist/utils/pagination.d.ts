export declare const functionPaginate: (page: number, limit: number, content: any, db: any) => Promise<{
    data: any;
    totalContent: any;
    totalPages: number;
}>;
