function compare() {
    if (playerOne === true) {
        firstCardFront.style.backgroundColor = "#074a12";
        secondCardFront.style.backgroundColor = "#074a12";
        let audio2 = audioLibrary[randomNumber(audioLibrary.length)]
        let audio = new Audio(`${audio2}`)
        audio.play();
        firstPlayer();
        score1Elt.innerHTML = (`<p> Player One Score: ${score1}) </p>`)

}   
    else {
        firstCardFront.style.backgroundColor = "#730000";
        secondCardFront.style.backgroundColor = "#730000";
        secondPlayer();
        score2Elt.innerHTML = (`<p> Player Two Score: ${score2} </p>`)

    }
}