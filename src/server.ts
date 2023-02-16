import App from '@/app';
import AuthRoute from '@routes/auth.route';
import ContentRoute from './routes/content.route';
import validateEnv from './utils/validateEnv';
validateEnv();

const app = new App([new AuthRoute(), new ContentRoute()]);

app.listen();
