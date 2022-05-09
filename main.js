let persons = [{
     
        image:'images/image-tanya.jpg',
        quote : `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        name:'Tanya Sinclair',
        job : 'UX Engineer',
    
},
{
        image:'images/image-john.jpg',
        quote:`“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        name:'John Tarkpor',
        job : 'Junior Front-end Developer',
    

},]


const buttons = document.querySelectorAll('.arrow');

// set the current slide to 1
let currentSlide = 1;

// add event listener to btns

buttons.forEach(button => {
    button.addEventListener('click' , function(){
        // code to execute
        if(currentSlide >=persons.length ) 
       
        // go back to the prev slide
        currentSlide = 0;
        
    // use the persons to change the display
        const image = persons[currentSlide].image;
        const quote = persons[currentSlide].quote;
        const name = persons[currentSlide].name;
        const job = persons[currentSlide].job;

   //  set variables
 const peopleImage = document.querySelector('.woman');
 peopleImage.src=image;

 const quoteText = document.querySelector('.info-text');
 quoteText.innerHTML=quote;

 const personName = document.querySelector('.name');
 personName.innerHTML = name;

 const peopleJob = document.querySelector('.job-title');
 peopleJob.innerHTML = job;

 currentSlide++;
 
 

   
 
     
    })
})

