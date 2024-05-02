var _a;
/**
 * FramerAuthFormType is an enum that represents the different types of forms that can be used on FramerAuth sites.
 */
var FramerAuthFormType;
(function (FramerAuthFormType) {
    FramerAuthFormType["SIGN_IN"] = "sign_in";
    FramerAuthFormType["SIGN_UP"] = "sign_up";
    FramerAuthFormType["CHANGE_PASSWORD"] = "change_password";
    FramerAuthFormType["FORGOT_PASSWORD"] = "forgot_password";
    FramerAuthFormType["ACTIVATE_LICENSE_KEY"] = "activate_license";
    FramerAuthFormType["MEMBER_PROFILE"] = "member_profile";
})(FramerAuthFormType || (FramerAuthFormType = {}));
/**
 * FramerAuthForm is a class that represents a form that can be used on FramerAuth sites.
 */
var FramerAuthForm = /** @class */ (function () {
    function FramerAuthForm(_name, _type, _moduleUrl) {
        this.name = _name;
        this.type = _type;
        this.moduleUrl = _moduleUrl;
    }
    return FramerAuthForm;
}());
var framerAuthForms = (_a = {},
    _a[FramerAuthFormType.SIGN_IN] = new FramerAuthForm("Sign In", FramerAuthFormType.SIGN_IN, 'https://framer.com/m/AuthSignInForm-6WfL.js@TikE7jtU4v6p0h56OPPB'),
    _a[FramerAuthFormType.SIGN_UP] = new FramerAuthForm("Sign Up", FramerAuthFormType.SIGN_UP, 'https://framer.com/m/AuthSignUpForm-3LGT.js@8LqkPACmOTDOn2rd2CiV'),
    _a[FramerAuthFormType.CHANGE_PASSWORD] = new FramerAuthForm("Change Password", FramerAuthFormType.CHANGE_PASSWORD, 'https://framer.com/m/AuthChangePassword-jjQ2.js@csqAaCtzfuu3wl7744Lf'),
    _a[FramerAuthFormType.FORGOT_PASSWORD] = new FramerAuthForm("Forgot Password", FramerAuthFormType.FORGOT_PASSWORD, 'https://framer.com/m/AuthForgotPasswordForm-qpKO.js@0x0iYh2z50YACi9Pg8Cb'),
    _a[FramerAuthFormType.ACTIVATE_LICENSE_KEY] = new FramerAuthForm("Activate License Key", FramerAuthFormType.ACTIVATE_LICENSE_KEY, 'https://framer.com/m/AuthActivateLicenseKey-Ej0S.js@MsuNk7lbUFvUfnayL2Bl'),
    _a[FramerAuthFormType.MEMBER_PROFILE] = new FramerAuthForm("Member Profile", FramerAuthFormType.MEMBER_PROFILE, 'https://framer.com/m/AuthMemberProfile-ioi1.js@xXrpzSc2tXLe4q0CEdGN'),
    _a);
/**
 * FramerAuthLib contains useful constants and functions for building modular components for the FramerAuth plugin.
 */
var FramerAuthLib = /** @class */ (function () {
    function FramerAuthLib() {
    }
    /**
     * Record of FramerAuthForm objects that represent the different types of forms that can be used on FramerAuth sites.
     */
    FramerAuthLib.FORMS = framerAuthForms;
    return FramerAuthLib;
}());
export default FramerAuthLib;
