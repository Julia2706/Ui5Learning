sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("com.jhr.Ui5Learning.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "com.jhr.Ui5Learning",
          async: true,
          manifest: true
        }
      });
    }

  });
});
