const answers_no = {
    english: [
        "Nu",
        "Sigur?",
        "Sigur sigur??",
        "Sigur sigur sigur???",
        "Te las sa te mai gandesti?",
        "Daca te bat la table?",
        "Dar la sah?",
        "Pentru 50 de lei?",
        "Mai intreb o data?!",
        "Dai un pic la sentiment!",
        "Acum doar esti rea!",
        "Ai ceva cu mine?",
        "Ma urasti?!",
        "Daca iti cumpar tigari?",
        "Ok, de la capat.."
    ],
    french: [
        "Non",
        "Tu es sûr ?",
        "Tu es vraiment sûr ??",
        "Tu es vraiment vraiment sûr ???",
        "Réfléchis encore?",
        "Tu ne crois pas aux deuxièmes chances ?",
        "Pourquoi tu es si froid?",
        "Peut-être, on peut en parler ?",
        "Je ne vais pas demander encore une fois!",
        "D'accord, maintenant ca me fait mal!",
        "Tu es juste méchant!",
        "Pourquoi tu me fais ça?",
        "Donnez-moi une chance plz!",
        "Je te supplie d'arrêter!",
        "D'accord, recommençons.."
    ],
    thai: [
        "ไม่อ่ะ",
        "แน่ใจจริงๆหรอคะ?",
        "แน่ใจจริงๆ จริงๆนะคะ?",
        "อย่าบอกนะว่านี่แน่ใจสุดๆแล้วจริงๆ ?",
        "ลองคิดดูอีกทีหน่อยสิคะ..",
        "ขอโอกาศที่สองทีค่ะ..",
        "อย่าเย็นชาสิคะ กระซิกๆ",
        "ขอร้องนะคะ",
        "น้าาาๆๆๆๆๆ",
        "เราจะร้องไห้เอานะ กระซิกๆ",
        "จะเอางี้ๆจริงหรอคะ",
        "ฮือออออ",
        "ขอโอกาศครั้งที่สองที่ค่ะ!",
        "ขอร้องละค่าาา",
        "โอเคค่ะ.. งั้นเริ่มใหม่ !"
    ]
};

answers_yes = {
    "english": "Yes",
    "french": "Oui",
    "Thailand": "เย่ คืนดีกันแล้วน้า"
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
const secret_button = document.getElementById('secret-button');
const secretMesaj = document.getElementById('secret-mesaj');

let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/mid.jpeg";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.jpeg";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

if (secret_button) {
    secret_button.addEventListener('click', () => {
        // change banner gif path
        let banner = document.getElementById('banner');
        banner.src = "public/images/secret.jpg";
        refreshBanner();
        let successMessage = document.getElementById('success-message');
            successMessage.style.display = "none";
        let questionHeading = document.getElementById('question-heading');
        let secretMesaj = document.getElementById('secret-mesaj');
        let buttons = document.getElementsByClassName('buttons')[0];
            buttons.style.display = "none";

        questionHeading.style.display = "none";
        secretMesaj.style.display = "block";
    });
}
function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "french") {
        questionHeading.textContent = "Tu veux être mon valentin?";
    } else if (language === "thai") {
        questionHeading.textContent = "คืนดีกับเราได้อ่ะป่าว?";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
    }

    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "french") {
        successMessage.textContent = "Yepppie, à bientôt :3";
    } else if (language === "thai") {
        successMessage.textContent = "ฮูเร่ คืนดีกันแล้วน้า :3";
    } else {
        successMessage.textContent = "Yepppie, see you sooonnn :3";
    }


}