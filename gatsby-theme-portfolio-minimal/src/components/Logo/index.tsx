import React from 'react';
import { useSiteConfiguration } from '../../hooks/useSiteConfiguration';
import * as classes from './style.module.css';

interface LogoProps {
    fontSize?: string;
    color?: string;
}

export function Logo(props: LogoProps): React.ReactElement {
    const siteConfiguration = useSiteConfiguration();
    const fontSize = props.fontSize || '2rem';
    const color = props.color || 'var(--primary-color)';

    return (
        <div className={classes.Logo} aria-roledescription="logo" style={{ fontSize, color }}>
            <img width={100} src={siteConfiguration.logo.image} />
            {siteConfiguration.logo.text}
        </div>
    );
}
