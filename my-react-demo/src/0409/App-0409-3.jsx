// 一、建立物件
const object1={
    name:'Tom',
    age:'7'
}

// // 1. 一般寫法，宣告變數2次
// const name=object1.name
// const age=object1.age
// console.log(`一般寫法：`+name,age)

// 2. 物件解構 {物件成員}
const {name, age}=object1
console.log(`物件解構：`+name,age)


// 二、建立陣列
const arr1=['p1','p2','p3']

// 1. 一般寫法，宣告變數3次
const pNumber1=arr1[0]
const pNumber2=arr1[1]
const pNumber3=arr1[2]
console.log(`一般寫法：`+arr1[0],arr1[1],arr1[2])

// 2. 陣列解構 []
const [pNum1, pNum2, pNum3]=arr1
console.log(`陣列解構：`+pNum1, pNum2, pNum3)


// 三、解構+展開
// 建立物件
const data={
    s1:{
        id:'s001',
        subject:'HTML',
        score:'100',
    },
    s2:{
        id:'s002',
        subject:'HTML',
        score:'99',
    },
    s3:{
        id:'s003',
        subject:'HTML',
        score:'98',
    }    
}
// 1. 解構s2， 展開s1及s3
// 使用...other語法
const {s2,...other}=data
console.log(s2)
console.log(other)

// 2. 解構物件中的物件，只要s2的內容
const {id, subject, score}=s2
console.log(`s2的內容: `+id, subject, score)

export default function App() {
    return (
      <>
      上課中
      </>

    )
}