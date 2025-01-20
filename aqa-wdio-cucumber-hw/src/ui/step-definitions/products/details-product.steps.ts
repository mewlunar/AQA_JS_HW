import {Then, When} from "@wdio/cucumber-framework";
import DetailsProductModal from "../../pages/Products/detailsProduct.modal";
import ProductsPageService from "../../services/Products/productsPage.service";

Then(/^I verify that the value of "([^"]*)" for the created product matches on the "Details modal" page$/, async function (field: string) {
    const { createdProduct } = this;
    const actualData = await DetailsProductModal.getProductDataInDetails();
    expect(actualData[field]).toEqual(createdProduct[field]);
});

Then(/^I verify that all details of the created product match on the "Details modal" page$/, async function () {
    const { createdProduct } = this;
    await ProductsPageService.checkProductInTable(createdProduct)
});

When(/^I click on "Cancel Button" in "Details modal" page$/, async function () {
    await DetailsProductModal.clickOnCancelButton()
});