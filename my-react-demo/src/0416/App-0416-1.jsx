// *天氣資料 https://data.gov.tw/dataset/6069
// *天氣圖 https://www.cwa.gov.tw/V8/C/K/Weather_Icon.html

// 抓圖檔(少量時)：
// import 晴時多雲 from'./weatherIcon/晴時多雲.svg'

function App() {
    (async () => {
        // 取得遠端公開資料json
        const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json');
        // 查看是否連上json
        // console.log(data);
        // 解構：取出各縣市氣象資料(資料位置在整包裡的location)
        const { location } = data.data.cwaopendata.dataset;
        console.log(location);
    })();
    // (); => 立即執行

    return (
        <>
            <h2>36小時天氣預報</h2>
            {/* className-"bootstrap樣式庫" */}
            {/* 一列兩欄 */}
            <div className="row row-cols-2 g-4" >
                {/* 第一欄 */}
                <div className="col">
                    {/* 使用bootstap卡片樣式 */}
                    <div className="card text-center">
                        {/* 卡片標題 */}
                        <div className="card-header">
                            <div className="h4 my-0">
                                台北市
                            </div>
                        </div>
                        {/* 卡片內容 */}
                        <div className="row row-cols-3">
                            {/* 第一欄 */}
                            <div className="col">
                                {/* 日期 */}
                                <div className="h4 my-0">
                                    16日
                                </div>
                                {/* 時間 */}
                                上午6:00<br />
                                ~<br />
                                下午6:00<br />
                                {/* 天氣圖：使用執行路徑，所以圖檔要放在public資料夾中，才讀得到。 */}
                                {/* 方法1: import寫在函式外載入路徑，圖檔不限定放在哪 */}
                                {/* <img src={晴時多雲} alt="" /> */}
                                {/* 方法2(多圖推薦): 從根目錄直接讀取，圖檔放在public或第一層*/}
                                <img src="./weatherIcon/晴時多雲.svg" alt="" />
                                {/* 天氣名稱 */}
                                <div className="mt-2">
                                    晴時多雲
                                </div>
                                {/* 降雨率 */}
                                <div className="mt-2">
                                    {/* icon */}
                                    <i class="bi bi-umbrella-fill">10%</i>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}
export default App
