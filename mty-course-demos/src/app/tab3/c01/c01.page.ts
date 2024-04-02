import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-c01',
  templateUrl: './c01.page.html',
  styleUrls: ['./c01.page.scss'],
})
export class C01Page implements OnInit {

  constructor(public navCtrl: NavController) { }
  myDiv!: HTMLDivElement;
  ngOnInit() {
    this.ionViewDidLoad();
  }

   // 控制 checkbox1 的 checked 属性
   check1: boolean = false;

   // 控制 checkbox2 的 checked 属性
   check2: boolean = true;

   // 控制 checkbox3 的 disabled 属性
   check3Disable: boolean = true;

   // radio 按钮组选择的结果
   r: string='';
   result: string='';
   ionViewDidLoad() {
  }
   showResult() {
     // 由于是双向绑定，所以代码中不需要考虑如何与 HTML 页面交互，直接使用 check1、check2 的值就行了
     this.result = `复选结果：喜欢篮球：${this.check1}，喜欢排球：${this.check2}<br>单选结果（参加的项目）：${this.r}`;
   }
}
