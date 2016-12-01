import $ from "jquery";
import App from "./app";

$(document).ready(() => {
  window.app = new App();
  app.start();
});
