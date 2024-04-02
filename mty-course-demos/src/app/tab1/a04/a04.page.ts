import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-a04',
  templateUrl: './a04.page.html',
  styleUrls: ['./a04.page.scss'],
})
export class A04Page implements OnInit {
  myDiv!: HTMLDivElement;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.myDiv = document.getElementById('mydiv') as HTMLDivElement;
    this.myDiv.innerText = '此处显示单击按钮后输出的结果';
  }

  click1() {
    this.myDiv.innerHTML = '<p>JavaScript：<br>很多代码都像瞎子摸象似的</p>';
    let i = 5, j = 10, k = 10;
    this.myDiv.innerHTML += '<p>' +
      'i + j = ' + add(i, j) + '<br>' +
      'i + j + k = ' + myAdd(i, j, k) + '</p>';
  }

  click2() {
    this.myDiv.innerHTML = '<p>Typescript：<br>类型明确、不易出错</p>';
    let i = 5, j = 10, k = 10;
    this.myDiv.innerHTML += `<p>i + j = ${add(i, j)}<br>i + j + k = ${myAdd(i, j, k)}</p>`;
  }
}

function add(x: number, y: number) {
  return x + y;
}

let myAdd = (x: number, y: number, z: number) => {
  return x + y + z;
};
