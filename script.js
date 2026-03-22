// ===== キャラクター + ユニット情報 =====
const characters = [
  // ===== fine =====
  { name: "天祥院英智", unit: "fine", unitKeywords: ["fine", "フィーネ"] },
  { name: "日々樹渉", unit: "fine", unitKeywords: ["fine", "フィーネ"] },
  { name: "姫宮桃李", unit: "fine", unitKeywords: ["fine", "フィーネ"] },
  { name: "伏見弓弦", unit: "fine", unitKeywords: ["fine", "フィーネ"] },

  // ===== Trickstar =====
  { name: "氷鷹北斗", unit: "Trickstar", unitKeywords: ["Trickstar", "トリックスター"] },
  { name: "明星スバル", unit: "Trickstar", unitKeywords: ["Trickstar", "トリックスター"] },
  { name: "遊木真", unit: "Trickstar", unitKeywords: ["Trickstar", "トリックスター"] },
  { name: "衣更真緒", unit: "Trickstar", unitKeywords: ["Trickstar", "トリックスター"] },

  // ===== 流星隊 =====
  { name: "守沢千秋", unit: "流星隊", unitKeywords: ["流星隊", "りゅうせいたい"] },
  { name: "深海奏汰", unit: "流星隊", unitKeywords: ["流星隊", "りゅうせいたい"] },
  { name: "南雲鉄虎", unit: "流星隊", unitKeywords: ["流星隊", "りゅうせいたい"] },
  { name: "高峯翠", unit: "流星隊", unitKeywords: ["流星隊", "りゅうせいたい"] },
  { name: "仙石忍", unit: "流星隊", unitKeywords: ["流星隊", "りゅうせいたい"] },

  // ===== ALKALOID =====
  { name: "天城一彩", unit: "ALKALOID", unitKeywords: ["ALKALOID", "アルカロイド"] },
  { name: "白鳥藍良", unit: "ALKALOID", unitKeywords: ["ALKALOID", "アルカロイド"] },
  { name: "礼瀬マヨイ", unit: "ALKALOID", unitKeywords: ["ALKALOID", "アルカロイド"] },
  { name: "風早巽", unit: "ALKALOID", unitKeywords: ["ALKALOID", "アルカロイド"] },

  // ===== Eden =====
  { name: "乱凪砂", unit: "Eden", unitKeywords: ["Eden", "エデン"] },
  { name: "巴日和", unit: "Eden", unitKeywords: ["Eden", "エデン"] },
  { name: "七種茨", unit: "Eden", unitKeywords: ["Eden", "エデン"] },
  { name: "漣ジュン", unit: "Eden", unitKeywords: ["Eden", "エデン"] },

  // ===== Valkyrie =====
  { name: "斎宮宗", unit: "Valkyrie", unitKeywords: ["Valkyrie", "ヴァルキュリー"] },
  { name: "影片みか", unit: "Valkyrie", unitKeywords: ["Valkyrie", "ヴァルキュリー"] },

  // ===== 2wink =====
  { name: "葵ひなた", unit: "2wink", unitKeywords: ["2wink", "ツインク"] },
  { name: "葵ゆうた", unit: "2wink", unitKeywords: ["2wink", "ツインク"] },

  // ===== Crazy:B =====
  { name: "天城燐音", unit: "Crazy:B", unitKeywords: ["Crazy:B", "クレイジービー", "クレビ"] },
  { name: "HiMERU", unit: "Crazy:B", unitKeywords: ["Crazy:B", "クレイジービー", "クレビ"] },
  { name: "桜河こはく", unit: "Crazy:B", unitKeywords: ["Crazy:B", "クレイジービー", "クレビ"] },
  { name: "椎名ニキ", unit: "Crazy:B", unitKeywords: ["Crazy:B", "クレイジービー", "クレビ"] },

  // ===== UNDEAD =====
  { name: "朔間零", unit: "UNDEAD", unitKeywords: ["UNDEAD", "アンデッド"] },
  { name: "羽風薫", unit: "UNDEAD", unitKeywords: ["UNDEAD", "アンデッド"] },
  { name: "大神晃牙", unit: "UNDEAD", unitKeywords: ["UNDEAD", "アンデッド"] },
  { name: "乙狩アドニス", unit: "UNDEAD", unitKeywords: ["UNDEAD", "アンデッド"] },

  // ===== Ra*bits =====
  { name: "仁兎なずな", unit: "Ra*bits", unitKeywords: ["Ra*bits", "ラビッツ"] },
  { name: "天満光", unit: "Ra*bits", unitKeywords: ["Ra*bits", "ラビッツ"] },
  { name: "真白友也", unit: "Ra*bits", unitKeywords: ["Ra*bits", "ラビッツ"] },
  { name: "紫之創", unit: "Ra*bits", unitKeywords: ["Ra*bits", "ラビッツ"] },

  // ===== 紅月 =====
  { name: "蓮巳敬人", unit: "紅月", unitKeywords: ["紅月", "あかつき"] },
  { name: "鬼龍紅郎", unit: "紅月", unitKeywords: ["紅月", "あかつき"] },
  { name: "神崎颯馬", unit: "紅月", unitKeywords: ["紅月", "あかつき"] },

  // ===== MELLOW DEAR US（メロアス） =====
  { name: "小鹿ジュイス", unit: "MELLOW DEAR US", unitKeywords: ["MELLOW DEAR US", "メロアス"] },
  { name: "円果望見", unit: "MELLOW DEAR US", unitKeywords: ["MELLOW DEAR US", "メロアス"] },
  { name: "久遠舞珠", unit: "MELLOW DEAR US", unitKeywords: ["MELLOW DEAR US", "メロアス"] },
  { name: "甘楽チトセ", unit: "MELLOW DEAR US", unitKeywords: ["MELLOW DEAR US", "メロアス"] },

  // ===== Knights =====
  { name: "月永レオ", unit: "Knights", unitKeywords: ["Knights", "ナイツ"] },
  { name: "瀬名泉", unit: "Knights", unitKeywords: ["Knights", "ナイツ"] },
  { name: "朔間凛月", unit: "Knights", unitKeywords: ["Knights", "ナイツ"] },
  { name: "鳴上嵐", unit: "Knights", unitKeywords: ["Knights", "ナイツ"] },
  { name: "朱桜司", unit: "Knights", unitKeywords: ["Knights", "ナイツ"] },

  // ===== Switch =====
  { name: "逆先夏目", unit: "Switch", unitKeywords: ["Switch", "スウィッチ"] },
  { name: "青葉つむぎ", unit: "Switch", unitKeywords: ["Switch", "スウィッチ"] },
  { name: "春川宙", unit: "Switch", unitKeywords: ["Switch", "スウィッチ"] },

  // ===== MaM =====
  { name: "三毛縞斑", unit: "MaM", unitKeywords: ["MaM", "マム"] },

  // ===== Double Face =====
  { name: "三毛縞斑", unit: "Double Face", unitKeywords: ["Double Face", "ダブルフェイス"] },
  { name: "桜河こはく", unit: "Double Face", unitKeywords: ["Double Face", "ダブルフェイス"] },

  // ===== Special For Princess!（エスプリ） =====
  { name: "エス（冴霧 笑主）", unit: "Special For Princess", unitKeywords: ["Special For Princess", "エスプリ"] },
  { name: "カンナ（名都 神無）", unit: "Special For Princess", unitKeywords: ["Special For Princess", "エスプリ"] },
  { name: "ユメ（花群 冬芽）", unit: "Special For Princess", unitKeywords: ["Special For Princess", "エスプリ"] },
  { name: "ライカ（宝丈 萊香）", unit: "Special For Princess", unitKeywords: ["Special For Princess", "エスプリ"] },

  // ===== 教師 =====
  { name: "佐賀美陣", unit: "教師", unitKeywords: ["教師"] },
  { name: "椚章臣", unit: "教師", unitKeywords: ["教師"] },
];

// ===== グッズ一覧 =====
const goodsList = [
  "限定招募 ポラロイド（第一弾、開花前&開花後）",
  "序曲写真カード",
  "あんスタチップス",
  "TRIPシリーズ",
  "ぱしゃっつ",
  "新春商品シリーズ",
  "限定スカウトチェキ風カード",
  "招募チェキ",
  "招募ポラロイド",
];

// ===== 公式のユニット並び順（あなた指定の順番） =====
const officialUnitOrder = [
  // スタプロ
  "fine",
  "Trickstar",
  "流星隊",
  "ALKALOID",

  // コズプロ
  "Eden",
  "Valkyrie",
  "2wink",
  "Crazy:B",

  // リズリン
  "UNDEAD",
  "Ra*bits",
  "紅月",
  "MELLOW DEAR US",

  // ニューディメ
  "Knights",
  "Switch",
  "MaM",
  "Double Face",
  "Special For Princess",

  // 教師
  "教師"
];

// ===== 初期化：ユニットごとに optgroup を作成 =====
window.addEventListener("DOMContentLoaded", () => {
  const charSelect = document.getElementById("characters");
  const goodsSelect = document.getElementById("goods");

  const unitMap = {};
  characters.forEach(c => {
    if (!unitMap[c.unit]) unitMap[c.unit] = [];
    unitMap[c.unit].push(c);
  });

  officialUnitOrder.forEach(unitName => {
    if (!unitMap[unitName]) return;

    const group = document.createElement("optgroup");
    group.label = unitName;

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

  goodsList.forEach(g => {
    const opt = document.createElement("option");
    opt.value = g;
    opt.textContent = g;
    goodsSelect.appendChild(opt);
  });
});

// ===== 商品名生成 =====
function generateTitle(chars, goods, count, mainGoodInput) {
  const template = document.getElementById("template-title").value;

  const nameText = chars.length > 0 ? chars.join("・") : "キャラクター";
  let mainGood = mainGoodInput.trim();
  if (!mainGood) mainGood = goods[0] || "";

  return template
    .replace("{NAME}", nameText)
    .replace("{GOOD}", mainGood)
    .replace("{COUNT}", count || "");
}

// ===== 説明文生成 =====
function generateDescription(chars, units, goods, count) {
  const template = document.getElementById("template-description").value;

  let displayName = "";
  if (chars.length > 0) displayName = chars.join("・");
  else if (units.length > 0) displayName = units.join("・");
  else displayName = "キャラクター";

  const goodsText = goods.length ? goods.join("\n") : "";
  const countText = count || "セット";

  const unitKeywordsSet = new Set();
  const charSearchSet = new Set(chars);

  characters.forEach(c => {
    if (chars.includes(c.name)) {
      c.unitKeywords.forEach(u => unitKeywordsSet.add(u));
    }
  });

  units.forEach(unitName => {
    characters
      .filter(c => c.unit === unitName)
      .forEach(c => {
        charSearchSet.add(c.name);
        c.unitKeywords.forEach(u => unitKeywordsSet.add(u));
      });
  });

  const searchWords = [...unitKeywordsSet, ...charSearchSet].join("\n");

  return template
    .replace("{NAME}", displayName)
    .replace("{COUNT}", countText)
    .replace("{GOODS}", goodsText)
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

  const title = generateTitle(chars, goods, count, mainGood);
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
  alert("商品名をコピーしました。");
}

function copyDesc() {
  const textarea = document.getElementById("copy-desc");
  textarea.select();
  document.execCommand("copy");
  alert("商品説明をコピーしました。");
}
