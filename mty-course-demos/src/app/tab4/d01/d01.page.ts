import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-d01',
  templateUrl: './d01.page.html',
  styleUrls: ['./d01.page.scss'],
})
export class D01Page {
  isKaifeng!: boolean;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.isKaifeng = true;
  }

  click1() {
    this.isKaifeng = true;
    let map = new BMap.Map('bdmap');
    let point = new BMap.Point(114.315, 34.821);
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom();
  }

  click2() {
    this.isKaifeng = !this.isKaifeng;
    let map = new BMap.Map('bdmap');
    if (this.isKaifeng) {
      map.centerAndZoom(new BMap.Point(114.315745, 34.824635), 11);
      map.setCurrentCity('河南大学');
    } else {
      map.centerAndZoom(new BMap.Point(139.7500, 35.6764), 11);
      map.setCurrentCity('东京');
    }
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    map.enableScrollWheelZoom();
  }
}
