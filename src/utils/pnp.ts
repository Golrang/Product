import { sp } from '@pnp/sp/presets/all';
const env = process.env;
const productSuggestionUrl =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:8081/productsuggestion'
    : 'https://sharepointmim.gig.services/productsuggestion/';
sp.setup({
  sp: {
    baseUrl: productSuggestionUrl,
  },
});
export default sp;
