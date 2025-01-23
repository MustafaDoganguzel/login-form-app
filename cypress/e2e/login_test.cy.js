
describe('Başarılı form doldurulduğunda submit edebiliyorum', () => {
    it('success sayfasını açabiliyorum.', () => {
        cy.visit('http://localhost:5173/');

        cy.get('input[name="email"]').type('erdem.guntay@wit.com.tr');
        cy.get('input[name="password"]').type('9fxIH0GXesEwH_I');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
        cy.contains('helal').should('be.visible')






    });
});