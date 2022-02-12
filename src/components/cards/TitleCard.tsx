import { memo, ReactElement } from 'react';

import { Container } from '../layout/Container';
import { Label } from '../typography/Label';
import { LoadingOverlay } from '../progress/LoadingOverlay';

import {
  Align,
  Amount,
  BackgroundColors,
  ContainerProps,
  DepthShadow,
  IconProps,
  Orientation,
  Overflow,
  Position,
  Size,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import { Icon } from '../media/Icon';
import { Title } from '../typography/Title';
import { Small } from '../typography/Small';

type TitleCardsProps = ContainerProps;

export const TitleCards = memo(
  ({
    children,
    className = 'title-cards',
    grow = false,
    minHeight = 82,
    orientation = Orientation.Horizontal,
    ...props
  }: TitleCardsProps): ReactElement => {
    return (
      <Container
        className={`${className} title-cards`}
        grow={grow}
        minHeight={minHeight}
        overflow={Overflow.ScrollHorizontal}
        paddingBottom={Amount.Default}
        {...props}
      >
        <Container
          orientation={orientation}
          overflow={Overflow.ScrollHorizontal}
          position={Position.Absolute}
        >
          {children}
        </Container>
      </Container>
    );
  },
);

type TitleCardProps = {
  icon?: IconProps;
  label?: string;
  loading?: boolean;
  value?: number;
} & ContainerProps<HTMLDivElement>;

export const TitleCard = memo(
  ({
    backgroundColor = BackgroundColors.Card,
    borderRadius = Amount.Least,
    boxShadow = DepthShadow.High,
    className = '',
    grow = true,
    flat = false,
    label,
    loading = false,
    marginRight = Amount.Default,
    orientation = Orientation.Horizontal,
    padding = Amount.Default,
    value,
    icon,
    width = 260,
    ...props
  }: TitleCardProps): ReactElement => {
    return (
      <Container
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
        className={`${className} title-card`}
        flat={flat}
        grow={grow}
        marginRight={marginRight}
        orientation={orientation}
        padding={padding}
        width={width}
        {...props}
      >
        <LoadingOverlay visible={loading} spinnerSize={Size.Small} />

        {icon && (
          <Container
            alignItems={Align.Center}
            alignContent={Align.Center}
            borderRadius={Amount.All}
            grow={false}
            marginRight={Amount.Default}
            paddingLeft={Amount.Less}
            paddingRight={Amount.Less}
          >
            <Icon {...icon} />
          </Container>
        )}

        {!loading && (
          <Container
            alignContent={Align.Center}
            alignItems={Align.Left}
            orientation={Orientation.Vertical}
          >
            <Small>{label}</Small>

            <Title>{value}</Title>
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
