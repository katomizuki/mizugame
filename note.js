
const addBtn = document.getElementById('add');//addidをゲット


const notes = JSON.parse(localStorage.getItem('notes'));//notesidのデータを受け取ったJSONデータをnotes定数に入れる


if (notes) {
  notes.forEach(note => addNewNote(note));
}


addBtn.addEventListener('click', () => {
  addNewNote();//新しくノートを作成
});



function addNewNote(text = '') {//関数を設定（text）
  // div要素を作成
  const note = document.createElement('div');//divを作成
  // noteクラスを追加
  note.classList.add('note');//noteクラスを作成

  // メモ帳を追加
  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit fa-2x"></i></button>
        <button class="delete"><i class="fas fa-trash-alt fa-2x"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;//note.innerHTML

  // 操作に必要な要素を取得
  const editBtn = note.querySelector('.edit');//編集ボタンIDをゲットする
  const deleteBtn = note.querySelector('.delete');//deleteボタンをゲットする
  const main = note.querySelector('.main');//mainをゲットする
  const textArea = note.querySelector('textarea');//textareaボタンをゲットする

  // テキストエリアに引数で渡したテキストを代入
  // 新規/編集があるのでこうしている
  textArea.value = text;
  // markedは、HTMLに追加したプラグイン
  main.innerHTML = marked(text);//中身をｈｔｍｌに変換できるプラグイン

  // 削除のクリックイベントの登録
  deleteBtn.addEventListener('click', () => {//deletebtnがクリックされたらdeletenote()関数を実施
    deleteNote(note);
  });

  // 編集ボタンのクリックイベント
  editBtn.addEventListener('click', () => {//editbtnがクリックされたら
    editNote(main, textArea);//引数に（main,textarea)
  });

  // テキストエリアのイベント
  textArea.addEventListener('input', (element) => {//inputイベントをしたら引数にelementを入れて
    const { value } = element.target;//

    main.innerHTML = marked(value);

    // ローカルストレージの更新
    updateLS();
  })

  // bodyの子要素として追加
  document.body.appendChild(note);//
}

// ローカルストレージにメモ帳を保存
function updateLS() {//ローカルストレージに保存する
  // 要素を取得
  const notesText = document.querySelectorAll('textarea');//textareaの要素をゲット

  const notes = [];//空の配列を設定

  // 要素を格納
  notesText.forEach(note => notes.push(note.value));//空の配列に中身を入れていく

  // notesという名前でローカルストレージを保存
  localStorage.setItem('notes', JSON.stringify(notes));//notesというkeyで中身
}

// メモ帳削除
function deleteNote(note) {//
  // ノートを削除
  note.remove();

  // ローカルストレージの更新
  updateLS();
}

// メモ帳編集
function editNote(main, textArea) {
  // hiddenがついているものは消し、ついてないものは付与する
  main.classList.toggle('hidden');
  textArea.classList.toggle('hidden');
}