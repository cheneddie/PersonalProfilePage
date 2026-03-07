function generateSampleData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = 'ProfileData';
  let sheet = ss.getSheetByName(sheetName);
  
  // 如果還沒有 ProfileData 這個分頁，就建立一個，否則清空舊資料
```javascript
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

  // 定義新的欄位名稱 (id 和 data)
  const headers = ['id', 'data'];

  // 10 個不同行業的假資料陣列
  const profiles = [
    // 0. 自己
    {
      id: 'jessicalien1987', name: '潔西', title: '代謝管理師',
      bio: '我深知外貌焦慮帶來的無力感。我是持證代謝管理師與 Nu Skin 顧問，過去已陪伴數千位朋友，以最健康的方式突破體態瓶頸。讓我陪你一起，從根本改善代謝，重新找回自信光芒與全新的人生！',
      avatarUrl: 'https://www.google.com/url?q=https://photos.fife.usercontent.google.com/pw/AP1GczMxH4KaMmeSxPeVM30Cu491nZHRsHB3dY4Vc1eg71aPr1D0TWujAAHSXA%3Dw748-h1328-s-no-gm?authuser%3D2&sa=D&source=editors&ust=1772849882523125&usg=AOvVaw1fRoVW4hUr9AMVWOELHDc5',
      aboutTitle: '遇見更好的自己', aboutDesc: '我們秉持「薈萃優質，純然無瑕 (All of the good, none of the bad)」的理念，運用創新科研技術，從根源解決歲月痕跡與肌膚困擾，帶來由內而外的自信光采。',
      aboutFeatures: [{"icon":"Sparkles","title":"創新抗老科研","desc":"獨家 ageLOC 科技，直擊老化根源，非僅止於表面修護，讓時間為你停留。"},{"icon":"Target","title":"解決保養盲點","desc":"告別瓶瓶罐罐與無感保養。透過智能保養儀器，為快節奏的現代人提供省時高效的方案。"},{"icon":"Heart","title":"安心無負擔","desc":"嚴選純淨安全成分，拒絕添加對肌膚有害的物質，敏弱肌也能安心重現透亮肌質。"}],
      youtubeVideoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', featuresBlocks: [
        {
          heroImage: 'https://www.google.com/url?q=https://images.unsplash.com/photo-1615397323933-255d65f573af?auto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D800&sa=D&source=editors&ust=1772849882523352&usg=AOvVaw28wK4pBRU9Zt53BdivBcuE',
          title: '解鎖無瑕肌底的關鍵',
          subtitle: '為何選擇我們？獨家 FABE 優勢，帶來無可挑剔的體驗。',
          badgeTitle: '科技',
          badgeSubtitle: '抗老',
          buttonText: '改善肌膚',
          list: [
        { title: '專利微脈動反旋科技 (Feature)', desc: '以特定頻率與反向旋轉的柔軟矽膠導頭，精確引導毛孔運動。' },
        { title: '深層清潔與護膚同步 (Advantage)', desc: '打破一般潔膚儀僅有清潔的限制，每次使用都在進行拉提與膠原蛋白激活。' },
        { title: '七大透亮淨緻功效 (Benefit)', desc: '一次體驗即感受緊緻、細滑、透亮，只需每天早晚各兩分鐘，省下繁瑣的醫美療程時間與金錢。' },
        { title: '全球百萬實證與大獎肯定 (Evidence)', desc: '榮獲全球第一的美容儀器系統品牌，無數使用者親身見證的完美抗老逆齡變化。' }
      ]
        }
      ],
      testimonialsTitle: '他們的真實蛻變', testimonialsDesc: '超過百萬用戶親身見證，讓數據與回饋替我們說話。',
      testimonialsList: [
        { name: '陳小姐', role: '科技業業務', content: '工作壓力大加上熬夜，肌膚總是暗沉無光。自從開始使用這套設備後，每天只需兩分鐘，同事都以為我偷偷去醫美，透亮度真的差很多！', rating: 5 },
        { name: '林太太', role: '全職媽媽', content: '產後照顧小孩根本沒時間瓶瓶罐罐保養，這個智能居家儀器完全符合我的需求。溫和不刺激，連我的敏弱肌都變得穩定健康。', rating: 5 },
        { name: '張先生', role: '企業主管', content: '本來對保養沒什麼概念，老婆推薦我使用後，出油量明顯減少，毛孔緊緻很多，整個人看起來更有精神了，操作也超簡單。', rating: 5 }
      ],
      ctaTitle: '準備好迎接\n屬於你的透亮膚質了嗎？', ctaDesc: '踏出改變的第一步。不論是尋求專屬膚質評估、索取代碼體驗，或是想了解微型創業機會，我們都隨時為你準備好了。',
      faqList: [{"q":"LumiSpa iO 適合哪種膚質使用？","a":"LumiSpa iO 搭配五種專屬淨膚露（中/乾、油性、敏弱、抗痘、平衡），適合各種膚質。您可以透過諮詢，由我們為您客製化挑選最適合的產品組合。"},{"q":"多久能看到效果？","a":"許多用戶在第 1 次體驗後，就能感覺到肌膚變得更加平滑透亮。持續早晚使用 12 週，各種歲月痕跡與毛孔粗大問題都會獲得顯著改善。"},{"q":"產品是否有保固？","a":"是的，所有透過官方授權管道購買的美容儀器系統，皆享有完善的售後保固與維修服務，敬請安心選購。"},{"q":"如何預約現場體驗？","a":"請點擊網頁中的「加 LINE 諮詢」或「立即體驗」按鈕，我們會盡快與您聯繫並安排專屬的體驗時間。"}],
      contactAddress: '台北市大安區忠孝東路三段1號', contactPhone: '0912-345-678', contactEmail: 'mike.fitness@example.com',
      socials: [{ platform: 'Instagram', url: 'https://instagram.com/example' }]
    },
    // 1. 健身教練
    {
      id: 'fitness_01', name: 'Mike Lin', title: '專業私人健身教練',
      bio: '擁有 10 年教學經驗，專注於增肌減脂與體態雕塑，帶你打造自信人生。',
      avatarUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
      aboutTitle: '突破極限，遇見更強的自己', aboutDesc: '我們不只提供訓練菜單，更致力於建立健康的生活型態。',
      aboutFeatures: [
        { icon: 'Dumbbell', title: '客製化菜單', desc: '依據個人體能與目標，量身打造專屬訓練計畫。' },
        { icon: 'Apple', title: '飲食指導', desc: '破除節食迷思，教你如何吃得飽又能瘦。' },
        { icon: 'HeartBeat', title: '運動防護', desc: '專業姿勢矯正，避免運動傷害，確保安全進步。' }
      ],
      youtubeVideoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', featuresBlocks: [
        {
          heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
          title: '科學化訓練的關鍵',
          subtitle: '為何選擇我的教練課程？',
          badgeTitle: '專業',
          badgeSubtitle: '科學',
          buttonText: '預約評估',
          list: [
        { title: 'InBody 數據分析 (Feature)', desc: '定期測量身体組成，精準掌握訓練成效。' },
        { title: '靈活上課時間 (Advantage)', desc: '配合上班族作息，早晚皆可安排訓練。' },
        { title: '體態與自信雙贏 (Benefit)', desc: '不只改變外貌，更提升日常生活活力。' }
      ]
        },
        {
          heroImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800',
          title: '進階飲食與營養方針',
          subtitle: '三分練七分吃，打造易瘦體質',
          badgeTitle: '營養',
          badgeSubtitle: '健康',
          buttonText: '了解菜單',
          list: [
        { title: '個人化巨量營養素計算 (Feature)', desc: '根據您的 TDEE 與目標，精算每日所需的碳水、蛋白質與脂肪比例。' },
        { title: '外食族實戰教學 (Advantage)', desc: '不需要天天吃水煮餐，教您如何在便利商店與餐廳做出聰明選擇。' },
        { title: '長期維持不復胖 (Benefit)', desc: '建立可持續的飲食觀念，將健康吃法變成生活的一部分。' }
      ]
        }
      ],
      testimonialsTitle: '學員真實回饋', testimonialsDesc: '看看他們如何成功改變體態。',
      testimonialsList: [
        { name: '王先生', role: '軟體工程師', content: '長期久坐導致腰痠背痛，跟著 Mike 練了三個月，不僅肌肉量提升，背痛也改善了！', rating: 5 }
      ],
      ctaTitle: '準備好流汗了嗎？', ctaDesc: '立即預約首次免費體驗課程。',
      faqList: [
        { q: '沒有運動經驗可以上課嗎？', a: '完全沒問題！基礎動作指導是我們的強項。' }
      ],
      contactAddress: '台北市大安區忠孝東路三段1號', contactPhone: '0912-345-678', contactEmail: 'mike.fitness@example.com',
      socials: [{ platform: 'Instagram', url: 'https://instagram.com/example' }]
    },
    // 2. 室內設計
    {
      id: 'design_02', name: 'Aesthetic Studio', title: '高端室內設計工作室',
      bio: '專注於極簡美學與實用機能的完美平衡，為您打造夢想中的質感生活空間。',
      avatarUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
      aboutTitle: '重塑空間，定義生活', aboutDesc: '我們相信好的設計不只是視覺的享受，更是生活品質的提升。',
      aboutFeatures: [
        { icon: 'Home', title: '全屋訂製', desc: '從毛胚屋到軟裝配置，提供一站式設計服務。' },
        { icon: 'PenTool', title: '3D 渲染圖', desc: '施工前提供高擬真 3D 圖，所見即所得。' },
        { icon: 'CheckCircle', title: '嚴控工期', desc: '專業監工團隊，確保施工品質與交屋時間。' }
      ],
      youtubeVideoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', featuresBlocks: [
        {
          heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
          title: '設計美學的堅持',
          subtitle: '兼顧美感與實用的四大原則',
          badgeTitle: '美學',
          badgeSubtitle: '品質',
          buttonText: '觀看作品清單',
          list: [
        { title: '綠建材應用 (Feature)', desc: '全面使用低甲醛環保建材。' },
        { title: '通透採光設計 (Advantage)', desc: '打破格局限制，引入最大自然光。' },
        { title: '無壓居住體驗 (Benefit)', desc: '讓家成為您最放鬆的避風港。' }
      ]
        },
        {
          heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
          title: '軟裝與傢俱配置美學',
          subtitle: '空間的靈魂所在',
          badgeTitle: '裝飾',
          badgeSubtitle: '品味',
          buttonText: '預約諮詢',
          list: [
        { title: '風格色彩定調 (Feature)', desc: '依據您的喜好，挑選最合適的空間主色調與材質搭配。' },
        { title: '全球傢俱採購 (Advantage)', desc: '與國內外品牌合作，為您代購高質感設計師傢俱與畫作。' },
        { title: '氛圍營造與細節 (Benefit)', desc: '從地毯、窗簾到藝術擺飾，每一個細節都完美呼應空間個性。' }
      ]
        }
      ],
      testimonialsTitle: '屋主見證', testimonialsDesc: '聽聽他們住在新家的真實感受。',
      testimonialsList: [
        { name: '林太太', role: '新婚夫妻', content: '設計師非常懂我們要的北歐風，收納空間規劃得超棒，入住半年還是像新的一樣！', rating: 5 }
      ],
      ctaTitle: '開始規劃您的夢想家', ctaDesc: '提供免費初步諮詢與丈量服務。',
      faqList: [
        { q: '設計費如何計算？', a: '依據坪數與設計複雜度報價，歡迎預約諮詢。' }
      ],
      contactAddress: '台中市西屯區台灣大道三段', contactPhone: '04-2345-6789', contactEmail: 'hello@aesthetic.tw',
      socials: [{ platform: 'Facebook', url: 'https://facebook.com/example' }]
    },
    // 3. 精品咖啡
    {
      id: 'coffee_03', name: 'Roast & Co.', title: '獨立自家烘焙咖啡館',
      bio: '尋找世界各地優質生豆，用心烘焙，只為呈現杯中最純粹的風味。',
      avatarUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
      aboutTitle: '從產地到杯中的極致追求', aboutDesc: '每一支豆子都有它的故事，我們負責將它完美演繹。',
      aboutFeatures: [
        { icon: 'Coffee', title: '嚴選莊園豆', desc: '直接與產地小農合作，確保品質與公平交易。' },
        { icon: 'Flame', title: '職人鮮焙', desc: '每週少量新鮮烘焙，鎖住最佳香氣。' },
        { icon: 'Package', title: '濾掛/熟豆', desc: '提供多樣化產品，滿足不同沖煮需求。' }
      ],
      youtubeVideoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', featuresBlocks: [
        {
          heroImage: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
          title: '品味咖啡的藝術',
          subtitle: '為什麼我們的咖啡不一樣？',
          badgeTitle: '風味',
          badgeSubtitle: '講究',
          buttonText: '探索豆單',
          list: [
        { title: '淺焙果香專門 (Feature)', desc: '保留咖啡豆最原始的產地花果香氣。' },
        { title: '客製化研磨 (Advantage)', desc: '依據您的沖煮器具，提供最佳研磨度。' },
        { title: '喚醒每個早晨 (Benefit)', desc: '用一杯好咖啡，開啟高效美好的一天。' }
      ]
        },
        {
          heroImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
          title: '沉浸式手沖體驗',
          subtitle: '不僅是喝咖啡，更是享受過程',
          badgeTitle: '體驗',
          badgeSubtitle: '手作',
          buttonText: '預約品鑑',
          list: [
        { title: '職人桌邊服務 (Feature)', desc: '專業咖啡師至桌邊為您親自示範手沖技巧。' },
        { title: '風味輪解說教學 (Advantage)', desc: '帶您認識不同產區咖啡豆的特色與風味走向，提升品鑑能力。' },
        { title: '療育的感官饗宴 (Benefit)', desc: '看著咖啡粉膨脹、聞著撲鼻香氣，讓身心在這短暫的時光中徹底放鬆。' }
      ]
        }
      ],
      testimonialsTitle: '咖啡迷推薦', testimonialsDesc: '每天都要來一杯的真實理由。',
      testimonialsList: [
        { name: '張先生', role: '自由職業者', content: '他們家的衣索比亞日曬豆真的有驚豔到我，莓果香氣非常迷人！', rating: 5 }
      ],
      ctaTitle: '尋找你的專屬風味', ctaDesc: '立即逛逛本月新豆與濾掛組合。',
      faqList: [
        { q: '咖啡豆可以保存多久？', a: '建議在烘焙後 30 天內飲用完畢風味最佳。' }
      ],
      contactAddress: '台南市中西區海安路二段', contactPhone: '06-222-3333', contactEmail: 'shop@roastco.tw',
      socials: [{ platform: 'Instagram', url: 'https://instagram.com/example' }]
    },
    // 4. 房地產顧問
    {
      id: 'realestate_04', name: 'David Chen', title: '資深房地產投資顧問',
      bio: '專營大台北地區商辦與豪宅買賣，提供專業市場分析與精準媒合服務。',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
      aboutTitle: '為您守護資產，尋找歸屬', aboutDesc: '買房是人生大事，您需要一個誠實、專業且懂您的經紀人。',
      aboutFeatures: [
        { icon: 'Map', title: '商圈分析', desc: '提供詳盡的區域發展潛力與行情報告。' },
        { icon: 'Key', title: '專屬帶看', desc: '過濾無效物件，為您節省寶貴時間。' },
        { icon: 'Shield', title: '安全交易', desc: '嚴格把關產權，確保交易過程合法安心。' }
      ],
      youtubeVideoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', featuresBlocks: [
        {
          heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
          title: '精準投資的眼光',
          subtitle: '我的獨家服務優勢',
          badgeTitle: '數據',
          badgeSubtitle: '隱密',
          buttonText: '看房流程',
          list: [
        { title: '大數據定價策略 (Feature)', desc: '運用實價登錄與內部數據精準估價。' },
        { title: '隱密性高 (Advantage)', desc: '保護客戶隱私，專營低調成交。' },
        { title: '資產穩定增值 (Benefit)', desc: '讓您的資金停泊在最保值抗跌的標的上。' }
      ]
        },
        {
          heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
          title: '商業地產與節稅佈局',
          subtitle: '為企業家量身打造的資產策略',
          badgeTitle: '資產',
          badgeSubtitle: '傳承',
          buttonText: '諮詢規劃',
          list: [
        { title: '租投報率深度分析 (Feature)', desc: '預估商辦租金收益，尋找潛在的高投報商業物件。' },
        { title: '法人購屋稅務規劃 (Advantage)', desc: '協同會計師團隊，提供合法且具效益的稅務與傳承建議。' },
        { title: '擴展事業版圖無憂 (Benefit)', desc: '為您的企業總部找到最完美的腹地，展現公司實力與門面。' }
      ]
        }
      ],
      testimonialsTitle: '客戶推薦', testimonialsDesc: '值得信賴的合作夥伴。',
      testimonialsList: [
        { name: '陳董事長', role: '企業家', content: 'David 幫公司找到非常滿意的商辦，議價過程專業且為客戶著想，非常推薦！', rating: 5 }
      ],
      ctaTitle: '想了解最新市場行情？', ctaDesc: '免費提供您社區的最新成交行情報告。',
      faqList: [
        { q: '現在是買房好時機嗎？', a: '房市隨政策與利率波動，我會依據您的資金需求給予最客觀的建議。' }
      ],
      contactAddress: '台北市信義區信義路五段', contactPhone: '0987-654-321', contactEmail: 'david@realestate.com',
      socials: [{ platform: 'LinkedIn', url: 'https://linkedin.com/example' }]
    },
    // 5. 寵物美容
    {
      id: 'pet_05', name: 'Fluffy Paws', title: '精緻寵物美容與安親',
      bio: '不關籠、零壓力的美容環境，我們把您的毛孩當作自己的家人般疼愛。',
      avatarUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
      aboutTitle: '毛孩的第二個家', aboutDesc: '讓洗澡美容不再是毛孩的噩夢，而是一場享受。',
      aboutFeatures: [
        { icon: 'Scissors', title: '專業日系造型', desc: '客製化修剪，讓毛孩可愛度翻倍。' },
        { icon: 'Droplet', title: 'SPA 皮膚調理', desc: '引進頂級碳酸泉，改善毛孩皮膚問題。' },
        { icon: 'Smile', title: '不關籠安親', desc: '開放式遊樂空間，專業保母陪伴玩耍。' }
      ],
      youtubeVideoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', featuresBlocks: [
        {
          heroImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
          title: '頂級的呵護體驗',
          subtitle: '為何毛孩都愛來這裡？',
          badgeTitle: '安心',
          badgeSubtitle: '快樂',
          buttonText: '預約美容',
          list: [
        { title: '全程透明玻璃 (Feature)', desc: '美容過程公開透明，飼主隨時可看。' },
        { title: '低敏洗劑 (Advantage)', desc: '嚴選進口天然洗劑，保護脆弱肌膚。' },
        { title: '開心回家 (Benefit)', desc: '降低看醫生的機率，毛孩健康又快樂。' }
      ]
        },
        {
          heroImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800',
          title: '日托安親與行為導正',
          subtitle: '社會化學習的歡樂夏令營',
          badgeTitle: '學習',
          badgeSubtitle: '放電',
          buttonText: '了解安親環境',
          list: [
        { title: '正向加強行為訓練 (Feature)', desc: '在遊戲中學習基本指令與禮儀，改善分離焦慮與吠叫問題。' },
        { title: '依據體型個性分班 (Advantage)', desc: '中大型犬與小型犬分層活動，確保毛孩安全無虞。' },
        { title: '回家後秒睡的魔力 (Benefit)', desc: '讓毛孩充分放電消耗精力，主人回家後不需再拖著疲憊身軀出門蹓狗。' }
      ]
        }
      ],
      testimonialsTitle: '家長安心回饋', testimonialsDesc: '看見毛孩笑臉是我們最大的成就。',
      testimonialsList: [
        { name: '李小姐', role: '柯基犬主人', content: '我家狗狗以前很怕洗澡，來這裡之後居然會主動走進店裡，美容師真的非常有耐心！', rating: 5 }
      ],
      ctaTitle: '讓毛孩享受一下吧！', ctaDesc: '新客首次預約 SPA 享 8 折優惠。',
      faqList: [
        { q: '膽小或會咬人的狗可以接嗎？', a: '我們會先進行評估與親和訓練，不強迫毛孩。' }
      ],
      contactAddress: '高雄市左營區博愛二路', contactPhone: '07-555-6666', contactEmail: 'woof@fluffypaws.tw',
      socials: [{ platform: 'Facebook', url: 'https://facebook.com/example' }]
    },
    // 6. 獨立攝影師
    {
      id: 'photo_06', name: 'Iris Studio', title: '獨立人像與婚紗攝影',
      bio: '擅長自然光與底片色調，捕捉不經意的情感流露，紀錄屬於你們的純粹瞬間。',
      avatarUrl: 'https://images.unsplash.com/photo-1554046920-90dcac823ae0?auto=format&fit=crop&q=80&w=800',
      aboutTitle: '用鏡頭訴說你的故事', aboutDesc: '最美的照片，往往是那些沒有對著鏡頭微笑的時刻。',
      aboutFeatures: [
        { icon: 'Camera', title: '人像寫真', desc: '個人風格寫真、孕婦照、家庭紀念。' },
        { icon: 'Heart', title: '美式婚紗', desc: '拋開制式擺拍，拍出你們愛情的模樣。' },
        { icon: 'Video', title: '動態錄影', desc: '微電影式婚禮紀錄，保留聲音與感動。' }
      ],
      youtubeVideoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', featuresBlocks: [
        {
          heroImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
          title: '捕捉光影的魔法',
          subtitle: 'Iris Studio 的攝影哲學',
          badgeTitle: '風格',
          badgeSubtitle: '光影',
          buttonText: '欣賞作品輯',
          list: [
        { title: '專屬拍攝企劃 (Feature)', desc: '拍攝前深入溝通，量身定做風格與場景。' },
        { title: '引導式拍攝 (Advantage)', desc: '不會擺姿勢也不怕，自然引導讓你放鬆做自己。' },
        { title: '永恆的記憶 (Benefit)', desc: '十年後再看依然感動的雋永畫面。' }
      ]
        },
        {
          heroImage: 'https://images.unsplash.com/photo-1510065050586-31dbf5bf0133?auto=format&fit=crop&q=80&w=800',
          title: '底片色彩與相冊製作',
          subtitle: '充滿溫度的實體回憶',
          badgeTitle: '底片',
          badgeSubtitle: '珍藏',
          buttonText: '預約檔期',
          list: [
        { title: '獨家復古膠片色調調色 (Feature)', desc: '為數位照片注入底片特有的顆粒感與溫暖色澤。' },
        { title: '進口無酸紙藝術相冊 (Advantage)', desc: '實木外盒與手工裝幀，材質頂級，能對抗環境溼氣不褪色。' },
        { title: '傳家寶等級的收藏 (Benefit)', desc: '將最美的回憶化為可以觸碰的實體，是送給自己與未來最珍貴的禮物。' }
      ]
        }
      ],
      testimonialsTitle: '真實感動', testimonialsDesc: '來自客戶的溫暖推薦。',
      testimonialsList: [
        { name: 'Emily & Tom', role: '新人', content: '拿到照片那刻真的看到哭，Iris 抓拍的每個瞬間都充滿感情，連爸媽都很滿意！', rating: 5 }
      ],
      ctaTitle: '寫下你們的故事', ctaDesc: '2024 下半年檔期熱烈預約中。',
      faqList: [
        { q: '拍攝費用包含妝髮嗎？', a: '我們有配合的資深造型師團隊，會提供一條龍的包套方案。' }
      ],
      contactAddress: '台北市大同區赤峰街', contactPhone: '0977-111-222', contactEmail: 'iris@photography.com',
      socials: [{ platform: 'Instagram', url: 'https://instagram.com/example' }]
    },
    // 7. 財務理財規劃
    {
      id: 'finance_07', name: 'Wealth Blueprint', title: '獨立財務顧問 (IFA)',
      bio: '不推銷特定商品，以客觀中立的角度，為中產階級與家庭建構穩健的財務藍圖。',
      avatarUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
      aboutTitle: '理財先理心，打造富足人生', aboutDesc: '真正的財富自由，是擁有選擇生活方式的權利。',
      aboutFeatures: [
        { icon: 'PieChart', title: '資產配置', desc: '分散風險，建立穩定現金流投資組合。' },
        { icon: 'Shield', title: '保險健診', desc: '檢視既有保單，補足缺口，拒絕高保費低保障。' },
        { icon: 'Target', title: '退休規劃', desc: '提早佈局，計算退休金缺口並制定達標計畫。' }
      ],
      youtubeVideoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', featuresBlocks: [
        {
          heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
          title: '專業、客觀、透明',
          subtitle: '為什麼你需要獨立顧問？',
          badgeTitle: '信任',
          badgeSubtitle: '遠見',
          buttonText: '了解顧問方案',
          list: [
        { title: '單一諮詢費制 (Feature)', desc: '不賺取佣金，徹底解決利益衝突問題。' },
        { title: '全盤性檢視 (Advantage)', desc: '整合稅務、投資、保險，提供宏觀建議。' },
        { title: '不再為錢焦慮 (Benefit)', desc: '清晰的財務路徑，讓你安心專注於本業與家庭。' }
      ]
        },
        {
          heroImage: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=800',
          title: '持續守護你的投資',
          subtitle: '人生不同階段的動態調整',
          badgeTitle: '守護',
          badgeSubtitle: '增長',
          buttonText: '預約初步健檢',
          list: [
        { title: '年度財務健檢與再平衡 (Feature)', desc: '每年檢視目標達成率，並依據市場狀況動態調整資產配置比例。' },
        { title: '人生重大事件專案諮詢 (Advantage)', desc: '買房、生子或轉換跑道時，隨時為您重新試算可用資源與現金流。' },
        { title: '抵抗通膨與市場波動的防線 (Benefit)', desc: '跌市時有人為您把關避免恐慌殺低，建立反脆弱的超強財務防禦力。' }
      ]
        }
      ],
      testimonialsTitle: '客戶成功案例', testimonialsDesc: '財務健康的最佳證明。',
      testimonialsList: [
        { name: '吳先生', role: '雙薪家庭', content: '以前總是存不到錢又亂買保險，經過規劃後，現在不僅有了緊急預備金，也開始穩定投資了。', rating: 5 }
      ],
      ctaTitle: '掌握您的財務未來', ctaDesc: '預約 30 分鐘免費線上破冰諮詢。',
      faqList: [
        { q: '資金不多也可以諮詢嗎？', a: '當然可以，理財應該從小錢開始規劃，越早開始複利效果越好。' }
      ],
      contactAddress: '新竹市東區關新路', contactPhone: '03-555-7777', contactEmail: 'info@wealthblueprint.tw',
      socials: [{ platform: 'LinkedIn', url: 'https://linkedin.com/example' }]
    },
    // 8. 婚禮企劃
    {
      id: 'wedding_08', name: 'Dream Vows', title: '頂級婚禮企劃與設計',
      bio: '從場地挑選到流程控管，將繁瑣的備婚細節化為享受，為您打造獨一無二的夢幻婚禮。',
      avatarUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
      aboutTitle: '成就完美的一天', aboutDesc: '你們負責相愛，剩下的交給我們。',
      aboutFeatures: [
        { icon: 'Star', title: '主題視覺', desc: '專屬花藝與佈置設計，營造浪漫氛圍。' },
        { icon: 'Calendar', title: '流程企劃', desc: '精準的時間表與動線安排，絕不冷場。' },
        { icon: 'Users', title: '廠商統籌', desc: '嚴選攝影、新秘、主持等神仙團隊。' }
      ],
      youtubeVideoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', featuresBlocks: [
        {
          heroImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
          title: '零壓力的備婚體驗',
          subtitle: '我們的核心價值',
          badgeTitle: '完美',
          badgeSubtitle: '無瑕',
          buttonText: '看更多場地',
          list: [
        { title: '專屬管家服務 (Feature)', desc: '婚禮當天貼身協助，隨時解決突發狀況。' },
        { title: '預算精準控管 (Advantage)', desc: '把錢花在刀口上，避免隱藏性超支。' },
        { title: '享受當下 (Benefit)', desc: '新人與父母都能優雅出席，盡情享受派對。' }
      ]
        },
        {
          heroImage: 'https://images.unsplash.com/photo-1469371670807-013ccfdd54a5?auto=format&fit=crop&q=80&w=800',
          title: '夢幻戶外婚禮專家',
          subtitle: '美式草原與海島風情',
          badgeTitle: '浪漫',
          badgeSubtitle: '專屬',
          buttonText: '打造你的婚禮',
          list: [
        { title: '異地海外婚禮統籌 (Feature)', desc: '沖繩、峇里島或歐洲城堡，為您打理所有機加酒與當地儀式細節。' },
        { title: '雨天備案與動線規劃 (Advantage)', desc: '豐富的戶外執行經驗，確保天氣變化不會破壞完美婚禮的節奏。' },
        { title: '實現如同電影般的場景 (Benefit)', desc: '伴隨夕陽與微風，在親友見證下交換誓言，營造最催淚且難忘的浪漫記憶。' }
      ]
        }
      ],
      testimonialsTitle: '新娘推薦', testimonialsDesc: '聽聽學姊們怎麼說。',
      testimonialsList: [
        { name: 'Chloe', role: '新娘', content: '如果沒有團隊幫忙，我一定會崩潰！婚禮當天我真的只要負責漂亮就好，一切都太完美了。', rating: 5 }
      ],
      ctaTitle: '準備好聊聊你們的婚禮了嗎？', ctaDesc: '分享你們的故事，讓我們開始規劃。',
      faqList: [
        { q: '需要提早多久預約？', a: '建議婚期前 10-12 個月預約，以便預留心儀的場地與熱門廠商。' }
      ],
      contactAddress: '台中市南屯區文心南路', contactPhone: '04-3333-4444', contactEmail: 'wedding@dreamvows.com',
      socials: [{ platform: 'Instagram', url: 'https://instagram.com/example' }]
    },
    // 9. 軟體開發
    {
      id: 'tech_09', name: 'CodeCraft', title: '數位產品開發工作室',
      bio: '專注於 Web 與 App 開發，提供 UX/UI 設計與現代化架構，協助企業完成數位轉型。',
      avatarUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
      aboutTitle: '用技術驅動商業成長', aboutDesc: '我們不僅寫程式，更解決真實的商業問題。',
      aboutFeatures: [
        { icon: 'Code', title: '全端開發', desc: 'React, Node.js 等現代化技術棧應用。' },
        { icon: 'Smartphone', title: 'App 設計', desc: '跨平台解決方案，提供順暢的使用者體驗。' },
        { icon: 'Cloud', title: '雲端架構', desc: 'AWS/GCP 高可用性系統建置與維護。' }
      ],
      youtubeVideoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', featuresBlocks: [
        {
          heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
          title: '敏捷與品質並重',
          subtitle: '我們的開發流程',
          badgeTitle: '效能',
          badgeSubtitle: '品質',
          buttonText: '察看專案時程',
          list: [
        { title: '模組化架構 (Feature)', desc: '高擴充性的代碼設計，方便未來迭代。' },
        { title: '透明化專案管理 (Advantage)', desc: '定期交付進度，確保方向與需求一致。' },
        { title: '提升營運效率 (Benefit)', desc: '自動化繁瑣流程，讓企業專注於核心業務。' }
      ]
        },
        {
          heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
          title: '企業級系統整合與數據分析',
          subtitle: '解放數據的潛力與價值',
          badgeTitle: '整合',
          badgeSubtitle: '優勢',
          buttonText: '技術解決方案',
          list: [
        { title: 'ERP/CRM 第三方針對接 (Feature)', desc: '打破資訊孤島，將前端 App 與後端既有內部管理系統無縫串連。' },
        { title: '商業智慧與自訂報表 (Advantage)', desc: '開發直覺的可視化 Dashboard，協助管理者快速掌握營運狀況。' },
        { title: '做出明智的商業決策 (Benefit)', desc: '用數字說話，透過預測性模型與數據分析，搶先競爭對手洞察市場趨勢。' }
      ]
        }
      ],
      testimonialsTitle: '合作夥伴回饋', testimonialsDesc: '來自各產業客戶的信賴。',
      testimonialsList: [
        { name: '劉經理', role: '電商平台創辦人', content: 'CodeCraft 幫我們重構了老舊系統，網站載入速度提升了 3 倍，轉換率也跟著大幅成長！', rating: 5 }
      ],
      ctaTitle: '有什麼瘋狂的想法嗎？', ctaDesc: '讓我們用程式碼將它具現化。',
      faqList: [
        { q: '開發一個 App 大約需要多久？', a: '依據功能複雜度而定，MVP (最小可行性產品) 通常需要 2-3 個月的開發週期。' }
      ],
      contactAddress: '台北市內湖區瑞光路', contactPhone: '02-8888-9999', contactEmail: 'hello@codecraft.io',
      socials: [{ platform: 'GitHub', url: 'https://github.com/example' }]
    },
    // 10. 瑜珈導師
    {
      id: 'yoga_10', name: 'Zen Flow', title: '正念瑜珈與冥想導師',
      bio: '結合流動瑜珈與頌缽音療，幫助現代人釋放壓力，找回身心靈的平靜與平衡。',
      avatarUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
      aboutTitle: '在呼吸間找回自己', aboutDesc: '墊子上的練習，是為了面對墊子外的生活。',
      aboutFeatures: [
        { icon: 'Activity', title: 'Vinyasa 流動', desc: '結合呼吸與動作，增進核心力量與柔軟度。' },
        { icon: 'Moon', title: '陰瑜珈', desc: '深層伸展筋膜，舒緩緊繃的神經系統。' },
        { icon: 'Music', title: '頌缽音療', desc: '利用聲波共振，達到深層放鬆與細胞修復。' }
      ],
      youtubeVideoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', featuresBlocks: [
        {
          heroImage: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800',
          title: '向內探索的旅程',
          subtitle: '課程特色與益處',
          badgeTitle: '放鬆',
          badgeSubtitle: '心靈',
          buttonText: '課程表總覽',
          list: [
        { title: '小班制教學 (Feature)', desc: '每堂課不超過 6 人，確保姿勢調整。' },
        { title: '靜謐的空間 (Advantage)', desc: '充滿自然光與木質香氣的舒適環境。' },
        { title: '改善睡眠品質 (Benefit)', desc: '釋放深層壓力，告別失眠與焦慮困擾。' }
      ]
        },
        {
          heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
          title: '專屬一對一客製化指導',
          subtitle: '針對特殊身體狀況的精準練習',
          badgeTitle: '專注',
          badgeSubtitle: '指導',
          buttonText: '預約老師',
          list: [
        { title: '個人體態與舊傷評估 (Feature)', desc: '上課前詳細記錄受傷史，設計避開疼痛並強化特定肌群的專屬序列。' },
        { title: '彈性預約與隱私空間 (Advantage)', desc: '可到府教學或於專屬私人教室練習，不必在意他人眼光，專注於自我。' },
        { title: '效率翻倍的進步速度 (Benefit)', desc: '導師全程只關注您一人的呼吸與動作細節，更快突破瓶頸，享受身心舒展的暢快感。' }
      ]
        }
      ],
      testimonialsTitle: '學生心得分享', testimonialsDesc: '身心靈的蛻變之旅。',
      testimonialsList: [
        { name: 'Alice', role: '行銷企劃', content: '下班後的一小時瑜珈是我每天最期待的時間，頌缽大休息時我甚至常常舒服到睡著。', rating: 5 }
      ],
      ctaTitle: '展開你的瑜珈練習', ctaDesc: '領取首次單堂體驗半價優惠券。',
      faqList: [
        { q: '身體很硬可以練瑜珈嗎？', a: '當然！瑜珈不是為了把腳放進脖子裡，而是為了讓身體感受舒適，任何人都可以練習。' }
      ],
      contactAddress: '新北市板橋區文化路一段', contactPhone: '0955-444-333', contactEmail: 'namaste@zenflow.tw',
      socials: [{ platform: 'Instagram', url: 'https://instagram.com/example' }]
    }
  ];

  // 將物件陣列轉換為寫入 Sheet 需要的二維陣列
  const sampleDataRows = profiles.map(profile => {
    // 扣除掉 id，剩下的就是 data
    const { id, ...dataObj } = profile;
    return [
      id,
      JSON.stringify(dataObj) // 直接儲存為 JSON
    ];
  });

  // 寫入 Google Sheet (標題列)
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // 寫入 Google Sheet (資料列)
  sheet.getRange(2, 1, sampleDataRows.length, headers.length).setValues(sampleDataRows);
  
  // 美化 Sheet 設定：凍結第一列、粗體字體、遇到 JSON 格式時自動折行
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  sheet.setFrozenRows(1);
  
  // 將含有 JSON 或長文本的 data 欄位設定自動換行
  // data 欄位是第二欄 (index 2)
  sheet.getRange(2, 2, sampleDataRows.length, 1).setWrap(true);

  Logger.log(`✅ ${profiles.length} 筆跨行業資料產生成功！請回到 Sheet 檢查。`);
}
```