import { computed } from 'mobx';

import Store from '~/store/Store';

class Service {
    private store: Store;

    constructor(store: Store) {
        this.store = store;
    }

    @computed
    get getData() {
        return this.store.viewModels.histView;
    }
}

export default Service;
