import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-d04',
  templateUrl: './d04.page.html',
  styleUrls: ['./d04.page.scss'],
})
export class D04Page implements OnInit {

  constructor(public navCtrl: NavController) {
    this.map = new BMap.Map("container");
  }

  ngOnInit() {}

  map: BMap.Map;

  click1() {
    let map = new BMap.Map("bdmap");
    let point = new BMap.Point(116.400244, 39.92556);
    map.centerAndZoom(point, 12);
    let marker = new BMap.Marker(point);
    map.addOverlay(marker);
    let label = new BMap.Label("我是文字标注哦", { offset: new BMap.Size(20, -10) });
    marker.setLabel(label);
  }

  click2() {
    let map = new BMap.Map("bdmap");
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
    let marker = new BMap.Marker(point);
    map.addOverlay(marker);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
  }

  click3() {
    let map = new BMap.Map("bdmap");
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
    let marker = new BMap.Marker(new BMap.Point(116.404, 39.915));
    map.addOverlay(marker);
  }

  click4() {
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    let addMarker = (point: BMap.Point) => {
      let marker = new BMap.Marker(point);
      map.addOverlay(marker);
    }
    let n = 25;
    let bounds = map.getBounds();
    let sw = bounds.getSouthWest();
    let ne = bounds.getNorthEast();
    let lngSpan = Math.abs(sw.lng - ne.lng);
    let latSpan = Math.abs(ne.lat - sw.lat);
    for (let i = 0; i < n; i++) {
      let point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
      addMarker(point);
    }
  }

  addLabelMarkers(n: number) {
    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.disableDoubleClickZoom();
    map.clearOverlays();
    let addMarker = (point: BMap.Point, label: BMap.Label) => {
      let marker = new BMap.Marker(point);
      map.addOverlay(marker);
      marker.setLabel(label);
    };
    let bounds = map.getBounds();
    let sw = bounds.getSouthWest();
    let ne = bounds.getNorthEast();
    let lngSpan = Math.abs(sw.lng - ne.lng);
    let latSpan = Math.abs(ne.lat - sw.lat);
    for (let i = 0; i < n; i++) {
      let point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
      let label = new BMap.Label("我是id=" + i, { offset: new BMap.Size(20, -10) });
      addMarker(point, label);
    }
    this.map = map;
  }

  click5() {
    this.addLabelMarkers(5);
  }

  click6() {
    let allOverlay = this.map.getOverlays();
    for (let i = 0; i < allOverlay.length - 1; i++) {
      let marker = allOverlay[i] as BMap.Marker;
      if (marker) {
        if (marker.getLabel().content == "我是id=1") {
          this.map.removeOverlay(marker);
        }
      }
    }
  }
}
