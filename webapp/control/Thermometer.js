sap.ui.define([
  "sap/ui/core/Control"
], function (Control) {
  "use strict";
  return Control.extend("keepcool.sensormanager.control.Thermometer", {
    metadata: {
      properties: {
        value: { type: "float", defaultValue: 0 },
        color: { type: "string" }
      }
    },

    renderer: {
      apiVersion: 2,
      render: function (oRM, oControl) {
        if (oControl.getValue()) {
          oRM.openStart("div", oControl);
          oRM.class("thermometer-control");
          oRM.openEnd();
          oRM.text(oControl.getValue());
          oRM.close("div");
        }
      }
    }
  });
});
