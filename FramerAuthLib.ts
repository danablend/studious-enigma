/**
 * FramerAuthFormType is an enum that represents the different types of forms that can be used on FramerAuth sites.
 */
enum FramerAuthFormType {
    SIGN_IN = 'sign_in',
    SIGN_UP = 'sign_up',
    CHANGE_PASSWORD = 'change_password',
    FORGOT_PASSWORD = 'forgot_password',
    ACTIVATE_LICENSE_KEY = 'activate_license',
    MEMBER_PROFILE = 'member_profile',
}

/**
 * FramerAuthForm is a class that represents a form that can be used on FramerAuth sites.
 */
class FramerAuthForm {
    public readonly name: string;
    public readonly type: FramerAuthFormType;
    public readonly moduleUrl: string;

    constructor(_name: string, _type: FramerAuthFormType, _moduleUrl: string) {
        this.name = _name;
        this.type = _type;
        this.moduleUrl = _moduleUrl;
    }
}

const framerAuthForms: Record<FramerAuthFormType, FramerAuthForm> = {
    [FramerAuthFormType.SIGN_IN]: new FramerAuthForm("Sign In", FramerAuthFormType.SIGN_IN, 'https://framer.com/m/AuthSignInForm-6WfL.js@TikE7jtU4v6p0h56OPPB'),
    [FramerAuthFormType.SIGN_UP]: new FramerAuthForm("Sign Up", FramerAuthFormType.SIGN_UP, 'https://framer.com/m/AuthSignUpForm-3LGT.js@8LqkPACmOTDOn2rd2CiV'),
    [FramerAuthFormType.CHANGE_PASSWORD]: new FramerAuthForm("Change Password", FramerAuthFormType.CHANGE_PASSWORD, 'https://framer.com/m/AuthChangePassword-jjQ2.js@csqAaCtzfuu3wl7744Lf'),
    [FramerAuthFormType.FORGOT_PASSWORD]: new FramerAuthForm("Forgot Password", FramerAuthFormType.FORGOT_PASSWORD, 'https://framer.com/m/AuthForgotPasswordForm-qpKO.js@0x0iYh2z50YACi9Pg8Cb'),
    [FramerAuthFormType.ACTIVATE_LICENSE_KEY]: new FramerAuthForm("Activate License Key", FramerAuthFormType.ACTIVATE_LICENSE_KEY, 'https://framer.com/m/AuthActivateLicenseKey-Ej0S.js@MsuNk7lbUFvUfnayL2Bl'),
    [FramerAuthFormType.MEMBER_PROFILE]: new FramerAuthForm("Member Profile", FramerAuthFormType.MEMBER_PROFILE, 'https://framer.com/m/AuthMemberProfile-ioi1.js@xXrpzSc2tXLe4q0CEdGN'),
}

/**
 * FramerAuthLib contains useful constants and functions for building modular components for the FramerAuth plugin.
 */
class FramerAuthLib {
    public static readonly FORMS = framerAuthForms;
}

export default FramerAuthLib
