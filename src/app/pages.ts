/**
 * Uygulama içerisindeki Dinamik Renk Tanımlarını İçerir.
 */
export let genelStyle: any = {


};

export const appVersion = "2.3.6";

export const appCode = "TELE-DGT"; // akgun-mobile tarafında tanımlı yetki grubu, yetkiler,

export let homePersonelPage = "/home-personel";
 
export let contactType: number[] = [];

/**
 *Order Tedavi Planlarını içerisinde Tutar
 */

export let personelType: any = "hasta";


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