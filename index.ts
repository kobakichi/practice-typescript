//変数の型注釈
let hasValue: boolean = true;
let count: number = 3;
let float: number = 5;
let single: string = "hello";

//オブジェクトに型注釈する方法
const person: {
  name: string;
  age: number;
} = {
  name: "jack",
  age: 30,
};

// 配列の型注釈
const fruits: string[] = ["Apple", "Banana", "Grape"];

// タプル型　型が決まっている場合の方法
const book: [string, number, boolean] = ["business", 1500, false];

// enum 列挙型　最初に宣言する 基本的に大文字

enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}

//
const coffee = {
  hot: true,
  size: "CoffeeSize.SHORT",
};

// any型　何でも入れれる なるべく使わない
let anything: any = true;

// union型 同時に二つ型宣言できる
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, "hello"];

// リテラル型 これだとappleしか入らなくなる
const apple: "apple" = "apple";

// ユニオン型とリテラル型の合体
let clothSize: "small" | "medium" | "large" = "large";

// alias
type ClothSize = "small" | "medium" | "large";

const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: "large",
};

// 関数に型をつける {}の前に戻り値の型を定義
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// void型 引数を取らない
function sayHello(): void {
  console.log("Hello");
}

// 関数の型注釈 アロー関数の場合
const doubleNumber: (num: number) => number = (num) => num * 2;

console.log(doubleNumber(2));
