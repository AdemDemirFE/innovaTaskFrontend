import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  iconPath: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuButtonsService {

  constructor() { }

  getMenuButtons() {
    let menuButtons = [];

    let menu1: ICategory = {
      id: 1,
      name: 'Home',
      iconPath: 'gif/house.gif',
      url: '/tabs/home'
      
    }
    let menu2: ICategory = {
      id: 2,
      name: 'Profilim',
      iconPath: 'gif/myProfil.gif',
      url: '/my-profile'
    }

    let menu6: ICategory = {
      id: 2,
      name: 'İlaçlarım',
      iconPath: 'gif/loading.gif',
      url: '/tabs/home'
    }
    let menu11: ICategory = {
      id: 3,
      name: 'Ayalar',
      iconPath: 'gif/loading.gif',
      url: '/tabs/home'
    }
    let menu12: ICategory = {
      id: 4,
      name: 'Destek',
      iconPath: 'gif/loading.gif',
      url: '/tabs/home'
    }


    menuButtons.push(menu1, menu2, menu11, menu12);

    return menuButtons;
  }

}
