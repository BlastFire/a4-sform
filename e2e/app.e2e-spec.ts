import { A4SformPage } from './app.po';

describe('a4-sform App', () => {
  let page: A4SformPage;

  beforeEach(() => {
    page = new A4SformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
