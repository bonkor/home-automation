import React, { Component } from 'react';
import { inject } from 'components/Hoc';

import CommonService from 'store/common/services/Common';

import Graph from './components/Graph';

import styles from './index.scss';

type Props = {
    service: CommonService;
};

class Hist extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { type: 'all' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(t) {
        const { type } = this.state;

        if (type === t) {
            this.setState({ type: 'all' });
        } else {
            this.setState({ type: t });
        }
    }

    render() {
        const { type } = this.state;
        if (type === 'all') {
            return (
                <div className={styles.wrap}>
                    <Graph type="weather" onChange={this.handleChange} />
                    <Graph type="temperature" onChange={this.handleChange} />
                    <Graph type="humidity" onChange={this.handleChange} />
                    <Graph type="luminance" onChange={this.handleChange} />
                </div>
            );
        }
        return (
            <div className={styles.wrap}>
                <Graph type={type} big onChange={this.handleChange} />
            </div>
        );
    }
}

const injected = inject(Hist, x => ({
    service: x.services.commonService,
}));

export default injected;
