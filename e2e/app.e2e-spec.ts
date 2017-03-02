import { PruebaFormulariosAngularPage } from './app.po';

describe('prueba-formularios-angular App', function() {
  let page: PruebaFormulariosAngularPage;

  beforeEach(() => {
    page = new PruebaFormulariosAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
