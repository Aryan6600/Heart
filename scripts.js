window.addEventListener('mousemove', (e) => {
    createHeart(e)
})

function createHeart(e) {
    const heart = document.createElement('span')
    const x = e.offsetX
    const y = e.offsetY
    heart.style.top = `${y}px`
    heart.style.left = `${x}px`
    let size = Math.random() * 80
    heart.style.width = `${size + 20}px`
    heart.style.height = `${size + 20}px`
    let transform = Math.random() * 360;
    heart.style.transform = `rotate(${transform}deg)`
    document.body.appendChild(heart)
    setTimeout(() => { heart.remove() }, 1000)
}