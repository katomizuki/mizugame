// -------------------------------------------ページ構成をオブジェクトで管理-------------------------------------------------------------
let keynumber;//keynumber変数
const constitution = {
  startPage:         document.getElementById("starPage"),//最初のページ
  accountCreateForm: document.getElementById("first-form"),//新規登録ページ
  firstPage:         document.getElementById("firstPage"),//継続フォームページ
  mainPage:          document.getElementById("mainpage"),//メインゲームのページ
  companyInfo:       document.getElementById("company-info"),//会社情報ページ
  mainWindow:        document.getElementById("mainWindow"),//すべてのページ
}

// ----------------------------------------------会社情報をクラスで管理-----------------------------------------------------------------------
class ComapanyAccount {
  constructor(companyName, age, days, money, skillLevel, investMoney) {//コンストラクタで構成要素の初期状態を設定
    this.companyName    = companyName;//会社名
    this.age            = age;//社歴
    this.days           = days;//過ぎた日にち
    this.money          = money;//持っているお金
    this.skillLevel     = skillLevel;//ビジネススキル
    this.investMoney    = investMoney;//稼いだお金
  }
  // <-------------創立して何年か出す関数-------------------->
  agehelper() {
    return this.age + Math.floor(this.days / 365);//一年だから365日で割る
  }
  // <-------------トータルの投資利益を出す関数-------------->
  investMoneyhelper(companyActions) {
    this.investMoney = totalprofithelper(companyActions);//すべての利益を出す関数を入れる。
  }
  // <-------------会社のステータスを初期化する関数---------->
  reset() {
    this.age            = 1;//創立一年目
    this.days           = 0;//0日からスタート
    this.money          = 10000000;//資本金1000万円
    this.employeeNumber = 0;//従業員数0名
    this.investMoney    = 0;//投資額0円
  }
}
// ----------------------------------------------会社行動をクラスで管理-----------------------------------------------------------------------
class CompanyAction { 
  // <----------------------コンストラクターで要素管理--------------->
  constructor (title, type, maxcount, price, img, profit, posession) {
    this.title     = title;//行動名
    this.type      = type;//行動タイプ
    this.maxcount  = maxcount;//行動できる限界数
    this.price     = price;//一回あたりの費用
    this.img       = img;//画像
    this.profit    = profit;//1秒あたり〇〇円稼いでいる
    this.posession = posession;//現在持っている数
  }
}


// <------------------------------最初の会社のステータスを出力する関数------------------------------------->
function startCompanyCreate() {//関数で条件分岐をしてしまう。
  let sales      = new CompanyAction("Sales", "ability", 100, 1500000, "img/undraw_phone_call_grmk.png", 0, 0);//営業
  let cto        = new CompanyAction("CTO", "Recruitment", 1, 5000000, "img/undraw_Powerful_re_frhr.png",500000,0);//CTO
  let engineer   = new CompanyAction("Softwear Engineer", "Recruitment", 50, 2000000, "img/undraw_Code_review_re_woeb.png",100000,0);//エンジニア
  let employee   = new CompanyAction("New employee", "Recruitment", 100, 1000000, "img/undraw_businessman_97x4.png", 50000, 0);//新従業員
  let coin       = new CompanyAction("Bit Coin", "Investment", Infinity, 30000, "img/undraw_Bitcoin_P2P_re_1xqa.png", 0, 0);//ビットコイン
  let fund       = new CompanyAction("Fund Rising", "Investment", 1, 100000, "img/undraw_Invest_re_8jl5.png", 0, 0);//資金調達
  let shibuya    = new CompanyAction("City Office in Shibuya", "Realestate", 1, 100000000, "img/undraw_in_the_office_o44c.png", 2000000, 0);//渋谷区オフィス
  let katsushika = new CompanyAction("City Office in Katsushika", "RealEstate", 1, 30000000, "img/undraw_back_in_the_day_knsh.png", 600000, 0);//葛飾区オフィス
  let mba        = new CompanyAction("MBA skill", "Skill", 1, 10000000, "img/undraw_startup_life_2du2.png", 500000, 0);//MBAスキル
  let cm         = new CompanyAction("Television CM", "Skill", 10, 50000000, "img/undraw_monitor_iqpq.png", 250000, 0);//テレビCM
  let ma         = new CompanyAction("M&A", "Investment", 5,10000000000, "img/undraw_urban_design_kpu8.png", 20000000, 0);//M&A
  let books      = new CompanyAction("Books", "Realestate", 100, 10000, "img/undraw_Books_l33t.png", 1000, 0);//ビジネス本
// <-------インスタンスを作成して配列にいれる------------->
  let companyActions = [sales, cto, engineer, employee, coin, fund, shibuya, katsushika, mba, cm, ma, books];
    return companyActions;
}
// <------------------------会社行動の情報インスタンスを作成して変数に入れる------------------------------------------>
//受け取った数字によって条件分岐をしてしまう
function selectIndustry(keynumber) {
  let sales      = new CompanyAction("Sales", "ability", 100, 1500000, "img/undraw_phone_call_grmk.png", 0,0);//営業
  let cto        = new CompanyAction("CTO", "Recruitment", 1, 5000000, "img/undraw_Powerful_re_frhr.png", 500000, 0);//CTO
  let engineer   = new CompanyAction("Softwear Engineer", "Recruitment", 50, 2000000, "img/undraw_Code_review_re_woeb.png", 100000, 0);//エンジニア
  let employee   = new CompanyAction("New employee", "Recruitment", 100, 1000000, "img/undraw_businessman_97x4.png", 50000, 0);//新従業員
  let coin       = new CompanyAction("Bit Coin", "Investment", Infinity, 30000, "img/undraw_Bitcoin_P2P_re_1xqa.png", 0, 0);//ビットコイン
  let fund       = new CompanyAction("Fund Rising", "Investment", 1, 100000, "img/undraw_Invest_re_8jl5.png", 0, 0);//資金調達
  let shibuya    = new CompanyAction("City Office in Shibuya", "Realestate", 1, 100000000, "img/undraw_in_the_office_o44c.png", 2000000, 0);//渋谷区オフィス
  let katsushika = new CompanyAction("City Office in Katsushika", "RealEstate", 1, 30000000, "img/undraw_back_in_the_day_knsh.png", 600000, 0);//葛飾区オフィス
  let mba        = new CompanyAction("MBA skill", "Skill", 1, 10000000, "img/undraw_startup_life_2du2.png", 500000, 0);//MBAスキル
  let cm         = new CompanyAction("Television CM", "Skill", 10, 50000000, "img/undraw_monitor_iqpq.png", 250000, 0);//テレビCM
  let ma         = new CompanyAction("M&A", "Investment", 5, 10000000000, "img/undraw_urban_design_kpu8.png", 20000000, 0);//M&A
  let books      = new CompanyAction("Books", "Realestate", 100, 10000, "img/undraw_Books_l33t.png", 1000, 0);//ビジネス本
  // <------------------配列に入れる------------>
  let companyActions = [sales, cto, engineer, employee, coin, fund, shibuya, katsushika, mba, cm, ma, books];//配列に作成する
  if(keynumber == 1) {//キーナンバーが１であればIT系のカードが出るようにする
    return companyActions;//配列をかえす
  } else if (keynumber == 2) {//2だったら
    cto.title      = "CMO"; 
    cto.img        = "img/undraw_modern_professional_yt9h.png";
    engineer.title = "Web Markter"; 
    engineer.img   = "img/undraw_Marketing_re_7f1g.png"; 
    cm.title       = "SNS Marketing"; 
    cm.img         = "img/undraw_Social_growth_re_tjy9.png";//名前と画像、タイトル、を適宜変える
   return companyActions;//配列をかえす
  } else {//それ以外だったら経営コンサルタント業界
   cto.title      = "CFO";
   cto.img        = "img/undraw_personal_finance_tqcd.png";
   engineer.title = "Bussiness Consultant"; 
   engineer.img   = "img/undraw_instat_analysis_ajld.png"; 
   cm.title       = "B to B Marketing"; 
   cm.img         = "img/undraw_contact_us_15o2.png";//画像とタイトルを変える
   return companyActions;//配列をかえす
  }
}

// -----------------ボタンにクリックイベントを付与する関数の実行------------>
homeEvent();
// ------------------------------------------------------------------

// --------------------------------------------------ボタン関連変数---------------------------------------------------------------
  let startbtn     = document.getElementById("startbtn");//ゲームをスタートするボタン変数
  let continuebtn  = document.getElementById("continuebtn");//つづきボタンから始める変数
  let submitbtn    = document.getElementById("submitbtn");//アカウント登録ボタン
  let formbtn      = document.getElementById("formbtn")//つづきに行くボタン
//-----------------------------------------------------------ページ、フォーム関連変数--------------------------------------------------------
  let startPage    = document.getElementById("startPage");//スタートページ
  let firstform    = document.getElementById("first-form");//新規登録フォーム
  let continueform = document.getElementById("continueform");//続けるフォーム
  let accountform  = document.getElementById("accountform");//アカウントフォーム
//----------------------------------------------------modal,save,reloadicoｎ変数一覧-----------------------------------------------------------
  let  restartIcon = document.getElementById("restart");//resartbtnIDをゲットする
  let  saveIcon    = document.getElementById("save");//saveIDをゲットする
  let  modalIcon   = document.getElementById("modal");//modalIdをゲットする
  let companyIcon  = document.getElementById("company-icon");//comapanyIConをゲットする
//------------------------------------------------------------------------ 関数一覧 ------------------------------------------------------------------------------

// <------------ページを非表示にする関数------------
  function displayNoneWindow(element) {//要素を入れて
    element.classList.remove("d-block");//ブロッククラスを外す
    element.classList.add("d-none");//d-noneクラスをつける
  }

  // <------------ページを表示にする関数------------
function displayBlock(element) {//要素を入れて
  element.classList.remove("d-none");//d-noneクラスを取る
  element.classList.add("d-block");//ブロッククラスをつける
}

  // <------------数字にカンマをつける関数------------
function plusComma(number) {//数字を引数に入れてコンマをつける
  return Number(number).toLocaleString();//toLocaleString()でカンマを付ける
}

 // <------------新規アカウント作成画面を表示する関数------------
function accountCreatePage() {//
  startPage.innerHTML = "";//最初のページを初期化する
  displayNoneWindow(startPage);//非表示の処理
  displayBlock(firstform);//表示の処理
}

 // <------------続けるページを表示する関数-----------------------
function continuePage() {
  document.getElementById("startPage").innerHTML = "";//最初のページを初期化する
  displayNoneWindow(document.getElementById("startPage"));//非表示の処理
  displayBlock(document.getElementById("continue-form"));//表示の処理
}


 // <------------新規登録した場合、初期ステータスのアカウントを作成する関数-----------------------
function startCompanyAccount(keynumber) {//keynumberを引数にいれて条件分岐できるようにしとく
  const accountform  = document.getElementById("accountform");//acctoutformIDをゲット
  let companyActions = selectIndustry(keynumber);//引数にキーナンバーを入れる（産業ごとに配列がかえる）
  let userAccount    = new ComapanyAccount (//カンパニーアカウントオブジェクトを作成してしまう
    accountform.querySelectorAll(`input[name="companyName"]`).item(0).value,//formに入力されたcompanyNameで新しくcompanyaccountを作成
    1,//社歴１年
    0,//過ぎた日にち０日
    10000000,//最初の資本金は１０００千万人
    0,//level０
    0,//稼いだお金０
  );
  showMainPage(userAccount, companyActions,keynumber);//メインベージの表示（ゲームスタート！！）（引数をaccount,アイテム配列を入れる）
  methodsPerSec(userAccount, companyActions );//時間刻み始め、所持金の更新を行っていく！
}


 // <------------MainPageを表示する関数-----------------------
function showMainPage(userAccount, companyActions,keynumber) {//keynumberで表示する内容を変える。
 constitution.mainWindow.innerHTML = "";//Mainwindowを初期化する
 constitution.mainWindow.append(displaymainPage(userAccount, companyActions,keynumber));//空っぽのmainwindowにメインページを入れる（displaymainPage()関数の出力結果を入れる）
  document.getElementById("company").addEventListener("click", () => {//companyIcon をクリックすると関数が処理される（ワンクリックされるごとに30円）
    companyWork(userAccount, companyActions);//関数を実行（レベルと金額をプラスする関数）
 });
// -------------------------------------------------------
  plusEvent(userAccount, companyActions,keynumber);//クリックイベントを付与する関数を実行
// ------------------------------------------------------
  let restartIcon = document.getElementById("restart");//restatICOnをゲット
  let saveIcon    = document.getElementById("save");//saveIconIdをゲット
  let homebtn3    = document.getElementById("homebtn3");//homebtn3IDをゲット


saveIcon.addEventListener("click", () => {//saveIconをクリックしたら
   save(userAccount, companyActions);//保存処理をしていく。（下記も同様）
   displayHome();//displayHome()関数を実施
   homeEvent();//homeEvent()メインページ内のクリックイベントを付与する
 });

 restartIcon.addEventListener("click", () => {//restartIconをクリックしたら
    restart(userAccount, companyActions,keynumber);//すべてのステータスを初期化する処理
 });

 homebtn3.addEventListener("click", () => {//homebtn3をクリックしたら
    window.location.reload();//reload()して初期状態に戻す
 });


}
 


 // <------------１秒につき行っていく関数をまとめてする関数-----------------------
function methodsPerSec(userAccount, companyActions) {//引数（アカウント、配列）
 const timeoutId = setInterval( () => {//timeoutIdを定数にいれてクリア止めれるようにする
   try {//例外処理
     userAccount.money += parseInt(totalprofithelper(companyActions));//アカウント金をプラスする（トータル資産を計算する関数）
     companyMoneyUpdate(userAccount.money);//Userのお金を更新していく関数を実行
     if (userAccount.money >= 15000000000) {//150億に到達した場合、アラートを出してサイトを変える
       alert("Congratulations on listing!!");//alertを出す
       goIPO();//goIPO関数を実施
     }
     userAccount.days += 1;//日程を１秒ずつ更新していく
     companyDaysUpdate(userAccount.days);//Userの日にちを更新していく
     companyAgeUpdate(userAccount.agehelper());//Userの社歴を更新していく関数
   } catch (e) {//だめだったら下記の関数を止める
     clearInterval(timeoutId);//エラーが発生したら時間を引数にタイムアウトIDをいれて時間を止める
   }
 },1000);//1秒ごとに実行
}

// <--------------------イベントを付与する関数-------------------------------------------
function plusEvent(userAccount, companyActions,keynumber) {//eventを付与する
  for (let i = 0; i < companyActions.length; i++) {//配列の数だけ繰り返し処理
    document.getElementById(companyActions[i].title).addEventListener("click", () => {//配列の要素のタイトル文だけクリックしたら
      cardDetailWindow(userAccount, companyActions, i,keynumber);//cardDetailWindow関数を実施（アカウント、配列、index、産業ナンバー）
    });
  }
}

// ---------------------------------------------------------------------------------------------
function actionCreater(companyActions) {//会社のアクションを作成する関数
  let cardCon = document.createElement("div");//全体アクションdivを作成
  cardCon.classList.add("actionBox", "bg-secondary", "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "col-12", "m-1", "p-1", "text-center", "overflow-auto", "d-block");//クラスの付与
  cardCon.setAttribute("id", "card-Con");//id属性にcard-conを付与する
  
  for (let i = 0; i < companyActions.length; i++) {//配列の数だけ繰り返し処理
    cardCon.innerHTML += 
    `<div id = "${companyActions[i].title}" class = "action col-12 bg-info p-1 my-1">
      <div class = "row no-gutters">
    <div class = "col-2 d-flex align-items-center">
        <img src = ${companyActions[i].img} style = "width: 100%">
    </div>
    <div class = "col-8">
      <div class  = "action-body text-left d-flex flex-wrap col-12 font-weight">
        <h4 class = "card-title col-12">${companyActions[i].title}</h4>
        <p class  = "card-text col-6">¥ ${plusComma(pricehelper(companyActions[i]))}</h4>
        <p class  = "card-text col-6">${profithelper(companyActions[i])}</p>
      </div>
    </div>
    <div class = "col-2 d-flex align-items-center justify-content-center">
       <h4 class = "my-1">${companyActions[i].posession} / ${companyActions[i].maxcount}</h4>
                </div>
            </div>
        </div>
    `;//actiondivを作成する（for文で回しているため、配列の数文作成できる）row no-gutters →隙間をなくす
  }
  return cardCon;//actiondivを出す
}

// <-----------------------どれくらい一秒で稼いでいるかを計算し文字として出力する関数------------------------------------------------------
function profithelper(companyaction) {//引数に一つひとつの要素を入れていく
  if(companyaction.title == "Bit Coin") return "¥" + plusComma(Math.floor(pricehelper(companyaction) * 0.001)) + "/Second";//Bitcoinだった場合、pricehelper()を入れる。pricehelper()＜ビットコインの購入金額　＊　０．００１で出す＞
  else if (companyaction.title == "Fund Rising") return "Challenge to raise funds";//FundRisingだった場合VC処理へ
  else return "¥" + plusComma(companyaction.profit) + "/Second";//ビットコインでなければ通常のprofitをかえす
}

// ----------------------------どれくらいの費用になるかだしてくれる関数-----------------------------------------------------
function pricehelper(companyaction) {//どれくらいの金額になるか一つひとつ
  if(companyaction.title == "Bit Coin") {//タイトルがビットコインだったら
    if (companyaction.posession == 0) return companyaction.price;//初めてビットコインを買う場合はそのままの値段
    return Math.floor(companyaction.price * (companyaction.posession ** 1.1));//1.1倍でどんどん累乗していく
  } else {
    return companyaction.price;//ビットコインでなければ通常の値段をリターン
  }
}

// <---------------------------------------保有数×１秒で稼いでいる金額で合計金額出力する関数--------------------------------------------------------------------->
function totalprofithelper(companyActions) {//companyActions(配列に入れる）)
  let sum = 0; //合計金額を初期設定する

  for(let i = 0; i < companyActions.length; i++) {//配列の数だけ繰り返し処理
    if (companyActions[i].title == "Bit Coin") {//ビットコインだった場合は、
      let totalBuy     = 0;//買う総量を初期化する
      let initialPrice = companyActions[i].price;//ビットコインの値段を変数に入れる
      for (let j = 0; j < companyActions[i].posession; j++) {//ビットコインの保有数だけ繰り返し処理
        let currPrice = initialPrice * (1.1 ** j);//ビットコインの値段＊（ビットコインの保有数＊＊１．１）→ビットコインの費用
        totalBuy += currPrice;//ビットコインの総費用額を出す
      }
      sum += totalBuy * 0.001;//totalbuy*0.0001で伸び率を足していく
    } 
      sum += parseInt(companyActions[i].profit * companyActions[i].posession);//ビットコインでなければ一秒ごとの利益×保有数をsumにだす
  }
  return Math.floor(sum);//Mathfloorをusmでリターンする
}


// <-----------------------------------------------MainPageを表示する関数----------------------------------------------------------->
function displaymainPage(userAccount, companyActions,keynumber) {//引数（ユーザーアカウント、配列、キーナンバー）
  // ------------------------------------------------------MainPage内のdivを作成--------------------------------------------
    let totalDiv  = document.createElement("div");//最後に入れるdivを作成
    let leftDiv   = document.createElement("div");//左側DIV
    let rightDiv  = document.createElement("div");//右側DIV
    let personDiv = document.createElement("div");//person詳細DIVを作成
    let btnDiv    = document.createElement("div");//btnDIV作成
    let userDiv   = document.createElement("div");//userDiv
    let cardDiv   = actionCreater(companyActions);//actioncardDivを作成
    
    // ------------------------------------------------------クラスをDIVに付与する-------------------------------------------------------------------
    totalDiv.classList.add("gameWindow","bg-secondary","d-flex","justify-content-center","align-items-center","col-11","d-none")//すべてのdivを作ってクラスを作成する
    leftDiv.classList.add("leftBox","bg-dark","d-flex","flex-wrap","col-5","m-1","justify-content-center");//leftDivを作ってクラスを作成する
    rightDiv.classList.add("rightBox", "bg-dark", "d-flex", "flex-wrap", "col-7", "m-1","justify-content-center","align-items-center");//右側を作成してクラスをつける
    personDiv.classList.add("PersonBox","bg-info","col-12","d-flex","justify-content-center","flex-column","text-center","m-3",);//パーソンボックスをつくってクラスをつける
    btnDiv.classList.add("buttonBox","bg-transparent","d-flex","flex-wrap","justify-content-end","align-items-center","col-12","m-1","p-1");//ボタンボックスを作成してクラスをつける
    userDiv.classList.add("infoBox","bg-secondary","d-flex","flex-wrap","justify-content-between","align-items-center","col-12","m-3","p-1","text-center");//情報ボックスを作成してクラスをつける

    // ----------------------------------------------------------それぞれHTMLを作成---------------------------------------------------------------------
    if (keynumber == 1) {//keynumberが１だった場合
      personDiv.innerHTML = `
        <h4 id = "" class = "font-weight">IT Industry Company</h4>
        <h4 id = "person-level" class = "font-weight">${userAccount.skillLevel} Level</h4>
        <h5 class = "font-weight"> ¥ ${(companyActions[0].posession + 1) * 30} Per Click </h5>
        <h5 class = "font-weight> ¥ ${plusComma(totalprofithelper(companyActions))} Per Second </h5>
      `;//主人公要素を設定（IT会社）
      leftDiv.innerHTML   += `
              <img id="company" class="personIcon m-5 circle" src="img/undraw_male_avatar_323b.png" style = "width:300px;height:300px;">`
              ;//画像を変える
    } else if (keynumber == 2) {//keynumber が２だった場合
      personDiv.innerHTML = `
        <h4 id = "" class = "font-weight">D to C Industry Company</h4>
        <h4 id = "person-level" class = "font-weight">${userAccount.skillLevel} Level</h4>
        <h5 class = "font-weight"> ¥ ${(companyActions[0].posession + 1) * 30} Per Click </h5>
        <h5 class = "font-weight> ¥ ${plusComma(totalprofithelper(companyActions))} Per Second </h5>
      `;//DtoCに表記を変えて
      leftDiv.innerHTML += `
              <img id="company" class="personIcon m-5 circle" src="img/undraw_female_avatar_w3jk.png" style = "width:300px;height:300px;">`
        ;//画像を変える
    } else {
      personDiv.innerHTML = `
        <h4 id = "" class = "font-weight">Consultant Industry Company</h4>
        <h4 id = "person-level" class = "font-weight">${userAccount.skillLevel} Level</h4>
        <h5 class = "font-weight"> ¥ ${(companyActions[0].posession + 1) * 30} Per Click </h5>
        <h5 class = "font-weight> ¥ ${plusComma(totalprofithelper(companyActions))} Per Second </h5>
      `;//コンサルに表記を変えて
      leftDiv.innerHTML += `
              <img id="company" class="personIcon m-5 circle" src="img/undraw_people_tax5.png" style = "width:300px;height:300px;">`
        ;//画像を変えて
    }
    userDiv.innerHTML   = `
       <p id = "userName" class   = "informationBox bg m-1 d-flex align-items-center justify-content-center font-weight">Company name: ${userAccount.companyName}</p>
       <p id = "age-info" class   = "informationBox bg m-1 d-flex align-items-center justify-content-center font-weight">${userAccount.agehelper() + "year old"}</p>
       <p id = "days-info" class  = "informationBox bg m-1 d-flex align-items-center justify-content-center font-weight">${plusComma(userAccount.days)}</p>
       <p id = "money-info" class = "informationBox bg m-1 d-flex align-items-center justify-content-center font-weight">Company money: ¥ ${plusComma(userAccount.money)}</p>
    `;//会社情報をname 社歴 何日立っているか 稼いだお金を表示
    btnDiv.innerHTML = `
    <button id = "homebtn3" type="submit" class="btn btn-primary col-3 text-dark font-weight m-2">To StartPage</button>
    <i id = "restart" class = "fas fa-redo-alt fa-2x m-3 border p-2 action" style = "color:mediumorchid;"></i>
    <i id = "save"    class = "fas fa-save fa-2x m-3 border p-2 action" style = "color:mediumorchid;"></i>
    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
     <i id = "save"    class = "fas fa-info-circle fa-2x  border p-2 action" style = "color:mediumorchid;"></i>
    </button>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-primary text-align-center">
        <h5 class="modal-title font-weight" id="staticBackdropLabel">Rule explanation</h5>
      </div>
      <div class="modal-body font-weight">
        This is a Click Game!!<br>
        One click →+1skillLevel and +¥30!!<br>
        There are many company's actions and investments.<br>
        You can select and earn much money!!<br>
        If your comapany get ¥15000000000,<br>
        your company can go public on the stock exchange.!!<br>
        Aimging for an IPO!!!!!!
      </div>
      <div class="modal-footer bg-primary">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `;
    // -----------------------------------------------div要素を入れていく-------------------------------------------------------------------------
    leftDiv.append(personDiv);//左側に主人公要素を入れて
    rightDiv.append(cardDiv,userDiv,btnDiv);//カードdivを作成する、会社情報をいれる btnを入れる
    totalDiv.append(leftDiv,rightDiv);//左側、右側を入れる。

    return totalDiv;//すべてのdivを出力する
}


// ----------------------------------------------------------------------カード詳細を作成する関数-------------------------------------------------
function cardMake(companyaction) {//アクションカードを作成する（引数に要素を一つずつ入れる）
  let actionDetailDiv = document.createElement("div");//actionDivを作成する
  actionDetailDiv.classList.add("bg-info","d-flex","flex-wrap","justify-content-between","align-items-center","col-12","text-center");//クラスを付与する
  actionDetailDiv.innerHTML = `
    <div class = "action bg-dark text-white p-2 my-1">
      <div class = "row no-gutters">
        <div class = "col-8">
          <div class = "action-body text-left">
            <h3 class = "action-title font-weight">${companyaction.title}</h3>
            <h5 class = "action-text font-weight">Max Count: ${companyaction.maxcount}</h5>
            <h5 class = "action-text font-weight">Price: ${plusComma(pricehelper(companyaction))}</h5>
            <h5 class =  "action-text font-weight">Get: ${profithelper(companyaction)}</h5>
            <h5 class =  "action-text font-weight">Your invest count: ${companyaction.posession}</h5>
          </div>
        </div>
      <div class = "col-4 d-flex justify-content-center align-items-center">
        <img style = "width: 100%" src = "${companyaction.img}">
      </div>
    </div>
    <form id = "buyForm" class = "m-2">
      <div>
        <label class = "font-weight">How many would you like to invest?</label>
        <input id = "buyNumber" type = "number" class = "form-control text-right" value = "0" min = "0" max = "${companyaction.maxcount}" step = "1">
      </div>
    </form>
    <h5 id = "totalPrice" class = "text-right font-weight">Total :¥ ${plusComma(buyPrice(pricehelper(companyaction), 0))}</h5>
    <div class = "d-flex justify-content-between m-4">
      <button id = "backbtn" class = "btn  text-center bg-white text-primary font-weight" style = "width: 49%">Go Back!</button>
      <button id = "buybtn"  class = "btn  text-center bg-info  text-white font-weight"   style = "width: 49%">Invest!</button>
    </div>
    </div>
  `;
  return actionDetailDiv;//actionの詳細Divを出す
}

// ------------------総額を出す関数---------------------------------------------------------------------------------------------------------
function buyPrice(price, amount) {//総額を出す
  return price * amount;//価格×量
}

// ---------------------------投資詳細画面をつくる関数-----------------------------------------------------------------------------------
function cardDetailWindow(userAccount, companyActions, number,keynumber) {//引数（アカウント、配列、数字、キーナンバー）
    let cardCon = document.getElementById("card-Con");//card-ConIDをゲットする
        cardCon.innerHTML = "";//初期化する
  cardCon.append(cardMake(companyActions[number]));//indexを
  //  -------------btnやフォーム、投資数を変数に入れる---------------------------
  let buyForm   = document.getElementById("buyForm");//formIDをゲット
  let buyNumber = document.getElementById("buyNumber");//buynumberIDをゲットする
  let backbtn   = document.getElementById("backbtn");//backbtnIDをゲットする
  let buybtn    = document.getElementById("buybtn");//buybtnIDをゲットする
// -----------------------クリックイベントの付与--------------------------------------
// --------buyform-------
buyForm.addEventListener("click", () => {//クリックしたら
    let totalPrice = document.getElementById("totalPrice");//合計金額idをゲット
    totalPrice.innerHTML = `
    Total : ¥${plusComma(buyPrice(pricehelper(companyActions[number]), buyNumber.value))}
    `;//コンマを外す、費用を出しす（フォームで個数を引数に入れてかけることで総合計費用を出す。
});
//  ---------backform-----------
backbtn.addEventListener("click", () => { //戻るページの作成、keynumber引数に入れてしっかり戻す
    showMainPage(userAccount,companyActions,keynumber)//メインページを表示する
});
    // ------buybtn--------
buybtn.addEventListener("click", () => {//buybtnがクリックされたら
      itemBuy(userAccount, companyActions, number, buyNumber.value);//引数に買った個数を入れて買い物を買う関数を実行する
    });
}

// ----------------------------------------------買った時の処理を実行する関数-------------------------------------------------------------------------------------------------------------
function itemBuy(userAccount, companyActions, number, amount) {//userAccount,comapanyActions,number,amountを引数に入れて買ったときの処理を実行する。
    let purchasePrice = buyPrice(pricehelper(companyActions[number]), amount);//購入金額変数に入れる 配列[index] 、買う数を引数に入れて総額費用を出す。
  if (amount < 1) { alert("Please enter a number more than 1"); return;}//数がゼロだったらalert
  if (userAccount.money < purchasePrice) { alert("Not enough money"); return;}//購入数が自らのお金より多かったらalert
  if (parseInt(companyActions[number].posession) + parseInt(amount) > parseInt(companyActions[number].maxcount)) { alert("Exceeding the limit"); return;}//所有数が現回数を超えたらalert()
  if (companyActions[number].title == "Fund Rising") {//資金調達だった場合
    meetVC(userAccount);//meetVC関数を実行。
    companyActions[number].posession += parseInt(amount);//購入数を足す
    userAccount.money = parseInt(userAccount.money) - parseInt(purchasePrice);//自分の金額から購入金額を引く
    displaymainPage(userAccount, companyActions)//元の画像に戻す。
    return;
  }
  alert(amount + " invest!!" + "(" + companyActions[number].title + ")")//investしたらalert()を出す
    companyActions[number].posession += parseInt(amount);//所有数を増やす
    userAccount.money = parseInt(userAccount.money) - parseInt(purchasePrice);//お金から購入金額を引く、
    userAccount.investMoneyhelper(companyActions);//稼いだお金を出す
    displaymainPage(userAccount, companyActions)//ページを戻す。
}

// ------------------------------------------------------クリックしたらお金を足す関数------------------------------------------------------------------------------------------------
function companyWork(userAccount, companyActions) {//引数（useraccount,comapanyactions）
  userAccount.skillLevel += parseInt(companyActions[0].posession + 1);//スキルレベルを足す
  userAccount.money      += parseInt(30 * (companyActions[0].posession + 1));//お金を足す（３０円）
  personNumberUpdate(userAccount.skillLevel);//スキルレベルを入れて更新する
  companyMoneyUpdate(userAccount.money);//お金をアップデートする
}

// ------------------------------------------------- skillのレベルを上げる----------------------------------------------------------------------------------------------------
function personNumberUpdate(skilllevel) {//
  let personLevel = document.getElementById("person-level");//personLevelIDを変数に入れる
    personLevel.innerHTML = skilllevel + "Level";//HTMLを更新していく
}

// --------------------------会社のお金を更新していく関数--------------------------------
function companyMoneyUpdate(money) {
  let moneyInfo = document.getElementById("money-info");//moneyInfoIDをげっとする
    moneyInfo.innerHTML = "Company money: ¥" + plusComma(money);//ｈｔｍｌを更新していく
}

// ---------------------------------会社の社歴をアップデートする関数-----------------------------
function companyAgeUpdate(age) {
  let ageInfo = document.getElementById("age-info");//age-INfoIDを更新していく
  if(age == 1) {//年齢が１歳だったら
    ageInfo.innerHTML = age + "year old";//年齢を出す
  } else {
    ageInfo.innerHTML = age + "years old";//・・それいがいでも出す
  }
}
// ------------------------------ 日にちを更新していく関数-------------------------------------
function companyDaysUpdate(days) {//日にちを更新していく
  let daysInfo = document.getElementById("days-info");//daysinfoIDをゲットする
  daysInfo.innerHTML = "day" + days;//daysを出す
}

// ------------------保存する処理----------------------
function save(userAccount, companyActions) {//saveデータを保存する
  let data = [];///からの配列を設定
  data.push(userAccount, companyActions); //dataをプッシュして格納
  let setJson = JSON.stringify(data);//jsonデータを変数に入れる
  localStorage.setItem(userAccount.companyName, setJson);//comapanyNameをキーとしてデータをローカルストレージに入れる
  alert("Save Data!!");//alert()でお知らせしてくれる
}

// --------------------再スタート処理------------------
function restart(userAccount, companyActions,keynumber) {//keynumberを更新していく
  userAccount.reset();//userAccounｔのステータスを初期化する
  companyActions = startCompanyCreate();//
  displaymainPage(userAccount, companyActions,keynumber);//keynumberを更新していく
  alert("Reset your status!!");//alert()を出す
}



// ------------------------continueしたらloadしてつける--------------
function load(keynumber) {//keynumberを引数似入れる
  let continueform = document.getElementById("continueform");//コンテニューidをゲットする
  let loadName     = continueform.querySelectorAll(`input[name="continue"]`).item(0).value;//コンテニューネイムのインプット(name属性)をitem(0).valueで要素を取り出す。
  let loadJson     = localStorage.getItem(loadName);//会社名でローカルストレージ内を検索し、データを変数に入れる
  if (loadJson == null) {//中身がない場合はalert()で警告する
    alert("Account is not registered");
  }
  let obj          = JSON.parse(loadJson);//データ（オブジェクトを受け取る）obj[0]→カンパニー情報、 obj[1] →会社行動の配列
  let userAccount = new ComapanyAccount(obj[0].companyName, obj[0].age, obj[0].days, obj[0].money, obj[0].skillLevel, obj[0].investMoney);//userAccount カンパニーアカウントに達成する
  obj[1][4].maxcount = Infinity;//Infinityに限界数を設定しとく
  
  
  showMainPage(userAccount, obj[1],keynumber);//ショーメインページ関数で産業毎にページを変更して実施する。
  methodsPerSec(userAccount, obj[1]);//１秒ごとに行う関数を処理実行する
}

// ---------------------------------homePageを作成する------------------------------------------------------------------------------------
function displayHome() {//
  constitution.mainPage.innerHTML = "";//
  constitution.innerHTML = `
   <div id="mainWindow" class="vh-100  bg-secondary d-flex flex-wrap justify-content-center align-items-center">


    <!-- スタート画面  id → startPage -->
    <div class="d-flex align-items-center justify-content-center">
      <div id="startPage"
      class="startPage text-center d-flex flex-wrap justify-content-center align-items-center d-block">
      <!-- ------------------------アイコン集--------------------------------------------------------------- -->
      <div>
        <i class="fab fa-android fa-3x"></i>
        <i class="fab fa-apple fa-3x"></i>
        <i class="fab fa-amazon fa-3x"></i>
        <i class="fab fa-airbnb fa-3x"></i>
        <i class="fab fa-facebook fa-3x"></i>
        <i class="fab fa-discord fa-3x"></i>
        <i class="fab fa-google fa-3x"></i>
        <i class="fab fa-twitter fa-3x"></i>
        <i class="fab fa-intagram fa-3x"></i>
        <i class="fab fa-alipay fa-3x"></i>
        <i class="fab fa-docker fa-3x"></i>
        <i class="fab fa-evernote fa-3x"></i>
        <i class="fab fa-github fa-3x"></i>
        <i class="fab fa-snapchat fa-3x"></i>
       <i class="fab fa-tiktok fa-3x"></i>
      </div>
<!-- --------------------------ここまで-------------------------------------------------------- -->
<!-- _______________________________下記からタイトルとスタートボタン、コンテニューボタン___________________________________________________ -->
        <h1 class="col-12 pb-3 fa-5x text-dark font-weight">Startup<br>〜Aiming for an IPO〜</h1>
        <!-- ---------------スタートボタン id startbtn ------------------------------- -->
        <button id="startbtn" type="button"
          class="btn btn-lg btn-info fa-2x text-dark font-weight m-3">From the start</button>
          <!-- ---------------コンテニューボタン id continuebtn ------------------------------- -->
        <button id="continuebtn" type="button"
          class="btn btn-lg btn-info fa-2x text-dark font-weight m-3">Continue</button>
        <button id="continuebtn" type="button"
          class="btn btn-lg btn-info fa-2x text-dark font-weight m-3">Entrepreneur Memo</button>
      </div>
    </div>


    <!-- アカウント作成画面 -->
    <div id="firstPage" class="d-flex align-items-center col-md-7 col-10 text-dark ">
      <div id="first-form" class="bg-white col-12 text-center p-4 d-none">
        <h2 class="pb-3 font-weight">Please type your company information</h2>
        <div>
          <!-- セレクト（会社住所のセレクト） -->
          <select class="form-select m-2" aria-label="Default select example">
            <option selected>Where is the your office?</option>
            <option value="1">G's in Tokyo</option>
            <option value="2">G's in Fukuoka</option>
            <option value="3">G's in Sapporo</option>
          </select>
          <!-- ----------セレクト（どの産業）---------- -->
          <select class="form-select m-2" aria-label="Default select example" id = "industryselect">
            <option selected >Which is your industry?</option>
            <option value="1">IT industry</option>
            <option value="2">D to C industry</option>
            <option value="3">Consulting industry</option>

          </select>

        </div>
<!-- ---------------------------新規アカウント登録フォーム id accountform ----------------- -->
        <form id="accountform" class="form">

          <div class="form-group">
            <input type="text" name="companyName" class="form-control" placeholder="companyname" required>
          </div>
<!-- ----------------------------------------アカウント提出ボタン id submitbtn --------------------- -->
          <button id="submitbtn" type="submit" class="btn btn-info col-12 text-dark font-weight">Submit & Start Game!!</button>
        </form>
        <div class = "d-flex justify-content-end m-4">
          <button id="homebtn" type="submit" class="btn btn-primary col-4 text-dark font-weight">To StartPage</button>
        </div>
      </div>
      <!-- continue画面  id continue-form  -->
      <div id="continue-form" class="bg-primary col-12 text-center p-4 d-none">
        <h2 class="pb-3 font-weight">Please type your company name and industry</h2>

<select class="form-select m-2" aria-label="Default select example" id="select-continue">
  <option selected>Which is your industry?</option>
  <option value="1">IT industry</option>
  <option value="2">D to C industry</option>
  <option value="3">Consulting industry</option>

</select>


        <!-- --------コンテニューフォーム    id continueform --------- -->
        <form id="continueform" class="form">
          <div class="form-group">
            <input type="text" name="continue" class="form-control" placeholder="companyName" required>
          </div>
          <!-- ---------------コンテニューボタン    id continuebtn -------------- -->
          <button id="formbtn" type="submit" class="btn btn-secondary col-12 font-weight text-dark">Submit!!</button>
        </form>
      </div>
    </div>
    <!-- メイン画面  id mainpage-->
    <div id="mainpage">
    </div>
    <div id="ipopage"></div>

  </div>
  `;
}

// -----------------------------------------ボタンのイベントリスナーを付与する----------------------------------
function homeEvent() {//
  // -----------------------btn変数を設定-------------------------------
  let startbtn    = document.getElementById("startbtn");//ゲームをスタートするボタン変数
  let continuebtn = document.getElementById("continuebtn");//つづきボタンから始める変数
  let submitbtn   = document.getElementById("submitbtn");//アカウント登録ボタン
  let formbtn     = document.getElementById("formbtn")//つづきに行くボタン
  let homebtn     = document.getElementById("homebtn");//homebtnidをゲット
  let homebtn2    = document.getElementById("homebtn2");//homebtn2をゲット
  
  homebtn.addEventListener("click",() => {//押したらリロードしてスタートページを戻す
    window.location.reload();
    });
  homebtn2.addEventListener("click", () => {//押したらリロードしてbtn2を戻す
      window.location.reload();
    })

// -----------------------startbtnにクリックイベントを設定----------------------------
    startbtn.addEventListener("click", () => {//startbtnをクリックしたら
        accountCreatePage();//acount作成ページへ飛ぶ
    });
// ------------------------コンテニューｂｔｎにクリックイベントを設定----------------
    continuebtn.addEventListener("click", () => {//コンテニューｂｔｎをクリックしたら
      continuePage();//続きから始めるページへ飛ぶ
    });
// -----------------------formbtnにクリックイベントを設定----------------------------
    formbtn.addEventListener("click",  function(element)  {//formbtnをクリックしたら（引数に要素を入れて）
      let keynumber = document.getElementById("select-continue").value;//入力したキーナンバーをゲットして
      if (keynumber == "Which is your industry ?") {//セリフがこうだったら
        alert("Please select your industry!!");//alert()を出す
        return;//そこで処理を終わらす
      }
      element.preventDefault();
      load(keynumber);//JSONデータを受け取り、アカウントを継続させてゲームスタートさせる。
    },{passive : false}
    );
// -----------------------------submitbtnにクリックイベントを設定---------------------
    submitbtn.addEventListener("click",  function(element) {//submitbtnをクリックしたら
      const accountform = document.getElementById("accountform");//accountformidをクリックしたら
      if (accountform.querySelectorAll(`input[name="companyName"]`).item(0).value == "") {//入力された
        alert("Please your comapany name!!"); return;//alertを出す
      } 
      let keynumber = document.getElementById("industryselect").value;//keynumberの値を変数に入れて
      if (keynumber == "Which is your industry?") {//文言が変わらなかった場合は
       alert("Please select your industry!!");//alert()を出す
       return;
     }
      element.preventDefault();
      startCompanyAccount(keynumber);//キーンバーで条件分岐しつつ、アカウントを作成する
    },{passive :false}
    );
}


function goIPO() {//IPOを達成したときの処理
  location.href = "ipo.html";
}

function meetVC(userAccount) {//資金調達の関数
  let num = randomMath();
  if (num == 1 || num == 2 || num == 3 || num == 4 || num == 5) {//30%でダメ
    alert("You can't raise fund");//alert()を出す
  } else if (num == 9 || num == 6 || num == 7 || num == 8) {//4/15
    alert("You can raise fund!! Seed round!! + ¥10000000");//alet()
    userAccount.money += 10000000;//お金を足す
  } else if (num == 10 || num == 11 || num == 12) {
    alert("You can raise fund!! Series A!! + ¥ 100000000");//3/15
    userAccount.money += 100000000;//お金を足す
  } else if (num == 13 || num == 14) {//お金を足す
    alert("You can raise fund!! Series B!! + ¥ 500000000");//2/15
    userAccount.money += 500000000;//お金を足す
  } else if (num == 15) {//15だったら
    alert("You can raise fund!! Series C!! + ¥ 1000000000");//1/15
    userAccount.money += 1000000000;//お金を足す
  }
}

function randomMath() {//資金調達のためのランダム数字を出す
  return Math.floor(Math.random() * 15);//1~15 でランダム
}