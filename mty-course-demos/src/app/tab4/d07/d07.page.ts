import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-d07',
  templateUrl: './d07.page.html',
  styleUrls: ['./d07.page.scss'],
})
export class D07Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  tip: string = '';

  click1() {
    this.tip = '查公交线路：查询跨城公交的线路。';
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
    let transit = new BMap.TransitRoute(map, {
      renderOptions: {
        map: map,
        autoViewport: true
      },
      intercityPolicy: BMAP_INTERCITY_POLICY_EARLY_START,
      transitTypePolicy: BMAP_TRANSIT_TYPE_POLICY_AIRPLANE
    });
    let start = new BMap.Point(116.310791, 40.003419);
    let end = new BMap.Point(121.490546, 31.233585);
    transit.search(start, end);
  }

  click2() {
    this.tip = '查景点：返回北京市“景点”关键字的检索结果，并展示在地图上。';
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    let local = new BMap.LocalSearch(map, {
      renderOptions: { map: map }
    });
    local.search("景点");
  }

  click3() {
    this.tip = '查餐馆：返回北京市圆形区域范围内“餐馆”的检索结果，并展示在地图上。';
    let map = new BMap.Map("bdmap");
    let mPoint = new BMap.Point(116.404, 39.915);
    map.enableScrollWheelZoom();
    map.centerAndZoom(mPoint, 15);

    let circle = new BMap.Circle(mPoint, 1000, { fillColor: "blue", strokeWeight: 1, fillOpacity: 0.3, strokeOpacity: 0.3 });
    map.addOverlay(circle);
    let local = new BMap.LocalSearch(map, {
      renderOptions: {
        map: map,
        panel: "r-result",
        autoViewport: false
      }
    });
    local.searchNearby('餐馆', mPoint, 1000);
  }

  click4() {
    this.tip = '查餐饮：显示以某个点为中心的【餐饮】检索结果，并在地图的下方显示所有查询结果的详细信息。';
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    let local = new BMap.LocalSearch(map, {
      renderOptions: { map: map, panel: "r-result" }
    });
    local.search("餐饮");
  }

}
