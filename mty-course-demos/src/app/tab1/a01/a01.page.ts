import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Person, greeter, Student } from 'src/app/providers/Helloworld';

@Component({
  selector: 'app-a01',
  templateUrl: './a01.page.html',
  styleUrls: ['./a01.page.scss'],
})
export class A01Page implements OnInit {
  constructor(public navCtrl: NavController) { }
  myDiv!: HTMLDivElement;

  ngOnInit() {
    this.myDiv = document.getElementById('mydiv') as HTMLDivElement;
  }

  // hello world
  click1() {
    var user1: Person = { name: '孟天宇', welcomeInfo: '您好！' };
    var user2: Student = new Student('gloomy', '欢迎你！');
    this.myDiv.innerText = greeter(user1) + '\n' + user2.message;
  }

// let和var的区别
click2() {
  let mydiv = this.myDiv;
  mydiv.innerText = 'var和let语法相同，其实两者的区别并不是在语法上，而是在语义上！\n';
  for (var i = 0; i < 5; i++) {
    mydiv.innerText += 'a' + i + '\n';
  }
  mydiv.innerText += 'var的问题：虽然退出了for循环，但是i仍然可用\n';

  mydiv.innerText +=i + '\n';
  for (let j = 0; j < 5; j++) {
    mydiv.innerText += 'b' + j + '\n';
  }

}


  click3() {
    this.myDiv.innerText = '\n想一想，为什么这段代码执行的结果和预期的不一致？\n\n';
    for ( let i = 0; i < 10; i++) {
      setTimeout(() => {
        this.myDiv.innerText += i + '\n';
      }, 200);
    }
  }


  click4() {
    this.myDiv.innerText = '\n\n解决方法1：使用闭包\n\n';
    this.myDiv.innerText +="前面都是为了说明问题，这个才是正确的写法\n\n"
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        this.myDiv.innerText += i + '\n';
      }, 200 * i); // 将setTimeout延时时间逐步增加，以展示不同的效果
    }
  }
}
