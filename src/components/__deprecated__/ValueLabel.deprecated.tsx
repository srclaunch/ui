import {
  formatCurrency,
  // logException
} from '@srclaunch/i18n';
import { NotificationType } from '@srclaunch/types';
import styled from 'styled-components';

import NotificationLabel from '../notifications/NotificationLabel';
import Link from '../typography/Link';

export const daysOfTheMonth = [
  {
    day: 1,
    label: '1st',
  },
  {
    day: 2,
    label: '2nd',
  },
  {
    day: 3,
    label: '3rd',
  },
  {
    day: 4,
    label: '4th',
  },
  {
    day: 5,
    label: '5th',
  },
  {
    day: 6,
    label: '6th',
  },
  {
    day: 7,
    label: '7th',
  },
  {
    day: 8,
    label: '8th',
  },
  {
    day: 9,
    label: '9th',
  },
  {
    day: 10,
    label: '10th',
  },
  {
    day: 11,
    label: '11th',
  },
  {
    day: 12,
    label: '12th',
  },
  {
    day: 13,
    label: '13th',
  },
  {
    day: 14,
    label: '14th',
  },
  {
    day: 15,
    label: '15th',
  },
  {
    day: 16,
    label: '16th',
  },
  {
    day: 17,
    label: '17th',
  },
  {
    day: 18,
    label: '18th',
  },
  {
    day: 19,
    label: '19th',
  },
  {
    day: 20,
    label: '20th',
  },
  {
    day: 21,
    label: '21st',
  },
  {
    day: 22,
    label: '22nd',
  },
  {
    day: 23,
    label: '23rd',
  },
  {
    day: 24,
    label: '24th',
  },
  {
    day: 25,
    label: '25th',
  },
  {
    day: 26,
    label: '26th',
  },
  {
    day: 27,
    label: '27th',
  },
  {
    day: 28,
    label: '28th',
  },
  {
    day: 29,
    label: '29th',
  },
  {
    day: 30,
    label: '30th',
  },
  {
    day: 31,
    label: '31st',
  },
];

export const daysOfTheWeek = [
  {
    day: 0,
    label: 'Sunday',
  },
  {
    day: 1,
    label: 'Monday',
  },
  {
    day: 2,
    label: 'Tuesday',
  },
  {
    day: 3,
    label: 'Wednesday',
  },
  {
    day: 4,
    label: 'Thursday',
  },
  {
    day: 5,
    label: 'Friday',
  },
  {
    day: 6,
    label: 'Saturday',
  },
];

function getFormattedLabel({
  currencyCode,
  imageProps,
  type,
  value,
  urlProps,
}: {
  currencyCode?: string;
  imageProps?: {
    alt?: string;
    height?: number;
    width?: number;
    url: string;
  };
  type:
    | 'alert'
    | 'boolean'
    | 'day-of-month'
    | 'image'
    | 'string'
    | 'currency'
    | 'url';
  value: string | number | boolean;
  urlProps?: {
    name: string;
    data?: Record<string, unknown>;
    target?: string;
    rel?: string;
  };
}): { label?: string | number | React.ReactElement; error?: boolean } {
  switch (type) {
    case 'alert': {
      return {
        label: (
          <NotificationLabel type={NotificationType.Error}>
            {value.toString()}
          </NotificationLabel>
        ),
      };
    }
    case 'boolean': {
      if (value === undefined) return { error: true, label: 'undefined' };

      if (value === true) return { label: 'Yes' };

      return { label: 'No' };
    }

    case 'currency': {
      if (typeof value === 'boolean' || typeof currencyCode !== 'string')
        return { error: true, label: value.toString() };

      const numFromVal =
        typeof value === 'string' ? Number.parseFloat(value) : value;

      const formatted = formatCurrency({
        amount: numFromVal,
        currency: currencyCode,
      });

      return { error: !formatted, label: formatted ?? value.toString() };
    }

    case 'day-of-month': {
      const day = daysOfTheMonth?.find(d => d?.day === value);

      return { error: !day, label: day?.label ?? value.toString() };
    }

    case 'image': {
      if (!imageProps?.url) return { error: true, label: value.toString() };

      const img = (
        <img
          alt={imageProps?.alt}
          src={imageProps.url}
          height={imageProps?.height}
          width={imageProps?.width}
        />
      );

      return { error: !img, label: img ?? value.toString() };
    }

    case 'url': {
      if (!value) return { error: true, label: value.toString() };

      const link = (
        <Link
          to={value.toString()}
          // data={urlProps?.data}
        >
          {value}
        </Link>
      );

      return { error: !link, label: link ?? value.toString() };
    }

    default:
      return { error: true, label: value.toString() };
  }
}

const DeprecatedValueLabel = ({
  currencyCode,
  type,
  value,
  imageProps,
  urlProps,
}: {
  currencyCode?: string;
  type:
    | 'alert'
    | 'boolean'
    | 'day-of-month'
    | 'image'
    | 'string'
    | 'currency'
    | 'url';
  value?: string | number | boolean;
  urlProps?: {
    name: string;
    data?: Record<string, unknown>;
    target?: string;
    rel?: string;
  };
  imageProps?: {
    alt?: string;
    height?: number;
    width?: number;
    url: string;
  };
}): React.ReactElement => {
  if (!value || type) {
    return <Container className="error">{value}</Container>;
  }

  const { error, label } = getFormattedLabel({
    currencyCode,
    imageProps,
    type,
    urlProps,
    value,
  });

  if (error) {
    // logException(new Error('PresentationError: Unable to display formatted value'), {
    //   tags: { file: 'components/forms/ValueLabel.tsx' },
    // });
  }

  return (
    <Container
      className={
        error || value === undefined || type === undefined ? 'error' : ''
      }
    >
      {label}
    </Container>
  );
};

const Container = styled.div`
  &.error {
    border: 1px solid transparent;
    border-color: var(--color-error);
  }
`;

export default DeprecatedValueLabel;
