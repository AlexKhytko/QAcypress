/// <reference types="cypress" />

describe("MAIN PAGE", () => {
  beforeEach(() => {
    cy.visit("https://credit7.ua/");
  });

  it("check header", () => {
    // Проверка наличия текста в .page-home__top-section
    cy.get('.page-home__top-section')
      .contains('Бери гроші та вигравай три новеньких Samsung Galaxy S25 і знижки -99%!');

    // Проверка элементов в .header__container
    cy.get('.header__container')
      .contains('Як взяти')
      .contains('Як сплатити')
      .contains('Кредитні продукти')
      .contains('Про компанію')
      .contains('Новини')
      .contains('Увійти')
      .contains('093 033 07 33')
      .contains('Повернути кредит');
  });

  it("find header container", () => {
    // Поправим селектор для поиска дочерних элементов
    cy.get('.header.noMiddle.unlogged').find('.header__container');
  });

  it.only('check children of header container', () => {
    // Проверка дочерних элементов внутри .header__container
    cy.get('.header__container').children().should('have.length.greaterThan', 0);  // проверка, что дочерние элементы есть
  });
});








