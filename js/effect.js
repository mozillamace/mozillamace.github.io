//clicking anchor tag from li tag
var li=document.querySelectorAll('.nav-flex-container li');
var anchor=document.querySelectorAll('.nav-flex-container li a')
for(let i=0; i<li.length; i++){
    li[i].addEventListener('click', function(e){
        if(e.target!=anchor[i]){
            anchor[i].click();
        };
    })
}

//scroll effect
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    offset:81
});

//clickable news article
var newsArticle = document.querySelectorAll('.news article');
var articleArr = Array.prototype.slice.call(newsArticle);
var articleLink =document.querySelector('.news h3 a');

for(let i=0;i<newsArticle.length;i++){
    newsArticle[i].addEventListener('click' ,function(e){
        articleLink.click();
    });
}



// var li = document.querySelectorAll('nav li');

// for(let i=0;i<li.length;i++){
//     li[i].addEventListener('click' ,function(e){

//         var target = document.querySelector('.news');
//         var targetPosition = target.getBoundingClientRect().top;
//         var startPosition = window.pageYOffset;
//         var distance = targetPosition - startPosition;
//         var duration = 2000;
//         var startTime = null;
//         console.log(targetPosition);
//         console.log(startPosition);

//         function animation(currentTime){
//             if(startTime === null) startTime = currentTime;
//             var timeElapsed = currentTime - startTime;
//             var run = ease(timeElapsed, startPosition, distance, duration);
//             window.scrollTo(0, run);
//             if(timeElapsed < duration) requestAnimationFrame(animation);
//         }

//         function ease(t, b, c, d) {
//             t /= d;
//             t--;
//             return c*(t*t*t + 1) + b;
//         };

//         requestAnimationFrame(animation);
//     });
// }


// menu icon hamburger effect
var menuIcon=document.querySelector('.hamburger');
menuIcon.addEventListener('click', function(e){
    var nav=document.querySelector('.nav-flex-container nav');
    if(menuIcon.classList.contains('is-active')){
        menuIcon.className='hamburger hamburger--squeeze menu-icon';
        nav.className='';
    }
    else{
        menuIcon.className='hamburger hamburger--squeeze menu-icon is-active';
        nav.className='nav-add-class';
    }
});
