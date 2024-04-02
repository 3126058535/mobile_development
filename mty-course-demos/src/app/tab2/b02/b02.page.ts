import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-b02',
  templateUrl: './b02.page.html',
  styleUrls: ['./b02.page.scss'],
})
export class B02Page implements OnInit {
  constructor(public navCtrl: NavController) {
  }
  ngOnInit() {
    this.ionViewDidLoad();
  }
  div1!: HTMLDivElement;
  readonly imgs: string[] =[
    '/assets/icon/favicon.png',
    //'/assets/imgs/Mario.png'
  ];
  /**img的src将绑定到此属性 */
  imgSrc!:string;
  /**定时器1的id*/
  id1!: number;
  /**定时器2的id*/
  id2!: number;
  /**用于控制表格第1行的跨列数*/
  colspanProperty: number=2;
  /**1、p2都是在b02．scss文件中定义的CSS类*/
  readonly cssClass:string[]=['p1','p2'];
  /**用于切换pl和p2*/
  classProp:string | undefined;

  ionViewDidLoad(){
    this.div1= <HTMLDivElement>document.getElementById('div1');
    this.imgSrc=this.imgs[0];
    this.classProp=this.cssClass[0];
  }
  //【单向绑定】启动定时器
  start(){
    this.id1=window.setInterval(() =>{
      if(this.imgSrc==this.imgs[0]){
        this.imgSrc=this.imgs[1];
      }else{
        this.imgSrc=this.imgs[0];
      }
    },1000);
  //每隔2秒自动切换一次CSS类名
  this.id2=window.setInterval(()=>{
  if (this.classProp==this.cssClass[0]){
    this.classProp= this.cssClass[1];
  }else{
    this.classProp= this.cssClass[0];
  }
  },2000);
}
  //【单向绑定】停止定时器
  stop(){
    if(this.id1==undefined) return;
    clearInterval(this.id1);
    clearInterval(this.id2);
  }
  //事件处理】切换divl的显示和隐藏
  switchDiv(){
    this.div1.hidden=!this.div1.hidden;
  }
}
