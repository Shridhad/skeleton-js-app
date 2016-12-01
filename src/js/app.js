import Backbone from "backbone";
import Marionette from "backbone.marionette";
import AppRouter from "./controller/app_router";

export default Marionette.Application.extend({
  region: "#app",
  routers: [],

  onStart() {
    this.setUpNunjucks();
    this.routers = [new AppRouter()];
    Backbone.history.start();
  },

  setUpNunjucks() {
    Marionette.Renderer.render = (template, data) => template.render(data);
  }
});
