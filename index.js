var randomNumber1 = Math.floor(Math.random() * 6);
if (randomNumber1 === 1) {
    if (randomNumber1 === 2) {
        if (randomNumber1 === 3) {
            if (randomNumber1 === 4) {
                if (randomNumber1 === 5) {
                    if (randomNumber1 === 6) {
                        document.querySelector(".dice .img1").src="/dice6.png";
                    }
                    document.querySelector(".dice .img1").src="/dice5.png";
                }
                document.querySelector(".dice .img1").src="/dice4.png";
            }
            document.querySelector(".dice .img1").src="/dice3.png";
        }
        document.querySelector(".dice .img1").src="/dice2.png";
    }
    document.querySelector(".dice .img1").src="/dice1.png";
}