import { NativeModules, DeviceEventEmitter } from 'react-native';

const { RNImmersiveMode } = NativeModules;

const checkModule = () => {
    if (!RNImmersiveMode) {
        throw Error('RNImmersiveMode is not properly linked');
    }
}

const ImmersiveMode = {
    /**
     * @deprecated
     */
    ...RNImmersiveMode, // for constants

    fullLayout(full, includeNavbar) {
        checkModule();
        RNImmersiveMode.fullLayout(full, includeNavbar);
    },

    /**
     * @deprecated
     */
    setImmersive(mode) {
        checkModule();
        RNImmersiveMode.setImmersive(mode);
    },

    setBarMode(mode) {
        checkModule();
        RNImmersiveMode.setBarMode(mode);
    },

    setStatusBarStyle(style) {
        checkModule();
        RNImmersiveMode.setStatusBarStyle(style);
    },

    setNavBarStyle(style) {
        checkModule();
        RNImmersiveMode.setNavBarStyle(style);
    },

    setStatusBarTranslucent(enable) {
        checkModule();
        RNImmersiveMode.setStatusBarTranslucent(enable);
    },

    setNavBarTranslucent(enable) {
        checkModule();
        RNImmersiveMode.setNavBarTranslucent(enable);
    },

    setBarColor(color, setStatusbar) {
        checkModule();
        if (typeof color === 'string') {
            if (color.length === 9) {
                // convert #rgba to #argb
                color = '#' + color.substr(7, 2) + color.substr(1, 6);
            } else if (color.length === 4) {
                color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
            }
        }

        RNImmersiveMode.setBarColor(color, setStatusbar);
    },

    addEventListener(callback) {
        checkModule();
        if (typeof callback !== 'function') return;

        RNImmersiveMode.setOnSystemUiVisibilityChangeListener();

        const subscription = DeviceEventEmitter.addListener(
            RNImmersiveMode.OnSystemUiVisibilityChange,
            (e) => callback(e));

        return subscription;
    }
}

export default ImmersiveMode;