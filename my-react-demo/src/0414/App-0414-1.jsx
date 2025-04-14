function App(){
    // 建立函式(在return之前)
    // 方法一
    function sayHi3(){
        alert('Hello3');
    }
    // 方法二：用變數當函式名稱
    const sayHi4=()=>{
        alert('Hello4');
    }

    return(
        <>
        {/* 事件處理1 */}
        {/* 在html標籤上綁定事件 */}
        <button onClick={
            // 匿名函式
            function(){
                alert('Hello1');
            }
        }>打招呼1</button>
        <button onClick={
            // 箭頭函式
            ()=>{
                alert('Hello2');
            }
        }>打招呼2</button>

        {/* 事件處理2 */}
        {/* 呼叫函式：★被呼叫的函式名稱後面不可以加上()★ */}
        <button onClick={sayHi3}>打招呼3</button>
        <button onClick={sayHi4}>打招呼4</button>

        </>
    )
}
export default App