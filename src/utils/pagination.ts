export const functionPaginate = async (page: number, limit: number, content: any, db: any) => {
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
