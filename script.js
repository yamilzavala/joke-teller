const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

function toggleButton() {
    button.disabled = !button.disabled;
}

function testVoice(joke) {
  VoiceRSS.speech({
    key: "ab698d5b553f44b39a32e67d6f441f6e",
    src: `${joke}`,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// testVoice();

async function getJokes() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    let joke = '';
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        if(!data.joke) {
            joke = `${data.setup} ... ${data.delivery}`
        } else {
            joke = `${data.joke}`
        }     
            testVoice(joke);
            toggleButton()
    } catch (error) {
        console.log('Ops.. something went wrong...')
    }
}




// getJokes();

button.addEventListener('click', getJokes)
audio.addEventListener('ended', toggleButton )
