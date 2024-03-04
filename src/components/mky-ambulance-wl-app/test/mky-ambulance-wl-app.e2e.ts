import { newE2EPage } from '@stencil/core/testing';

describe('mky-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mky-ambulance-wl-app></mky-ambulance-wl-app>');

    const element = await page.find('mky-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
