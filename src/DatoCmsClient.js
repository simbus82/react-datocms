import { SiteClient, Image } from 'datocms-client'

const DATOCMS_CLIENT = 'bf8202fda53e8401c21c51f513ce82'

class DatoCmsClient {
  constructor () {
    this.client = new SiteClient(DATOCMS_CLIENT)
  }

  getArticoli = () =>
    this.client.items.all({ 'filter[type]': 'articolo' })

  getArticolo = (articoloId) =>
    this.client.items.find(id)
}

export default new DatoCmsClient()
