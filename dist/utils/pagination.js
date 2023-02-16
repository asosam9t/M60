"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "functionPaginate", {
    enumerable: true,
    get: ()=>functionPaginate
});
const functionPaginate = async (page, limit, content, db)=>{
    const noPage = page || 1;
    const limitPerPage = limit || 10;
    const skip = (noPage - 1) * limitPerPage;
    content = content.skip(skip).limit(limitPerPage);
    const data = await content;
    const totalContent = typeof db === 'number' ? db : await db.countDocuments();
    const totalPages = Math.ceil(totalContent / limit);
    return {
        data,
        totalContent,
        totalPages
    };
};

//# sourceMappingURL=pagination.js.map