import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group similar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('shows an h1 element with greeting text', () => {
    expect(component.find('h1')).to.exist;
    expect(component.find('h1')).to.contain('Welcome to Redux!');
  })

});
