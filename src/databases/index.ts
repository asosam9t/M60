import { DB_USERNAME, DB_PASSWORD } from '@config';
export const url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.oqnee.mongodb.net/faith-backend?retryWrites=true&w=majority`;

export const dbConnection = {
  url,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
