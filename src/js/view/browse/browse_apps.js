import Marionette from "backbone.marionette";
import { AppSummaryView } from "./app_summary";

export const BrowseAppsView =  Marionette.CollectionView.extend({
  childView: AppSummaryView
});
