function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
helloEmotes = [' ヾ(´･ω･｀)', '(っ◕‿◕)っ', '(*・‿・)ノ⌒*:･ﾟ✧', '(づ｡◕‿‿◕｡)づ', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', 'ʕ•́ᴥ•̀ʔっ', '┴┬┴┤･ω･)ﾉ├┬┴┬┴'];

// Navbar + Footer
const navbar = document.getElementById('navbar');
navbar.innerHTML = '<a href="index.html">Home</a>';
navbar.innerHTML += '<a href="about.html">About</a>';
navbar.innerHTML += '<a href="professional.html">Work</a>';
navbar.innerHTML += '<a href="blog.html">Blog</a>';

const footer = document.getElementsByClassName('footer')[0];
footer.innerHTML = '<a href="https://github.com/nicholasmeier/nicholasmeier.github.io">Page Source</a>';
footer.innerHTML += '<p>Keep creating :)</p>';

//Home Page
if (window.location.pathname.endsWith('index.html')) {
    const homeContent = document.getElementById('homeContent');

    homeContent.innerHTML = '<h1>Welcome!</h1>';
    homeContent.innerHTML += '<p>' + helloEmotes[getRandomInt(helloEmotes.length)] + '</p>';
}
//Work Page
if (window.location.pathname.endsWith('professional.html')) {
    var today = new Date();
    var workStartDate = new Date('2020-06-08');
    var workDuration = today - workStartDate;
    var workYears = Math.floor(workDuration / (1000 * 60 * 60 * 24 * 365));

    const workContent = document.getElementById('workContent');
    workContent.innerHTML = '<h1>Career</h1>';
    workContent.innerHTML += '<p>I\'ve been working in software for ' + workYears + ' years. I graduated from Purdue University in 2020 with a Bachelors of Science degree in Computer Science.</p>';
    workContent.innerHTML += '<p>My experience includes data center management, cloud infrastructure administration, and microservice and serverless development. I\'ve also worked as a scrum lead in agile development</p>';
    workContent.innerHTML += '<p>I\'m proficient with Python, Java, C#, shell scripting, and JavaScript, and have worked professionally in AWS and Azure cloud environments.</p>';
    workContent.innerHTML += '<p>I most enjoy working on scripts in either python or bash. There\'s a lot of satisfaction to be had in automating the boring stuff (also <a href="https://automatetheboringstuff.com/">a great book by Al Sweigart</a>).</p>';
    workContent.innerHTML += '<p>Here\'s my <a href="https://www.linkedin.com/in/nimtizmeier/">LinkedIn</a> for more details.</p>';
}

if (window.location.pathname.endsWith('blog.html')) {
    const blogContent = document.getElementById('blogContent');
    blogContent.innerHTML = '<h1>Blog</h1>';
    blogContent.innerHTML += '<p>Coming soon!</p>';
}