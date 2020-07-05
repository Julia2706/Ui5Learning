sap.ui.define([
  "sap/ui/test/Opa5",
  "com/jhr/Ui5Learning/test/integration/arrangements/Startup",
  "com/jhr/Ui5Learning/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
