import React from 'react';
import cn from 'classnames';
import styles from './index.scss';

type Props = {
    className: string;
};

function Wind({ className }: Props) {
    const wrapClass = cn(styles.icon, className);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={wrapClass} viewBox="0 0 100 100">
            <path
                className={styles.wind}
                d="M82.73 54.09h-6.138a4.09 4.09 0 1 1 0-8.181h6.137a4.092 4.092 0 0 0 0-8.18 4.092 4.092 0 1 1 .823-8.1C89.936 30.06 95 35.322 95 41.819c0 6.776-5.493 12.27-12.27 12.27zm-20.458-8.181H17.273a4.091 4.091 0 0 0 0 8.18h44.999c6.78 0 12.275 5.497 12.275 12.275 0 6.497-5.064 11.758-11.448 12.19a4.093 4.093 0 0 1-4.918-4.008 4.092 4.092 0 0 1 4.091-4.09 4.092 4.092 0 0 0 0-8.184H17.273C10.495 62.272 5 56.777 5 50c0-6.495 5.064-11.757 11.448-12.19.268-.054.544-.082.825-.082h44.999a4.092 4.092 0 0 0 0-8.183 4.092 4.092 0 1 1 .827-8.1c6.384.433 11.448 5.694 11.448 12.191 0 6.776-5.495 12.273-12.275 12.273z"
                clipRule="evenodd"
                strokeWidth="3"
            />
        </svg>
    );
}

export default Wind;
