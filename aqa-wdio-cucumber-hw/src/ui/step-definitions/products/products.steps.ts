import {Then, When, After} from "@wdio/cucumber-framework";
import productsPageService from "../../services/Products/productsPage.service";
import productsPage from "../../pages/Products/products.page";
import _ from "lodash";
import { SignInApiService } from "../../../api/service/signInApiService.service";
import productApiService from "../../../api/service/productApi.service";

const signInApiService = new SignInApiService();

When(/^I open "Add New Product" page$/, async function () {
  await productsPageService.openAddNewProductPage();
});

Then(/^I should see product with name "([^"]*)" in table on "Products" page$/, async function (productName: string) {
  const product = await productsPage.getProductFromTable(productName);
  expect(product.name).toBe(productName);
});

Then(/^I should see created product in table on "Products" page$/, async function () {
  const createdProduct = this.createdProduct;
  const product = await productsPage.getProductFromTable(createdProduct.name);
  expect(product).toMatchObject(_.pick(createdProduct, ["name", "price", "manufacturer"]));
});

When(/^I create product via API$/, async function () {
  const token = await signInApiService.signInAsAdmin();
  const createdProduct = await productApiService.create(token);
  this.createdProduct = createdProduct;
});

When(/^I open "(Edit Product|Details Modal)" page for created product on "Products" page$/, async function (pageType) {
  const createdProduct = this.createdProduct;

  if (pageType === "Edit Product") {
    await productsPageService.openEditProductPage(createdProduct.name);
  } else if (pageType === "Details Modal") {
    await productsPageService.openDetailsProductPage(createdProduct.name);
  }
});

After(async function () {
  if (this.createdProduct) {
    const token = signInApiService.getToken();
    await productApiService.delete(token, this.createdProduct._id);
  }
});
