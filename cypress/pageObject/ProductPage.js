class ProductPage {
    get addToCartButton() { return '#add-to-cart-button'; }
    get noThanksButton() { return 'input.a-button-input[type="submit"][aria-labelledby="attachSiNoCoverage-announce"]'; }
    get quantityDropdownButton() { return '#a-autoid-0-announce'; }

    addToCart() {
      cy.get(this.addToCartButton).click();
    }
  
    declineProtectionPlan() {
      cy.get(this.noThanksButton).click();
    }

    selectQuantity(quantity) {
        cy.get(this.quantityDropdownButton).click();
        cy.get(`#quantity_${quantity - 1}`).click();
    }

    getProductTitle() {
        return cy.get('#title > #productTitle');
    }
  }
  
  export default new ProductPage();
  