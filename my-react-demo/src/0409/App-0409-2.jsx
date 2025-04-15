import { useState } from 'react';

// 建立元件(名稱字首大寫)
function Card({ person }) {
    // 解構資料
    const {name, age}=person

    return (
        <div className='card'>
            <div className='card-body'>
                {/* 1. 一般寫法 */}
                {/* Hi, {person.name}. */}
                {/* 2. 解構後寫法 */}
                Hi, {name} 今年{age}歲
            </div>
        </div>
    )
}

function App() {
    // // 取出特定質作為變數
    // const person = {
    //     name: 'Tom',
    //     age: '10'
    // }

    // // 一般寫法
    // const name=person.name;
    // const age=person.age;
    // console.log(name, age);

    // // 物件解構
    // const { name, age } = person;
    // console.log(name, age);

    // useState－ ReactHook (React已寫好的函式庫) 使用useState傳參數到元件
    const [person, setPerson] = useState({
        name: 'Tom',
        age:'10'
    });

    return (
        <>
        {/* 元件屬性={變數(可以是任何型式)} person=person */}
            <Card person={person}></Card>
            <Card person={person}/>
        </>
    )

}
export default App