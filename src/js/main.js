let $quote = $(".split"),
    mySplitText = new SplitText($quote, {type: "words"}),
    splitTextTimeline = gsap.timeline();

gsap.set($quote, {perspective: 400});


mySplitText.split({type: "lines"})
splitTextTimeline.from(mySplitText.lines, {
    duration: 1,
    opacity: 0,
    rotationX: -120,
    force3D: true,
    transformOrigin: "top center -150",
    stagger: 0.1
});

/*let shapes = "polygon",
    tl = gsap.timeline({repeat:-1, yoyo:true});*/

/*tl.fromTo(shapes, {drawSVG:"0%"}, {duration: 1, drawSVG:"50% 50%", stagger: 0.1})
    .fromTo(shapes, {drawSVG:"100%"}, {duration: 0.1, drawSVG:"10%", immediateRender:false}, "+=0.1")
    .to(shapes, {duration: 1, drawSVG:"90% 100%", stagger: 0.5})
    .to(shapes, {duration: 1, rotation:360, scale:0.7, drawSVG:"100%", stroke:"white", strokeWidth:6, transformOrigin:"50% 50%"})
    .to(shapes, {duration: 0.5, stroke:"red", scale:1.5, opacity:0, stagger: 0.2})*/

let shapes = ".logo polygon",
    tl = gsap.timeline({repeat:-1, yoyo:true,repeatDelay:5});
tl.fromTo(shapes, {drawSVG:"0%", fill:"#A80010", stroke:"#A80010"}, {duration: 1, drawSVG:"50% 50%",stroke:"#A80010", stagger: 0.1})
    //.fromTo(shapes, {drawSVG:"100%"}, {duration: 0.1, drawSVG:"10%", immediateRender:false}, "+=0.1")
    .to(shapes, {duration: 0.5, drawSVG:"90% 100%", fill:"#ffffff", stroke: "#A80010", stagger: 0.5})
    .to(shapes, {duration: 2, scale:1, drawSVG:"100%", stroke:"#A80010", fill:"#ffffff",  transformOrigin:"50% 50%"})
    .to(shapes, {duration: 0.5, fill:"#A80010", scale:1, opacity:1,stroke:"#A80010", strokeWidth:"3", stagger: 0.2,})


/*******************/
/*****Notifier*******/
/*******************/
//Собственный модуль уведомлений
const notify = function (message, type = "default", html = "") { // type может быть success (по умолчанию) или error
    let rnd = "alert-" + Math.floor(Math.random() * 10000); //
    jQuery("body").append(`<div class='alert ${type} ${rnd}'>${message} ${html}<span class="closebtn"></span></div>`) // вставляем алерт в дом
    setTimeout(function () {
        jQuery("body").find("." + rnd + "").remove();
    }, 5000);
}
jQuery(document).on('click', '.closebtn', function () { // кнопка закрытия алерта
    let $alert = jQuery(this).parent();
    $alert.css({"opacity": "0"});
    setTimeout(function () {
        $alert.css("display", "none")
    }, 100);
})
const delete_notify = function (input) { // функция "мягкого" скрытия алертов (с анимацией). В качестве input передаем ссылку на элемент, у которого надо убрать класс input-error
    jQuery('.alert').each(function () {
        let $alert = jQuery(this);
        $alert.css({"opacity": "0", "height": "1px"});
        setTimeout(function () {
            $alert.remove();
        }, 600);
    })
    if (input) {
        input.removeClass("input-error");
    }
}
const harddelete_notify = function (input) { // тоже самое, только скрытие всех алертов без анимации (например, сркыть все алерты перед проверкой и в случае необходимости отобразить новый)
    jQuery('.alert').each(function () {
        jQuery(this).remove();
    })
    if (input) {
        input.removeClass("input-error");
    }
}
/****************/
/****************/
/****************/


//закрываем попап алерт СF7
$('body').on("click", ".wpcf7-response-output", function () {
    $(this).css("display", "none");
})

document.addEventListener('wpcf7mailsent', function (event) {
    $.fancybox.close('true');
    notify("Ваше сообщение успешно отправлено! Менеджер перезвонит Вам в течение 15 минут", "success");
}, false);
document.addEventListener('wpcf7invalid', function (event) {
    notify("Проверьте все поля!", "error");
}, false);
document.addEventListener('wpcf7spam', function (event) {
    notify("Сообщение выглядит как спам!", "error");
}, false);
document.addEventListener('wpcf7mailfailed', function (event) {
    notify("Не удалось отправить сообщение! Попробуйте позднее!", "error");
}, false);
