//const getComment = () => {
//    // Get the user's name
//    const name = prompt("Введите ваше имя:");

//    // Get the comment text
//    const comment = prompt("Введите ваш комментарий:");

//    // Add the comment to the page
//    addComment(name, comment);
//};

//function addComment(name, comment) {
//    // Get the current date
//    var date = new Date();

//    // Create the comment HTML
//    var commentHTML = `
//        <div class="comment">
//            <h2>${name}</h2>
//            <p>${comment}</p>
//            <p>${date.toLocaleDateString()}</p>
//        </div>
//    `;

//    // Add the comment to the page
//    document.body.innerHTML += commentHTML;
//}

//function instaSub()
//{
//    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!");
//}

//setTimeout(instaSub, 30000);

/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
*
* */
function getReview() {
    // Создадим объект
    let review = {}

    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if (review["userName"] == null) {
        return
    }

    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }

    // Сохраним текущее время
    review["date"] = new Date().toLocaleString()

    // Добавим на страницу
    writeReview(review)
}

/*
* Запишем отзыв на страницу
*
* */
const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}