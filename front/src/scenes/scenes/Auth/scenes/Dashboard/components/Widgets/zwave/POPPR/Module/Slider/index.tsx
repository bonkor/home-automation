import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { IZwaveNode } from '~/store/z-wave/IZwaveNode';
import { Slider } from '@blueprintjs/core';
import { Types } from '../../model/types';
import Service from '../../model/Service';

import Model from '../../model/Model';
import styles from '../index.scss';

const max = 28;
const min = 4;

type Props = {
    zwaveModel: IZwaveNode;
    service: Service;
    model: Model;
    edit?: boolean;
};

class SliderWrap extends Component<Props> {
    @observable
    private value: number = 0;

    @observable
    private changing: boolean = false;

    componentDidMount() {
        this.setNodeValue();
    }

    componentDidUpdate() {
        if (!this.changing) {
            this.setNodeValue();
        }
    }

    @action
    setNodeValue = () => {
        const { zwaveModel } = this.props;

        const levelParam = zwaveModel.values.find(
            x => x.value_id === `${x.node_id}-${Types.SetTemperature}`
        );

        const level = levelParam ? levelParam.value : 0;

        this.value = Number(level);
    };

    @action
    change = (value: number) => {
        this.value = value;
        this.changing = true;
    };

    @action
    changeLevel = (value: number) => {
        const { service, zwaveModel } = this.props;

        this.changing = false;
        service.changeTemperature(zwaveModel, value);
    };

    labelRenderer = (value: number) => {
        if (max === value) {
            return '';
        }

        return value.toFixed(0);
    };

    render() {
        const { edit, zwaveModel } = this.props;

        zwaveModel.values.find(x => x.value_id === `${x.node_id}-${Types.SetTemperature}`);

        return (
            <Slider
                className={styles.slider}
                min={min}
                max={max}
                stepSize={1}
                value={this.value}
                labelRenderer={this.labelRenderer}
                labelStepSize={5}
                onChange={this.change}
                onRelease={this.changeLevel}
                disabled={edit}
                horizontal
            />
        );
    }
}

export default observer(SliderWrap);
