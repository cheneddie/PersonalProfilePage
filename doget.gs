// ============================================
// 1. 提供給前端呼叫的 API 端點
// ============================================
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('ProfileData'); 

  // 把結果轉成 JSON 並且確保 MimeType。
  // GAS 預設對 ContentService JSON 的處理就是允許跨域的 (前提是部署方式正確)
  const buildResponse = (content) => {
    return ContentService.createTextOutput(JSON.stringify(content))
      .setMimeType(ContentService.MimeType.JSON);
  };

  if (!sheet) {
    return buildResponse({ error: 'Sheet "ProfileData" not found. Please run generateSampleData first.' });
  }

  const data = sheet.getDataRange().getDisplayValues(); 
  if (data.length < 2) {
      return buildResponse({ error: 'No data in sheet' });
  }
  
  const headers = data[0];
  const rows = data.slice(1);
  const idToFind = e.parameter.id || 'default'; 
  
  let result = null;
  for (let row of rows) {
    if (row[0] === idToFind) {
      result = {};
      headers.forEach((header, index) => {
        result[header] = row[index];
      });
      break;
    }
  }
  
  if (!result) {
    return buildResponse({ error: 'Profile not found' });
  }

  return buildResponse(result);
}


// ============================================
// 2. 執行這個函數來自動生成填寫好的範例資料
// ============================================
function generateSampleData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = 'ProfileData';
  let sheet = ss.getSheetByName(sheetName);
  
  // 如果還沒有 ProfileData 這個分頁，就建立一個，否則清空舊資料
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  } else {
    sheet.clear(); 
  }

  // 定義與 React ProfileData Interface 對應的欄位名稱 (Header)
  const headers = [
    'id', 'name', 'title', 'bio', 'avatarUrl', 
    'aboutTitle', 'aboutDesc', 'aboutFeatures', 'youtubeVideoUrl',
    'featuresBlocks',
    'testimonialsTitle', 'testimonialsDesc', 'testimonialsList',
    'ctaTitle', 'ctaDesc',
    'faqList', 'contactAddress', 'contactPhone', 'contactEmail',
    'socials'
  ];

  // 填寫一組示範資料 (陣列類型的資料一律轉為 JSON 字串存入儲存格)
  const sampleData = [
    'default', // id
    'Chen Wei', // name
    'Interactive Designer & Developer', // title
    'Crafting digital experiences that merge technology with aesthetics. Based in Taipei, focusing on Web3 and minimalist design.', // bio
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800', // avatarUrl
    '遇見更好的自己', // aboutTitle
    '我們秉持「薈萃優質，純然無瑕 (All of the good, none of the bad)」的理念，運用創新科研技術，從根源解決歲月痕跡與肌膚困擾，帶來由內而外的自信光采。', // aboutDesc
    JSON.stringify([
        { icon: "Sparkles", title: "創新抗老科研", desc: "獨家 ageLOC 科技，直擊老化根源，非僅止於表面修護，讓時間為你停留。" },
        { icon: "Target", title: "解決保養盲點", desc: "告別瓶瓶罐罐與無感保養。透過智能保養儀器，為快節奏的現代人提供省時高效的方案。" },
        { icon: "Heart", title: "安心無負擔", desc: "嚴選純淨安全成分，拒絕添加對肌膚有害的物質，敏弱肌也能安心重現透亮肌質。" }
    ]), // aboutFeatures
    'https://www.youtube.com/watch?v=ysz5S6PUM-U', // youtubeVideoUrl
    JSON.stringify([{
        heroImage: 'https://images.unsplash.com/photo-1615397323933-255d65f573af?auto=format&fit=crop&q=80&w=800',
        title: '解鎖無瑕肌底的關鍵',
        subtitle: '為何選擇我們？獨家 FABE 優勢，帶來無可挑剔的體驗。',
        list: [
            { title: "專利微脈動反旋科技 (Feature)", desc: "以特定頻率與反向旋轉的柔軟矽膠導頭，精確引導毛孔運動。" },
            { title: "深層清潔與護膚同步 (Advantage)", desc: "打破一般潔膚儀僅有清潔的限制，每次使用都在進行拉提與膠原蛋白激活。" },
            { title: "七大透亮淨緻功效 (Benefit)", desc: "一次體驗即感受緊緻、細滑、透亮，只需每天早晚各兩分鐘，省下繁瑣的醫美療程時間與金錢。" },
            { title: "全球百萬實證與大獎肯定 (Evidence)", desc: "榮獲全球第一的美容儀器系統品牌，無數使用者親身見證的完美抗老逆齡變化。" }
        ]
    }]), // featuresBlocks
    '他們的真實蛻變', // testimonialsTitle
    '超過百萬用戶親身見證，讓數據與回饋替我們說話。', // testimonialsDesc
    JSON.stringify([
        { name: "陳小姐", role: "科技業業務", content: "工作壓力大加上熬夜，肌膚總是暗沉無光。自從開始使用這套設備後，每天只需兩分鐘，同事都以為我偷偷去醫美，透亮度真的差很多！", rating: 5 },
        { name: "林太太", role: "全職媽媽", content: "產後照顧小孩根本沒時間瓶瓶罐罐保養，這個智能居家儀器完全符合我的需求。溫和不刺激，連我的敏弱肌都變得穩定健康。", rating: 5 },
        { name: "張先生", role: "企業主管", content: "本來對保養沒什麼概念，老婆推薦我使用後，出油量明顯減少，毛孔緊緻很多，整個人看起來更有精神了，操作也超簡單。", rating: 5 }
    ]), // testimonialsList
    '準備好迎接\\n屬於你的透亮膚質了嗎？', // ctaTitle
    '踏出改變的第一步。不論是尋求專屬膚質評估、索取代碼體驗，或是想了解微型創業機會，我們都隨時為你準備好了。', // ctaDesc
    JSON.stringify([
        { q: "LumiSpa iO 適合哪種膚質使用？", a: "LumiSpa iO 搭配五種專屬淨膚露（中/乾、油性、敏弱、抗痘、平衡），適合各種膚質。您可以透過諮詢，由我們為您客製化挑選最適合的產品組合。" },
        { q: "多久能看到效果？", a: "許多用戶在第 1 次體驗後，就能感覺到肌膚變得更加平滑透亮。持續早晚使用 12 週，各種歲月痕跡與毛孔粗大問題都會獲得顯著改善。" },
        { q: "產品是否有保固？", a: "是的，所有透過官方授權管道購買的美容儀器系統，皆享有完善的售後保固與維修服務，敬請安心選購。" },
        { q: "如何預約現場體驗？", a: "請點擊網頁中的「加 LINE 諮詢」或「立即體驗」按鈕，我們會盡快與您聯繫並安排專屬的體驗時間。" }
    ]), // faqList
    '台北市信義區松仁路99號', // contactAddress
    '02-1234-5678', // contactPhone
    'hello@example.com', // contactEmail
    JSON.stringify([
        { platform: 'LINE', url: 'https://line.me/ti/p/~example' },
        { platform: 'Instagram', url: 'https://instagram.com/example' },
        { platform: 'Facebook', url: 'https://facebook.com/example' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/example' },
        { platform: 'GitHub', url: 'https://github.com/example' }
    ]) // socials
  ];

  // 寫入 Google Sheet
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(2, 1, 1, sampleData.length).setValues([sampleData]);
  
  // 美化 Sheet 設定：凍結第一列、粗體字體、遇到 JSON 格式時自動折行
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  sheet.setFrozenRows(1);
  const wrapColumns = [8, 10, 13, 16, 20]; // 這些是 JSON 的欄位
  wrapColumns.forEach(c => sheet.getRange(2, c, 1, 1).setWrap(true));

  Logger.log('✅ 資料產生成功！請回到 Sheet 檢查。');
}
