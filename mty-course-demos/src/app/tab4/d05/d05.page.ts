import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BeiJing } from '../../providers/bdmap-common';

declare var BMap: any;

@Component({
  selector: 'app-d05',
  templateUrl: './d05.page.html',
  styleUrls: ['./d05.page.scss'],
})
export class D05Page implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  click1() {
    let map = new BMap.Map('bdmap');
    map.centerAndZoom(new BMap.Point(114.315745, 34.824635), 12);
    map.addControl(new BMap.NavigationControl());
    let stCtrl = new BMap.PanoramaControl(); // 构造全景控件
    stCtrl.setOffset(new BMap.Size(20, 20));
    map.addControl(stCtrl); // 添加全景控件
  }

  click2() {
    let map = new BMap.Map('bdmap');
    let point = new BMap.Point(BeiJing.B2_Lng, BeiJing.B2_Lat);
    map.centerAndZoom(point, 12);

    let myGeo = new BMap.Geocoder();
    let address = '北京市海淀区上地10街';
    myGeo.getPoint(address, (p: { lng: string; lat: string; }) => {
      if (p) {
        map.centerAndZoom(p, 16);
        let marker = new BMap.Marker(p);
        map.addOverlay(marker);
        let text = address + '：' + p.lng + '，' + p.lat;
        marker.setLabel(
          new BMap.Label(text, {
            offset: new BMap.Size(-110, -20),
          })
        );
      } else {
        alert('您选择的地址没有解析到结果!');
      }
    }, '北京市');
  }

  click3() {
    let map = new BMap.Map('bdmap');
    let point = new BMap.Point(BeiJing.B2_Lng, BeiJing.B2_Lat);
    map.centerAndZoom(point, 12);

    let geoc = new BMap.Geocoder();
    map.addEventListener('click', (e: { point: any; }) => {
      let pt = e.point;
      geoc.getLocation(pt, (rs: { addressComponents: any; }) => {
        let marker = new BMap.Marker(pt);
        map.addOverlay(marker);
        let c = rs.addressComponents;
        let s = `${c.province},${c.city},${c.district},${c.street},${c.streetNumber}`;
        marker.setLabel(
          new BMap.Label(s, {
            offset: new BMap.Size(-10, -20),
          })
        );
      });
    });
  }
}
