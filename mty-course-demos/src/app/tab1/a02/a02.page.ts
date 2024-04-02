import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-a02',
  templateUrl: './a02.page.html',
  styleUrls: ['./a02.page.scss'],
})
export class A02Page implements OnInit {
  myDiv!: HTMLDivElement;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.myDiv = document.getElementById('mydiv') as HTMLDivElement;
    this.myDiv.innerText = '此处显示单击按钮后输出的结果';
  }

  // 1、基本数据类型
  click1() {
    let myDiv = this.myDiv;
    myDiv.innerHTML = '1、基本数据类型<hr/>';

    // string：字符串(常量用单引号或双引号括起来)
    let color: string = "blue";
    myDiv.innerHTML += `color的值为: ${color}<br/>`;

    let name = "TypeScript";
    myDiv.innerHTML += `字符串“${name}” 包含 ${name.length} 个字符<br/>`;

    // boolean: 布尔型
    let isDone: boolean = false;
    myDiv.innerHTML += `isDone 的类型是 ${typeof isDone}, 值为: ${isDone}<br/>`;

    // number: 浮点数类型
    let decimal: number = 6; // 十进制
    let hex: number = 0xf00d; // 十六进制: 前缀 0x
    let binary: number = 0b1010; // 二进制: 前缀 0b
    let octal: number = 0o744; // 八进制: 前缀 00
    myDiv.innerHTML += `<p>
      变量 decimal【6】的值为: ${decimal}<br/>
      变量 hex【0xf00d】的十进制值为: ${hex}<br/>
      变量 binary【0b1010】的十进制值为: ${binary}<br/>
      变量 octal【0o744】的十进制值为: ${octal}<br/>
      </p>`;

    // any: 任意类型
    let a: any;
    myDiv.innerHTML += `<p>a 的类型是 ${typeof a}<br/></p>`;

    // 特殊类型: null、undefined
    let n: null = null;
    let u: undefined = undefined;
    myDiv.innerHTML += `<p>
      n的类型是 ${typeof n}, 值是 ${n}<br/>
      u 的类型是 ${typeof u}, 值是 ${u}
    </p>`;
  }

  // 2、数组
  click2() {
    let myDiv = this.myDiv;
    myDiv.innerHTML = '2、数组<hr/>';
    let list: number[] = [1, 2, 3];
    myDiv.innerHTML += '数组 list 的值为: ';
    list.forEach((n) => {
      myDiv.innerHTML += n + '';
    });
    myDiv.innerHTML += '<br/>';
  }

  // 3、元组
  click3() {
    let myDiv = this.myDiv;
    myDiv.innerHTML = '3、元组<hr/>';
    // 【实用例子】下面数组 y 中的每个元素都是一个元组：
    let y: [string, number][] = [
      ["key1", 10],
      ["key2", 20],
    ];
    let s: string = '';
    for (let i = 0; i < y.length; i++) {
      s += `${y[i][0]}, ${y[i][1]}<br/>`;
    }
    myDiv.innerHTML += '数组 y 的值为: <br/>' + s;
  }

}
