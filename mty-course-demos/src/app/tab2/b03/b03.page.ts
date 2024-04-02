import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-b03',
  templateUrl: './b03.page.html',
  styleUrls: ['./b03.page.scss'],
})
export class B03Page implements OnInit {
  constructor(public navCtrl: NavController) {}

  // Initialize the component
  ngOnInit() {
    this.ionViewDidLoad();
  }

  // Reference to the HTMLDivElement
  myDiv!: HTMLDivElement;

  // Called when the view loads
  ionViewDidLoad() {
    this.myDiv = document.getElementById('mydiv') as HTMLDivElement;
  }

  // Properties for storing data
  xm!: string;
  result!: string;
  r!: string;

  // Method to show the result
  showResult(s?: string) {
    this.result = `你输入的姓名为：${this.xm}<br>你参加的项目是：${this.r}`;
  }
}
