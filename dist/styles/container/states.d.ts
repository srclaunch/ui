import { SimpleInterpolation } from 'styled-components';
import { ContainerProps } from '../../components/layout/Container';
import { Background } from '../../types';
export declare function getDisabledStateStyles(): SimpleInterpolation;
export declare function getFocusedOutlineColor(backgroundColor?: Background['color']): string | number | undefined;
export declare function getFocusedStyles(): SimpleInterpolation;
export declare function getVisibleStateStyles(): SimpleInterpolation;
export declare function getHiddenStateStyles(): SimpleInterpolation;
export declare function getContainerStatesStyles(props: ContainerProps): SimpleInterpolation;
export declare const StateStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ContainerProps, any>>;
//# sourceMappingURL=states.d.ts.map