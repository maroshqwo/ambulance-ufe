import { newE2EPage } from '@stencil/core/testing';

describe('mky-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mky-ambulance-wl-editor></mky-ambulance-wl-editor>');

    const element = await page.find('mky-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
