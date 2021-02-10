function getLang(a) {
    localStorage.setItem('Lang', a);
    location.reload();


}

arrLang = {
    en : {
      "start" : "Start your order",
      "cancel" : "cancel",
      "chooseLanguage" : "Choose your language",
      "where" : "Where to eat",
      "in" : "eat in",
      "out" : "eat out"
    },
    fr : {
      "start" : "Commencez votre ordre",
      "cancel" : "annuler",
      "chooseLanguage" : "Choisissez votre langue",
      "where" : "où manger",
      "in" : "sur place",
      "out" : "à emporter"
    }
}

function translate() {
    var elements = document.getElementsByClassName('lang')
    var lang = localStorage.getItem("Lang")

    for (let index = 0; index < elements.length; index++) {
        elements.item(index).innerHTML = arrLang[lang][elements.item(index).getAttribute('key')];
    }
}
