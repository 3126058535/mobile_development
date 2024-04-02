import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-b01',
  templateUrl: './b01.page.html',
  styleUrls: ['./b01.page.scss'],
})
export class B01Page implements OnInit{
  constructor(public navCtrl: NavController) {
  }
  ngOnInit() {
    this.ionViewDidLoad();
  }
  current: string="";
  ionViewDidLoad(){
    setInterval(()=>{
    this.current = this.DateFormat(Date.now(),"yyyy-MM-dd hh:mm:ss");
    },1000);
  }
  DateFormat(n:number, format:string) {
    let date = new Date(n);
    let y = date.getFullYear().toString();
    let month = date.getMonth() + 1;
    let MM = month <10 ?'0'+ month :''+month;
    let d = date.getDate();
    let DD = d < 10?'0' + d:''+d;
    let h = date. getHours();
    let HH = h <10?'0'+ h :''+h;
    let m = date. getMinutes();
    let mm = m <10 ?'0' + m :''+m;
    let s = date.getSeconds();
    let ss = s <10?'0'+ s:''+s;
    let newdate;
    newdate = format.replace('yyyy', y);
    newdate = newdate.replace('MM', MM);
    newdate = newdate.replace('dd', DD);
    newdate = newdate.replace('hh', HH);
    newdate = newdate.replace('mm',mm);
    newdate = newdate.replace('ss',ss);
    return newdate;
  }
}
