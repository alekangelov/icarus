import {
  clsx,
  heading,
  ellipsis,
  getTextClasses,
  TextProps,
} from '@icarus/core';
import { forwardRef, Ref, PropsWithChildren } from 'react';

type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6' | 1 | 2 | 3 | 4 | 5 | 6;

type Props = {
  level?: HeadingLevel;
} & JSX.IntrinsicElements['h1'] &
  CommonProps;

type CommonProps = {
  ellipsis?: boolean;
};

export const Heading = forwardRef(
  (
    {
      level = 1,
      children,
      ellipsis: eProp,
      ...props
    }: PropsWithChildren<Props>,
    ref: Ref<HTMLHeadingElement>
  ) => {
    if (parseInt(`${level}`) > 6 || parseInt(`${level}`) < 1) {
      throw new Error(`Heading level must be between 1 and 6`);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Tag = `h${level}` as any;
    return (
      <Tag
        {...props}
        className={clsx(heading, eProp && ellipsis, props.className)}
        ref={ref}
      >
        {children}
      </Tag>
    );
  }
);

type HGroupProps = {
  title?: string;
  subtitle?: string;
  titleLevel?: HeadingLevel;
  subtitleLevel?: HeadingLevel;
} & JSX.IntrinsicElements['hgroup'];

export const HGroup = forwardRef(
  (
    {
      title,
      subtitle,
      titleLevel = 1,
      subtitleLevel = 2,
      ...props
    }: PropsWithChildren<HGroupProps>,
    ref: Ref<HTMLElement>
  ) => {
    const TitleTag = `h${titleLevel}` as any;
    const SubtitleTag = `h${subtitleLevel}` as any;
    return (
      <hgroup {...props} ref={ref}>
        <TitleTag className={heading}>{title}</TitleTag>
        <SubtitleTag className={heading}>{subtitle}</SubtitleTag>
      </hgroup>
    );
  }
);

type TextElements = {
  p: HTMLParagraphElement;
  span: HTMLSpanElement;
  div: HTMLDivElement;
  b: HTMLElement;
  i: HTMLElement;
  em: HTMLElement;
  strong: HTMLElement;
  small: HTMLElement;
  big: HTMLElement;
  sup: HTMLElement;
  sub: HTMLElement;
};

const TextPrecursor = <T extends keyof TextElements>(
  {
    children,
    size,
    color,
    weight,
    ellipsis: eProp,
    ...props
  }: PropsWithChildren<
    TextProps &
      CommonProps &
      JSX.IntrinsicElements[T] & {
        tag?: T;
      }
  >,
  ref: Ref<TextElements[T]>
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = props.tag || ('p' as any);
  return (
    <Tag
      {...props}
      ref={ref}
      className={clsx(
        getTextClasses({
          size,
          color,
          weight,
        }),
        eProp && ellipsis,
        props.className
      )}
    >
      {children}
    </Tag>
  );
};

export const Text = forwardRef(TextPrecursor);
