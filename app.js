class FlyingObject {
    constructor(img) {
        this.img = img
        this.id = '' + Date.now()
    }

    render() {
        return document.querySelector('.objectContainer').innerHTML += `<span id="${this.id}">
        <img src="${this.img}" alt="" class="balloonIcon" draggable="false">
        </span>`
    }

    animate() {
        let num = 0;
        let randomPosition = Math.floor(Math.random() * 80)

        setInterval(() => {
            num++
            let balloonStyle = document.getElementById(this.id)
            balloonStyle.style.position = 'absolute'
            balloonStyle.style.left = `${randomPosition}rem`
            balloonStyle.style.bottom = `${num}px`
            
            if (num == 600) {
                balloonStyle.style.display = 'none'
            }
        }, 10) // speed of the balloon
    }
}

export default FlyingObject