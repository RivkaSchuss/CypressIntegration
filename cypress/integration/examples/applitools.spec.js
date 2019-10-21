describe('Hello Cypress, This is Applitools', () => {
  it('works', () => {
    cy.visit('https://google.com');
    cy.eyesOpen({
      apiKey: 'ipnvklZBLcUmg110VwqiLxhJAdjAyrCXtekOCHaHieoZQ110', 
      appName: 'Hello Cypress, This is Applitools!',
      testName: 'My first Cypress Test',
      browser: { width: 800, height: 600 },
    });
    cy.eyesCheckWindow('Login Page');
    cy.eyesClose();
  });
});