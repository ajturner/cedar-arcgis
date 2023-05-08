import { newE2EPage } from '@stencil/core/testing';

describe('cedar-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cedar-table></cedar-table>');

    const element = await page.find('cedar-table');
    expect(element).toHaveClass('hydrated');
  });
});
