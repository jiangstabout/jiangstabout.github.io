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
    // 顯示結果
    $("#shareBtn").hide();
  var scenarios = [
    {
      description:
        "廟口現在有一群小孩子在玩123木頭人 ，在他們一群人散發的歡樂氣氛中， 你會___",
      options: [
        { value: "E", label: "跟他們一起玩， 123木頭人只要跑得快就贏了。" },
        { value: "I", label: "等他們揪再一起玩好了。" }
      ]
    },
    {
      description:
        "你在熱鬧的廟會街頭上悠閒逛街， 此時剛好遇到前方有陣頭在進香， 你會___",
      options: [
        { value: "I", label: "人好多…要過去嗎，但好像很酷。" },
        {value: "E",label: "哇，上去看看好了，好多表演哦。"}
      ]
    },
    {
      description:
        "走在路上，你看到文武小差充滿期待的雙眼閃閃發光看著你， 希望你給他們兩顆小熊軟糖， 你會___",
      options: [
        {
          value: "S",value: "F",
          label: "好可愛哦! 兩大包都送你們啦!。"
        },
        {
          value: "N",value: "T",
          label: "蛤…不要，我討厭小孩。"
        }
      ]
    },
    {
      description:
        "經過蜿蜒的村口小巷，此時，旁邊一台載滿山豬的貨車門沒關好，山豬全都跑光了，司機看起來很慌張，你會如何幫他？",
      options: [
        {
          value: "J",
          label: "幫他一隻隻抓回來，騎山豬太酷了。"
        },
        {
          value: "P",
          label: "關我屁事，趕快跑，等一下被山豬撞。"
        }
      ]
    },
    {
      description:
        "走著走著經過一個市集，看到一群人圍在一起討論這要如何逛這個市集， 你會___",
      options: [
        {
          value: "I",
          label: "偷偷走近聽一下有甚麼好吃的，有興趣再加入閒聊。"
        },
        {
          value: "E",
          label:
            "加入話題，分享剛剛買的好吃糖葫蘆。"
        }
      ]
    },
    {
        description:
          "在一場祭典表演中， 主持人魷魚大神伸手邀請你上台跳Locking （鎖舞）你會如何應對？",
        options: [
          {
            value: "N",value: "F",
            label: 
            "由於猶豫不知道要握哪隻魷魚手，所以拒絕了祂。"
          },
          {
            value: "S",value: "T",
            label:
              "毫不猶豫的就上台舞力全開，把魷魚大神電成魷魚乾。"
          }
        ]
      },
      {
        description:
          "逛得差不多了! 原路往回走時， 看到有八家將參拜廟宇， 看到其中有位老朋友向你招手， 你會___",
        options: [
          {
            value: "J",
            label: "上前敘敘舊，剛好可以看看傳統文化表演。"
          },
          {
            value: "P",
            label:
              "簡單揮揮手， 媽媽說不要接近8+9。"
          }
        ]
      },
      {
        description:
          "水溝旁偶然遇見智慧老鼠在推銷研發的一款「咖哩口味新款口香糖」，你願意當白老鼠試吃嗎？",
        options: [
          {
            value: "S",
            label: "最愛吃咖哩，現在還可以吹泡泡。"
          },
          {
            value: "N",
            label:
              "咖哩？口香糖？老鼠？嘔...我想想。"
          }
        ]
      },
      {
        description: 
          "路邊看到一群人在對八家將表演者惡言相向， 辱罵他們是8+9 ，你會怎麼做避免引起更大的爭端？",
        options: [
          {
            value: "N",value: "T",
            label:
             "先站得遠遠的打電話報警，並思考其他解決辦法，等待警方。"
          },
          {
            value: "S",value: "F",
            label:
              "上前拉開兩方，了解對方的想法並解開誤會。"
          }
        ]
      },
      {
        description:
          "夕陽西下，你在走回廟口的小路上，瞥見一位老奶奶獨自一人坐在榕樹下的長椅上，神情有些茫然，嘴裡碎碎念著:「麻油和醬油、豆腐乳...青蛙...菜瓜.....",
        options: [
          {
            value: "S",
            label: "直接朝老奶奶走去，關心一下看有需要幫忙嗎。"
          },
          {
            value: "N",
            label:
              "她是忘記回家還是不知道要買甚麼?...痾...要去幫她嗎?"
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
        alert("哩洗蝦咪郎啦!");
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
        alert("蝦拉!");
      }
    });
  
    $("#waitBtn").click(function () {
      if (isAnswered()) {
        saveAnswer();
        $("#wait").show();
        $("#test").hide();
      } else {
        alert("蝦拉！");
      }
    });
  
    $("#submitBtn").click(function () {
      if (isAnswered()) {
        $("#wait").hide();
        $("#result").show();
        saveAnswer();
        calculateResult();
      } else {
        alert("蝦拉！");
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
      alert("耶！");
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
        eCount = eCount+1;
      } else if (answer === "I") {
        iCount = iCount+1;
      }
    }
    result += eCount > iCount ? "E" : "I";
  
    // 計算 S 或 N
    var sCount = 0;
    var nCount = 0;
    for (var i = 0; i < scenarios.length; i++) {
      var answer = answers[i];
      if (answer === "S") {
        sCount = sCount+1;
      } else if (answer === "N") {
        nCount = nCount+1;
      }
    }
    result += sCount > nCount ? "S" : "N";
  
    // 計算 T 或 F
    var tCount = 0;
    var fCount = 0;
    for (var i = 0; i < scenarios.length; i++) {
      var answer = answers[i];
      if (answer === "T") {
        tCount = tCount+1;
      } else if (answer === "F") {
        fCount = fCount+1;
      }
    }
    result += tCount > fCount ? "T" : "F";
  
    // 計算 J 或 P
    var jCount = 0;
    var pCount = 0;
    for (var i = 0; i < scenarios.length; i++) {
      var answer = answers[i];
      if (answer === "J") {
        jCount = jCount+1;
      } else if (answer === "P") {
        pCount = pCount+1;
      }
    }
    result += jCount > pCount ? "J" : "P" 
  
    // 建立 MBTI 類型與動物名稱的對應表
    var animalNames = {
        ENTJ: "秋",
        ENTP: "范",
        ENFJ: "夏",
        ENFP: "夏",
        INTJ: "秋",
        INTP: "甘",
        INFJ: "謝",
        INFP: "謝",
        ESTJ: "文",
        ESTP: "冬",
        ESFJ: "春",
        ESFP: "柳",
        ISTJ: "文",
        ISTP: "武",
        ISFJ: "春",
        ISFP: "柳"
    };
  

    // 顯示結果
  $("#submitBtn").hide();
  $("#scenarioContainer").hide();
    // 顯示結果
    $("#shareBtn").show();
  var mbtiType = result;
  var animalName = animalNames[mbtiType];
 
  var imgSrc = "../專題/src/image/" + animalName + ".jpg";

  var answerHTML = "<p style=font-size:18px>保存圖片分享到IG限動並@jiangst_about_office，可以在專題展期間找我們領取小禮物喔!</p>";
  answerHTML += "<img src='" + imgSrc + "' width=300 height=550 style=marging-bottom:3%>";
  

  $("#content").html(answerHTML);

 
  




  
  }