var book = {
    title: "자바스크립트",
    author: "고쌤",
    pages: 500,
    price: 15000,
    info: function() {
        alert(this.title + "책의 분량은 " + this.pages + "쪽입니다.");
    }
};
