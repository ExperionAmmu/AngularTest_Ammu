import { FormgeneratorPage } from './app.po';

describe('formgenerator App', function() {
  let page: FormgeneratorPage;

  beforeEach(() => {
    page = new FormgeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
