import React, { Component, CSSProperties } from 'react';
import cn from 'classnames';
import { iconName } from './constants';

import {
  ArrowDown,
  ArrowUp
} from './svg';

import styles from './Icon.css';

const iconComponents = {
  ArrowDown,
  ArrowUp
}

export type IconType = keyof typeof iconName;

export type IconColorType =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'secondary'
  | 'muted'
  | 'white';

  export type IconSize = 'tiny' | 'small' | 'medium' | 'large';

  export interface IconProps {
    size?: IconSize;
    color?: IconColorType;
    style?: CSSProperties;
    icon: IconType;
    className?: string;
    testId?: string;
  }
  
  const defaultProps: Partial<IconProps> = {
    testId: 'cf-ui-icon',
    size: 'small',
    color: 'primary',
  };
  
  export class Icon extends Component<IconProps> {
    static defaultProps = defaultProps;
  
    render() {
      const { className, icon, size, color, testId, ...otherProps } = this.props;
  
      const classNames = cn(
        styles.Icon,
        {
          [styles[`Icon--${size}`]]: size,
          [styles[`Icon--${color}`]]: color,
          [styles['Icon--trimmed']]: icon.toLowerCase().includes('trimmed'),
        },
        className,
      );
  
      const Element = iconComponents[icon];
  
      return (
        <Element data-test-id={testId} className={classNames} {...otherProps} />
      );
    }
  }
  
  export default Icon;
  