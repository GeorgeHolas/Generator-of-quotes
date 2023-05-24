// function to return our random message
let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"The way to get started is to quit talking and begin doing." -Walt Disney',
    '"Life is ours to be spent, not to be saved." -D. H. Lawrence',
    ' "I failed my way to success." -Thomas Edison',
    '"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',
    '"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt',
    '"Don\'t judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson',
    '"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',
    '"Love the life you live. Live the life you love." -Bob Marley',
    '"You will face many defeats in life, but never let yourself be defeated." -Maya Angelou',   
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
  ];
btn.addEventListener('click', function(){
   var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
   output.innerHTML = randomQuote;
})