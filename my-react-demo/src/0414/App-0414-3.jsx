// 子元件，方法1. 使用props
// 大駝峰命名
function MyComponent(props) {
    // 查看props物件
    console.log(props)

    // 執行父元件傳送過來的c屬性函式
    props.c();

    // 使用大括號{props.屬性名稱} 
    // return()可寫可不寫，無()的話，return後面不可空白
    return <>
        <div>我是子元件，帶有父元件傳遞過來的屬性內容為「{props.a}」</div>
        <div>我是子元件，帶有父元件傳遞過來的屬性內容為「{props.b}」</div>
        {props.c()}        
    </>
}

// 子元件，方法2. 解構賦值
// 由於props是物件，所以可使用解構賦值來取用資料
function MyComponent2({a,b,c}) {
    // 呼叫c屬性方法
    c()
    return <>
    <div>第一個屬性：{a}</div>
    <div>第二個屬性：{b}</div>
    <div>第三個屬性（顯示在Console）：{c()}</div>
    </>

}

// 父元件
function App() {
    return (
        <>
            {/* 回調函式 callback function */}
            <MyComponent
                a="我是屬性a"
                b="我是屬性b"
                c={() => { console.log("我是屬性c") }}
            />
            <hr />

            <MyComponent2
                a="我是屬性a"
                b="我是屬性b"
                c={() => { console.log("我是屬性c") }}
            />
        </>
    )
}
export default App