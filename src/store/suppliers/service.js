import fetch from "@/utils/fetch";
import API from "@/constants/api";

class SupplierService {
    loadSuppliers(data) {
        return fetch.fetch({
            urlPostfix: API.SUPPLIERS,
            params: data,
      })
    }

    loadSupplier(data) {
        return fetch.fetch({
            urlPostfix: `${API.SUPPLIERS}${data}/`,
        });
    }
}

export default new SupplierService();
