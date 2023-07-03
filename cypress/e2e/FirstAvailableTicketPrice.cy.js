/// <reference types = "cypress" />

describe('GetFirstAvailableTicketPrice', () => {

  let departurePort = 'VIE';
  let arrivalPort = 'MLA';

  before('Open the home page', () => {
    cy.clearCookies();
    cy.visit('https://airmalta.com/');
    cy.contains('Reject All').click();
  })

  it('GetFirstAvailableTicketPrice', () => {

    /**
     * These steps just for enter flight information such as Departure,Arrival,Date...
     */

    // Select trip type
    cy.getBy
    cy.get("[value='Round trip']").click();
    cy.contains("One way").click();

    // Select Departure Airport
    cy.get(".route-selection-origin").type(departurePort);
    cy.get('.airport-option ').eq(0).click(); 
    cy.contains(departurePort).should('be.visible');

    // Select Destination Airport
    cy.get(".route-selection-destination").type(arrivalPort);
    cy.get('.airport-option ').eq(0).click();
    cy.contains(arrivalPort).should('be.visible');

    // Select departure date
    cy.get("input[name='DepartureDate1']").click();
    cy.get(".DayPicker-Day.DayPicker-Day--today").click();
    cy.contains("Find flights").click();

    // Click first available flight
    if(cy.contains('Flexible date').should('be.visible')){
      cy.contains('Flexible date').click();
    }
    cy.get('.sc-bAaCjq.bXDHls > div').eq(1).find("button[class='sc-bqlKNb gGQXDF']").eq(0).click()
  })
})