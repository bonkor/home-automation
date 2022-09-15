import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';

import Model from '../../model/Model';
import { IZwaveNode } from '~/store/z-wave/IZwaveNode';

import { Types } from '../../model/types';
import { ScreenSize } from '~/constants/enums';

type Props = {
    zwaveModel: IZwaveNode;
    size: ScreenSize;
};

function Temperature({ zwaveModel, size }: Props) {
    const currentParam = zwaveModel.values.find(
        x => x.value_id === `${x.node_id}-${Types.Temperature}`
    );

    const setParam = zwaveModel.values.find(x => x.value_id === `${x.node_id}-${Types.Level}`);

    const ctemp = currentParam ? currentParam.value : 0;
    const stemp = setParam ? setParam.value : 0;

    if (size === ScreenSize.small) {
        return <h4>{ctemp}&#176; C</h4>;
    }

    return (
        <h3>
            {ctemp}&#176; C / {stemp}&#176; C
        </h3>
    );
}

export default observer(Temperature);
