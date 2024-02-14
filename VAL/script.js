let clickCount = 0;
let hasMoved = false;

// Mảng chứa 10 đoạn văn bản bất kỳ
const textsArray = [
    "Ní chắc chưa?",
    "Sao tồy dị",
    "Cho em chọn lại á",
    "Sao ấn nhầm hoài dị",
    "Ấn nút bên trái kìa",
    "Ấn nữa làm con Kem",
    "Gâu gâu",
    "Võ Lộc đẹp trai",
    "Lì lợm",
    "Cơ hội cuối",
    "Đố em bắt được tôi"
];

document.getElementById('buttonB').addEventListener('click', function () {
    clickCount++;

    if (clickCount > 10 && !hasMoved) {
        moveRedButton();
        hasMoved = true;
    }

    // Hiển thị đoạn văn bản tiếp theo trong mảng
    if (clickCount <= textsArray.length) {
        document.getElementById('buttonB').innerText = textsArray[clickCount - 1];
    }

    increaseSizeGreenButton();
});

document.getElementById('buttonB').addEventListener('mouseenter', function () {
    if (clickCount > 10) {
        moveRedButton();
    }
});

function increaseSizeGreenButton() {
    const greenButton = document.getElementById('buttonA');
    const currentWidth = greenButton.offsetWidth;
    const currentHeight = greenButton.offsetHeight;

    const newWidth = currentWidth + 30;
    const newHeight = currentHeight + 15;

    greenButton.style.width = `${newWidth}px`;
    greenButton.style.height = `${newHeight}px`;
}

function moveRedButton() {
    const redButton = document.getElementById('buttonB');

    // Tính toán vị trí ngẫu nhiên trên màn hình
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (screenWidth - redButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - redButton.offsetHeight));

    redButton.style.position = 'absolute';
    redButton.style.left = `${randomX}px`;
    redButton.style.top = `${randomY}px`;

    // Hiển thị đoạn văn bản tiếp theo trong mảng
    if (clickCount <= textsArray.length) {
        redButton.innerText = textsArray[clickCount - 1];
    }

    // Hiển thị nút đỏ
    redButton.classList.remove('hide');
}
