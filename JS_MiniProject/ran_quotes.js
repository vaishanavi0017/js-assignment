alert("This is LetsUpgrade JS Essential Batch 1 Mini-Project");
let quotes = [
    {
        "quote":"A writer is someone for whom writing is more difficult than it is for other people.",
        "author":"Thomas Mann"
    },
    {
        "quote":"I've got the key to my castle in the air, but whether I can unlock the door remains to be seen.",
        "author":"Louisa May Alcott",
    },
    {
        "quote":"Anybody who has survived his childhood has enough information about life to last him the rest of his days",
        "author":"Flannery O'Connor",
    },
    {
        "quote":"If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality.",
        "author":"Dr Roopleen",
    },
    {
        "quote":"You have to dream before your dreams can come true.",
        "author":"A. P. J. Abdul Kalam",
    },
    {
        "quote":"It takes a lot of courage to show your dreams to someone else.",
        "author":"Erma Bombeck",
    },
    {
        "quote":"Judge of your natural character by what you do in your dreams.",
        "author":"Ralph Waldo Emerson",
    },
    {
        "quote":"The butterfly counts not months but moments, and has time enough.",
        "author":"Rabindranath Tagore",
    },
    {
        "quote":"What keeps me going are my learnings, which I would rather call my 'experience,' and my urge to explore.",
        "author":"Sushant Singh Rajput",
    },
    {
        "quote":"There is something good in all seeming failures. You are not to see that now. Time will reveal it. Be patient.",
        "author":"Swami Sivananda",
    } ,
    {
        "quote":"We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.",
        "author":"Swami Vivekananda",
    },   
    {
        "quote":"Wisdom begins in wonder",
        "author":"Socrates",
    },     
    {
        "quote":"When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
        "author":"Confucius",
    } ,    
    {
        "quote":"Whatever you do in life, surround yourself with smart people who'll argue with you.",
        "author":"John Wooden",
    },   
    {
        "quote":"Good friends, good books and a sleepy conscience: this is the ideal life.",
        "author":"Mark Twain",
    }          
]

const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

//adding a event listener
btn.addEventListener('click',getQuote);


function getQuote(){
    let num = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = '<span>"</span>'+quotes[num].quote+'<span>"</span>';
    author.innerHTML = '<span>--</span>'+quotes[num].author;


}