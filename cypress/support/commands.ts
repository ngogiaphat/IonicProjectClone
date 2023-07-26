import {Storage} from "@ionic/storage";
const storage = new Storage();
storage.create();
Cypress.Commands.add("bypassTutorial", () => {
  cy.log("bypass tutorial");
  storage.set("ion_did_tutorial", true);
});
Cypress.Commands.add("enableTutorial", () => {
  cy.log("enable tutorial");
  cy.visit("/", {
    onBeforeLoad(){
      storage.set("ion_did_tutorial", false);
    },
  });
});
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to bypass the tutorial screens in the app
      */
      bypassTutorial(): Chainable<JQuery<HTMLElement>>;
      /**
       * Custom command to avoid bypassing the tutorial screens in the app
      */
      enableTutorial(): Chainable<JQuery<HTMLElement>>;
    }
  }
};