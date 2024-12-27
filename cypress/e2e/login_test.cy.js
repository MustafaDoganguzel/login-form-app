
describe('Başarılı form doldurulduğunda submit edebiliyorum', () => {
    it('success sayfasını açabiliyorum.', () => {
        cy.visit('/');
        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/success');
    });
  });