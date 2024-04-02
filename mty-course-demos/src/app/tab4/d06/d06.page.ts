import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

declare var BMap: any;

@Component({
  selector: 'app-d06',
  templateUrl: './d06.page.html',
  styleUrls: ['./d06.page.scss'],
})
export class D06Page implements OnInit {

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
  }

  ngOnInit() {
  }

  async showAlert(message: string) {
    const alert = await this.alertCtrl.create({
      message: message,
      buttons: ['确定']
    });
    await alert.present();
  }

  //浏览器定位
  click1() {
    let map = new BMap.Map("bdmap");
    let point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);

    let geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition((r: any) => {
      if (geolocation.getStatus() == BMAP_STATUS_SUCCESS) {
        let mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        this.showAlert('您的位置：' + r.point.lng + ',' + r.point.lat);
      }
      else {
        this.showAlert('failed' + geolocation.getStatus());
      }
    }, { enableHighAccuracy: true });
  }

  //根据ip定位【获取当前城市】
  click2() {
    let map = new BMap.Map("bdmap");
    let point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);

    let myFun = (result: any) => {
      let cityName = result.name;
      map.centerAndZoom(cityName, 12);
      this.showAlert("当前定位城市:" + cityName);
    };
    let myCity = new BMap.LocalCity();
    myCity.get(myFun);
  }

  //根据城市名定位
  click3() {
    let myGeo = new BMap.Geocoder();
    let city = "开封市";

    myGeo.getPoint(city, (p: any) => {
      if (p) {
        let map = new BMap.Map("bdmap");
        map.centerAndZoom(p, 11);
      } else {
        let map = new BMap.Map("bdmap");
        let point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 11);
      }
    }, city);
  }

  //根据经纬度定位城市
  click4() {
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
    map.enableScrollWheelZoom();

    let MyLocation = (longitude: number, latitude: number) => {
      map.clearOverlays();
      let p = new BMap.Point(longitude, latitude);
      let marker = new BMap.Marker(p);
      map.addOverlay(marker);
      map.panTo(p);
    };
    MyLocation(114.315745, 34.824635);
  }
}
