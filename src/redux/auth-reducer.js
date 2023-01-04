"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCaptchaUrl = exports.logout = exports.login = exports.getAuthUserData = exports.setIsLoading = exports.setIsAuth = exports.setCaptchaUrl = exports.setAvatarUrl = exports.setAuthUserData = void 0;
var api_1 = require("../api/api");
var redux_form_1 = require("redux-form");
var profile_reducer_1 = require("./profile-reducer");
var SET_USER_DATA = 'auth/SET_USER_DATA';
var SET_IS_LOADING = 'auth/SET_IS_LOADING';
var SET_AVATAR_URL = 'auth/SET_AVATAR_URL';
var SET_IS_AUTH = 'auth/SET_IS_AUTH';
var SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';
var initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isLoading: false,
    avatarUrl: null,
    captchaUrl: null,
};
var authReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SET_USER_DATA:
            return __assign(__assign(__assign({}, state), action.payload), { captchaUrl: null });
        case SET_IS_LOADING:
            return __assign(__assign({}, state), { isLoading: action.isLoading });
        case SET_AVATAR_URL:
            return __assign(__assign({}, state), { avatarUrl: action.avatarUrl });
        case SET_IS_AUTH:
            return __assign(__assign({}, state), { isAuth: action.isAuth });
        case SET_CAPTCHA_URL:
            return __assign(__assign({}, state), { captchaUrl: action.captchaUrl });
        default:
            return state;
    }
};
/*
    можно использовать payload - упаковываем данные в объект payload и раскукоживаем в редьюсере
    action - ({type: SET_AVATAR_URL, payload: {avatarUrl}})
    action - ({type: SET_AVATAR_URL, payload: {captchaUrl}})

    case SET_AVATAR_URL:
    case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
 */
exports.default = authReducer;
var setAuthUserData = function (userId, login, email, isAuth) { return ({
    type: SET_USER_DATA,
    payload: { userId: userId, login: login, email: email, isAuth: isAuth }
}); };
exports.setAuthUserData = setAuthUserData;
var setAvatarUrl = function (avatarUrl) { return ({ type: SET_AVATAR_URL, avatarUrl: avatarUrl }); };
exports.setAvatarUrl = setAvatarUrl;
var setCaptchaUrl = function (captchaUrl) { return ({ type: SET_CAPTCHA_URL, captchaUrl: captchaUrl }); };
exports.setCaptchaUrl = setCaptchaUrl;
var setIsAuth = function (isAuth) { return ({ type: SET_IS_AUTH, isAuth: isAuth }); };
exports.setIsAuth = setIsAuth;
/* надо вынести это в локальный стейт */
var setIsLoading = function (isLoading) { return ({ type: SET_IS_LOADING, isLoading: isLoading }); };
exports.setIsLoading = setIsLoading;
// --- thunk-creators ---
// получить данные об авторизованном пользователе
var getAuthUserData = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, _a, id, login_1, email, responseProfile;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                // if (!isAuth) {
                dispatch((0, exports.setIsLoading)(true));
                return [4 /*yield*/, api_1.authAPI.me()];
            case 1:
                response = _b.sent();
                if (!(response.data.resultCode === 0)) return [3 /*break*/, 3];
                _a = response.data.data, id = _a.id, login_1 = _a.login, email = _a.email;
                dispatch((0, exports.setAuthUserData)(id, login_1, email, true));
                return [4 /*yield*/, api_1.profileAPI.getProfile(id)];
            case 2:
                responseProfile = _b.sent();
                dispatch((0, exports.setAvatarUrl)(responseProfile.data.photos.small));
                dispatch((0, exports.setIsLoading)(false));
                _b.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.getAuthUserData = getAuthUserData;
// отправить форму для входа в аккаунт
var login = function (email, password, rememberMe, captcha) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.authAPI.login(email, password, rememberMe, captcha)];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    // успех
                    dispatch((0, exports.getAuthUserData)());
                }
                else if (response.data.resultCode === 1) {
                    // неверный логин/пароль
                    dispatch((0, redux_form_1.stopSubmit)("login", { _error: 'Неверный логин/пароль' }));
                }
                else if (response.data.resultCode === 10) {
                    // превышен лимит попыток
                    dispatch((0, exports.getCaptchaUrl)());
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.login = login;
// выйти из аккаунта
var logout = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.authAPI.logout()];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    dispatch((0, exports.setAuthUserData)(null, null, null, false));
                    dispatch((0, profile_reducer_1.setUserProfile)(null));
                    dispatch((0, profile_reducer_1.setProfileStatus)(''));
                    dispatch((0, exports.setAvatarUrl)(null));
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.logout = logout;
// получить ссылку для капчи
var getCaptchaUrl = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.securityAPI.getCaptchaUrl()];
            case 1:
                response = _a.sent();
                dispatch((0, exports.setCaptchaUrl)(response.data.url));
                return [2 /*return*/];
        }
    });
}); }; };
exports.getCaptchaUrl = getCaptchaUrl;
