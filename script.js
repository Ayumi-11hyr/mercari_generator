// ===== ユニット順序 =====
const officialUnitOrder = [
  "🕊️ fine",
  "⭐ Trickstar",
  "🌠 流星隊",
  "🃏 ALKALOID",
  "🍎 Eden",
  "⚙️ Valkyrie",
  "👯 2wink",
  "🐝 Crazy:B",
  "🦇 UNDEAD",
  "🐰 Ra*bits",
  "🌙 紅月",
  "🍫 MELLOW DEAR US",
  "♞ Knights",
  "🧙 Switch",
  "🤠 MaM",
  "🎭 Double Face",
  "🦄 Special For Princess",
  "👨‍🏫 教師",
];

// ===== キャラクター + ユニット情報 =====
const characters = [
  // fine
  { name: "天祥院英智", unit: "fine", unitKeywords: ["fine", "フィーネ"] },
  { name: "日々樹渉", unit: "fine", unitKeywords: ["fine", "フィーネ"] },
  { name: "姫宮桃李", unit: "fine", unitKeywords: ["fine", "フィーネ"] },
  { name: "伏見弓弦", unit: "fine", unitKeywords: ["fine", "フィーネ"] },

  // Trickstar
  { name: "氷鷹北斗", unit: "Trickstar", unitKeywords: ["Trickstar", "トリックスター", "トリスタ"] },
  { name: "明星スバル", unit: "Trickstar", unitKeywords: ["Trickstar", "トリックスター", "トリスタ"] },
  { name: "遊木真", unit: "Trickstar", unitKeywords: ["Trickstar", "トリックスター", "トリスタ"] },
  { name: "衣更真緒", unit: "Trickstar", unitKeywords: ["Trickstar", "トリックスター", "トリスタ"] },

  // 流星隊
  { name: "守沢千秋", unit: "流星隊", unitKeywords: ["流星隊"] },
  { name: "深海奏汰", unit: "流星隊", unitKeywords: ["流星隊"] },
  { name: "南雲鉄虎", unit: "流星隊", unitKeywords: ["流星隊"] },
  { name: "高峯翠", unit: "流星隊", unitKeywords: ["流星隊"] },
  { name: "仙石忍", unit: "流星隊", unitKeywords: ["流星隊"] },

  // ALKALOID
  { name: "天城一彩", unit: "ALKALOID", unitKeywords: ["ALKALOID", "アルカロイド"] },
  { name: "白鳥藍良", unit: "ALKALOID", unitKeywords: ["ALKALOID", "アルカロイド"] },
  { name: "礼瀬マヨイ", unit: "ALKALOID", unitKeywords: ["ALKALOID", "アルカロイド"] },
  { name: "風早巽", unit: "ALKALOID", unitKeywords: ["ALKALOID", "アルカロイド"] },

  // Eden
  { name: "乱凪砂", unit: "Eden", unitKeywords: ["Eden", "エデン"] },
  { name: "巴日和", unit: "Eden", unitKeywords: ["Eden", "エデン"] },
  { name: "七種茨", unit: "Eden", unitKeywords: ["Eden", "エデン"] },
  { name: "漣ジュン", unit: "Eden", unitKeywords: ["Eden", "エデン"] },

  // Valkyrie
  { name: "斎宮宗", unit: "Valkyrie", unitKeywords: ["Valkyrie", "ヴァルキュリー"] },
  { name: "影片みか", unit: "Valkyrie", unitKeywords: ["Valkyrie", "ヴァルキュリー"] },

  // 2wink
  { name: "葵ひなた", unit: "2wink", unitKeywords: ["2wink", "ツインク"] },
  { name: "葵ゆうた", unit: "2wink", unitKeywords: ["2wink", "ツインク"] },

  // Crazy:B
  { name: "天城燐音", unit: "Crazy:B", unitKeywords: ["Crazy:B", "クレビ", "クレイジービー"] },
  { name: "HiMERU", unit: "Crazy:B", unitKeywords: ["Crazy:B", "クレビ", "クレイジービー"] },
  { name: "桜河こはく", unit: "Crazy:B", unitKeywords: ["Crazy:B", "クレビ", "クレイジービー"] },
  { name: "椎名ニキ", unit: "Crazy:B", unitKeywords: ["Crazy:B", "クレビ", "クレイジービー"] },

  // UNDEAD
  { name: "朔間零", unit: "UNDEAD", unitKeywords: ["UNDEAD", "アンデッド"] },
  { name: "羽風薫", unit: "UNDEAD", unitKeywords: ["UNDEAD", "アンデッド"] },
  { name: "大神晃牙", unit: "UNDEAD", unitKeywords: ["UNDEAD", "アンデッド"] },
  { name: "乙狩アドニス", unit: "UNDEAD", unitKeywords: ["UNDEAD", "アンデッド"] },

  // Ra*bits
  { name: "仁兎なずな", unit: "Ra*bits", unitKeywords: ["Ra*bits", "ラビッツ"] },
  { name: "天満光", unit: "Ra*bits", unitKeywords: ["Ra*bits", "ラビッツ"] },
  { name: "真白友也", unit: "Ra*bits", unitKeywords: ["Ra*bits", "ラビッツ"] },
  { name: "紫之創", unit: "Ra*bits", unitKeywords: ["Ra*bits", "ラビッツ"] },

  // 紅月
  { name: "蓮巳敬人", unit: "紅月", unitKeywords: ["紅月", "あかつき"] },
  { name: "鬼龍紅郎", unit: "紅月", unitKeywords: ["紅月", "あかつき"] },
  { name: "神崎颯馬", unit: "紅月", unitKeywords: ["紅月", "あかつき"] },
  { name: "滝維吹", unit: "紅月", unitKeywords: ["紅月", "あかつき"] },

  // MELLOW DEAR US
  { name: "小鹿ジュイス", unit: "MELLOW DEAR US", unitKeywords: ["メロアス", "MDU"] },
  { name: "円果望見", unit: "MELLOW DEAR US", unitKeywords: ["メロアス", "MDU"] },
  { name: "久遠舞珠", unit: "MELLOW DEAR US", unitKeywords: ["メロアス", "MDU"] },
  { name: "甘楽チトセ", unit: "MELLOW DEAR US", unitKeywords: ["メロアス", "MDU"] },

  // Knights
  { name: "月永レオ", unit: "Knights", unitKeywords: ["Knights", "ナイツ"] },
  { name: "瀬名泉", unit: "Knights", unitKeywords: ["Knights", "ナイツ"] },
  { name: "朔間凛月", unit: "Knights", unitKeywords: ["Knights", "ナイツ"] },
  { name: "鳴上嵐", unit: "Knights", unitKeywords: ["Knights", "ナイツ"] },
  { name: "朱桜司", unit: "Knights", unitKeywords: ["Knights", "ナイツ"] },

  // Switch
  { name: "逆先夏目", unit: "Switch", unitKeywords: ["Switch", "スイッチ", "スウィッチ"] },
  { name: "青葉つむぎ", unit: "Switch", unitKeywords: ["Switch", "スイッチ", "スウィッチ"] },
  { name: "春川宙", unit: "Switch", unitKeywords: ["Switch", "スイッチ", "スウィッチ"] },

  // MaM
  { name: "三毛縞斑", unit: "MaM", unitKeywords: ["MaM", "マム", "ママ"] },

  // Double Face
  { name: "三毛縞斑", unit: "Double Face", unitKeywords: ["Double Face", "ダブルフェイス", "ダブフェ"] },
  { name: "桜河こはく", unit: "Double Face", unitKeywords: ["Double Face", "ダブルフェイス", "ダブフェ"] },

  // Special For Princess
  { name: "エス（冴霧笑主）", unit: "Special For Princess!", unitKeywords: ["エスプリ"] },
  { name: "カンナ（名都神無）", unit: "Special For Princess!", unitKeywords: ["エスプリ"] },
  { name: "ユメ（花群冬芽）", unit: "Special For Princess!", unitKeywords: ["エスプリ"] },
  { name: "ライカ（宝丈萊香）", unit: "Special For Princess!", unitKeywords: ["エスプリ"] },

  // 教師
  { name: "佐賀美陣", unit: "Jin & Akiomi", unitKeywords: ["教師", "先生"] },
  { name: "椚章臣", unit: "Jin & Akiomi", unitKeywords: ["教師", "先生"] },
];

// ===== グッズカテゴリ =====
const goodsCategories = {
  "アニメイトカフェ関連": [
    { name: "アニカフェ アクスタ", keywords: ["アクリルスタンド", "アニカフェ"], type: "acrylic", category: "domestic" },
    { name: "アニカフェ コースター", keywords: ["アニカフェ"], type: "paper", category: "domestic" },
    { name: "アニカフェ ステッカー", keywords: ["シール", "アニカフェ"], type: "paper", category: "domestic" },
  ],

  "ぱしゃっつ（P.A.shots!!）": [
    { name: "ぱしゃっつ Vol.1 Private", keywords: ["P.A.shots!!", "Vol.1", "Private"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ Vol.1 Action", keywords: ["P.A.shots!!", "Vol.1", "Action"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ Vol.2 Private", keywords: ["P.A.shots!!", "Vol.2", "Private"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ Vol.2 Action", keywords: ["P.A.shots!!", "Vol.2", "Action"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ Vol.3 Private", keywords: ["P.A.shots!!", "Vol.3", "Private"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ Vol.3 Action", keywords: ["P.A.shots!!", "Vol.3", "Action"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ Vol.4 Private", keywords: ["P.A.shots!!", "Vol.4", "Private"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ Vol.4 Action", keywords: ["P.A.shots!!", "Vol.4", "Action"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ Vol.5 Private", keywords: ["P.A.shots!!", "Vol.5", "Private"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ Vol.5 Action", keywords: ["P.A.shots!!", "Vol.5", "Action"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ Vol.6 Private", keywords: ["P.A.shots!!", "Vol.6", "Private"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ Vol.6 Action", keywords: ["P.A.shots!!", "Vol.6", "Action"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ 9周年", keywords: ["P.A.shots!!", "9周年"], type: "paper", category: "domestic" },
    { name: "ぱしゃっつ TRIPシリーズ", keywords: ['ALBUM SERIES "TRIP"', "P.A.shots!!"], type: "paper", category: "domestic" },
  ],

  "中国/海外限定グッズ": [
    { name: "招募チェキ", keywords: ["限定スカウトチェキ風カード", "限定招募ポラロイド", "新春商品シリーズ"], type: "paper", category: "overseas" },
    { name: "序曲写真カード", keywords: [], type: "paper", category: "overseas" },
    { name: "INS風カード", keywords: ["旅路カード"], type: "paper", category: "overseas" },
  ],

  "その他": [
    { name: "あんスタチップス カード", keywords: [], type: "paper", category: "domestic" }
  ]
};

// ===== 梱包方法生成 =====
function generatePackingMethod(goods) {
  const goodsOptions = document.getElementById("goods");
  let hasAcrylic = false;
  let hasPaper = false;

  goods.forEach(g => {
    const option = [...goodsOptions.options].find(o => o.value === g);
    if (option && option.dataset.type) {
      const type = option.dataset.type;
      if (type === "acrylic") hasAcrylic = true;
      if (type === "paper") hasPaper = true;
    }
  });

  let packing = "以下で梱包し、封筒にお入れして郵送します。\n";

  if (hasAcrylic && hasPaper) {
    packing += "【アクリルスタンド】\n　画像の状態→梱包材二重\n\n";
    packing += "【ステッカー・紙類】\n　画像の状態→両面厚紙補強\n\n";
    packing += "⇒ まとめてOPP袋";
  } else if (hasAcrylic) {
    packing += "　画像の状態→梱包材二重";
  } else if (hasPaper) {
    packing += "　画像の状態→両面厚紙補強→水濡れ防止";
  }

  return packing;
}

// ===== 初期化 =====
window.addEventListener("DOMContentLoaded", () => {
  const charSelect = document.getElementById("characters");
  const goodsSelect = document.getElementById("goods");

  // キャラ
  const unitMap = {};
  characters.forEach(c => {
    if (!unitMap[c.unit]) unitMap[c.unit] = [];
    unitMap[c.unit].push(c);
  });

  officialUnitOrder.forEach(fullUnitName => {
    // 絵文字を除いた純粋なユニット名を取得
    const unitName = fullUnitName.split(" ").slice(1).join(" ");
    
    if (!unitMap[unitName]) return;

    const group = document.createElement("optgroup");
    group.label = fullUnitName;

    const unitOption = document.createElement("option");
    unitOption.value = `UNIT:${unitName}`;
    unitOption.textContent = `【ユニット】${unitName}`;
    group.appendChild(unitOption);

    unitMap[unitName].forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.name;
      opt.textContent = c.name;
      group.appendChild(opt);
    });

    charSelect.appendChild(group);
  });

  // グッズ（通常）
  Object.keys(goodsCategories).forEach(category => {
    const group = document.createElement("optgroup");
    group.label = category;

    goodsCategories[category].forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.name;
      opt.textContent = item.name;
      opt.dataset.keywords = JSON.stringify(item.keywords);
      opt.dataset.type = item.type;
      opt.dataset.category = item.category;
      group.appendChild(opt);
    });

    goodsSelect.appendChild(group);
  });

  // ▼ コレ缶（特別扱い）
  const badgeGroup = document.createElement("optgroup");
  badgeGroup.label = "缶バッジ";

  const badgeOpt = document.createElement("option");
  badgeOpt.value = "コレ缶";
  badgeOpt.textContent = "コレ缶（年度・月・Side を選択）";
  badgeOpt.dataset.keywords = JSON.stringify(["コレクション缶バッジ"]);
  badgeGroup.appendChild(badgeOpt);

  goodsSelect.appendChild(badgeGroup);
});

// ===== コレ缶 UI の表示切替 =====
document.getElementById("goods").addEventListener("change", () => {
  const selected = [...document.getElementById("goods").selectedOptions].map(o => o.value);
  const hasBadge = selected.includes("コレ缶");
  document.getElementById("badge-options").classList.toggle("hidden", !hasBadge);
});

// ===== コレ缶の正式名称生成 =====
function buildBadgeNames() {
  const yearSelects = [...document.getElementById("badge-year").selectedOptions].map(o => o.value);
  const monthSelects = [...document.getElementById("badge-month").selectedOptions].map(o => o.value);
  const sideSelects = [...document.getElementById("badge-side").selectedOptions].map(o => o.value);

  const badgeNames = [];

  yearSelects.forEach(year => {
    monthSelects.forEach(month => {
      sideSelects.forEach(side => {
        if (year && month && side) {
          badgeNames.push(`コレ缶［${year} ${month}］-${side} Side-`);
        }
      });
    });
  });

  return badgeNames;
}

// ===== 商品名生成 =====
function generateTitle(chars, goods, count, mainGoodInput, units) {
  const template = document.getElementById("template-title").value;

  let nameText = "";
  if (chars.length > 0) {
    nameText = chars.join("・");
  } else if (units.length > 0) {
    nameText = units.join("・");
  } else {
    nameText = "キャラクター";
  }

  let mainGood = mainGoodInput.trim();
  if (!mainGood) mainGood = goods[0] || "";

  // ===== 枚数・セット数を自動整形 =====
  let countText = "";
  if (count.trim()) {
    const num = parseInt(count.trim());
    if (num > 1) {
      countText = `${num}点セット`;
    }
    // 1点の場合は空文字列
  }

  return template
    .replace("{NAME}", nameText)
    .replace("{GOOD}", mainGood)
    .replace("{COUNT}", countText);
}

// ===== 説明文生成 =====
function generateDescription(chars, units, goods, count) {
  const template = document.getElementById("template-description").value;

  let displayName = "";
  if (chars.length > 0) displayName = chars.join("・");
  else if (units.length > 0) displayName = units.join("・");
  else displayName = "キャラクター";

  const goodsList = [];
  const processedGoods = new Set();

  goods.forEach(g => {
    if (g === "コレ缶") {
      const badgeFullNames = buildBadgeNames();
      badgeFullNames.forEach(badgeName => {
        if (!processedGoods.has(badgeName)) {
          goodsList.push(badgeName);
          processedGoods.add(badgeName);
        }
      });
    } else {
      if (!processedGoods.has(g)) {
        goodsList.push(g);
        processedGoods.add(g);
      }
    }
  });

  const goodsText = goodsList.join("\n");

  // ===== 枚数・セット数を自動整形 =====
  let countText = "";
  if (count.trim()) {
    const num = parseInt(count.trim());
    if (num > 1) {
      countText = `${num}点セット`;
    }
    // 1点の場合は空文字列
  }

  const packing = generatePackingMethod(goods);

  // ===== 商品の状態を生成 =====
  const conditions = [];
  if (document.getElementById("initial-damage").checked) {
    conditions.push("※素人保管ですので、初期傷など気にされる場合は購入お控えください。");
  }
  if (document.getElementById("card-curve").checked) {
    conditions.push("※カードの性質により、少し反りが見られます。");
  }
  const conditionsText = conditions.join("\n");

  const unitKeywordsSet = new Set();
  const charSearchSet = new Set(chars);

  // キャラ検索ワード
  characters.forEach(c => {
    if (chars.includes(c.name)) {
      c.unitKeywords.forEach(u => unitKeywordsSet.add(u));
    }
  });

  // ユニット検索ワード
  units.forEach(unitName => {
    characters
      .filter(c => c.unit === unitName)
      .forEach(c => {
        charSearchSet.add(c.name);
        c.unitKeywords.forEach(u => unitKeywordsSet.add(u));
      });
  });

  // グッズ検索ワード + カテゴリ別ワード
  let hasOverseas = false;
  goods.forEach(g => {
    const option = [...document.getElementById("goods").options].find(o => o.value === g);
    if (option) {
      if (option.dataset.keywords) {
        JSON.parse(option.dataset.keywords).forEach(k => unitKeywordsSet.add(k));
      }
      if (option.dataset.category === "overseas") {
        hasOverseas = true;
      }
    }
  });

  // 中国/海外限定の場合、共通ワードを追加
  if (hasOverseas) {
    unitKeywordsSet.add("偶像夢幻祭");
    unitKeywordsSet.add("中国限定");
    unitKeywordsSet.add("海外限定");
  }

  // コレ缶検索ワード
  if (goods.includes("コレ缶")) {
    const badgeYearSelects = [...document.getElementById("badge-year").selectedOptions];
    const badgeMonthSelects = [...document.getElementById("badge-month").selectedOptions];
    const badgeSideSelects = [...document.getElementById("badge-side").selectedOptions];

    badgeYearSelects.forEach(opt => {
      if (opt.value) unitKeywordsSet.add(opt.value);
    });
    badgeMonthSelects.forEach(opt => {
      if (opt.value) unitKeywordsSet.add(opt.value);
    });
    badgeSideSelects.forEach(opt => {
      if (opt.value) unitKeywordsSet.add(opt.value);
    });

    unitKeywordsSet.add("コレクション缶バッジ");
  }

  const searchWords = [...unitKeywordsSet, ...charSearchSet].join("\n");

  return template
    .replace("{NAME}", displayName)
    .replace("{COUNT}", countText)
    .replace("{GOODS}", goodsText)
    .replace("{PACKING}", packing)
    .replace("{CONDITIONS}", conditionsText)
    .replace("{SEARCH}", searchWords);
}

// ===== メイン処理 =====
function generate() {
  const selected = [...document.getElementById("characters").selectedOptions].map(o => o.value);

  const chars = selected.filter(v => !v.startsWith("UNIT:"));
  const units = selected.filter(v => v.startsWith("UNIT:")).map(v => v.replace("UNIT:", ""));

  const goods = [...document.getElementById("goods").selectedOptions].map(o => o.value);
  const count = document.getElementById("count").value;
  const mainGood = document.getElementById("main-good").value;

  const title = generateTitle(chars, goods, count, mainGood, units);
  const desc = generateDescription(chars, units, goods, count);

  document.getElementById("result-title").textContent = title;
  document.getElementById("result-desc").textContent = desc;

  document.getElementById("copy-title").value = title;
  document.getElementById("copy-desc").value = desc;
}

// ===== コピー処理 =====
function copyTitle() {
  const textarea = document.getElementById("copy-title");
  textarea.select();
  document.execCommand("copy");
  textarea.blur();
  alert("商品名をコピーしました。");
}

function copyDesc() {
  const textarea = document.getElementById("copy-desc");
  textarea.select();
  document.execCommand("copy");
  textarea.blur();
  alert("商品説明をコピーしました。");
}