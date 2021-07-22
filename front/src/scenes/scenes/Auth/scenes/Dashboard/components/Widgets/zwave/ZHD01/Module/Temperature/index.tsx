import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';

import Model from '../../model/Model';
import { IValue } from '~/store/z-wave/IZwaveNode';

import Thermometr from './Thermometr';
import ValueRender from './ValueRender';

import styles from './index.scss';
import { ScreenSize } from '~/constants/enums';

type Props = {
    value: IValue;
    model: Model;
    size: ScreenSize;
    dialog?: boolean;
};

function Temperature({ value, model, size, dialog }: Props) {
    const valueNumber = value.value as number;

    return (
        <div className={styles.wrap}>
            <div className={styles.innerWrap}>
                <Thermometr size={size} value={valueNumber} />
                <ValueRender size={size} dialog={dialog}>
                    {valueNumber}&#176; C
                </ValueRender>
            </div>
        </div>
    );
}

export default observer(Temperature);
