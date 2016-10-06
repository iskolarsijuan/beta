import { BetaSSJPage } from './app.po';

describe('beta-ssj App', function() {
  let page: BetaSSJPage;

  beforeEach(() => {
    page = new BetaSSJPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
