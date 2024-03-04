import { newSpecPage } from '@stencil/core/testing';
import { MkyAmbulanceWlEditor } from '../mky-ambulance-wl-editor';

describe('mky-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [MkyAmbulanceWlEditor],
      html: `<mky-ambulance-wl-editor entry-id="@new"></mky-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll('md-filled-button');
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll('md-outlined-button');
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll('md-filled-tonal-button');
    expect(items.length).toEqual(1);
  });
});
