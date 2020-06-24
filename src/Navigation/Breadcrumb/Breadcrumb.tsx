import * as React from 'react';
import classNames from 'classnames';
import { BreadcrumbContainer } from './BreadcrumbStyle';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb: Breadcrumb = (props: Props) => {
  const { className, children, ...defaultProps } = props;

  return (
    <BreadcrumbContainer
      className={classNames('aries-breadcrumb', className)}
      {...defaultProps}
    >
      {children}
    </BreadcrumbContainer>
  );
};

type Breadcrumb = React.FunctionComponent<Props> & {
  Item: typeof BreadcrumbItem;
};

Breadcrumb.Item = BreadcrumbItem;

interface Props
  extends React.ComponentPropsWithoutRef<typeof BreadcrumbContainer> {
  children: React.ReactNode;
}

export default Breadcrumb;
