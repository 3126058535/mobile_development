import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-d03',
  templateUrl: './d03.page.html',
  styleUrls: ['./d03.page.scss'],
})
export class D03Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  tip: string = '';

  click1() {
    this.tip = '提示：单击红色标注点，可弹出文字信息窗口。在红色标注点外的其他地方单击，可取消窗口。';

    let map = new BMap.Map("bdmap");
    let point = new BMap.Point(116.417854, 39.921988);
    let marker = new BMap.Marker(point);
    map.addOverlay(marker);
    map.centerAndZoom(point, 15);
    let infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", {
      width: 220,
      height: 100,
      title: "海底捞王府井店",
      enableMessage: true,
      message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
    });
    marker.addEventListener("click", () => {
      marker.openInfoWindow(infoWindow);
    });
  }

  click2() {
    this.tip = '提示：单击红色标注点，可弹出由文本和图片构成的信息窗口。在红色标注点外的其他地方单击，可取消窗口。';

    let sContent = `<div>
      <h4 style="margin:0 0 5px 0;padding:0.2em 0">天安门</h4>
      <img style="float:right;margin:4px" id="imgDemo"
           src="/assets/img/tiananmen.jpg" width="139" height="104" title="天安门"/>
      <p style="margin:0;line-height:1.5;font-size:13px;text-indent:2em">
         天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门。
      </p>
    </div>`;
    let map = new BMap.Map("bdmap");
    let point = new BMap.Point(116.404, 39.915);
    let marker = new BMap.Marker(point);
    let infoWindow = new BMap.InfoWindow(sContent);
    map.centerAndZoom(point, 15);
    map.addOverlay(marker);
    marker.addEventListener("click", () => {
      marker.openInfoWindow(infoWindow);
      let imgDemo = document.getElementById('imgDemo');
      if (imgDemo) {
        imgDemo.onload = () => {
          infoWindow.redraw();
        }
      }
    });
  }

  click3() {
    this.tip = '提示：单击某个红色标注点，可弹出对应的文字信息窗口。在红色标注点外的其他地方单击，可取消窗口。';

    let map = new BMap.Map("bdmap");
    map.centerAndZoom(new BMap.Point(116.417854, 39.921988), 15);
    let data_info: Array<[number, number, string]> = [
      [116.417854, 39.921988, "地址：北京市东城区王府井大街88号乐天银泰百货八层"],
      [116.406605, 39.921585, "地址：北京市东城区东华门大街"],
      [116.412222, 39.912345, "地址：北京市东城区正义路甲5号"]
    ];
    let opts: BMap.InfoWindowOptions = {
      width: 250,
      height: 80,
      title: "信息窗口",
      enableMessage: true
    };
    let openInfo = (content: string | HTMLElement, e: BMap.MarkerEvent) => {
      let p = e.target;
      let point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      let infoWindow = new BMap.InfoWindow(content, opts);
      map.openInfoWindow(infoWindow, point);
    }
    let addClickHandler = (content: string | HTMLElement, marker: BMap.Marker) => {
      marker.addEventListener("click", (e) => {
        openInfo(content, e)
      });
    }
    for (let i = 0; i < data_info.length; i++) {
      let marker = new BMap.Marker(new BMap.Point(data_info[i][0], data_info[i][1]));
      let content = data_info[i][2];
      map.addOverlay(marker);
      addClickHandler(content, marker);
    }
  }

  click4() {
    this.tip = '此例子演示如何自动弹出信息窗口。';

    let sContent = "天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门。";
    let map = new BMap.Map("bdmap");
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
    let infoWindow = new BMap.InfoWindow(sContent);
    map.openInfoWindow(infoWindow, point);
  }
}
