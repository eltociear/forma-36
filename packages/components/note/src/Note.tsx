import { cx, css } from 'emotion';
import React from 'react';
import { Primitive } from '@contentful/f36-core';
import type { CommonProps, ComponentVariant } from '@contentful/f36-core';
import { styles } from './Note.styles';
import { IconButton } from '../../../forma-36-react-components/src/components/IconButton';
import {
  CheckCircle,
  Close,
  ErrorCircle,
  InfoCircle,
  Warning,
} from '@contentful/f36-icons';

const icons = {
  primary: InfoCircle,
  positive: CheckCircle,
  negative: ErrorCircle,
  warning: Warning,
};

export type NoteVariant = Exclude<ComponentVariant, 'secondary'>;

export interface NoteProps extends CommonProps {
  variant?: NoteVariant;
  title?: string;
  children?: React.ReactNode;
  hasCloseButton?: boolean;
  onClose?: Function;
}

const _Note = (props: NoteProps, ref) => {
  const {
    children,
    className,
    hasCloseButton,
    variant = 'primary',
    onClose,
    style,
    testId = 'cf-ui-note',
    title,
    ...otherProps
  } = props;

  const Icon = icons[variant!]; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  if (!Icon) {
    throw new Error(`Intent ${variant} is not supported in Note component.`);
  }

  return (
    <Primitive
      as="div"
      style={style}
      className={cx(styles.note({ variant, hasCloseButton }), className)}
      testId={testId}
      ref={ref}
      {...otherProps}
    >
      <div className={cx(styles.icon)}>
        <Icon variant={variant} size={title ? 'medium' : 'small'} />
      </div>
      <div className={cx(styles.info)}>
        {title && <div className={cx(styles.title)}>{title}</div>}
        <div className={cx(styles.content)}>{children}</div>
      </div>
      {hasCloseButton && (
        <IconButton
          buttonType="secondary"
          iconProps={{ as: Close }}
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
          testId="cf-ui-note-close"
          label="Dismiss"
          className={cx(styles.dismiss)}
        />
      )}
    </Primitive>
  );
};

/**
 * TODO: Add description of component here.
 */
export const Note = React.forwardRef(_Note);
