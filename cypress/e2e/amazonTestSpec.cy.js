import HomePage from '../pageObject/HomePage.js';
import SearchPage from '../pageObject/SearchPage.js';
import ProductPage from '../pageObject/ProductPage.js';
import CartPage from '../pageObject/CartPage.js'; 

describe('Amazon Product Tests', () => {

  const product = "PlayStation 5 Console (PS5)";
  const asin = "B0BCNKKZ91";
  const desiredQuantity = 4;

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

  it('search by product name/text and verify the expected product is found', () => {
    cy.reload();
    HomePage.searchForProduct(product);
    SearchPage.getProduct(product).should('contain.text', product);
    ProductPage.getProductTitle().should('contain.text', product);


  });

  it('Searches by ASIN and verifies the product', () => {
    cy.reload();
    HomePage.searchForProduct(asin); 
    SearchPage.getProduct(product).should('be.visible');
    ProductPage.getProductTitle().should('contain.text', product.trim());

  });


  it('adds multiple quantities of a product to the cart', () => {
    cy.reload();
    HomePage.searchForProduct(product);
    SearchPage.getProduct(product).should('contain.text', product);
    ProductPage.selectQuantity(desiredQuantity);
    ProductPage.addToCart();
    ProductPage.declineProtectionPlan();
    CartPage.verifySuccessMessage().should('contain.text', 'Added to Cart');
    CartPage.verifyProductQuantity(desiredQuantity);
  });

/*
  it('empty search query returns home page URL', () => {
  
  })


  it('cannot add more than quantity of a product to the cart', () => {
    //testing edge cases
  });

  it('cannot add quantity 0 of a product to the cart', () => {
    //testing edge cases
  });

  it('verifies "Buy Now" button completes checkout' , () => {

  });
  */

});
