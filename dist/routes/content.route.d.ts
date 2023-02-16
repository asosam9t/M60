import AuthController from '@controllers/auth.controller';
import { Routes } from '@interfaces/routes.interface';
import ContentController from '@/controllers/content.controller';
declare class ContentRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    authController: AuthController;
    contentController: ContentController;
    constructor();
    private initializeRoutes;
}
export default ContentRoute;
