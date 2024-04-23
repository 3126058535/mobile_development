import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-d02',
  templateUrl: './d02.page.html',
  styleUrls: ['./d02.page.scss'],
})
export class D02Page implements OnInit{

  constructor(public navCtrl: NavController) {
    this.map = new BMap.Map("container");
  }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  map: BMap.Map;

  ionViewDidLoad() {
    this.map = new BMap.Map("container");
    this.map.centerAndZoom(new BMap.Point(114.30619,34.831619), 15);
    this.map.enableScrollWheelZoom();
  }

  click1() {
    let polyline1 = new BMap.Polyline([
      new BMap.Point(114.310286,34.827945),
      new BMap.Point(114.310358,34.816033),
      new BMap.Point(114.315317,34.815973),
      new BMap.Point(114.315532,34.818048),
      new BMap.Point(114.31776,34.818226),
      new BMap.Point(114.317976,34.819352),
      new BMap.Point(114.320779,34.819293),
      new BMap.Point(114.32121,34.828182),
      new BMap.Point(114.310502,34.828064)
    ], {
        strokeColor: "blue",
        strokeWeight: 2,
        strokeOpacity: 0.5
      });
    this.map.addOverlay(polyline1);
  }

  click2() {
    let points = [
      new BMap.Point(114.310286,34.827945),
      new BMap.Point(114.310358,34.816033),
      new BMap.Point(114.315317,34.815973),
      new BMap.Point(114.315532,34.818048),
      new BMap.Point(114.31776,34.818226),
      new BMap.Point(114.317976,34.819352),
      new BMap.Point(114.320779,34.819293),
      new BMap.Point(114.32121,34.828182),
      new BMap.Point(114.310502,34.828064)
    ];
    let symbol = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
      scale: 0.6,
      strokeColor: '#fff',
      strokeWeight: 2,
    });
    let iconSequence1 = new BMap.IconSequence(symbol, '10', '30');
    let polyline2 = new BMap.Polyline(points, {
      enableEditing: false,
      enableClicking: true,
      icons: [iconSequence1],
      strokeWeight: 8,
      strokeOpacity: 0.8,
      strokeColor: "#18a45b"
    });
    this.map.addOverlay(polyline2);
  }

  click3() {
    let circle = new BMap.Circle(new BMap.Point(114.315676,34.822019), 800, {
      strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5
    });
    this.map.addOverlay(circle);
  }

  click4() {
    let polygon = new BMap.Polygon([
      new BMap.Point(114.310286,34.827945),
      new BMap.Point(114.310358,34.816033),
      new BMap.Point(114.315317,34.815973),
      new BMap.Point(114.315532,34.818048),
      new BMap.Point(114.31776,34.818226),
      new BMap.Point(114.317976,34.819352),
      new BMap.Point(114.320779,34.819293),
      new BMap.Point(114.32121,34.828182),
      new BMap.Point(114.310502,34.828064)
    ], { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 });
    this.map.addOverlay(polygon);
  }

  click5() {
    let pStart = new BMap.Point(114.310286,34.827945);
    let pEnd = new BMap.Point(114.321282,34.816092);
    let rectangle = new BMap.Polygon([
      new BMap.Point(pStart.lng, pStart.lat),
      new BMap.Point(pEnd.lng, pStart.lat),
      new BMap.Point(pEnd.lng, pEnd.lat),
      new BMap.Point(pStart.lng, pEnd.lat)
    ], { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 });
    this.map.addOverlay(rectangle);
  }

  deleteClick() {
    this.map.clearOverlays();
  }
}
