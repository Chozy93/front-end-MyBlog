import http from '../http-common'

class BookDataService {

    getAll(searchSelect, searchKeyword, page, size) {
        return http.get(`/book?searchSelect=${searchSelect}&searchKeyword=${searchKeyword}&page=${page}&size=${size}`);
      }
    
      get(bno) {
        return http.get(`/book/${bno}`);
      }
    
}

export default new BookDataService()
