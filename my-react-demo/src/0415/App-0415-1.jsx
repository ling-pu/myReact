import { useState } from "react"

// 孫元件，使用props接收子傳遞的資料，或是直接寫{變數名稱}
function ChildComponent({ count }) {
    // return <div>{props.count}</div>
    return <div>{count}</div>

}
// 子元件
function MyComponent() {
    // let count = 0;
    // 使用狀態useState控制變數
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // count++
        // 使用useState中的方法，改變count變數值
        setCount(count + 1);
    }
    return <>
        <ChildComponent count={count} />
        <button onClick={handleClick}>點擊次數：{count}</button>
    </>
}

// 子元件(自己玩區域)
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}
function ExampleWithManyStates() {
    // 宣告多個 state 變數!
    // 陣列解構賦值
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    // ...
}

// 程式進入點
function App() {
    return (
        <>
            <h1>大駝峰命名MyComponent</h1>
            {/* 呼叫子元件 */}
            {/* 不同子元件之間的狀態state是互相獨立的，互不影響 */}
            <MyComponent />
            <MyComponent />
            <MyComponent />

            <hr />

            {/* 呼叫子元件(自己玩區域) */}
            <div>
                <h1>大駝峰命名MyButton</h1>
                <MyButton />
            </div>

        </>
    )
}
export default App