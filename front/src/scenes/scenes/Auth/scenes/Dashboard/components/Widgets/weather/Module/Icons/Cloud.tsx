import React from 'react';
import cn from 'classnames';
import styles from './index.scss';

type Props = {
    className: string;
};

function Cloud({ className }: Props) {
    const wrapClass = cn(styles.icon, className);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={wrapClass} viewBox="0 0 100 100">
            <path
                d="M37.727 82.727C19.653 82.727 5 68.076 5 50c0-18.076 14.653-32.727 32.727-32.727 12.282 0 22.971 6.775 28.568 16.78 1.358-.23 2.737-.419 4.159-.419C84.01 33.634 95 44.626 95 58.183c0 13.552-10.99 24.544-24.546 24.544H37.727zm32.727-8.183c9.038 0 16.365-7.327 16.365-16.361 0-9.038-7.327-16.366-16.365-16.366-3.273 0-6.305.984-8.864 2.641-2.518-10.875-12.221-19.004-23.863-19.004-13.555 0-24.544 10.99-24.544 24.546 0 13.555 10.99 24.544 24.544 24.544h32.727z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Cloud;
