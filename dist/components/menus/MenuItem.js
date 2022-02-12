import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useState } from 'react';
import { Align, Amount, BackgroundColors, DepthShadow, TextColors, TextSize, } from '../../types';
import { Button, ButtonType } from '../forms/buttons/Button';
import { Container } from '../layout/Container';
import { NavigationLink, } from '../navigation/NavigationLink';
import { Label } from '../typography/Label';
export const MenuItem = memo(({ active, as = 'div', backgroundColor = BackgroundColors.Lightest, borderRadius = Amount.Less, boxShadow = DepthShadow.Surface, className = '', component, focus, hover, icon, label, onClick, title, to, value, ...props }) => {
    const [hovered, setHovered] = useState(false);
    const itemTitle = title ? (_jsx(Label, { textSize: TextSize.Smaller, children: title }, void 0)) : null;
    if (to) {
        return (_jsxs(Container, { children: [itemTitle, _jsx(NavigationLink, { active: active, borderRadius: Amount.Least, backgroundColor: hovered ? BackgroundColors.Primary : BackgroundColors.Transparent, focus: focus, hover: hover, icon: icon, onClick: e => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (onClick)
                            onClick(e);
                    }, paddingLeft: Amount.Less, paddingRight: Amount.Less, textColor: props.textColor ?? TextColors.Default, to: to, children: component ?? label }, void 0)] }, void 0));
    }
    return (_jsxs(Container, { children: [itemTitle, _jsx(Button, { alignContent: Align.Left, borderRadius: Amount.Least, backgroundColor: hovered ? BackgroundColors.Primary : BackgroundColors.Transparent, form: "null", icon: icon, onClick: e => {
                    e.preventDefault();
                    e.stopPropagation();
                    // @ts-ignore
                    if (onClick)
                        onClick(e);
                }, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), paddingLeft: Amount.Less, paddingRight: Amount.Less, type: hovered ? ButtonType.Primary : ButtonType.Transparent, children: component ?? label }, void 0)] }, void 0));
    // return (
    //   <Container
    //     as={as}
    //     backgroundColor={backgroundColor}
    //     boxShadow={boxShadow}
    //     borderRadius={borderRadius}
    //     className={`${className} menu-item`}
    //     {...props}
    //   >
    //     {title && <Label>{title}</Label>}
    //     {icon && <Icon {...icon} />}
    //     {label && <Label>{label}</Label>}
    //     {to && <NavigationLink to={to}>{to}</NavigationLink>}
    //     {value && <Label>{value}</Label>}
    //     {onClick && (
    //       <Button
    //         type={ButtonType.Secondary}
    //         onClick={(e: MouseEvent<HTMLButtonElement>): void => {
    //           onClick({
    //             event: e,
    //             value,
    //           });
    //         }}
    //       >
    //         {label}
    //       </Button>
    //     )}
    //   </Container>
    // );
});
//# sourceMappingURL=MenuItem.js.map