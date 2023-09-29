import { newE2EPage } from '@stencil/core/testing';

describe('cedar-configuration-chooser', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cedar-configuration-chooser></cedar-configuration-chooser>');

    const element = await page.find('cedar-configuration-chooser');
    expect(element).toHaveClass('hydrated');
  });
});
