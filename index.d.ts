import { EmitterSubscription } from 'react-native'

/**
 * @deprecated
 */
type ImmersiveModeType = {
    Normal: number,
    Full: number,
    FullSticky: number,
    Bottom: number,
    BottomSticky: number,
}

type BarVisibilityType = {
    statusBar: boolean,
    navigationBottomBar: boolean
}

type ImmersiveBarStyleType = 'Dark' | 'Light';
type ImmersiveBarModeType =
    'Normal' |
    'Full' |
    'FullSticky' |
    'Bottom' |
    'BottomSticky'


interface ImmersiveModeStatic extends ImmersiveModeType {
    fullLayout(full: boolean, includeNavbar: boolean): void;

    /**
     * Set system ui mode.
     * @param mode
     *
     * @deprecated use `setBarMode` instead.
     */
    setImmersive(mode: ImmersiveModeType): void;

    /**
     * Set system ui mode.
     * @param mode
     */
    setBarMode(mode: ImmersiveBarModeType): void;

    /**
     * Set color of system bar.
     * When set color translucent will be disabled.
     *
     * @param color color hex #rrggbbaa. if color is null will set default color
     */
    setBarColor(color: string, setStatusbar: boolean): void;

    /**
     * Set style of system status bar.
     *
     * @param style
     */
    setStatusBarStyle(style: ImmersiveBarStyleType): void;

    /**
     * Set style of system nav bar.
     *
     * @param style
     */
    setNavBarStyle(style: ImmersiveBarStyleType): void;

    /**
     * Set or remove system status bar translucent flag.
     *
     * @param enable
     */
    setStatusBarTranslucent(enable: boolean): void;

    /**
     * Set or remove system nav bar translucent flag.
     *
     * @param enable
     */
    setNavBarTranslucent(enable: boolean): void;

    addEventListener(callback: (visibility: BarVisibilityType) => void): EmitterSubscription;
}

declare const ImmersiveMode: ImmersiveModeStatic;
export default ImmersiveMode;