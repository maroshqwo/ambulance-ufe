import { newSpecPage } from '@stencil/core/testing';
import { MkyAmbulanceWlList } from '../mky-ambulance-wl-list';

describe('mky-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MkyAmbulanceWlList],
      html: `<mky-ambulance-wl-list></mky-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <mky-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mky-ambulance-wl-list>
    `);
  });
});
