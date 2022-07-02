let spacePressed = false;
let pressTime = null;

const spacebar = document.querySelector('.space')
const bar = document.querySelector('.bar')

const update = () => {
    if (spacePressed) {
        spacebar.classList.add('active');
    } else {
        spacebar.classList.remove('active');
        const diff = new Date().getTime() - pressTime.getTime();

        bar.style.width = `${Math.max(0.001, Math.min(diff, 1200)) / 2}px`;   
        bar.style.background = 
            diff < 800
                ? 'red'
                : diff < 900
                ? 'yellow'
                : diff < 1100
                ? 'green'
                : diff < 1200
                ? 'yellow'
                : 'red';
    }
};

addEventListener('keydown', (e) => {
    if (e.key === ' ' && !spacePressed) {
        spacePressed = true;
        pressTime = new Date();
        update();
    }
});

addEventListener('keyup', (e) => {
    if (e.key === ' ') {
        spacePressed = false;
        update();
    }
})