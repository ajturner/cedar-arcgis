import { newSpecPage } from '@stencil/core/testing';
import { CedarChart } from '../cedar-chart';

describe('cedar-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CedarChart],
      html: `<cedar-chart></cedar-chart>`,
    });
    expect(page.root).toEqualHtml(`
      <cedar-chart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cedar-chart>
    `);
  });
});
