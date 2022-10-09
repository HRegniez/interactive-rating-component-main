const box1 = document.querySelector('#box_1');
const box2 = document.querySelector('#box_2');

const ratings = document.querySelectorAll('.rating');
const ratingDisplay = document.querySelector('.rating_display');

const submitBtn = document.querySelector('.submit_btn');

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        for (i=0; i<ratings.length; i++) {
            
            ratings[i].classList.remove('rating_on');
            ratings[i].classList.add('rating');
        }
        for (i=0; i<rating.id; i++) {
            ratings[i].classList.remove('rating');
            ratings[i].classList.add('rating_on');

            ratingDisplay.innerHTML = rating.id;
       }

       submitBtn.addEventListener('click', () => {
            box2.classList.remove('box_hidden');
            box1.classList.add('box_hidden');
       })
    })    
})
