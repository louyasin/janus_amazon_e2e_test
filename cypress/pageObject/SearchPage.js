class SearchPage {

    get searchResult() { return '.s-result-list .s-widget-container'; }
  

    getProduct(productName) {
      return cy.contains(this.searchResult + ' .a-size-medium.a-color-base.a-text-normal', productName).click();
    }
 
  }
  
  export default new SearchPage();
  