sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sap.ui.demo.controller.App", {
        onInit: function () {
            // Обработка клика на Лого
            var oBox = this.byId("mainBox");
            oBox.addEventDelegate({
                onclick: function () {
                    this.onMain();
                }.bind(this)
            });
        },

        onMain: function () {
            this.getOwnerComponent().getRouter().navTo("Main");

            window.scrollTo({ top: 0, behavior: "smooth" });
        },

        onProducts: function () {
            this.getOwnerComponent().getRouter().navTo("Products", { id: 1 });

            window.scrollTo({ top: 0, behavior: "smooth" });
        },

        onAbout: function () {
            this.getOwnerComponent().getRouter().navTo("Main");

            setTimeout(() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }, 300);
        },

        onCart: function () {
            this.getOwnerComponent().getRouter().navTo("Cart");

            window.scrollTo({ top: 0, behavior: "smooth" });
        },

        onAccount: function () {
            this.getOwnerComponent().getRouter().navTo("Account", { tab: "Profile" });

            window.scrollTo({ top: 0, behavior: "smooth" });
        }

    });
});