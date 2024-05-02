var _a;
/**
 * FramerAuthComponentType is an enum that represents the different types of component that can be used on FramerAuth sites.
 */
var FramerAuthComponentType;
(function (FramerAuthComponentType) {
    FramerAuthComponentType["NAVIGATION_WIDGET"] = "navigation_widget";
    FramerAuthComponentType["SIGN_IN_FORM"] = "sign_in_form";
    FramerAuthComponentType["SIGN_UP_FORM"] = "sign_up_form";
    FramerAuthComponentType["CHANGE_PASSWORD_FORM"] = "change_password_form";
    FramerAuthComponentType["FORGOT_PASSWORD_FORM"] = "forgot_password_form";
    FramerAuthComponentType["ACTIVATE_LICENSE_KEY_FORM"] = "activate_license_form";
    FramerAuthComponentType["MEMBER_PROFILE_FORM"] = "member_profile_form";
})(FramerAuthComponentType || (FramerAuthComponentType = {}));
/**
 * FramerAuthComponent is a class that represents a form that can be used on FramerAuth sites.
 */
var FramerAuthComponent = /** @class */ (function () {
    function FramerAuthComponent(_name, _type, _moduleUrl) {
        this.name = _name;
        this.type = _type;
        this.moduleUrl = _moduleUrl;
    }
    return FramerAuthComponent;
}());
var framerAuthComponents = (_a = {},
    _a[FramerAuthComponentType.NAVIGATION_WIDGET] = new FramerAuthComponent('Navigation Widget', FramerAuthComponentType.NAVIGATION_WIDGET, 'https://framer.com/m/AuthWidget-yuAo.js'),
    _a[FramerAuthComponentType.SIGN_IN_FORM] = new FramerAuthComponent('Sign In Form', FramerAuthComponentType.SIGN_IN_FORM, 'https://framer.com/m/AuthSignIn-msC9.js'),
    _a[FramerAuthComponentType.SIGN_UP_FORM] = new FramerAuthComponent('Sign Up Form', FramerAuthComponentType.SIGN_UP_FORM, 'https://framer.com/m/AuthSignUp-Xjxr.js'),
    _a[FramerAuthComponentType.CHANGE_PASSWORD_FORM] = new FramerAuthComponent('Change Password Form', FramerAuthComponentType.CHANGE_PASSWORD_FORM, 'https://framer.com/m/AuthUpdatePassword-aIIH.js'),
    _a[FramerAuthComponentType.FORGOT_PASSWORD_FORM] = new FramerAuthComponent('Forgot Password Form', FramerAuthComponentType.FORGOT_PASSWORD_FORM, 'https://framer.com/m/AuthResetPassword-9G7D.js'),
    _a[FramerAuthComponentType.ACTIVATE_LICENSE_KEY_FORM] = new FramerAuthComponent('Activate License Key Form', FramerAuthComponentType.ACTIVATE_LICENSE_KEY_FORM, 'https://framer.com/m/AuthActivateLicenseKey-nnY2.js'),
    _a[FramerAuthComponentType.MEMBER_PROFILE_FORM] = new FramerAuthComponent('Member Profile Form', FramerAuthComponentType.MEMBER_PROFILE_FORM, 'https://framer.com/m/AuthMemberProfile-ioi1.js@xXrpzSc2tXLe4q0CEdGN'),
    _a);
/**
 * FramerAuthLib contains useful constants and functions for building modular components for the FramerAuth plugin.
 */
var FramerAuthLib = /** @class */ (function () {
    function FramerAuthLib() {
    }
    /**
     * Record of FramerAuthComponent objects that represent the different types of component that can be used on FramerAuth sites.
     */
    FramerAuthLib.COMPONENTS = framerAuthComponents;
    return FramerAuthLib;
}());
export { FramerAuthComponentType, FramerAuthComponent, FramerAuthLib };
export default FramerAuthLib;
