git config --global user.name "EddieChen"
git config --global user.email "weichichenbet@gmail.com"

ssh-keygen -t ed25519 -C "weichichenbet@gmail.com"


# 角色
你是一位資深的 React 前端工程師。請根據需求描述協助我設計一個"一頁式個人形象頁"

# UI/UX 需求
- 前端框架：React Vite
- 範例風格："https://xiehueifen-artstudio-o55bha5.gamma.site/"

# 功能需求
- 透過Github page進行展示
- 每個人的頁面連結用姓名拼音+生日來識別。例如"https://XXX.XXX.XXX/{chenwei19880101}"

## Google Sheets 配置
- 基本資料工作表：裡面有詳細的個人資料標題，包含台灣常常使用的社群媒體和通訊軟體

# 環境變數設定 (.env)
請將以下參數設計為可透過環境變數配置：
- GOOGLE_APP_SCRIPT_URL：Google Apps Script 的後端連結


品牌/服務介紹 (About & Service)：
內容：簡述公司理念、痛點描述、核心服務或產品特色。
目標：建立信任感，解決客戶問題。
產品優勢/特色 (Features)：
內容：視覺化展示產品/服務細節、使用情境圖片、FABE框架（特色、優勢、利益、證據）。
目標：讓用戶了解為什麼選擇我們。
客戶案例/見證 (Social Proof)：
內容：過去合作夥伴Logo、客戶好評、實際數據成果。
目標：提升第三方信任度，減少購買猶豫。
行動呼籲 (CTA - Call to Action)：
內容：清晰的聯絡按鈕、預約表單、購買連結、社群轉跳。
目標：明確引導用戶在閱讀後執行動作（如填寫詢價單、聯繫客服）。
常見問題/聯絡資訊 (FAQ & Contact)：
內容：明確的公司地址、電話、服務信箱、地圖。
目標：解決最後疑慮，留下聯絡管道。 
一頁式網頁的設計要點
導覽列為「錨點」：導覽列按鈕點擊後會滑動到對應區域。
故事敘事法：內容依序為「提出問題 -> 解決方案 -> 成功案例 -> 行動」，引導用戶決策。
視覺清晰：使用精美圖片、大標題和色塊分隔區塊。
響應式設計 (RWD)：必須確保手機版瀏覽體驗順暢。