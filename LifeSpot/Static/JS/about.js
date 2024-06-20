const getComment = () => {
    // Get the user's name
    const name = prompt("Введите ваше имя:");

    // Get the comment text
    const comment = prompt("Введите ваш комментарий:");

    // Add the comment to the page
    addComment(name, comment);
};

function addComment(name, comment) {
    // Get the current date
    var date = new Date();

    // Create the comment HTML
    var commentHTML = `
        <div class="comment">
            <h2>${name}</h2>
            <p>${comment}</p>
            <p>${date.toLocaleDateString()}</p>
        </div>
    `;

    // Add the comment to the page
    document.body.innerHTML += commentHTML;
}

function instaSub()
{
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!");
}

setTimeout(instaSub, 30000);