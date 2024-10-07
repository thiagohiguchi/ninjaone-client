/* eslint-disable */

describe('device-itemst devices', () => {
  it('should load the page and display data from the API', () => {
    // Intercept the API request and mock the response
    cy.intercept('GET', 'http://localhost:3000/devices', {
      statusCode: 200,
      body: [
        {
            "id": "e8okoP2l5",
            "system_name": "DESKTOP-SMART",
            "type": "WINDOWS",
            "hdd_capacity": "10"
        },
        {
            "id": "Th3ngERn9",
            "system_name": "MAC-LEADER",
            "type": "MAC",
            "hdd_capacity": "2048"
        },
        {
            "id": "Q1JdBnE12",
            "system_name": "ARMANDO",
            "type": "WINDOWS",
            "hdd_capacity": "256"
        },
        {
            "id": "e7ocoQ2n3",
            "system_name": "MIGUEL-PC",
            "type": "WINDOWS",
            "hdd_capacity": "500"
        },
        {
            "id": "Jj5bn3G2H",
            "system_name": "FIRST-MAC",
            "type": "MAC",
            "hdd_capacity": "180"
        },
    ]
    }).as('getItems');

    // Visit the page
    cy.visit('http://localhost:5173/ninjaone-client/'); // Update the URL according to your local server setup

    // Wait for the API request
    cy.wait('@getItems');

    // Check that the list is rendered
    cy.get('[data-cy="device-list"]').within(() => {
      cy.get('[data-cy="device-item"]').should('have.length', 5); // Expect 3 list items
    });
  });
});