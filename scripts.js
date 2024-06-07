
const btn = document.getElementById('submit-btn-val');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerText = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_2052l8x';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerText = 'Send a Message';
      alert('Email Sent!');
    }, (err) => {
      btn.innerText = 'Send a Message';
      alert(JSON.stringify(err));
    });
});


var typed = new Typed('#element', {
    strings: ['Puzzle Solver', 'Leetcoder', 'Graphic Designer', 'Web Developer'],
    typeSpeed: 50,
  });


const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');

function DynamicWork() {

    //For toggle the nav buttons
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function () {
            let tmp = document.querySelectorAll('.active-btn');
            tmp[0].className = tmp[0].className.replace('active-btn', '');
            this.className += ' active-btn'  //what is the logic of this.classname inside a function.
        })
    }

    //For rendering the sections on clicking nav buttons
    allSection.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        // fetch the section with selected id
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].id == id) {
                let tmp = document.querySelectorAll('.active');
                tmp[0].className = tmp[0].className.replace('active', '');
                sections[i].className += ' active'
            }
        }

        // Another approach
        //     if(id){
        //         secBtns.forEach((btn) =>{
        //             btn.classList.remove('active')
        //         })
        //         e.target.classList.add('active');

        //         sections.forEach((section)=>{
        //             section.classList.remove('active')
        //         })

        //         const element = document.getElementById(id);
        //         element.classList.add('active');
        //     }
    })
}

DynamicWork()