import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Henu, KFBZ, HenuJSJXY } from '../../providers/bdmap-common';

@Component({
  selector: 'app-d09',
  templateUrl: './d09.page.html',
  styleUrls: ['./d09.page.scss'],
})
export class D09Page implements OnInit {

  bmap: any;
  result!: HTMLDivElement;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.result = document.getElementById("r-result") as HTMLDivElement;
    this.bmap = new BMap.Map("bdmap");
    this.bmap.centerAndZoom(new BMap.Point(Henu.lng, Henu.lat), 14);
    this.bmap.setCurrentCity("开封");
    this.bmap.enableScrollWheelZoom();
  }

  // 单个点沿线运动
  click1() {
    this.bmap.clearOverlays();
    this.result.innerText = '';

    let start = new BMap.Point(HenuJSJXY.lng, HenuJSJXY.lat);
    let end = new BMap.Point(KFBZ.lng, KFBZ.lat);
    let myIcon = new BMap.Icon("assets/imgs/Mario.png", new BMap.Size(32, 70), {
      imageOffset: new BMap.Size(0, 0)
    });

    let riding = new BMap.RidingRoute(this.bmap, {
      renderOptions: { map: this.bmap, autoViewport: true },
      onSearchComplete: (results: any) => {
        if (results && riding.getStatus() == BMAP_STATUS_SUCCESS) {
          let plan = results.getPlan(0);
          if (plan) {
            let routesNum = plan.getNumRoutes();
            let s = [];
            for (let j = 0; j < routesNum; j++) {
              let r = plan.getRoute(j);
              for (let i = 0; i < r.getNumSteps(); i++) {
                let step = r.getStep(i);
                s.push((i + 1) + ". " + step.getDescription(true));
              }
            }
            this.result.innerHTML = s.join("<br>");
          }

          let points = plan.getRoute(0).getPath();
          let ridMarker = new BMap.Marker(points[0], { icon: myIcon });
          this.bmap.addOverlay(ridMarker);

          let i = 0;
          let paths = points.length;
          let resetMarkPoint = () => {
            ridMarker.setPosition(points[i]);
            if (i < paths) {
              setTimeout(() => {
                i++;
                resetMarkPoint();
              }, 100);
            }
          };
          setTimeout(() => { resetMarkPoint(); }, 100);
        }
      }
    });

    riding.search(start, end);
  }

  // 多点沿线运动
  click2() {
    let bounds: any[] = [];
    let linesPoints: any[][] = [];
    let start1 = new BMap.Point(HenuJSJXY.lng, HenuJSJXY.lat);
    let start2 = new BMap.Point(KFBZ.lng, KFBZ.lat);
    let end = new BMap.Point(HenuJSJXY.lng - 0.03, HenuJSJXY.lat + 0.009);
    let myIcon = new BMap.Icon("assets/imgs/Mario.png", new BMap.Size(32, 70), {
      imageOffset: new BMap.Size(0, 0)
    });

    let initLine = () => {
      bounds = [];
      linesPoints = [];
      this.bmap.clearOverlays();

      let driving1 = new BMap.DrivingRoute(this.bmap, {
        onSearchComplete: drawLine
      });
      driving1.search(start1, end);

      let driving2 = new BMap.DrivingRoute(this.bmap, {
        onSearchComplete: drawLine
      });
      driving2.search(start2, end);
    };

    let run = () => {
      let resetMkPoint = (i: number, len: number, pts: any[], carMk: any) => {
        if (carMk) {
          carMk.setPosition(pts[i]);
          if (i < len) {
            setTimeout(() => {
              i++;
              resetMkPoint(i, len, pts, carMk);
            }, 100);
          }
        }
      };
      for (let m = 0; m < linesPoints.length; m++) {
        let pts = linesPoints[m];
        if (pts) {
          let len = pts.length;
          let carMk = new BMap.Marker(pts[0], { icon: myIcon });
          this.bmap.addOverlay(carMk);
          resetMkPoint(1, len, pts, carMk);
        }
      }
    };

    let drawLine = (results: any) => {
      let opacity = 0.45;
      let planObj = results.getPlan(0);
      let b: any[] = [];
      let addMarkerFunction = (point: any, imgType: number, index: number, title?: string) => {
        let url;
        let width;
        let height;
        let myIcon;
        if (imgType == 1) {
          url = 'assets/imgs/kitten2.jpg';
          width = 32;
          height = 32;
          myIcon = new BMap.Icon(url, new BMap.Size(width, height), {
            imageOffset: new BMap.Size(0, 0 - index * height)
          });
        } else {
          url = 'assets/imgs/puppy1.jpg';
          width = 32;
          height = 32;
          let d = 32;
          let cha = 0;
          let jia = 0;
          if (index == 2) {
            cha = 5;
            jia = 1;
          }
          myIcon = new BMap.Icon(url, new BMap.Size(width, d), {
            imageOffset: new BMap.Size(0, 0 - index * height - cha)
          });
        }

        let marker = new BMap.Marker(point, { icon: myIcon });
        if (title && title !== "") {
          marker.setTitle(title);
        }
        if (imgType == 1) {
          marker.setTop(true);
        }
        this.bmap.addOverlay(marker);
      };

      let addPoints = (points: any[]) => {
        for (let i = 0; i < points.length; i++) {
          bounds.push(points[i]);
          b.push(points[i]);
        }
      };

      for (let i = 0; i < planObj.getNumRoutes(); i++) {
        let route = planObj.getRoute(i);
        if (route.getDistance(false) <= 0) { continue; }
        addPoints(route.getPath());
      }

      linesPoints = b;
      run();
    };

    initLine();
  }
}
