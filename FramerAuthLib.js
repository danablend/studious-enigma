var _a;
/**
 * FramerAuthComponentType is an enum that represents the different types of component that can be used on FramerAuth sites.
 */
var FramerAuthComponentType;
(function (FramerAuthComponentType) {
    FramerAuthComponentType["SIGN_IN"] = "sign_in";
    FramerAuthComponentType["SIGN_UP"] = "sign_up";
    FramerAuthComponentType["CHANGE_PASSWORD"] = "change_password";
    FramerAuthComponentType["FORGOT_PASSWORD"] = "forgot_password";
    FramerAuthComponentType["ACTIVATE_LICENSE_KEY"] = "activate_license";
    FramerAuthComponentType["MEMBER_PROFILE"] = "member_profile";
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
    _a[FramerAuthComponentType.SIGN_IN] = new FramerAuthComponent('Sign In', FramerAuthComponentType.SIGN_IN, 'https://framer.com/m/AuthSignInComponent-6WfL.js@TikE7jtU4v6p0h56OPPB'),
    _a[FramerAuthComponentType.SIGN_UP] = new FramerAuthComponent('Sign Up', FramerAuthComponentType.SIGN_UP, 'https://framer.com/m/AuthSignUpComponent-3LGT.js@8LqkPACmOTDOn2rd2CiV'),
    _a[FramerAuthComponentType.CHANGE_PASSWORD] = new FramerAuthComponent('Change Password', FramerAuthComponentType.CHANGE_PASSWORD, 'https://framer.com/m/AuthChangePassword-jjQ2.js@csqAaCtzfuu3wl7744Lf'),
    _a[FramerAuthComponentType.FORGOT_PASSWORD] = new FramerAuthComponent('Forgot Password', FramerAuthComponentType.FORGOT_PASSWORD, 'https://framer.com/m/AuthForgotPasswordComponent-qpKO.js@0x0iYh2z50YACi9Pg8Cb'),
    _a[FramerAuthComponentType.ACTIVATE_LICENSE_KEY] = new FramerAuthComponent('Activate License Key', FramerAuthComponentType.ACTIVATE_LICENSE_KEY, 'https://framer.com/m/AuthActivateLicenseKey-Ej0S.js@MsuNk7lbUFvUfnayL2Bl'),
    _a[FramerAuthComponentType.MEMBER_PROFILE] = new FramerAuthComponent('Member Profile', FramerAuthComponentType.MEMBER_PROFILE, 'https://framer.com/m/AuthMemberProfile-ioi1.js@xXrpzSc2tXLe4q0CEdGN'),
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
