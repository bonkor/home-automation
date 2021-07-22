import { StatelessComponent, ComponentClass } from 'react';
import {
    INode,
    INodeModelConstructor,
    AddProps,
    INodeServiceConstructor,
    WidgetProps,
} from '~/store/dashboard/viewModels/Types';

import BaseWidget from '../../model/BaseWidget';
import AddWidget from '../AddWidget';

import SmallComponent from '../Module/Small';
import BigComponent from '../Module/Big';
import DialogEditComponent from '../Module/DialogEdit';
import DialogViewComponent from '../Module/DialogView';
import Model from './Model';

import Service from './Service';

class Widget extends BaseWidget implements INode {
    model: INodeModelConstructor = Model;

    manufacturerid: string = '0x010f';

    producttype: string = '0x1301';

    productid: string = '0x4001';

    addWidget: StatelessComponent<AddProps> = AddWidget;

    service: INodeServiceConstructor = Service;

    smallComponent: ComponentClass<WidgetProps<Model>> = SmallComponent;

    bigComponent: ComponentClass<WidgetProps<Model>> = BigComponent;

    dialogEditComponent: ComponentClass<WidgetProps<Model>> = DialogEditComponent;

    dialogViewComponent: StatelessComponent<WidgetProps<Model>> = DialogViewComponent;
}

export default Widget;
