import Axios from 'axios'
import IRepository from '../interface/IRepository'
// import {send} from "@src/lib/myHttp";

class ListRepository implements IRepository {
   readonly _url: string = '/ajax/customer/v1/list'

   fetchData(params: any) {
      // send 공통 방식으로 추후 개선
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
