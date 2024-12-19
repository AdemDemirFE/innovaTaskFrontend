import { Injectable } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { Api } from "./api/api";
import { C_Utils } from "./utils";


@Injectable()

export class C_HazirMetodlar {
  constructor(
    public c_Utils: C_Utils,
    public loadingCtrl: LoadingController,
    public api: Api,
    private alertCtrl: AlertController
  ) { }





}
