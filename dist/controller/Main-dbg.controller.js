sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sap.ui.demo.controller.Main", {
        onInit: function () {
            const oModel = this.getOwnerComponent().getModel("categories");
            this.getView().setModel(oModel);

              // Создаем JSON модель с 3 картинками
            const oData = {
                images: [
                    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000",
                    "https://meritchemicals.com/storage/hero_slides/KokQqL2L0gH9rofzUJQJ_1772695161.webp",
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
                ]
            };

            const oImagesModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oImagesModel, "slider");
        },
        
        onItemPress: function(oEvent) {
            var oItem = oEvent.getSource();
            var oBindingContext = oItem.getBindingContext();
            var sId = oBindingContext.getProperty("ID");
            this.getOwnerComponent().getRouter().navTo("Products", { id: sId });
        }
    });
});
