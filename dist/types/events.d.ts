import { PointerEventHandler } from 'react';
import { AnimationEventHandler, ChangeEventHandler, ClipboardEventHandler, CompositionEventHandler, DragEventHandler, ReactEventHandler, FocusEventHandler, FormEventHandler, KeyboardEventHandler, MouseEventHandler, TouchEventHandler, UIEventHandler, WheelEventHandler } from 'react';
import { Validation } from './validation';
export declare type InputValueChangeHandler<V> = ({ validation, value, }: {
    readonly validation?: Validation;
    readonly value: V | any;
}) => void;
declare type HasInputValueType<V> = V extends undefined ? {} : {
    readonly onValueChange?: InputValueChangeHandler<V>;
};
export declare type Events<V = undefined> = {
    animation?: {
        readonly onAnimationStart?: AnimationEventHandler;
        readonly onAnimationEnd?: AnimationEventHandler;
        readonly onAnimationIteration?: AnimationEventHandler;
        readonly onTransitionEnd?: AnimationEventHandler;
    };
    clipboard?: {
        readonly onCut?: ClipboardEventHandler;
        readonly onCopy?: ClipboardEventHandler;
        readonly onPaste?: ClipboardEventHandler;
    };
    composition?: {
        readonly onCompositionEnd?: CompositionEventHandler;
        readonly onCompositionStart?: CompositionEventHandler;
        readonly onCompositionUpdate?: CompositionEventHandler;
    };
    details?: {
        readonly onToggle?: ReactEventHandler;
    };
    focus?: {
        readonly disabled?: boolean;
        readonly onBlur?: FocusEventHandler;
        readonly onFocus?: FocusEventHandler;
    };
    forms?: {
        readonly onChange?: FormEventHandler;
        readonly onInput?: FormEventHandler;
        readonly onInvalid?: FormEventHandler;
        readonly onReset?: FormEventHandler;
        readonly onSubmit?: FormEventHandler;
    };
    image?: {
        readonly onError?: ReactEventHandler;
        readonly onLoad?: ReactEventHandler;
    };
    input?: {
        readonly onChange?: ChangeEventHandler;
    } & HasInputValueType<V>;
    keyboard?: {
        readonly onKeyDown?: KeyboardEventHandler;
        readonly onKeyPress?: KeyboardEventHandler;
        readonly onKeyUp?: KeyboardEventHandler;
    };
    media?: {
        readonly onAbort?: ReactEventHandler;
        readonly onCanPlay?: ReactEventHandler;
        readonly onCanPlayThrough?: ReactEventHandler;
        readonly onDurationChange?: ReactEventHandler;
        readonly onEmptied?: ReactEventHandler;
        readonly onEncrypted?: ReactEventHandler;
        readonly onEnded?: ReactEventHandler;
        readonly onLoadedData?: ReactEventHandler;
        readonly onLoadedMetadata?: ReactEventHandler;
        readonly onLoadStart?: ReactEventHandler;
        readonly onPause?: ReactEventHandler;
        readonly onPlay?: ReactEventHandler;
        readonly onPlaying?: ReactEventHandler;
        readonly onProgress?: ReactEventHandler;
        readonly onRateChange?: ReactEventHandler;
        readonly onSeeked?: ReactEventHandler;
        readonly onSeeking?: ReactEventHandler;
        readonly onStalled?: ReactEventHandler;
        readonly onSuspend?: ReactEventHandler;
        readonly onTimeUpdate?: ReactEventHandler;
        readonly onVolumeChange?: ReactEventHandler;
        readonly onWaiting?: ReactEventHandler;
    };
    mouse?: {
        readonly disabled?: boolean;
        readonly onClick?: MouseEventHandler;
        readonly onContextMenu?: MouseEventHandler;
        readonly onDoubleClick?: MouseEventHandler;
        readonly onDrag?: DragEventHandler;
        readonly onDragEnd?: DragEventHandler;
        readonly onDragEnter?: DragEventHandler;
        readonly onDragExit?: DragEventHandler;
        readonly onDragLeave?: DragEventHandler;
        readonly onDragOver?: DragEventHandler;
        readonly onDragStart?: DragEventHandler;
        readonly onDrop?: DragEventHandler;
        readonly onMouseDown?: MouseEventHandler;
        readonly onMouseEnter?: MouseEventHandler;
        readonly onMouseLeave?: MouseEventHandler;
        readonly onMouseMove?: MouseEventHandler;
        readonly onMouseOut?: MouseEventHandler;
        readonly onMouseOver?: MouseEventHandler;
        readonly onMouseUp?: MouseEventHandler;
    };
    pointer?: {
        readonly onGotPointerCapture?: PointerEventHandler;
        readonly onLostPointerCapture?: PointerEventHandler;
        readonly onPointerDown?: PointerEventHandler;
        readonly onPointerMove?: PointerEventHandler;
        readonly onPointerUp?: PointerEventHandler;
        readonly onPointerCancel?: PointerEventHandler;
        readonly onPointerEnter?: PointerEventHandler;
        readonly onPointerLeave?: PointerEventHandler;
        readonly onPointerOver?: PointerEventHandler;
        readonly onPointerOut?: PointerEventHandler;
    };
    state?: {
        readonly onError?: ReactEventHandler;
        readonly onLoad?: ReactEventHandler;
    };
    text?: {
        readonly onSelect?: ReactEventHandler;
    };
    touch?: {
        readonly onTouchCancel?: TouchEventHandler;
        readonly onTouchEnd?: TouchEventHandler;
        readonly onTouchMove?: TouchEventHandler;
        readonly onTouchStart?: TouchEventHandler;
    };
    ui?: {
        readonly onScroll?: UIEventHandler;
    };
    wheel?: {
        readonly onWheel?: WheelEventHandler;
    };
};
export {};
//# sourceMappingURL=events.d.ts.map