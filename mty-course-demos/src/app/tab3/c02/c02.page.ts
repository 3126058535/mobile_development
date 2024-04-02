import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-c02',
  templateUrl: './c02.page.html',
  styleUrls: ['./c02.page.scss'],
})
export class C02Page implements OnInit {

  constructor(public navCtrl: NavController) { }
 // myDiv!: HTMLDivElement;
  ngOnInit() {

  }
  gender:string ="f";
  gaming:string="n64";
  music!:string;
  month!:string;
  year!:number;
  musicAlertOpts:{title:string, subTitle: string}={
  title:'1994 Music',
  subTitle:'请选择你喜欢的'
  };
  stpSelect(){
    console.log('STP selected');
  }
}
