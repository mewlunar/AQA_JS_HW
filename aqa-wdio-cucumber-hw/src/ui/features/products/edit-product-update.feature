Feature: [UI] [Products] [Edit]

  Scenario: Create product with valid data
    Given I create product via API
    And I open Sales Portal
    When I login as Admin
    And I open "Products" page
    And I open "Details Modal" page for created product on "Products" page
    Then I verify that the value of "Name" for the created product matches on the "Details modal" page
    And I verify that the value of "Amount" for the created product matches on the "Details modal" page
    And I verify that the value of "Price" for the created product matches on the "Details modal" page
    And I verify that the value of "Manufacturer" for the created product matches on the "Details modal" page
    And I verify that the value of "Notes" for the created product matches on the "Details modal" page
    When I click on "Cancel Button" in "Details modal" page
    And I open "Edit Product" page for created product on "Products" page
    And I fill product inputs on "Edit Product" page with following values:
      | manufacturer | Samsung |
      | price        | 480     |
      | amount       | 3       |
    And I click on "Save Product button" on "Edit Product" page
    Then I should see notification with text "Product was successfully updated" on "Products" page
    When I open "Details Modal" page for created product on "Products" page
    Then I verify that all details of the created product match on the "Details modal" page
    When I click on "Cancel Button" in "Details modal" page

