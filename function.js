function compare() {
    if (playerOne === true) {
        firstCardFront.style.backgroundColor = "#074a12";
        secondCardFront.style.backgroundColor = "#074a12";
        let audioTemp = audioLibrary1P[randomNumber(audioLibrary1P.length)]
        let audio = new Audio(`${audioTemp}`)
        audio.play();
        firstPlayer();
        score1Elt.innerHTML = (`<p> Player One Score: ${score1}) </p>`)

    } else {
        firstCardFront.style.backgroundColor = "#730000";
        secondCardFront.style.backgroundColor = "#730000";
        let audioTemp = audioLibrary2P[randomNumber(audioLibrary2P.length)]
        let audio = new Audio(`${audioTemp}`)
        audio.play();
        secondPlayer();
        score2Elt.innerHTML = (`<p> Player Two Score: ${score2} </p>`)
    }
}