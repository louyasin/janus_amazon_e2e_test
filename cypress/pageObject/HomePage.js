class HomePage {
    
    get searchInput() { return '#twotabsearchtextbox'; } 
    get searchButton() { return '#nav-search-submit-button'; } 
  
    searchForProduct(productName) {
      cy.get(this.searchInput).should('be.visible').type(productName);
      cy.get(this.searchButton).should('be.visible').click(); 
    }
  
}

export default new HomePage();
