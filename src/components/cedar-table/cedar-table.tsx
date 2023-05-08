import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cedar-table',
  styleUrl: 'cedar-table.css',
  shadow: true,
})
export class CedarTable {

  render() {
    return (
      <Host>
        <slot></slot>
        <strong>I'm a Table!</strong>
        
      </Host>
    );
  }

}
