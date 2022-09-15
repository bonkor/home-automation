import React, { Component, MouseEvent } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import Model from '../model/Model';
import Service from '../model/Service';
import { Types } from '../model/types';
import { ScreenSize } from '~/constants/enums';

import styles from './index.scss';

import Icon from './Icon';
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
            [styles.low]: valueNumber <= model.temperatureMin,
            [styles.height]: valueNumber >= model.temperatureMax,
        });

        return (
            <div className={styles.wrap}>
                <div className={backgroundClass} />
                <Icon size={ScreenSize.small} />
                <Temperature size={ScreenSize.small} zwaveModel={node} />
            </div>
        );
        // onClick={this.preventDefault}
    }
}

export default observer(Small);
