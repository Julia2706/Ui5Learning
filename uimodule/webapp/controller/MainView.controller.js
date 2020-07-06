sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("com.jhr.Ui5Learning.controller.MainView", {

    onPress: function(){

      var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
          loRouter.navTo("SecondView");
    }
  });
});
