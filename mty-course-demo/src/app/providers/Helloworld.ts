export interface Person {
  name: string;
  welcomeInfo: string;
}
export class Student {
  message: string;
  constructor(
    public name: string,
    public welcomeInfo: string
  ) {
    this.message = name + '、n' + welcomeInfo;
  }
}
export function greeter(person: Person) {
  return 'Hello, ' + person.name + ' ' + person.welcomeInfo;
}
