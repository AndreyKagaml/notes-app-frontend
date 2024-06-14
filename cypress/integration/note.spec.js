describe('Notes Application', () => {
    it('should create a new note', () => {
        cy.visit('/');
        cy.get('input').type('New Note');
        cy.get('textarea').type('This is the content of the new note.');
        cy.get('button').contains('Save').click();
        cy.get('ul').contains('New Note');
    });
});
