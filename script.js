function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
helloEmotes = [' ヾ(´･ω･｀)', '(っ◕‿◕)っ', '(*・‿・)ノ⌒*:･ﾟ✧', '(づ｡◕‿‿◕｡)づ', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', 'ʕ•́ᴥ•̀ʔっ', '┴┬┴┤･ω･)ﾉ├┬┴┬┴'];


const homeContent = document.getElementById('homeContent');

homeContent.innerHTML = '<h1>Welcome!</h1>';
homeContent.innerHTML += '<p>' + helloEmotes[getRandomInt(helloEmotes.length)] + '</p>';