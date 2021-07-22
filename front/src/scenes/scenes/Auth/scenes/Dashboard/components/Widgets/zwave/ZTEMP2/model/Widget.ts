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

    manufacturerid: string = '0x019b';

    producttype: string = '0x0004';

    productid: string = '0x0204';

    addWidget: StatelessComponent<AddProps> = AddWidget;

    service: INodeServiceConstructor = Service;

    smallComponent: ComponentClass<WidgetProps<Model>> = SmallComponent;

    bigComponent: ComponentClass<WidgetProps<Model>> = BigComponent;

    dialogEditComponent: ComponentClass<WidgetProps<Model>> = DialogEditComponent;

    dialogViewComponent: StatelessComponent<WidgetProps<Model>> = DialogViewComponent;
}

export default Widget;
