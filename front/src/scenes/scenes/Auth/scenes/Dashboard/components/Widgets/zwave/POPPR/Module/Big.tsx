import React, { Component, MouseEvent } from 'react';
import cn from 'classnames';

import { observer } from 'mobx-react';
import Model from '../model/Model';
import Service from '../model/Service';
import Temperature from './Temperature';
import Icon from './Icon';
import Slider from './Slider';

import styles from './index.scss';
import { Types } from '../model/types';
import { ScreenSize } from '~/constants/enums';

type Props = {
    model: Model;
    service: Service | null;
    edit?: boolean;
};

class Big extends Component<Props> {
    preventDefault = (e: MouseEvent) => {
        const { edit } = this.props;
        if (!edit) e.stopPropagation();
    };

    render() {
        const { service, model, edit } = this.props;

        if (!service) return null;

        const node = service.getDataByNodeId;

        if (!node) return null;

        const value = node.values.find(
            x => x.value_id === `${model.id}-${Types.CurrentTemperature}`
        );
        const valueNumber = value.value as number;

        const backgroundClass = cn(styles.background, {
            [styles.low]: valueNumber <= model.temperatureMin,
            [styles.height]: valueNumber >= model.temperatureMax,
        });

        return (
            <div className={styles.wrap} onClick={this.preventDefault}>
                <div className={backgroundClass} />
                <Icon zwaveModel={node} service={service} edit={edit} size={ScreenSize.big} />
                <div className={styles.sliderWrap}>
                    <Temperature zwaveModel={node} size={ScreenSize.big} />
                    <Slider zwaveModel={node} service={service} edit={edit} />
                </div>
            </div>
        );
    }
}

export default observer(Big);
