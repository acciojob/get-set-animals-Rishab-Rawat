//complete this code
describe('Animal Class Tests', () => {
  it('should create a Cat instance and call methods', () => {
    cy.visit(baseUrl + "/main.html"); 
    cy.window().then(win => {
      const Cat = win.Cat;  // Ensure this is the only declaration of 'Cat'
      cy.stub(win.console, "log").as("consoleLog");

      const species = "Siamese";
      const myCat = new Cat(species);

      myCat.makeSound();
      cy.get("@consoleLog").should("be.calledWith", `The ${species} makes a sound`);

      myCat.purr();
      cy.get("@consoleLog").should("be.calledWith", "purr");
    });
  });

  it('should create a Dog instance and call methods', () => {
    cy.visit(baseUrl + "/main.html"); 
    cy.window().then(win => {
      const Dog = win.Dog;  // Ensure this is the only declaration of 'Dog'
      cy.stub(win.console, "log").as("consoleLog");

      const species = "Golden Retriever";
      const myDog = new Dog(species);

      myDog.makeSound();
      cy.get("@consoleLog").should("be.calledWith", `The ${species} makes a sound`);

      myDog.bark();
      cy.get("@consoleLog").should("be.calledWith", "woof");
    });
  });
});