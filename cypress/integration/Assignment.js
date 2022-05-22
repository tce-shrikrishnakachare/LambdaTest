/// <reference types="cypress" />

const fixtureData = require("../fixtures/example.json");

context('Assignment Task: Cypress 101', function () {

    specify('Test Scenario 1:', function () {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo');
        cy.get("p.inline-block").eq(3).contains("Progress Bar & Sliders").click().then((el) => {
            cy.wrap(el).siblings("ul").find("li:last-child").contains("Drag & Drop Sliders").click();
        });
        cy.get("#rangeSuccess").should("have.text", "15");
        cy.get('input[type="range"]').eq(2).invoke("val", 95).trigger("click");
        cy.get("#rangeSuccess").invoke('val', 95).then((el) => {
            expect(el.text()).to.eq('95');
        });
    });

    specify('Test Scenario 2:', function () {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo');
        cy.viewport("samsung-note9");
        cy.contains("a", "Input Form Submit").click();
        cy.get("#name").type(fixtureData.name);
        cy.get("#inputEmail4").type(fixtureData.email);
        cy.get("#inputPassword4").type(fixtureData.password);
        cy.get("#company").type(fixtureData.company);
        cy.get("#websitename").type(fixtureData.webSite);
        cy.get("select").select(fixtureData.country);
        cy.get("#inputCity").type(fixtureData.city);
        cy.get("#inputAddress1").type(fixtureData.add);
        cy.get("#inputAddress2").type(fixtureData.add1);
        cy.get("#inputState").type(fixtureData.state);
        cy.get("#inputZip").type(fixtureData.PIN);
        cy.get('button[type="submit"]').contains("Submit").click();
        cy.lighthouse({
            performance: 50,
            accessibility: 90,
            "best-practices": 80,
            seo: 80,
            pwa: 40,
        });
        Cypress.session.clearAllSavedSessions();
        cy.get(".success-msg.hidden").should("have.text", "Thanks for contacting us, we will get back to you shortly.").and("be.visible"); 
    });
});