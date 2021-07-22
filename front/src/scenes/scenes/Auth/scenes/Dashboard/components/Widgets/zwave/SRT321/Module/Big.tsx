import React, { Component, MouseEvent } from 'react';
import cn from 'classnames';

import { observer } from 'mobx-react';
import Model from '../model/Model';
import Service from '../model/Service';
import { Types } from '../model/types';
import { ScreenSize } from '~/constants/enums';

import styles from './index.scss';

import Temperature from './Temperature';
import Slider from './Slider';
import Fire from './Fire';

type Props = {
    model: Model;
    service: Service | null;
    edit?: boolean;
    dialog?: boolean;
};

class Big extends Component<Props> {
    preventDefault = (e: MouseEvent) => {
        const { edit } = this.props;
        if (!edit) e.stopPropagation();
    };

    render() {
        const { service, model, edit, dialog } = this.props;

        if (!service) return null;

        const node = service.getDataByNodeId;

        if (!node) return null;

        const value = node.values.find(x => x.value_id === `${model.id}-${Types.Temperature}`);
        const valueNumber = value.value as number;

        const mode = node.values.find(x => x.value_id === `${model.id}-${Types.Mode}`);
        const modeStr = mode.value as string;

        const backgroundClass = cn(styles.background, {
            [styles.low]: valueNumber <= 50,
            [styles.height]: valueNumber >= model.temperatureMax,
        });

        return (
            <div className={styles.wrap} onClick={this.preventDefault}>
                <div className={backgroundClass} />
                <div className={styles.innerWrap}>
                    <div className={styles.innerWrapRow}>
                        <Temperature
                            size={ScreenSize.big}
                            dialog={dialog}
                            model={model}
                            value={value}
                        />
                        {modeStr === 'Heating' ? (
                            <Fire className={styles.icon} dialog={dialog} />
                        ) : (
                            ``
                        )}
                    </div>
                    <Slider zwaveModel={node} service={service} model={model} edit={edit} />
                </div>
            </div>
        );
    }
}

export default observer(Big);
