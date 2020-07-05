/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "com/jhr/Ui5Learning/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
