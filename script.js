const dataset = [
    "confusion.mp3",
    "continuous.mp3",
    "derivative.mp3",
    "discrete.mp3",
    "distributions.mp3",
    "expectation.mp3",
    "fancy.mp3",
    "i-dont-know.mp3",
    "inteegral.mp3",
    "knock-knock-yes-please.mp3",
    "left-as-an-exercise.mp3",
    "lets-talk-outside.mp3",
    "lets-try-to-settle-down.mp3",
    "no2.mp3",
    "omega.mp3",
    "probability.mp3",
    "probility3.mp3",
    "random-variable.mp3",
    "right.mp3",
    "sigma-algebra.mp3",
    "some-people-are-just-out-of-their-minds.mp3",
    "we-dont-really-care.mp3",
    "we-wont-be-much-concerned.mp3",
    "write-to-me.mp3",
    "yes-please.mp3",
    "ah-here-no.mp3",
    "any-mistakes.mp3",
    "did-i-write-it.mp3",
    "i-cant-find-it.mp3",
    "lotus.mp3",
    "ofc-this-doesnt-contribute.mp3",
    "so-this-is-an-ugly-looking-summation.mp3",
    "du-know-what-it-is.mp3",
    "i-have-no-idea.mp3",
    "not-working-tempermental.mp3",
    "oops.mp3",
    "roll-a-fair-die.mp3",
    "thinks.mp3",
    "what-is-raffle.mp3",
    "choice-for-boards.mp3",
    "find-her-an-eraser.mp3",
    "need-some-proof.mp3",
    "some-few-minutes-left.mp3",
    "so-recall-that-this-pen-is-dying.mp3"
];

function pc(n){
    const audio = document.createElement('audio');
    audio.src = `phrases/${dataset[n]}`;
    audio.controls = false;
    const playerContainer = document.getElementById('player');
    playerContainer.innerHTML = '';
    playerContainer.appendChild(audio);
    audio.play()
}
function surpriseMe(){
    let n = Math.floor(Math.random()*dataset.length)
    pc(n)
}