import { newSpecPage } from '@stencil/core/testing';
import { MkyAmbulanceWlApp } from '../mky-ambulance-wl-app';

describe('mky-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [MkyAmbulanceWlApp],
      html: `<mky-ambulance-wl-app base-path="/"></mky-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('mky-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [MkyAmbulanceWlApp],
      html: `<mky-ambulance-wl-app base-path="/ambulance-wl/"></mky-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('mky-ambulance-wl-list');
  });
});
