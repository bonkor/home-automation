import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MetricsGraphics from 'react-metrics-graphics';
import { inject } from 'components/Hoc';

import CommonService from 'store/common/services/Common';
import Service from './Service';

import styles from './index.scss';

type Props = {
    service: CommonService;
    type: string;
    big: boolean;
};

class Graph extends Component<Props> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { type } = this.props;
        const { onChange } = this.props;
        onChange(type);
    }

    render() {
        const { type } = this.props;
        const { big } = this.props;
        const { service } = this.props;
        const { store } = service;

        let width = 600;
        let height = 250;
        if (big) {
            width = 1800;
            height = 750;
        }

        const s = new Service(store);
        if (!s.getData.hist) return null;

        const arr = s.getData.hist[type];
        if (!arr) return null;

        const d = arr.map(x => {
            return { date: new Date(x.time), value: x.value };
        });

        return (
            <div className={styles.wrap}>
                <MetricsGraphics
                    area={0}
                    axes_not_compact="compact"
                    bar_orientation="horizontal"
                    baseline_accessor={10}
                    baselines={0}
                    binned={1}
                    bins="10"
                    click={this.handleClick}
                    european_clock={0}
                    flip_area_under_y_value={1}
                    is_line={1}
                    min_y_from_data={1}
                    show_tooltips={0}
                    utc_time={0}
                    x_mouseover="%H:%M "
                    flip_area_under_y_value1={0}
                    title={type}
                    data={d}
                    width={width}
                    height={height}
                    x_accessor="date"
                    y_accessor="value"
                />
            </div>
        );
    }
}

const injected = inject(Graph, x => ({
    service: x.services.commonService,
}));

export default injected;
// export default observer(Graph);
