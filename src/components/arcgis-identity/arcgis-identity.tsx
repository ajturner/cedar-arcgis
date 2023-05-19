import { Component, Host, Prop, Watch, h } from '@stencil/core';
import state from '../../util/state';

/**
 * Simple component to get and store identity as state
 * Avoids drill-through props
 */
@Component({
  tag: 'arcgis-identity',
  shadow: true,
})
export class ArcgisIdentity {

  @Prop() token: string = null;
  @Prop() apiUrl: string = "https://hubqa.arcgis.com";

  componentWillLoad() {
    this.updateState();
  }
  
  @Watch('token')
  @Watch('apiUrl')
  updateState() {
    state.token = this.token;
    state.apiUrl = this.apiUrl;
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
