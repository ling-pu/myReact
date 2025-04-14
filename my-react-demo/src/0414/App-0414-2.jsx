function Component(){
    return <h1>React</h1>
}

function App(){
    // 陣列內容可以是屬性、方法、元件
    // 同一個陣列中，key屬性的值不可重覆

    // 建立陣列1
    const listItem=[
        // 給物件們key屬性，逗號隔開
        <Component key='0'/>,
        <Component key='1'/>

    ]
    // 建立陣列2
    const listBooks=[
        // 用id代替key值
        {bookName:'HTML', id:'book1'},
        {bookName:'CSS', id:'book2'},
        {bookName:'JavaScript', id:'book3'},
        {bookName:'React', id:'book4'}
    ]

    // 過濾出陣列中，除了CSS的書本
    // 使用.filter()
    const filterBooks=listBooks.filter((book)=>{
        // 檢查書本名稱如果不是CSS就保留
        if(book.bookName!='CSS'){
            return true
        }
    })

    return(
        <>
        {/* 使用陣列方法1 */}
        {listItem}
        <hr />
        {/* 使用陣列方法2 */}
        {/* 使用.map() */}
        {
            listBooks.map((book)=>{
                // div標籤裡給屬性key=id，多筆物件時需要key屬性
                return <div key={book.id}>{book.bookName}</div>
            })
        }
        <hr />

        {/* 顯示filter()過濾後的陣列資料 */}
        {
            filterBooks.map((book)=>{
                return <div key={book.id}>{book.bookName}</div>
            })
        }

        </>
    )
}
export default App