import React, { Component, MouseEvent } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import Model from '../model/Model';
import Service from '../model/Service';
import { Types } from '../model/types';
import { ScreenSize } from '~/constants/enums';

import styles from './index.scss';

import Temperature from './Temperature';

type Props = {
    model: Model;
    service: Service | null;
    edit?: boolean;
};

class Small extends Component<Props> {
    render() {
        const { service, model, edit } = this.props;

        if (!service) return null;

        const node = service.getDataByNodeId;

        if (!node) return null;

        const value = node.values.find(x => x.value_id === `${model.id}-${Types.Temperature}`);
        const valueNumber = value.value as number;

        const backgroundClass = cn(styles.background, {
            [styles.low]: valueNumber <= 50,
            [styles.height]: valueNumber >= model.temperatureMax,
        });

        return (
            <div className={styles.wrap} onClick={this.preventDefault}>
                <div className={backgroundClass} />
                <div className={styles.innerWrap}>
                    <Temperature size={ScreenSize.small} model={model} value={value} />
                </div>
            </div>
        );
    }
}

export default observer(Small);
