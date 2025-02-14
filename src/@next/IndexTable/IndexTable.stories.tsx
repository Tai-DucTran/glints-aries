import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  IndexTable,
  IndexTableProps,
  useIndexResourceState,
} from './IndexTable';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { EmptyState, Typography } from '..';
import { Icon } from '../Icon';
import { PrimaryButton } from '../Button';
import { Neutral } from '../utilities/colors';
import {
  EmptyStateContainer,
  StyledButton,
  StyledButtonGroup,
} from './indexTableStoryHelper/IndexTableStoryStyle';

(IndexTable as React.FunctionComponent<IndexTableProps>).displayName = 'Table';

export default {
  title: '@next/IndexTable',
  component: IndexTable,
  decorators: [
    Story => (
      <>
        <BaseContainer>{Story()}</BaseContainer>
        <div id="glints-portal-container"></div>
      </>
    ),
  ],
  argTypes: {
    itemCount: {
      control: 'number',
    },
    loading: {
      control: 'boolean',
    },
    loadingLabel: {
      control: 'text',
    },
    selectable: {
      control: 'boolean',
    },
  },
} as Meta;

const candidates = [
  {
    id: '1',
    url: 'candidate/1',
    name: 'Dwi Nugraha Putri',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
    disabled: false,
  },
  {
    id: '2',
    url: 'candidate/2',
    name: 'Ahmad Dani',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
    disabled: true,
  },
  {
    id: '3',
    url: 'candidate/3',
    name: 'Syed Ali',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
    disabled: false,
  },
  {
    id: '4',
    url: 'candidate/4',
    name: 'Muhammad Danial',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
    disabled: false,
  },
  {
    id: '5',
    url: 'candidate/1',
    name: 'Dwi Nugraha Putri',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '6',
    url: 'candidate/2',
    name: 'Ahmad Dani',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '7',
    url: 'candidate/3',
    name: 'Syed Ali',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '8',
    url: 'candidate/4',
    name: 'Muhammad Danial',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '9',
    url: 'candidate/1',
    name: 'Dwi Nugraha Putri',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '10',
    url: 'candidate/2',
    name: 'Ahmad Dani',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '11',
    url: 'candidate/3',
    name: 'Syed Ali',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '12',
    url: 'candidate/4',
    name: 'Muhammad Danial',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '13',
    url: 'candidate/1',
    name: 'Dwi Nugraha Putri',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '14',
    url: 'candidate/2',
    name: 'Ahmad Dani',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '15',
    url: 'candidate/3',
    name: 'Syed Ali',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '16',
    url: 'candidate/4',
    name: 'Muhammad Danial',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
];

const candidatesSlice = candidates.slice(0, 4);
const resourceName = {
  singular: 'candidate',
  plural: 'candidates',
};

const promotedBulkActions = [
  {
    content: 'Reject',
    onAction: () => console.log('Reject'),
  },
  {
    title: 'Move to',
    actions: [
      {
        content: 'Assessment',
        onAction: () => console.log('Assessment'),
      },
      {
        content: 'Interviewing',
        onAction: () => console.log('Interviewing'),
      },
      {
        content: 'Offered',
        onAction: () => console.log('Offered'),
      },
      {
        content: 'Hired',
        onAction: () => console.log('Hired'),
      },
    ],
  },
];

const Template: Story<IndexTableProps> = args => {
  const selectableCandidates = candidatesSlice.filter(
    candidate => !candidate.disabled
  );
  const selectableCandidatesCount = selectableCandidates.length;

  const tableCandidatesData = selectableCandidatesCount
    ? selectableCandidates
    : candidatesSlice;
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(tableCandidatesData);

  const rowMarkup = candidatesSlice.map(
    (
      {
        id,
        name,
        location,
        expectedSalary,
        yearsExperience,
        latestWorkExperience,
        latestWorkDuration,
        disabled,
      },
      index
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
        onClick={() => console.log(`row clicked ${id}`)}
        disabled={disabled}
      >
        <IndexTable.Cell>
          <Icon name="ri-account-circle-fill" height={40} fill={Neutral.B40} />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography as="span" variant="caption">
              {name}
            </Typography>
            <span>{location}</span>
          </div>
        </IndexTable.Cell>
        <IndexTable.Cell>{expectedSalary}</IndexTable.Cell>
        <IndexTable.Cell>{yearsExperience}</IndexTable.Cell>
        <IndexTable.Cell>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {latestWorkExperience}
            <br />
            {latestWorkDuration}
          </div>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <StyledButtonGroup>
            <StyledButton>Reject</StyledButton>
            <PrimaryButton>Shortlist</PrimaryButton>
          </StyledButtonGroup>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <IndexTable
      {...args}
      itemCount={tableCandidatesData.length}
      resourceName={resourceName}
      selectedItemsCount={
        allResourcesSelected ? 'All' : selectedResources.length
      }
      selectableItemsCount={selectableCandidates.length}
      onSelectionChange={handleSelectionChange}
      promotedBulkActions={promotedBulkActions}
      headings={[
        { title: '' },
        { title: 'Name & Location' },
        { title: 'Expected Salary' },
        { title: 'Years of Experience' },
        { title: 'Latest Work Experience' },
        { title: 'Actions' },
      ]}
      selectedLabel="selected candidates"
      emptyState={
        <EmptyStateContainer colSpan={7}>
          <EmptyState
            title="No pending candidates"
            description="Any candidates that are not processed will appear here"
            primaryButtonAction={{ label: 'Back to Dashboard' }}
            imageName="empty-carton"
          />
        </EmptyStateContainer>
      }
    >
      {rowMarkup}
    </IndexTable>
  );
};

export const Interactive = Template.bind({});
Interactive.args = { loadingLabel: 'Loading...' };

const ScrollableTemplate: Story<IndexTableProps> = args => {
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(candidates);

  const rowMarkup = candidates.map(
    (
      {
        id,
        name,
        location,
        expectedSalary,
        yearsExperience,
        latestWorkExperience,
        latestWorkDuration,
      },
      index
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
        onClick={() => console.log(`row clicked ${id}`)}
      >
        <IndexTable.Cell>
          <Icon name="ri-account-circle-fill" height={40} fill={Neutral.B40} />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography as="span" variant="caption">
              {name}
            </Typography>
            {location}
          </div>
        </IndexTable.Cell>
        <IndexTable.Cell>{expectedSalary}</IndexTable.Cell>
        <IndexTable.Cell>{yearsExperience}</IndexTable.Cell>
        <IndexTable.Cell>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {latestWorkExperience}
            <br />
            {latestWorkDuration}
          </div>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <StyledButtonGroup>
            <StyledButton>Reject</StyledButton>
            <PrimaryButton>Shortlist</PrimaryButton>
          </StyledButtonGroup>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );
  return (
    <IndexTable
      itemCount={candidates.length}
      {...args}
      resourceName={resourceName}
      selectedItemsCount={
        allResourcesSelected ? 'All' : selectedResources.length
      }
      onSelectionChange={handleSelectionChange}
      promotedBulkActions={promotedBulkActions}
      headings={[
        { title: '' },
        { title: 'Name & Location' },
        { title: 'Expected Salary' },
        { title: 'Years of Experience' },
        { title: 'Latest Work Experience' },
        { title: 'Actions' },
      ]}
      selectedLabel="selected candidates"
      emptyState={
        <EmptyStateContainer colSpan={7}>
          <EmptyState
            title="No pending candidates"
            description="Any candidates that are not processed will appear here"
            primaryButtonAction={{ label: 'Back to Dashboard' }}
            imageName="empty-carton"
          />
        </EmptyStateContainer>
      }
    >
      {rowMarkup}
    </IndexTable>
  );
};

export const Scrollable = ScrollableTemplate.bind({});
Scrollable.args = {
  loadingLabel: 'Loading...',
  height: '500px',
  selectable: false,
};
