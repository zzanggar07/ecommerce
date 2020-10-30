import Axios from 'axios'
import IRepository from '../interface/IRepository'

class ListRepository implements IRepository {
   readonly _url: string = '/ajax/customer/v1/list'

   fetchData(params: any) {
      return Axios.get(this.url, {
         responseType: 'json',
         timeout: 10000,
        params,
      })
   }

   get url(): string {
      return this._url
   }
}

export default new ListRepository()
