import { newE2EPage } from '@stencil/core/testing';

describe('cedar-chart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cedar-chart></cedar-chart>');

    const element = await page.find('cedar-chart');
    expect(element).toHaveClass('hydrated');
  });
});
