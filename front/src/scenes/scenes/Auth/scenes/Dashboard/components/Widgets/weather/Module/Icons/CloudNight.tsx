import React from 'react';
import cn from 'classnames';
import styles from './index.scss';

type Props = {
    className: string;
};

function CloudNight({ className }: Props) {
    const wrapClass = cn(styles.icon, className);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={wrapClass} viewBox="0 0 100 100">
            <path
                d="M88.641 51.234A23.874 23.874 0 0 1 93 65.002c0 13.252-10.744 24-24 24H37C19.326 89.001 5 74.674 5 57s14.326-32 32-32c4.005 0 7.83.75 11.362 2.094C51.632 17.73 60.519 10.999 71 10.999c1.51 0 2.982.156 4.414.424a16.082 16.082 0 0 0-.414 3.576c0 8.838 7.163 16 15.998 16 1.233 0 2.427-.152 3.579-.416C94.844 32.018 95 33.49 95 35c-.002 6.267-2.424 11.96-6.359 16.234zM13 57.001c0 13.256 10.743 24 24 24h32c8.837 0 16-7.166 16-15.999 0-8.837-7.163-16.002-16-16.002-3.2 0-6.167.964-8.67 2.582C57.867 40.95 48.382 33 37 33c-13.257 0-24 10.745-24 24zm39.103-28.196h0zm15.32-9.391c-5.8 1.328-10.351 5.82-11.851 11.551a32.166 32.166 0 0 1 9.361 10.442c1.328-.226 2.674-.41 4.067-.41 5.236 0 10.067 1.7 14.011 4.542a15.987 15.987 0 0 0 3.573-6.965c-9.707-1.808-17.352-9.447-19.16-19.16z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}

export default CloudNight;
