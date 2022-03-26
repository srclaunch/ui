import { memo, ReactElement } from 'react';
import { Container, ContainerProps } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import {
  AlignVertical,
  Amount,
  BackgroundColors,
  DepthShadow,
  Orientation,
  Sizes,
} from '../../types';
import { Icon, IconProps } from '../media/Icon';
import { Title } from '../typography/Title';
import { Small } from '../typography/Small';

type TitleCardProps = ContainerProps & {
  icon?: IconProps;
  label?: string;
  loading?: boolean;
  value?: number;
};

export const TitleCard = memo(
  ({
    alignment = {},
    background = {},
    borderRadius = {},
    className = '',
    label,
    loading = false,
    padding = {},
    value,
    icon,
    shadow = DepthShadow.High,
    size = {},
    ...props
  }: TitleCardProps): ReactElement => {
    return (
      <Container
        alignment={{ orientation: Orientation.Horizontal, ...alignment }}
        background={{ color: BackgroundColors.Card, ...background }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} title-card`}
        padding={{ all: Amount.Default, ...padding }}
        shadow={shadow}
        size={{ width: 260, ...size }}
        {...props}
      >
        <LoadingOverlay
          spinnerSize={{
            height: Sizes.Small,
            width: Sizes.Small,
          }}
          states={{
            state: { visible: loading },
          }}
        />

        {icon && (
          <Icon
            margin={{ right: Amount.Default }}
            size={{ height: Sizes.Large, width: Sizes.Large }}
            {...icon}
          />
        )}

        {!loading && (
          <Container
            alignment={{
              orientation: Orientation.Vertical,
              vertical: AlignVertical.Center,
            }}
          >
            <Small>{label}</Small>

            <Title lineHeight={Sizes.Default}>{value}</Title>
          </Container>
        )}
      </Container>
    );
  },
);

// const Container = styled.div`
//   overflow: hidden;
//   overflow-x: scroll;

//   &::-webkit-scrollbar {
//     height: 7px;
//     margin-left: 25px;
//     position: relative;
//     left: 7px;
//     background: transparent;
//   }

//   &::-webkit-scrollbar-thumb {
//     height: 7px;
//     background: rgba(0, 0, 0, 0.08);
//     border-radius: 10px;
//   }
// `;

// const Card = styled.div<{
//   card?: boolean;
// }>`
//   background: white;
//   border-radius: 10px;
//   padding: 15px;
//   position: relative;

//   ${(props) =>
//     props.card === true &&
//     css`
//       box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
//     `}
// `;
