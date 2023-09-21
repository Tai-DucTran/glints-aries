import React from 'react';

import { CollapseItem, CollapseItemProps } from './CollapseItem';
import { CollapseComponentContainer } from './CollapseStyle';

export interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  /** If true, there is outer 1px border with 4px border radius, default is true */
  hasBorder?: boolean;
  /** The children should all be 'Collapse.Item' components */
  children?: React.ReactElement<CollapseItemProps>[];
  /** Arrow indicator to be put on the very left or right of the header (or none), default is left, applies to all children collapse items */
  indicator?: 'left' | 'right' | 'none';
}

const CollapseComponent = React.forwardRef<HTMLDivElement, CollapseProps>(
  function Collapse(
    { hasBorder = true, children, indicator, ...props }: CollapseProps,
    ref
  ) {
    return (
      <>
        <CollapseComponentContainer
          ref={ref}
          data-border={hasBorder}
          {...props}
        >
          {React.Children.map(children, child => {
            const childIndicator =
              (child.props as Pick<CollapseProps, 'indicator'>)?.indicator ||
              indicator;
            return React.cloneElement(child, { indicator: childIndicator });
          })}
        </CollapseComponentContainer>
      </>
    );
  }
);

export const Collapse = Object.assign(CollapseComponent, {
  Item: CollapseItem,
});
