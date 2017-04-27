import { BubblechatPage } from './app.po';

describe('bubblechat App', () => {
  let page: BubblechatPage;

  beforeEach(() => {
    page = new BubblechatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
