sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function(Controller) {
    "use strict";
  
    return Controller.extend("com.jhr.Ui5Learning.controller.SecondView", {

      onNavBack: function(){

            history.go(-1);
           
          }
    });
  });
  