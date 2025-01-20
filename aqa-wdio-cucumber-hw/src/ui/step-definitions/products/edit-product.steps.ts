import { DataTable, When } from "@wdio/cucumber-framework";
import editProductPage from "../../pages/Products/editProduct.page";

When(/^I fill product inputs on "Edit Product" page with following values:$/, async function (table: DataTable) {
  const product = table.rowsHash();
  await editProductPage.fillInputs(product);
  this.createdProduct = {...this.createdProduct, ...product};

});



When(/^Test cucumber table with values:$/, async function (table: DataTable) {
  /*
        | name         | a1b2c3                |
      | manufacturer | Tesla                 |
      | price        | 150                   |
      | amount       | 500                   |
      | Notes        | Test Notes from Table |
      */
  console.log("======================= RowHash =================");

  const rowHash = table.rowsHash();
  console.log(rowHash);

  console.log("======================= Hashes =================");
  const hashes = table.hashes();
  console.log(hashes);
  console.log("======================= Rows =================");

  const rows = table.rows();
  console.log(rows);

  console.log("======================= Raw =================");
  const raw = table.raw();
  console.log(raw);
});
