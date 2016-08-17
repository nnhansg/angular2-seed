describe('About-2', () => {

  beforeEach( () => {
    browser.get('/about-2');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-about-2 h2')).getText()).toEqual('Features');
  });

});
