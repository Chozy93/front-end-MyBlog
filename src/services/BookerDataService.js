import http from '../http-common'

class BookerDataService {

    getAll(searchSelect, searchKeyword, page, size) {
        return http.get(`/booker?searchSelect=${searchSelect}&searchKeyword=${searchKeyword}&page=${page}&size=${size}`);
      }
    
      get(bkno) {
        return http.get(`/booker/${bkno}`);
      }
    
      create(data) {
        return http.post("/booker", data);
      }
    
      update(bkno, data) {
        return http.put(`/booker/${bkno}`, data);
      }
    
      delete(bkno) {
        return http.delete(`/booker/deletion/${bkno}`);
      }
    
}

export default new BookerDataService()
