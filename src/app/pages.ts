export const appVersion = "1.0.0";

export const appCode = "InnovaApp";
export let contactType: number[] = [];


export let isAndroid: boolean[] = [false];
export let isIos: boolean[] = [false];
export let isBrowser: boolean[] = [false];
export let isAndroidWebView: boolean[] = [false];
export let isIosWebView: boolean[] = [false];



//Oturum Açan Kullanıcı Bilgilerini Tutar
export const account: { identifyNumber?: string, token?: string, type?: number, userName?: string, password?: string, tgt?: string, cookie?: string} = {
    identifyNumber: '',
    token: '',
    userName: '',
    tgt: '',
    cookie: '',
    password: '',
    type: 0,
};
export let GeneralSettings: { url: string, lang: string, logo?: any } = {
    url: 'https://www.innova.com.tr:8101/mobile/api',
    lang: 'tr', 
    logo: null,
}