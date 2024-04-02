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
    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 13);
    this.map.enableScrollWheelZoom();
  }

  click1() {
    let x = 116.399;
    let y = 39.950;
    let polyline1 = new BMap.Polyline([
      new BMap.Point(x, y),
      new BMap.Point(x + 0.006, y + 0.010),
      new BMap.Point(x + 0.026, y - 0.010)
    ], {
        strokeColor: "blue",
        strokeWeight: 2,
        strokeOpacity: 0.5
      });
    this.map.addOverlay(polyline1);
  }

  click2() {
    let x = 116.350658;
    let y = 39.948285;
    let points = [
      new BMap.Point(x, y),
      new BMap.Point(x + 0.035788, y + 0.000996),
      new BMap.Point(x + 0.038376, y - 0.024457),
      new BMap.Point(x + 0.091843, y - 0.023682)
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
    let circle = new BMap.Circle(new BMap.Point(116.404, 39.925), 500, {
      strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5
    });
    this.map.addOverlay(circle);
  }

  click4() {
    let polygon = new BMap.Polygon([
      new BMap.Point(116.387112, 39.920977),
      new BMap.Point(116.385243, 39.913063),
      new BMap.Point(116.394226, 39.917988),
      new BMap.Point(116.401772, 39.921364),
      new BMap.Point(116.41248, 39.927893)
    ], { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 });
    this.map.addOverlay(polygon);
  }

  click5() {
    let pStart = new BMap.Point(116.392214, 39.918985);
    let pEnd = new BMap.Point(116.41478, 39.911901);
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
