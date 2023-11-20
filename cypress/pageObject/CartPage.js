class CartPage {
    
    get successMessage() { return '.a-size-medium-plus'; }
  
    verifySuccessMessage() {
      return cy.get(this.successMessage).should('be.visible');
    }
    
    verifyProductQuantity(expectedQuantity) {
        return cy.get('.a-color-base.ewc-quantity-text').should('have.text', expectedQuantity.toString());
    }
  }
  
  export default new CartPage();
  