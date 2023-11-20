import HomePage from '../pageObject/HomePage.js';
import SearchPage from '../pageObject/SearchPage.js';
import ProductPage from '../pageObject/ProductPage.js';

describe('Amazon Product Tests', () => {

  const product = "PlayStation 5 Console (PS5)";
  

  beforeEach(() => {
    cy.visit('https://www.amazon.com/');
    
  });

  it('verify product(s) can be added to cart', () => {
    cy.reload();
    HomePage.searchForProduct(product);
    SearchPage.getProduct(product).should('contain.text', product);
    ProductPage.addToCart();
    ProductPage.declineProtectionPlan();
    CartPage.verifySuccessMessage().should('contain.text', 'Added to Cart');
  });



});
