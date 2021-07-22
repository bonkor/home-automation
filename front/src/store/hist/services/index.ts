import { IWeather } from '../viewModels/type';
import Store from '~/store/Store';
import constants from '~/constants';

class Hist {
    private store: Store;

    constructor(store: Store) {
        this.store = store;

        this.subscribe();

        const { mqttService } = this.store.services;

        mqttService.publish(constants.mqttPathes.histAllRequest);
    }

    private subscribe() {
        this.store.services.mqttService.subscribe(
            constants.mqttPathes.histAllResponse,
            (result: IHist) => {
                this.store.viewModels.histView.hist = result;
                // console.log('hist--hist', this.store.viewModels.histView);
            }
        );
    }
}

export default Hist;
