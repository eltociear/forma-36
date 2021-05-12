import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import tokens from '@contentful/f36-tokens';
import { NoteProps } from './Note';

export const styles = {
  note: ({ variant, hasCloseButton }: NoteProps) =>
    css({
      padding: tokens.spacingM,
      margin: 0,
      fontFamily: tokens.fontStackPrimary,
      fontWeight: tokens.fontWeightNormal,
      lineHeight: tokens.lineHeightDefault,
      fontSize: tokens.fontSizeM,
      color: tokens.colorTextBase,
      display: 'flex',
      flexDirection: 'row',
      borderRadius: tokens.borderRadiusMedium,
      paddingRight: hasCloseButton ? tokens.spacingS : tokens.spacingM,
    }),
  title: css({
    fontWeight: tokens.fontWeightMedium,
    fontSize: tokens.fontSizeL,
    marginBottom: tokens.spacingXs,
    color: tokens.colorTextDark,
    lineHeight: tokens.lineHeightL,
  }),
  icon: css({
    marginRight: tokens.spacingS,
    display: 'flex',
  }),
  info: css({
    marginLeft: tokens.spacingXs,
    fill: 'currentColor',
  }),
  content: css({
    width: '100%',
    lineHeight: tokens.lineHeightM,
  }),
  dismiss: css({
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    margin: '0 0 auto auto',
    pointerEvents: 'all',
    display: 'flex',
  }),
};
