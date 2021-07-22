import { observable } from 'mobx';
import { IHist } from './type';

class histData {
    @observable
    hist?: IHist;
}

export default histData;
