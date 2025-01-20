import {SalesPortalPage} from "../salesPortal.page";

class DetailsProductModal extends SalesPortalPage {
    readonly ['Modal container'] = '//div[@id="details-modal-container"]'
    readonly ["Edit Product button"] = `${this["Modal container"]}//button[@class = "btn-primary"]`;
    readonly ["Cancel button"] = `${this["Modal container"]}//button[normalize-space(.)="Cancel"]`;
    readonly ["Product Details"] = `${this["Modal container"]}//*[@class="details mb-3"]`;
    readonly ["Product Name in Details"] = `${this["Product Details"]}[1]//p[@class="ms-4"]`;
    readonly ["Product Amount in Details"] = `${this["Product Details"]}[2]//p[@class="ms-4"]`;
    readonly ["Product Price in Details"] = `${this["Product Details"]}[3]//p[@class="ms-4"]`;
    readonly ["Product Manufacturer in Details"] = `${this["Product Details"]}[4]//p[@class="ms-4"]`;
    readonly ["Product Notes in Details"] = `${this["Product Details"]}[6]//p[@class="ms-4"]`;


    async waitForPageOpened(): Promise<void> {
        await this.waitForDisplayed(this["Modal container"]);
        await this.waitForSpinnersToBeHidden('Details modal')
    }

    async waitForDisappeared() {
        await this.waitForDisplayed(this["Modal container"], true);
    }

    async clickOnEditButton() {
        await this.click(this["Edit Product button"]);
    }

    async clickOnCancelButton() {
        await this.click(this["Cancel button"]);
    }

    async getProductDataInDetails() {
        const [name, amount, price, manufacturer, notes] = await Promise.all([
            this.getText(this["Product Name in Details"]),
            this.getText(this["Product Amount in Details"]).then(Number),
            this.getText(this["Product Price in Details"]).then(Number),
            this.getText(this["Product Manufacturer in Details"]),
            this.getText(this["Product Notes in Details"]),
        ])
        return { name, amount, price, manufacturer, notes };
}}

export default new DetailsProductModal();