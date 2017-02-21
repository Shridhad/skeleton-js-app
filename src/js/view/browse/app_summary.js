import Marionette from "backbone.marionette";
import CONFIG from "config";

export const AppSummaryView =  Marionette.View.extend({
  serializeData() {
    const data = this.model.toJSON();
    data.config = CONFIG;
    return data;
  }
});
