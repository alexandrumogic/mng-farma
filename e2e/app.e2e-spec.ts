import { MngFarmaAppPage } from './app.po';

describe('mng-farma-app App', () => {
  let page: MngFarmaAppPage;

  beforeEach(() => {
    page = new MngFarmaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
