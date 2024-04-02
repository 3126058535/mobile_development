import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-b04',
  templateUrl: './b04.page.html',
  styleUrls: ['./b04.page.scss'],
})
export class B04Page implements OnInit {

  constructor(public navCtrl: NavController) {
  }
  ngOnInit() {
    this.ionViewDidLoad();
  }
  myDiv!: HTMLDivElement;
  ionViewDidLoad() {
    this.myDiv = document.getElementById('mydiv') as HTMLDivElement;
  }
  student:string[]=['张三','李四','王五'];
  age!:number;
  grade:number=56;

}
