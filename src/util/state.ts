import { createStore } from "@stencil/store";

const { state } = createStore({
  token: "",
  apiUrl: "https://hubqa.arcgis.com"
});

// onChange('clicks', value => {
//     identity.squaredClicks = value ** 2;
// });

export default state;