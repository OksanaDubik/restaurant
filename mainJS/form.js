//Header форма заказа
//по клику на кнопку открывается форма регистрации.
document.querySelector('.reserve').addEventListener('click', function () {
    document.querySelector('.registration').classList.add('opened')
    document.querySelector('.registration').classList.remove('registration')

})

function close() {
    document.querySelector('.opened').classList.add('registration')
    document.querySelector('.opened').classList.remove('opened')

}

document.querySelector('.close').addEventListener('click', close)


//Footer форма обратной связи валидация.
document.querySelector('form[name="f1"]').addEventListener('submit', validationForm)

function validationForm (event){
    event.preventDefault()

   const name1 =document.querySelector('input[name="name1"]')
    const email1 =document.querySelector('input[name="email1"]')
    const textar =document.querySelector('textarea[name="textar"]')
    const valueLabelName = document.querySelector("label[for='name']")
    const errorStyle = `border : 1px solid red;`
    const styleTry = `border: 1px solid #CCCCCC;`
    let regexp =/\D/gi

    console.log(name1.value)
    console.log(regexp.test(name1.value))

    if(email1.value === ""){
        email1.style.cssText = errorStyle
    }
    else {
        console.log(email1.value)
        email1.style.cssText = styleTry
    }
    if(name1.value === "" || regexp.test(name1.value)  === false ){
        name1.style.cssText = errorStyle
        valueLabelName.innerText = "Only letters"
        valueLabelName.style.color = "red"
    }
    else {
        console.log(email1.value)
        name1.style.cssText = styleTry
        valueLabelName.innerText = "Name"
        valueLabelName.style.color = "#000000"
    }
    if(textar.value === ""){
        textar.style.cssText = errorStyle
    }
    else {
        console.log(email1.value)
        textar.style.cssText = styleTry
    }
}

//Footer форма обратной связи отправка на телеграм
const TELEGRAM_BOT_TOKEN = '6909770478:AAETbJbL9TvfI7e3eTVXMMFYvmUe7PrNDqY';
const TELEGRAM_CHAT_ID = '-1002037694009';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

async function sendEmailTelegram(event) {
    event.preventDefault();

    const form = event.target;
    const formBtn = document.querySelector('button[name="sab"]');
    const {name1, email1, textar} = Object.fromEntries(new FormData(form).entries());
    const text = `заявка от ${name1}, Email:${email1}, доп. информация:${textar}`;
    if (name1 !== '' && email1 !== '' && textar !== '') {
        try {
            formBtn.value = 'Loading...';

            const response = await fetch(API, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                })
            });
            if (response.ok) {
                alert("Форма отправлена")
                form.reset()
                formBtn.value = 'ЗАКАЗАТЬ'
            } else {
                throw new Error(response.statusText)
            }
        } catch (error) {
            console.error(error + "Ошибка! Форма не отправлена")
            alert("Ошибка! Форма не отправлена")
        } finally {
            formBtn.value = 'ЗАКАЗАТЬ'
        }
    }
}


