import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
import { InlineError } from '../InlineError';

import { Select, SelectProps } from './Select';
import { NonSearchableMultiSelect } from './selectStoryHelper/NonSearchableMultiSelect';
import { SearchableSelect } from './selectStoryHelper/Searchable';
import {
  AsyncSearchableSingleWithInputState as AsyncSearchableSingleSelectWithInputState,
  SearchableSingle,
  SearchableSingleWithInputState as SearchableSingleSelectWithInputState,
  SearchableSingleWithInitialValue,
} from './selectStoryHelper/SearchableSingleSelect';
import { SingleSelect } from './selectStoryHelper/NonSearchableSingleSelect';
import { Icon } from '..';
import { Neutral } from '../utilities/colors';

(Select as React.FunctionComponent<SelectProps>).displayName = 'Select';

export default {
  title: '@next/Select',
  component: Select,
  decorators: [withGlintsPortalContainer],
} as Meta;

const countries = [
  { label: 'Cambodia', value: 'CAMBODIA' },
  { label: 'Indonesia', value: 'INDONESIA' },
  { label: 'Malaysia', value: 'MALAYSIA' },
  { label: 'Philippines', value: 'PHILIPPINES' },
  { label: 'Singapore', value: 'SINGAPORE' },
  { label: 'Taiwan', value: 'TAIWAN' },
  { label: 'Thailand', value: 'THAILAND' },
  { label: 'Vietnam', value: 'VIETNAM' },
];

const skills = [
  { label: 'Fishing', sublabel: 'Memancing', value: 'fishing' },
  { label: 'Cooking', sublabel: 'Memasak', value: 'cooking' },
  { label: 'Swimming', sublabel: 'Renang', value: 'swimming' },
  { label: 'Flying', sublabel: 'Terbang', value: 'flying' },
];

const options = [
  {
    active: false,
    disabled: false,
    id: '1',
    label: 'All status',
    value: 'ALL_STATUS',
  },
  {
    active: false,
    disabled: false,
    id: '2',
    label: 'Completed',
    value: 'COMPLETED',
  },
  {
    active: false,
    disabled: false,
    id: '3',
    label: 'Pending',
    value: 'PENDING',
  },
  {
    active: false,
    disabled: false,
    id: '4',
    label: 'Expired',
    value: 'EXPIRED',
  },
  {
    active: false,
    disabled: false,
    id: '5',
    label: 'Cancelled',
    value: 'CANCELLED',
  },
];

const NonSearchableSingleSelectTemplate: Story<SelectProps> = args => {
  return <SingleSelect options={options} {...args} />;
};

export const NonSearchableSingleSelect = NonSearchableSingleSelectTemplate.bind(
  {}
);

NonSearchableSingleSelect.args = {};

NonSearchableSingleSelect.parameters = {
  docs: {
    source: {
      code: `
      const options = [
        {
          active: false,
          disabled: false,
          id: '1',
          label: 'All status',
          value: 'All status',
        },
        {
          active: false,
          disabled: false,
          id: '2',
          label: 'Completed',
          value: 'Completed',
        },
        {
          active: false,
          disabled: false,
          id: '3',
          label: 'Pending',
          value: 'Pending',
        },
        {
          active: false,
          disabled: false,
          id: '4',
          label: 'Expired',
          value: 'Expired',
        },
        {
          active: false,
          disabled: false,
          id: '5',
          label: 'Cancelled',
          value: 'Cancelled',
        },
      ];

      const [selected, setSelected] = useState('');

      const handleSelect = ({ value }: { value: string }) => {
        setSelected(value);
      };
    
      return (
        <Select
          allowMultiple={allowMultiple}
          options={options}
          onSelect={handleSelect}
          selectedValues={[selected]}
          width="400px"
          label="Label"
        />
      );
      `,
    },
  },
};

const NonSearchableMultiSelectTemplate: Story<SelectProps> = args => {
  return <NonSearchableMultiSelect options={options} {...args} allowMultiple />;
};

export const NonSearchableMultipleSelect =
  NonSearchableMultiSelectTemplate.bind({});

NonSearchableMultipleSelect.args = {
  label: 'Label',
};

NonSearchableMultipleSelect.parameters = {
  docs: {
    source: {
      code: `
      const options = [
        {
          active: false,
          disabled: false,
          id: '1',
          label: 'All status',
          value: 'All status',
        },
        {
          active: false,
          disabled: false,
          id: '2',
          label: 'Completed',
          value: 'Completed',
        },
        {
          active: false,
          disabled: false,
          id: '3',
          label: 'Pending',
          value: 'Pending',
        },
        {
          active: false,
          disabled: false,
          id: '4',
          label: 'Expired',
          value: 'Expired',
        },
        {
          active: false,
          disabled: false,
          id: '5',
          label: 'Cancelled',
          value: 'Cancelled',
        },
      ];

      const [selected, setSelected] = useState([]);

      const handleSelect = ({ value }: { value: string }) => {
        if (selected.includes(value)) {
          setSelected(selected.filter(option => option !== value));
        } else {
          setSelected([...selected, value]);
        }
      };
    
      const removeTag = useCallback(
        ({ option }: { option: string }) =>
          (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();

            const options = [...selected];
            options.splice(options.indexOf(option), 1);
            setSelected(options);
          },
        [selected]
      );
    
      return (
        <Select
          allowMultiple
          onRemoveTag={removeTag}
          options={options}
          onSelect={handleSelect}
          selectedValues={selected}
          width="400px"
        />
      );
      `,
    },
  },
};

const WithErrorNonSearchableTemplate: Story<SelectProps> = args => {
  return <SingleSelect options={options} {...args} />;
};

export const WithErrorNonSearchable = WithErrorNonSearchableTemplate.bind({});

WithErrorNonSearchable.args = {
  hasError: true,
  label: 'Label',
};

WithErrorNonSearchable.parameters = {
  docs: {
    source: {
      code: `
      const options = [
        {
          active: false,
          disabled: false,
          id: '1',
          label: 'All status',
          value: 'All status',
        },
        {
          active: false,
          disabled: false,
          id: '2',
          label: 'Completed',
          value: 'Completed',
        },
        {
          active: false,
          disabled: false,
          id: '3',
          label: 'Pending',
          value: 'Pending',
        },
        {
          active: false,
          disabled: false,
          id: '4',
          label: 'Expired',
          value: 'Expired',
        },
        {
          active: false,
          disabled: false,
          id: '5',
          label: 'Cancelled',
          value: 'Cancelled',
        },
      ];

      const [selected, setSelected] = useState([]);

      const handleSelect = ({ value }: { value: string }) => {
        if (selected.includes(value)) {
          setSelected(selected.filter(option => option !== value));
        } else {
          setSelected([...selected, value]);
        }
      };
    
      const removeTag = useCallback(
        ({ option }: { option: string }) =>
          (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();

            const options = [...selected];
            options.splice(options.indexOf(option), 1);
            setSelected(options);
          },
        [selected]
      );
    
      return (
        <Select
          allowMultiple
          hasError
          onRemoveTag={removeTag}
          options={options}
          onSelect={handleSelect}
          selectedValues={selected}
          width="400px"
        />
      );
      `,
    },
  },
};

const NonSearchableDisabledTemplate: Story<SelectProps> = args => {
  return <SingleSelect options={options} disabled {...args} />;
};

export const NonSearchableDisabled = NonSearchableDisabledTemplate.bind({});

NonSearchableDisabledTemplate.args = {};

NonSearchableDisabledTemplate.parameters = {
  docs: {
    source: {
      code: `
      const options = [
        {
          active: false,
          disabled: false,
          id: '1',
          label: 'All status',
          value: 'All status',
        },
        {
          active: false,
          disabled: false,
          id: '2',
          label: 'Completed',
          value: 'Completed',
        },
        {
          active: false,
          disabled: false,
          id: '3',
          label: 'Pending',
          value: 'Pending',
        },
        {
          active: false,
          disabled: false,
          id: '4',
          label: 'Expired',
          value: 'Expired',
        },
        {
          active: false,
          disabled: false,
          id: '5',
          label: 'Cancelled',
          value: 'Cancelled',
        },
      ];

      const [selected, setSelected] = useState([]);

      const handleSelect = ({ value }: { value: string }) => {
        if (selected.includes(value)) {
          setSelected(selected.filter(option => option !== value));
        } else {
          setSelected([...selected, value]);
        }
      };
    
      const removeTag = useCallback(
        ({ option }: { option: string }) =>
          () => {
            const options = [...selected];
            options.splice(options.indexOf(option), 1);
            setSelected(options);
          },
        [selected]
      );
    
      return (
        <Select
          allowMultiple
          disabled
          onRemoveTag={removeTag}
          options={options}
          onSelect={handleSelect}
          selectedValues={selected}
          width="400px"
        />
      );
      `,
    },
  },
};

const NonSearchablePrefixedTemplate: Story<SelectProps> = args => {
  return (
    <SingleSelect
      options={options}
      prefix={
        <Icon name="ri-equalizer-line" height="17px" fill={Neutral.B40} />
      }
      {...args}
    />
  );
};

export const NonSearchablePrefixed = NonSearchablePrefixedTemplate.bind({});

NonSearchablePrefixedTemplate.args = {
  prefix: <Icon name="ri-equalizer-line" height="17px" fill={Neutral.B40} />,
};

NonSearchablePrefixedTemplate.parameters = {
  docs: {
    source: {
      code: `
      const options = [
        {
          active: false,
          disabled: false,
          id: '1',
          label: 'All status',
          value: 'All status',
        },
        {
          active: false,
          disabled: false,
          id: '2',
          label: 'Completed',
          value: 'Completed',
        },
        {
          active: false,
          disabled: false,
          id: '3',
          label: 'Pending',
          value: 'Pending',
        },
        {
          active: false,
          disabled: false,
          id: '4',
          label: 'Expired',
          value: 'Expired',
        },
        {
          active: false,
          disabled: false,
          id: '5',
          label: 'Cancelled',
          value: 'Cancelled',
        },
      ];

      const [selected, setSelected] = useState([]);

      const handleSelect = ({ value }: { value: string }) => {
        if (selected.includes(value)) {
          setSelected(selected.filter(option => option !== value));
        } else {
          setSelected([...selected, value]);
        }
      };
    
      const removeTag = useCallback(
        ({ option }: { option: string }) =>
          () => {
            const options = [...selected];
            options.splice(options.indexOf(option), 1);
            setSelected(options);
          },
        [selected]
      );
    
      return (
        <Select
          allowMultiple
          disabled
          onRemoveTag={removeTag}
          options={options}
          onSelect={handleSelect}
          selectedValues={selected}
          width="400px"
          prefix={
            <Icon name="ri-equalizer-line" height="17px" fill={Neutral.B40} />
          }
        />
      );
      `,
    },
  },
};

const slicedCountries = countries.slice(0, 5);

const SearchableMultiSelectTemplate: Story<SelectProps> = args => {
  return <SearchableSelect data={slicedCountries} {...args} />;
};

export const SearchableMultiSelect = SearchableMultiSelectTemplate.bind({});

SearchableMultiSelect.args = {
  allowMultiple: true,
};

SearchableMultiSelect.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'INDONESIA' },
        { label: 'Malaysia', value: 'MALAYSIA' },
        { label: 'Singapore', value: 'SINGAPORE' },
        { label: 'Taiwan', value: 'TAIWAN' },
        { label: 'Vietnam', value: 'VIETNAM' },
      ];

      const [inputValue, setInputValue] = useState('');
      const [selectedOptions, setSelectedOptions] = useState([]);
      const [isSearchEmpty, setIsSearchEmpty] = useState(false);
    
      const [options, setOptions] = useState(countries);
    
      const handleInputChange = (value: string) => {
        setInputValue(value);
    
        if (value === '') {
          setOptions(countries);
          return;
        }
    
        const filterRegex = new RegExp(value, 'i');
        const filterOptions = options.filter((option: Option) =>
          (option.label as string).match(filterRegex)
        );
        setOptions(filterOptions);
      };
    
      const handleSelect = ({ value }: { value: string }) => {
        if (!selectedOptions.includes(value)) {
          setSelectedOptions([...selectedOptions, value]);
          return;
        }
    
        setSelectedOptions(selectedOptions.filter(option => option !== value));
      };
    
      const removeTag = (tag: Option) => () => {
        const options = [...selectedOptions];
        options.splice(options.indexOf(tag), 1);
        setSelectedOptions(options);
      };

      const tagsMarkup = selectedOptions.map(option => (
        <StyledTag
          key={\`option-\${option}\`}
          onRemove={removeTag(option)}
          textColor={Blue.S99}
        >
          {option}
        </StyledTag>
      ));
    
      useEffect(() => {
        if (options.length === 0) {
          setIsSearchEmpty(true);
        }
    
        if (options.length > 0 && isSearchEmpty === true) {
          setIsSearchEmpty(false);
        }
      }, [isSearchEmpty, options]);
    
      return (
        <div>
          <Select
            allowMultiple
            onSelect={handleSelect}
            options={options}
            selectedValues={selectedOptions}
            width="600px"
            searchableProps={{
              inputValue,
              onInputChange: (value: string) => handleInputChange(value),
            }}
            label="Label"
          />
          <div style={{ paddingTop: space8 }}>{tagsMarkup}</div>
        </div>
      );
      `,
    },
  },
};

const SearchableSingleSelectTemplate: Story<SelectProps> = args => {
  return <SearchableSingle data={slicedCountries} {...args} />;
};

export const SearchableSingleSelect = SearchableSingleSelectTemplate.bind({});

SearchableSingleSelect.args = {
  allowMultiple: false,
};

SearchableSingleSelect.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'INDONESIA' },
        { label: 'Malaysia', value: 'MALAYSIA' },
        { label: 'Singapore', value: 'SINGAPORE' },
        { label: 'Taiwan', value: 'TAIWAN' },
        { label: 'Vietnam', value: 'VIETNAM' },
      ];

      const [selected, setSelected] = useState('');

      const handleSelect = ({ value }: { value: string }) => {
        setSelected(value);
      };
    
      return (
        <Select
          allowMultiple={false}
          onSelect={handleSelect}
          options={countries}
          selectedValues={[selected]}
          width="600px"
          searchable
          label="Label"
        />
      );
      `,
    },
  },
};

const SearchableSingleSelectWithOverflowingInputStateTemplate: Story<
  SelectProps
> = args => {
  const longPlaceNames = [
    {
      label:
        'Kelurahan Kelapa Gading Barat, Kecamatan Kelapa Gading, Kota Jakarta Utara, DKI Jakarta, Indonesia',
      value:
        'Kelurahan Kelapa Gading Barat, Kecamatan Kelapa Gading, Kota Jakarta Utara, DKI Jakarta, Indonesia',
    },
    {
      label:
        'Kelurahan Kelapa Gading Timur, Kecamatan Kelapa Gading, Kota Jakarta Utara, DKI Jakarta, Indonesia',
      value:
        'Kelurahan Kelapa Gading Timur, Kecamatan Kelapa Gading, Kota Jakarta Utara, DKI Jakarta, Indonesia',
    },
  ];
  return <SearchableSingle data={longPlaceNames} {...args} />;
};

export const SearchableSingleSelectWithOverflowingInputState =
  SearchableSingleSelectWithOverflowingInputStateTemplate.bind({});

SearchableSingleSelectWithOverflowingInputState.args = {
  allowMultiple: false,
};

SearchableSingleSelectWithOverflowingInputState.parameters = {
  docs: {
    source: {
      code: `
      const locations = [
        {
          label: 'Kelurahan Kelapa Gading Barat, Kecamatan Kelapa Gading, Kota Jakarta Utara, DKI Jakarta, Indonesia',
          value: 'Kelurahan Kelapa Gading Barat, Kecamatan Kelapa Gading, Kota Jakarta Utara, DKI Jakarta, Indonesia',
        },
        {
          label: 'Kelurahan Kelapa Gading Timur, Kecamatan Kelapa Gading, Kota Jakarta Utara, DKI Jakarta, Indonesia',
          value: 'Kelurahan Kelapa Gading Timur, Kecamatan Kelapa Gading, Kota Jakarta Utara, DKI Jakarta, Indonesia',
        },
      ];

      const [selected, setSelected] = useState('');

      const handleSelect = ({ value }: { value: string }) => {
        setSelected(value);
      };
    
      return (
        <Select
          allowMultiple={false}
          onSelect={handleSelect}
          options={locations}
          selectedValues={[selected]}
          width="600px"
          searchable
          label="Label"
        />
      );
      `,
    },
  },
};

const SearchableSingleSelectWithInitialValueTemplate: Story<
  SelectProps
> = args => {
  return <SearchableSingleWithInitialValue data={slicedCountries} {...args} />;
};

export const SearchableSingleSelectWithInitialValue =
  SearchableSingleSelectWithInitialValueTemplate.bind({});

SearchableSingleSelectWithInitialValue.args = {
  allowMultiple: false,
};

SearchableSingleSelectWithInitialValue.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'INDONESIA' },
        { label: 'Malaysia', value: 'MALAYSIA' },
        { label: 'Singapore', value: 'SINGAPORE' },
        { label: 'Taiwan', value: 'TAIWAN' },
        { label: 'Vietnam', value: 'VIETNAM' },
      ];

      const [selected, setSelected] = useState('Singapore');

      const handleSelect = ({ value }: { value: string }) => {
        setSelected(value);
      };
    
      return (
        <Select
          allowMultiple={false}
          onSelect={handleSelect}
          options={countries}
          selectedValues={[selected]}
          width="600px"
          searchable
          label="Label"
        />
      );
      `,
    },
  },
};

const SearchableSingleWithInputStateTemplate: Story<SelectProps> = args => {
  return (
    <SearchableSingleSelectWithInputState data={slicedCountries} {...args} />
  );
};

export const SearchableSingleWithInputState =
  SearchableSingleWithInputStateTemplate.bind({});

SearchableSingleWithInputState.args = {
  allowMultiple: false,
};

SearchableSingleWithInputState.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'INDONESIA' },
        { label: 'Malaysia', value: 'MALAYSIA' },
        { label: 'Singapore', value: 'SINGAPORE' },
        { label: 'Taiwan', value: 'TAIWAN' },
        { label: 'Vietnam', value: 'VIETNAM' },
      ];
      const [inputValue, setInputValue] = useState('');
      const [selected, setSelected] = useState('');

      const handleInputChange = (value: string) => {
        setInputValue(value);
      };

      const handleSelect = ({ value }: { value: string }) => {
        setSelected(value);
      };
    
      return (
        <Select
          allowMultiple={false}
          onSelect={handleSelect}
          options={countries}
          searchableProps={{
            inputValue,
            onInputChange: (value: string) => handleInputChange(value),
          }}
          width="600px"
          searchable
          label="Label"
        />
      );
      `,
    },
  },
};

const AsyncSearchableSingleWithInputStateTemplate: Story<
  SelectProps
> = args => {
  return (
    <AsyncSearchableSingleSelectWithInputState
      data={slicedCountries}
      {...args}
    />
  );
};

export const AsyncSearchableSingleWithInputState =
  AsyncSearchableSingleWithInputStateTemplate.bind({});

AsyncSearchableSingleWithInputState.args = {
  allowMultiple: false,
};

AsyncSearchableSingleWithInputState.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'INDONESIA' },
        { label: 'Malaysia', value: 'MALAYSIA' },
        { label: 'Singapore', value: 'SINGAPORE' },
        { label: 'Taiwan', value: 'TAIWAN' },
        { label: 'Vietnam', value: 'VIETNAM' },
      ];
      const [loading, setLoading] = useState(false);
      const [mockData, setMockData] = useState<Option[]>([]);
      const [inputValue, setInputValue] = useState('');
      const [selected, setSelected] = useState('');
    
      const handleInputChange = async (value: string) => {
        setInputValue(value);
      };
    
      const debounceHandleInputChange = debounce(handleInputChange);
    
      const handleSelect = ({ value }: { value: string }) => {
        setSelected(value);
      };
    
      useEffect(() => {
        const fetchMockData = async () => {
          try {
            setLoading(true);
            const response = await mockAsyncOptions(inputValue, data);
            setMockData(response);
    
            setLoading(false);
          } catch {
            setLoading(false);
          }
        };
    
        if (inputValue === '') {
          setMockData([]);
          return;
        }
    
        fetchMockData();
      }, [data, inputValue]);
    
      return (
        <Select
          loadingOptions={loading}
          onSelect={handleSelect}
          options={mockData}
          selectedValues={[selected]}
          searchableProps={{
            inputValue,
            onInputChange: (value: string) => debounceHandleInputChange(value),
          }}
          width="600px"
          label="Label"
        />
      );
      `,
    },
  },
};

const AsyncSearchableSingleWithInputStateCustomPopoverPlaceholderTemplate: Story<
  SelectProps
> = args => {
  return (
    <AsyncSearchableSingleSelectWithInputState
      data={slicedCountries}
      {...args}
    />
  );
};

export const AsyncSearchableSingleWithInputStateCustomPopoverPlaceholder =
  AsyncSearchableSingleWithInputStateCustomPopoverPlaceholderTemplate.bind({});

AsyncSearchableSingleWithInputStateCustomPopoverPlaceholder.args = {
  allowMultiple: false,
  showPopoverOnFocus: true,
  optionsPlaceholderProps: {
    idle: 'Type in locations',
    noResult: 'No matching results',
  },
};

AsyncSearchableSingleWithInputStateCustomPopoverPlaceholder.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'INDONESIA' },
        { label: 'Malaysia', value: 'MALAYSIA' },
        { label: 'Singapore', value: 'SINGAPORE' },
        { label: 'Taiwan', value: 'TAIWAN' },
        { label: 'Vietnam', value: 'VIETNAM' },
      ];
      const [loading, setLoading] = useState(false);
      const [mockData, setMockData] = useState<Option[]>([]);
      const [inputValue, setInputValue] = useState('');
      const [selected, setSelected] = useState('');
    
      const handleInputChange = async (value: string) => {
        setInputValue(value);
      };
    
      const debounceHandleInputChange = debounce(handleInputChange);
    
      const handleSelect = ({ value }: { value: string }) => {
        setSelected(value);
      };
    
      useEffect(() => {
        const fetchMockData = async () => {
          try {
            setLoading(true);
            const response = await mockAsyncOptions(inputValue, data);
            setMockData(response);
    
            setLoading(false);
          } catch {
            setLoading(false);
          }
        };
    
        if (inputValue === '') {
          setMockData([]);
          return;
        }
    
        fetchMockData();
      }, [data, inputValue]);
    
      return (
        <Select
          loadingOptions={loading}
          onSelect={handleSelect}
          options={mockData}
          selectedValues={[selected]}
          searchableProps={{
            inputValue,
            onInputChange: (value: string) => debounceHandleInputChange(value),
          }}
          showPopoverOnFocus={true}
          optionsPlaceholderProps={{
            idle: 'Type in locations',
            noResult: 'No matching results',
          }}
          width="600px"
          label="Label"
        />
      );
      `,
    },
  },
};

const MultiSelectScrollableTemplate: Story<SelectProps> = args => (
  <SearchableMultiSelect {...args} data={countries} />
);

export const MultiSelectScrollable = MultiSelectScrollableTemplate.bind({});

MultiSelectScrollable.args = {
  allowMultiple: true,
  scrollable: true,
};

MultiSelectScrollable.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Cambodia', value: 'CAMBODIA' },
        { label: 'Indonesia', value: 'INDONESIA' },
        { label: 'Malaysia', value: 'MALAYSIA' },
        { label: 'Philippines', value: 'PHILIPPINES' },
        { label: 'Singapore', value: 'SINGAPORE' },
        { label: 'Taiwan', value: 'TAIWAN' },
        { label: 'Thailand', value: 'THAILAND' },
        { label: 'Vietnam', value: 'VIETNAM' },
      ];

      const [inputValue, setInputValue] = useState('');
      const [selectedOptions, setSelectedOptions] = useState([]);
      const [isSearchEmpty, setIsSearchEmpty] = useState(false);
    
      const [options, setOptions] = useState(countries);
    
      const handleInputChange = (value: string) => {
        setInputValue(value);
    
        if (value === '') {
          setOptions(countries);
          return;
        }
    
        const filterRegex = new RegExp(value, 'i');
        const filterOptions = options.filter((option: Option) =>
          (option.label as string).match(filterRegex)
        );
        setOptions(filterOptions);
      };
    
      const handleSelect = ({ value }: { value: string }) => {
        if (!selectedOptions.includes(value)) {
          setSelectedOptions([...selectedOptions, value]);
          return;
        }
    
        setSelectedOptions(selectedOptions.filter(option => option !== value));
      };
    
      const removeTag = (tag: Option) => () => {
        const options = [...selectedOptions];
        options.splice(options.indexOf(tag), 1);
        setSelectedOptions(options);
      };

    
      const tagsMarkup = selectedOptions.map(option => (
        <StyledTag
          key={\`option-\${option}\`}
          onRemove={removeTag(option)}
          textColor={Blue.S99}
        >
          {option}
        </StyledTag>
      ));
    
      useEffect(() => {
        if (options.length === 0) {
          setIsSearchEmpty(true);
        }
    
        if (options.length > 0 && isSearchEmpty === true) {
          setIsSearchEmpty(false);
        }
      }, [isSearchEmpty, options]);
    
      return (
        <div>
          <Select
            allowMultiple
            scrollable
            onSelect={handleSelect}
            options={options}
            selectedValues={selectedOptions}
            width="600px"
            searchableProps={{
              inputValue,
              onInputChange: (value: string) => handleInputChange(value),
            }}
            label="Label"
          />
          <div style={{ paddingTop: space8 }}>{tagsMarkup}</div>
        </div>
      );
      `,
    },
  },
};

const WithInlineErrorTemplate: Story<SelectProps> = args => (
  <SearchableMultiSelect {...args} data={countries} />
);

export const WithInlineError = WithInlineErrorTemplate.bind({});

WithInlineError.args = {
  allowMultiple: true,
  scrollable: true,
  helpText: <InlineError text="Error message" />,
  hasError: true,
};

WithInlineError.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'INDONESIA' },
        { label: 'Malaysia', value: 'MALAYSIA' },
        { label: 'Singapore', value: 'SINGAPORE' },
        { label: 'Taiwan', value: 'TAIWAN' },
        { label: 'Vietnam', value: 'VIETNAM' },
      ];

      const [inputValue, setInputValue] = useState('');
      const [selectedOptions, setSelectedOptions] = useState([]);
      const [isSearchEmpty, setIsSearchEmpty] = useState(false);
    
      const [options, setOptions] = useState(countries);
    
      const handleInputChange = (value: string) => {
        setInputValue(value);
    
        if (value === '') {
          setOptions(countries);
          return;
        }
    
        const filterRegex = new RegExp(value, 'i');
        const filterOptions = options.filter((option: Option) =>
          (option.label as string).match(filterRegex)
        );
        setOptions(filterOptions);
      };
    
      const handleSelect = ({ value }: { value: string }) => {
        if (selectedOptions.includes(value)) {
          setSelectedOptions(selectedOptions.filter(option => option !== value));
        } else {
          setSelectedOptions([...selectedOptions, value]);
        }
      };
    
      const removeTag = useCallback(
        tag => () => {
          const options = [...selectedOptions];
          options.splice(options.indexOf(tag), 1);
          setSelectedOptions(options);
        },
        [selectedOptions]
      );
    
      const tagsMarkup = selectedOptions.map(option => (
        <StyledTag
          key={\`option-\${option}\`}
          onRemove={removeTag(option)}
          textColor={Blue.S99}
        >
          {option}
        </StyledTag>
      ));
    
      useEffect(() => {
        if (options.length === 0) {
          setIsSearchEmpty(true);
        }
    
        if (options.length > 0 && isSearchEmpty === true) {
          setIsSearchEmpty(false);
        }
      }, [isSearchEmpty, options]);

      return (
        <div>
          <Select
            allowMultiple
            onSelect={handleSelect}
            options={options}
            selectedValues={selectedOptions}
            width="600px"
            searchableProps={{
              inputValue,
              onInputChange: (value: string) => handleInputChange(value),
            }}
            label="Label"
            hasError
            helpText={<InlineError text="Error message" />}
          />
          <div style={{ paddingTop: space8 }}>{tagsMarkup}</div>
        </div>
      );
      `,
    },
  },
};

const SearchableDisabledTemplate: Story<SelectProps> = args => (
  <SearchableMultiSelect {...args} data={countries} />
);

export const SearchableDisabled = SearchableDisabledTemplate.bind({});

SearchableDisabled.args = {
  disabled: true,
};

SearchableDisabled.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'INDONESIA' },
        { label: 'Malaysia', value: 'MALAYSIA' },
        { label: 'Singapore', value: 'SINGAPORE' },
        { label: 'Taiwan', value: 'TAIWAN' },
        { label: 'Vietnam', value: 'VIETNAM' },
      ];

      const [inputValue, setInputValue] = useState('');
      const [selectedOptions, setSelectedOptions] = useState([]);
      const [isSearchEmpty, setIsSearchEmpty] = useState(false);
    
      const [options, setOptions] = useState(countries);
    
      const handleInputChange = (value: string) => {
        setInputValue(value);
    
        if (value === '') {
          setOptions(countries);
          return;
        }
    
        const filterRegex = new RegExp(value, 'i');
        const filterOptions = options.filter((option: Option) =>
          (option.label as string).match(filterRegex)
        );
        setOptions(filterOptions);
      };
    
      const handleSelect = ({ value }: { value: string }) => {
        if (selectedOptions.includes(value)) {
          setSelectedOptions(selectedOptions.filter(option => option !== value));
        } else {
          setSelectedOptions([...selectedOptions, value]);
        }
      };
    
      const removeTag = useCallback(
        tag => () => {
          const options = [...selectedOptions];
          options.splice(options.indexOf(tag), 1);
          setSelectedOptions(options);
        },
        [selectedOptions]
      );
    
      const tagsMarkup = selectedOptions.map(option => (
        <StyledTag
          key={\`option-\${option}\`}
          onRemove={removeTag(option)}
          textColor={Blue.S99}
        >
          {option}
        </StyledTag>
      ));
    
      useEffect(() => {
        if (options.length === 0) {
          setIsSearchEmpty(true);
        }
    
        if (options.length > 0 && isSearchEmpty === true) {
          setIsSearchEmpty(false);
        }
      }, [isSearchEmpty, options]);
    
      
      return (
        <div>
          <Select
            allowMultiple
            disabled
            onSelect={handleSelect}
            options={options}
            selectedValues={selectedOptions}
            width="600px"
            searchableProps={{
              inputValue,
              onInputChange: (value: string) => handleInputChange(value),
            }}
            label="Label"
            hasError
            helpText={<InlineError text="Error message" />}
          />
          <div style={{ paddingTop: space8 }}>{tagsMarkup}</div>
        </div>
      );
      `,
    },
  },
};

const WithCustomPrefixTemplate: Story<SelectProps> = args => (
  <SearchableMultiSelect {...args} data={countries} />
);

export const WithCustomPrefix = WithCustomPrefixTemplate.bind({});

WithCustomPrefix.args = {
  prefix: <Icon name="ri-account-circle-fill" />,
};

WithCustomPrefix.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'INDONESIA' },
        { label: 'Malaysia', value: 'MALAYSIA' },
        { label: 'Singapore', value: 'SINGAPORE' },
        { label: 'Taiwan', value: 'TAIWAN' },
        { label: 'Vietnam', value: 'VIETNAM' },
      ];

      const [inputValue, setInputValue] = useState('');
      const [selectedOptions, setSelectedOptions] = useState([]);
      const [isSearchEmpty, setIsSearchEmpty] = useState(false);

      const [options, setOptions] = useState(countries);

      const handleInputChange = (value: string) => {
        setInputValue(value);

        if (value === '') {
          setOptions(countries);
          return;
        }

        const filterRegex = new RegExp(value, 'i');
        const filterOptions = options.filter((option: Option) =>
          (option.label as string).match(filterRegex)
        );
        setOptions(filterOptions);
      }

      const handleSelect = ({ value }: { value: string }) => {
        if (selectedOptions.includes(value)) {
          setSelectedOptions(selectedOptions.filter(option => option !== value));
        } else {
          setSelectedOptions([...selectedOptions, value]);
        }
      }

      const removeTag = useCallback(
        tag => () => {
          const options = [...selectedOptions];
          options.splice(options.indexOf(tag), 1);
          setSelectedOptions(options);
        }
        , [selectedOptions]
      );
        
      const tagsMarkup = selectedOptions.map(option => (
        <StyledTag
          key={\`option-\${option}\`}
          onRemove={removeTag(option)}
          textColor={Blue.S99}
        >
          {option}
        </StyledTag>
      ));

      useEffect(() => {
        if (options.length === 0) {
          setIsSearchEmpty(true);
        }

        if (options.length > 0 && isSearchEmpty === true) {
          setIsSearchEmpty(false);
        }
      }
      , [isSearchEmpty, options]);

      return (
        <div>
          <Select
            allowMultiple
            onSelect={handleSelect}
            options={options}
            selectedValues={selectedOptions}
            width="600px"
            searchableProps={{
              inputValue,
              onInputChange: (value: string) => handleInputChange(value),
            }}
            label="Label"
            prefix={<Icon name="ri-account-circle-fill" />}
            hasError
            helpText={<InlineError text="Error message" />}
          />
          <div style={{ paddingTop: space8 }}>{tagsMarkup}</div>
        </div>
      );
      `,
    },
  },
};

const OptionsWithSublabelTemplate: Story<SelectProps> = args => {
  return <SearchableSelect data={skills} {...args} />;
};

export const OptionsWithSublabel = OptionsWithSublabelTemplate.bind({});

OptionsWithSublabel.args = {};

OptionsWithSublabel.parameters = {
  docs: {
    source: {
      code: `
      const skills = [
        { label: 'Fishing', sublabel: 'Memancing', value: 'fishing' },
        { label: 'Cooking', sublabel: 'Memasak', value: 'cooking' },
        { label: 'Swimming', sublabel: 'Renang', value: 'swimming' },
        { label: 'Flying', sublabel: 'Terbang', value: 'flying' },
      ];

      const [inputValue, setInputValue] = useState('');
      const [selectedOptions, setSelectedOptions] = useState([]);
      const [isSearchEmpty, setIsSearchEmpty] = useState(false);
    
      const [options, setOptions] = useState(countries);
    
      const handleInputChange = (value: string) => {
        setInputValue(value);
    
        if (value === '') {
          setOptions(countries);
          return;
        }
    
        const filterRegex = new RegExp(value, 'i');
        const filterOptions = options.filter((option: Option) =>
          (option.label as string).match(filterRegex)
        );
        setOptions(filterOptions);
      };
    
      const handleSelect = ({ value }: { value: string }) => {
        if (selectedOptions.includes(value)) {
          setSelectedOptions(selectedOptions.filter(option => option !== value));
        } else {
          setSelectedOptions([...selectedOptions, value]);
        }
      };
    
      const removeTag = useCallback(
        tag => () => {
          const options = [...selectedOptions];
          options.splice(options.indexOf(tag), 1);
          setSelectedOptions(options);
        },
        [selectedOptions]
      );
    
      const tagsMarkup = selectedOptions.map(option => (
        <StyledTag
          key={\`option-\${option}\`}
          onRemove={removeTag(option)}
          textColor={Blue.S99}
        >
          {option}
        </StyledTag>
      ));
    
      useEffect(() => {
        if (options.length === 0) {
          setIsSearchEmpty(true);
        }
    
        if (options.length > 0 && isSearchEmpty === true) {
          setIsSearchEmpty(false);
        }
      }, [isSearchEmpty, options]);
    
      
      return (
        <div>
          <Select
            allowMultiple
            disabled
            onSelect={handleSelect}
            options={options}
            selectedValues={selectedOptions}
            width="600px"
            searchableProps={{
              inputValue,
              onInputChange: (value: string) => handleInputChange(value),
            }}
            label="Label"
            hasError
            helpText={<InlineError text="Error message" />}
          />
          <div style={{ paddingTop: space8 }}>{tagsMarkup}</div>
        </div>
      );
      `,
    },
  },
};
