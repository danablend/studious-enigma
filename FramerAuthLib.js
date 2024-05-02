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
    FramerAuthLib.FRAMERAUTH_ICON = (<svg width='54' height='54' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg' id='svg587713231_1081'>
            <g clip-path='url(#svg587713231_1081_clip0_11823_130464)'>
                <path d='M-0.1875 3.5625C-0.1875 1.49141 1.49145 -0.1875 3.5625 -0.1875H50.4375C52.5086 -0.1875 54.1875 1.49145 54.1875 3.5625V27C54.1875 42.0154 42.0154 54.1875 27 54.1875C11.9848 54.1875 -0.1875 42.0154 -0.1875 27V3.5625Z' fill='#ADFF00'></path>
                <path fill-rule='evenodd' clip-rule='evenodd' d='M15.75 19.5H14.8125C13.2592 19.5 12 20.7592 12 22.3125V31.6875C12 36.1308 14.8101 39.9177 18.75 41.3681L18.75 33.75H26.625L34.2047 41.6906C38.6835 40.5672 42 36.5147 42 31.6875V22.3125C42 20.7592 40.7407 19.5 39.1875 19.5H38.25V18.5625C38.25 12.8671 33.633 8.25 27.9375 8.25H26.0625C20.367 8.25 15.75 12.8671 15.75 18.5625V19.5ZM21.375 19.5H32.625V18.5625C32.625 15.9736 30.5265 13.875 27.9375 13.875H26.0625C23.4735 13.875 21.375 15.9736 21.375 18.5625V19.5ZM26.625 33.75L34.5 33.75L34.5 25.5L18.75 25.5L26.625 33.75Z' fill='black'></path>
            </g>
            <defs>
                <clipPath id='svg587713231_1081_clip0_11823_130464'>
                    <rect width='54' height='54' fill='white'></rect>
                </clipPath>
            </defs>
        </svg>);
    return FramerAuthLib;
}());
export { FramerAuthComponentType, FramerAuthComponent, FramerAuthLib };
export default FramerAuthLib;
