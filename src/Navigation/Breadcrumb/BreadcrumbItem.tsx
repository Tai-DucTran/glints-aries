import * as React from 'react';
import { BreadcrumbItemWrapper } from './BreadcrumbStyle';

const BreadcrumbItem: React.FunctionComponent<Props> = (props: Props) => {
  const { active, className, children, ...defaultProps } = props;

  return (
    <BreadcrumbItemWrapper
      className={className}
      active={active}
      {...defaultProps}
    >
      {children}
      <span>/</span>
    </BreadcrumbItemWrapper>
  );
};

interface Props
  extends React.ComponentPropsWithoutRef<typeof BreadcrumbItemWrapper> {
  children: React.ReactNode;
}

export default BreadcrumbItem;
