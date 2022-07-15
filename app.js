let quotes = document.querySelector(".author-quote");
let author = document.querySelector(".author-name");
let volume = document.querySelector(".fa-volume-high");
let clip = document.querySelector(".fa-clipboard");
let tweet = document.querySelector(".fa-twitter");
let btn = document.querySelector(".btn");

function randomQuote(){
    btn.innerHTML = "Loading Quote.."
    btn.classList.add("loading")
    fetch("https://api.quotable.io/random")
    .then((res)=> res.json())
    .then((data)=> {
        return quotes.innerHTML = data.content,
        author.innerHTML = `-- ${data.author}`,
        btn.innerHTML = "Next Quote",
        btn.classList.remove("loading")
    })
    
}
volume.addEventListener("click", ()=>{
    let utterence = new SpeechSynthesisUtterance(`${quotes.innerHTML} by ${author.innerHTML}`)
    speechSynthesis.speak(utterence)
});

clip.addEventListener("click", ()=>{
    navigator.clipboard.writeText(`${quotes.innerHTML}`)
    clip.style.backgroundColor = "rgb(184, 255, 192)"
    setTimeout(()=>{
        clip.style.backgroundColor = "white"
    }, 1000)
});

tweet.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quotes.innerHTML}`;
    window.open(tweetUrl)
});

btn.addEventListener("click", randomQuote)