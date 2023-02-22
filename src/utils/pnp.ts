import { sp } from '@pnp/sp/presets/all'
const env = process.env
const fosUrl =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:8081/fostest'
    : 'https://sharepointmim.gig.services/fos/'
sp.setup({
  sp: {
    baseUrl: fosUrl
  }
})
export default sp
