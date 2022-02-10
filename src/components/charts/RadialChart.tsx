import { memo, ReactElement } from 'react';
// import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';
import { ContainerProps, DimensionProps } from '../../types';

type RadialChartProps = ContainerProps<
  HTMLDivElement,
  DimensionProps<{
    data: {
      title?: string | number;
      color: string;
      value: number;
      key?: string | number;
      [key: string]: any;
    };
  }>
>;

export const RadialChart = memo(
  ({ data, ...props }: RadialChartProps): ReactElement => {
    // const [localData, setLocalData] = useState(data);

    // useEffect(() => {
    //   setLocalData(data);
    // }, [data]);

    return (
      <Container {...props}>
        {/*<PieChart*/}
        {/*  animate={false}*/}
        {/*  animationDuration={500}*/}
        {/*  animationEasing="ease-in"*/}
        {/*  // cx={50}*/}
        {/*  // cy={50}*/}
        {/*  // data={localData}*/}
        {/*  label={props => {*/}
        {/*    const label =*/}
        {/*      data[props.dataIndex].title === 'UNSPENT' ? ' Remaining' : '';*/}

        {/*    return `${Math.round(data[props.dataIndex].percentage)}%${label}`;*/}
        {/*  }}*/}
        {/*  labelPosition={80}*/}
        {/*  labelStyle={{*/}
        {/*    fill: 'rgba(0, 0, 0, .5)',*/}
        {/*    fontSize: '5px',*/}
        {/*    fontWeight: 'bold',*/}
        {/*  }}*/}
        {/*  lengthAngle={180}*/}
        {/*  lineWidth={15}*/}
        {/*  onClick={undefined}*/}
        {/*  onMouseOut={undefined}*/}
        {/*  onMouseOver={undefined}*/}
        {/*  paddingAngle={0}*/}
        {/*  radius={50}*/}
        {/*  rounded={false}*/}
        {/*  startAngle={180}*/}
        {/*  style={{*/}
        {/*    height: `${height}px`,*/}
        {/*  }}*/}
        {/*  viewBoxSize={[100, 100]}*/}
        {/*/>*/}
      </Container>
    );
  },
);

const Container = styled.div``;
