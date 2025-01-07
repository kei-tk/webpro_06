document.addEventListener("DOMContentLoaded", () => {
    const memoList = document.querySelector("#memoList");
    const titleInput = document.querySelector("#title");
    const contentInput = document.querySelector("#content");
    const addMemoButton = document.querySelector("#addMemo");
    

    // サーバーからメモを取得して表示
    const fetchMemos = () => {
        fetch("/memos")
            .then((res) => res.json())
            .then((data) => {
                memoList.innerHTML = ""; // 一度リストをクリア
                data.forEach((memo) => {
                    const memoDiv = document.createElement("div");
                    memoDiv.className = "memo";
                    memoDiv.innerHTML = `<h3>${memo.title}</h3><p>${memo.content}</p>`;
                    memoList.appendChild(memoDiv);
                });
            });
    };

    // 新しいメモを追加
    addMemoButton.addEventListener("click", () => {
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        if (title && content) {
            fetch("/memos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        titleInput.value = "";
                        contentInput.value = "";
                        fetchMemos(); // 新しいメモを表示
                    }
                });
        } else {
            alert("タイトルと内容を入力してください。");
        }
    });

    // 初期メモを取得
    fetchMemos();
});