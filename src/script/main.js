(function (d) {
    var config = {
      kitId: "aeo6pal",
      scriptTimeout: 3000,
      async: true
    },
      h = d.documentElement,
      t = setTimeout(function () {
        h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
      }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
      a = this.readyState;
      if (f || (a && a != "complete" && a != "loaded")) return;
      f = true;
      clearTimeout(t);
      try {
        Typekit.load(config);
      } catch (e) { }
    };
    s.parentNode.insertBefore(tk, s);
  })(document);
  
  var scenarios = [
    {
      description:
        "眼前一群人正在歡樂地玩著傳統的團體遊戲，笑聲和歡樂氣息彌漫在空氣中。",
      options: [
        { value: "E", label: "加入他們，與人一同享受遊戲的樂趣，和大家共同創造愉快的回憶。" },
        { value: "I", label: "對此感興趣，但你選擇保持觀望，欣賞他人的熱情，或者尋找其他吸引你的活動。" }
      ]
    },
    {
      description:
        "你來到一個開放空地，有人正在表演一場富有當地特色的舞蹈或音樂節目。人們圍繞著表演者，洋溢著對藝術的熱情。你會...",
      options: [
        { value: "E", label: "興致勃勃地加入觀賞，沉浸在表演的藝術氛圍中。" },
        {value: "I",label: "選擇靜靜觀望，對表演的意義和藝術性進行思考。"}
      ]
    },
    {
      description:
        "一個善心人正在籌款活動中捐款給需要幫助的人。你會選擇...",
      options: [
        {
          value: "S",value: "F",
          label: "立即參與，表達對他人的關懷和支持。"
        },
        {
          value: "N",value: "T",
          label: "考慮自己的財務狀況，思考如何更有效地幫助和支持。"
        }
      ]
    },
    {
      description:
        "廟會需要志願者協助籌辦活動。你會...",
      options: [
        {
          value: "J",
          label: "立即自願加入，願意幫助籌辦活動"
        },
        {
          value: "P",
          label: "考慮自己的時間和能力後再決定是否參與"
        }
      ]
    },
    {
      description:
        "你看到有人與一群陌生人交談，氣氛融洽。你會...",
      options: [
        {
          value: "E",
          label: "毫不猶豫地加入他們，願意分享和交流"
        },
        {
          value: "I",
          label:
            "保持觀望，並在自己感到舒適時才考慮加入"
        }
      ]
    },
    {
        description:
          "有人在廟會上遇到困難，需要幫助。你會...",
        options: [
          {
            value: "S",value: "F",
            label: "立即走上前幫助他們，並試圖解決問題"
          },
          {
            value: "N",value: "F",
            label:
              "重視情感和個人價值觀，先關心對方的感受"
          }
        ]
      },
      {
        description:
          "你遇到一位老友，他邀請你加入一個家將講座。你會...",
        options: [
          {
            value: "J",
            label: "立即接受，願意參與"
          },
          {
            value: "P",
            label:
              "考慮後再決定是否參與，思考自己的能力和興趣"
          }
        ]
      },
      {
        description:
          "你發現一個展示新文化的攤位。你會",
        options: [
          {
            value: "S",
            label: "馬上地前去看看，對新事物感到興奮"
          },
          {
            value: "N",
            label:
              "深入思考是否值得探索，考慮新事物的意義"
          }
        ]
      },
      {
        description:
          "你遇到一個有爭議的狀況，需要立即處理。你會...",
        options: [
          {
            value: "S",value: "T",
            label: "迅速做出決定並處理問題"
          },
          {
            value: "N",value: "T",
            label:
              "考慮不同的解決方式，思考長遠影響"
          }
        ]
      },
      {
        description:
          "夕陽西下，你走在廟會的小路上，一位老人獨自一人坐在路邊，神情有些茫然。你...",
        options: [
          {
            value: "S",
            label: "立即走上前，關心地詢問她需要什麼幫助，並試圖解決問題。"
          },
          {
            value: "N",
            label:
              "考慮如何最適切地幫助她，或者先思考一番再採取行動。"
          }
        ]
      },
  ];
  
  var currentScenarioIndex = 0;
  var answers = [];
  
  $(document).ready(function () {
    $("#test").hide();
    $("#wait").hide();
    $("#result").hide();
    $("#askName").hide();
    $("#goIntoForest").click(function () {
      $("#cover").hide();
      $("#askName").show();
    });
  
    $("#start").click(function () {
      var answerName = $("#name").val();
      if (answerName === "") {
        alert("叫甚麼名字啊！");
      } else {
        $("#askName").hide();
        $("#test").show();
        showTest();
      }
    });
  });
  
  function showTest() {
    renderScenario();
    hideBtn();
  
    $("#nextBtn").click(function () {
      if (isAnswered()) {
        saveAnswer();
        currentScenarioIndex++;
        renderScenario();
        hideBtn();
      } else {
        alert("請先回答問題！");
      }
    });
  
    $("#waitBtn").click(function () {
      if (isAnswered()) {
        saveAnswer();
        $("#wait").show();
        $("#test").hide();
      } else {
        alert("請先回答問題！");
      }
    });
  
    $("#submitBtn").click(function () {
      if (isAnswered()) {
        $("#wait").hide();
        $("#result").show();
        saveAnswer();
        calculateResult();
      } else {
        alert("請先回答問題！");
      }
    });
  }
  
  function hideBtn() {
    // 控制按鈕顯示
    if (currentScenarioIndex < scenarios.length - 1) {
      $("#nextBtn").show();
      $("#waitBtn").hide();
    } else {
      $("#nextBtn").hide();
      $("#waitBtn").show();
    }
  }
  
  function isAnswered() {
    var selectedOption = $('input[name="q' + currentScenarioIndex + '"]:checked');
    return selectedOption.length > 0;
  }
  
  function renderScenario() {
    if (currentScenarioIndex < scenarios.length) {
      var scenario = scenarios[currentScenarioIndex];
      var scenarioHTML = "";
      scenarioHTML += "<p>" + scenario.description + "</p>";
      scenarioHTML += "<form>";
  
      for (var i = 0; i < scenario.options.length; i++) {
        var option = scenario.options[i];
        scenarioHTML +=
          '<input type="radio" name="q' +
          currentScenarioIndex +
          '" id="' +
          option.value +
          '" value="' +
          option.value +
          '"> ' +
          '<label for="' +
          option.value +
          '">' +
          option.label +
          "</label>";
      }
  
      scenarioHTML += "</form>";
      $("#scenarioContainer").html(scenarioHTML);
    } else {
      alert("已完成所有情境！");
    }
  }
  
  function saveAnswer() {
    var selectedOption = $('input[name="q' + currentScenarioIndex + '"]:checked');
    if (selectedOption.length > 0) {
      answers[currentScenarioIndex] = selectedOption.val();
    }
    // console.log(answers);
  }
  
  function calculateResult() {
    var result = "";
  
    // 計算 E 或 I
    var eCount = 0;
    var iCount = 0;
    for (var i = 0; i < scenarios.length; i++) {
      var answer = answers[i];
      if (answer === "E") {
        eCount++;
      } else if (answer === "I") {
        iCount++;
      }
    }
    result += eCount > iCount ? "E" : "I";
  
    // 計算 S 或 N
    var sCount = 0;
    var nCount = 0;
    for (var i = 0; i < scenarios.length; i++) {
      var answer = answers[i];
      if (answer === "S") {
        sCount++;
      } else if (answer === "N") {
        nCount++;
      }
    }
    result += sCount > nCount ? "S" : "N";
  
    // 計算 T 或 F
    var tCount = 0;
    var fCount = 0;
    for (var i = 0; i < scenarios.length; i++) {
      var answer = answers[i];
      if (answer === "T") {
        tCount++;
      } else if (answer === "F") {
        fCount++;
      }
    }
    result += tCount > fCount ? "T" : "F";
  
    // 計算 J 或 P
    var jCount = 0;
    var pCount = 0;
    for (var i = 0; i < scenarios.length; i++) {
      var answer = answers[i];
      if (answer === "J") {
        jCount++;
      } else if (answer === "P") {
        pCount++;
      }
    }
    result += jCount > pCount ? "J" : "P";
  
    // 建立 MBTI 類型與動物名稱的對應表
    var animalNames = {
        ESP: "外向感知者",
        ISP: "內向感知者",
        ENP: "外向直覺者",
        INP: "內向直覺者",
        ESJ: "外向感覺型",
        ISJ: "內向感覺型",
        ETJ: "外向思考型",
        ITJ: "內向思考型",
        EFJ: "外向情感型",
        IFJ: "內向情感型",
    };
  
    // 建立動物名稱與描述的對應表
    var animalDescriptions = {
        外向感知者:
        "森林中的領導者，擅長用規範和經驗渲染他人，相當具有領導風範的類型。然而，他們的執著和硬派的管理風格有時會給身邊人帶來壓力。",
        內向感知者:
        "機智靈活的探索者，擅長思考問題的各種可能性，喜歡挑戰常規。像狐狸一樣狡猾聰明，但有時也會因為好奇心而迷失方向。",
        外向直覺者:
        "充滿魅力和社交能力的孔雀，在人群中引人注目，善於建立和諧和支持他人。然而，他們有時也會在過於關注他人的需求時忽略了自己。",
        內向直覺者:
        "自由奔放的蝴蝶，充滿熱情和創造力。他們喜歡追求夢想，帶給周圍人活力和喜悅，但有時也容易感到不安定和難以捉摸。",
        外向感覺型:
        "神秘而獨立的獨角獸，擅長分析和策劃，有著強大的洞察力和創新思維。他們在追求目標時常常非常堅定，但也因為內向而被認為神秘而難以理解。",
        內向感覺型:
        "智慧而冷靜的觀察者，像貓頭鷹一樣喜歡追求知識和理解。他們擁有優秀的邏輯思維和分析能力，但有時也傾向於過度分析和與現實脫節。",
        外向思考型:
        "敏銳而富有同理心的灰狼，善於理解他人的需求和情感。他們常常具有崇高的價值觀和使命感，但有時也會因為過於保護他人而忽略自己的需求。",
        內向思考型:
        "敏感而和善的水鹿，具有豐富的情感世界和強烈的內在價值觀。像水鹿一樣，他們追求和平與和諧，但有時也容易感到壓力和情緒波動。",
        外向情感型:
        "有著銳利洞察力和果斷決策能力的老鷹，擅長組織和管理。他們注重效率和結果，但有時也因為過於嚴格和不易妥協而與他人產生衝突。",
        內向情感型:
        "追求刺激和冒險的獵豹，善於適應環境並迅速做出反應。他們勇於冒險並享受現在，但有時也容易變得過於衝動和不顧後果。",
    };
  
    // 建立動物名稱與能力值的對應表
    var animalAbilities = {
      "外向感知者": [1,2,3,4,5],
      "內向感知者": [1,2,3,4,5],
      "外向直覺者": [1,2,3,4,5],
      "內向直覺者": [1,2,3,4,5],
      "外向感覺型": [1,2,3,4,5],
      "內向感覺型": [1,2,3,4,5],
      "外向思考型": [1,2,3,4,5],
      "內向思考型": [1,2,3,4,5],
      "外向情感型": [1,2,3,4,5],
      "內向情感型": [1,2,3,4,5],
    };
  
    // 建立動物的友好動物列表
    var animalFriends = {
      "外向感知者": "外向感覺型",
      "內向感知者": "內向感覺型",
      "外向直覺者": "外向情感型",
      "內向直覺者": "內向情感型",
      "外向感覺型": "外向情感型",
      "內向感覺型": "內向情感型",
      "外向思考型": "外向感知者",
      "內向思考型": "內向感知者",
      "外向情感型": "外向感覺型",
      "內向情感型": "內向感覺型",
    };
  
// 在按鈕點擊後觸發的事件處理函式
$("#shareBtn").on("click", function () {
    // 取得測驗結果
    var result = animalDescription; // 假設 animalDescription 已定義
    var answerName = $("#name").val(); // 取得名字，假設有一個 id 為 name 的輸入框

    // 建立新的 Canvas 元素
    var canvas = document.createElement("canvas");
    canvas.width = 720;
    canvas.height = 1280;
    var ctx = canvas.getContext("2d");

    // 建立背景圖片物件
    var backgroundImage = new Image();
    backgroundImage.src = "/src/image/canvas_background.jpg";

    // 背景圖片載入完成後繪製
    backgroundImage.onload = function () {
        // 繪製背景圖片
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // 設定標題文字樣式
        ctx.font = "bold 55px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(0,0,0,0.5)";

        // 繪製標題文字
        var titleText = answerName + "是...";
        ctx.fillText(titleText, canvas.width / 2, 130);

        // 設定測驗結果文字的樣式和位置
        ctx.font = "32px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(0,0,0,0.5)";

        // 設定測驗結果文字的最大寬度和行高
        var maxWidth = canvas.width - 40; // 距離邊界的空白距離
        var lineHeight = 42;

        // 定義測驗結果文字的起始位置
        var startX = canvas.width / 2;
        var startY = canvas.height - 260;

        // 將測驗結果文字進行換行處理
        var words = result.split("");
        var line = "";
        var lines = [];

        for (var i = 0; i < words.length; i++) {
            var testLine = line + words[i] + "";
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;

            if (testWidth > maxWidth && i > 0) {
                lines.push(line.trim());
                line = words[i] + "";
            } else {
                line = testLine;
            }
        }

        lines.push(line.trim());

        // 繪製測驗結果文字（換行處理後）
        for (var j = 0; j < lines.length; j++) {
            ctx.fillText(lines[j], startX, startY + j * lineHeight);
        }

        // 建立圖片 URL
        var image = canvas.toDataURL("image/png");

        // 開啟新視窗
        var newWindow = window.open("", "_blank");

        // 在新視窗中插入圖片元素
        newWindow.document.open();
        newWindow.document.write('<p style="text-align:center">長按圖片保存分享</p><img src="' + image + '" alt="測驗結果" style="height: 100%;text-align:center;margin: 0 auto;">');
        newWindow.document.close();
    };
});

  
  }