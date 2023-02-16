"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionPaginate = void 0;
const functionPaginate = async (page, limit, content, db) => {
    //pagination
    const noPage = page || 1;
    const limitPerPage = limit || 10;
    const skip = (noPage - 1) * limitPerPage;
    content = content.skip(skip).limit(limitPerPage);
    const data = await content;
    const totalContent = typeof db === 'number' ? db : await db.countDocuments();
    const totalPages = Math.ceil(totalContent / limit);
    return { data, totalContent, totalPages };
};
exports.functionPaginate = functionPaginate;
//# sourceMappingURL=pagination.js.map