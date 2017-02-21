import Marionette from "backbone.marionette";
import { AppController } from "./app_controller";

export const AppRouter = Marionette.AppRouter.extend({
  controller: AppController,

  appRoutes: {
    "*apps": "showApps"
  },
});
