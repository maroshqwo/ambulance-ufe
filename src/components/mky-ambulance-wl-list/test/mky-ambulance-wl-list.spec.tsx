import { newSpecPage } from '@stencil/core/testing';
import { MkyAmbulanceWlList } from '../mky-ambulance-wl-list';

describe('mky-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MkyAmbulanceWlList],
      html: `<mky-ambulance-wl-list></mky-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as MkyAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
