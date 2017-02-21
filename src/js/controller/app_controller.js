import Backbone from "backbone";
import { BrowseAppsView } from "../view/browse/browse_apps";

export const AppController =  {
  showApps() {
    const apps = new Backbone.Collection([{ id: "App 1" }, { id: "App 2" }]);
    const view = new BrowseAppsView({ collection: apps });
    app.showView(view);
  }
};
