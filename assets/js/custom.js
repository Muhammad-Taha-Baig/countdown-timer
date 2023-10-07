const endDate = "01 November 2023 11:00 PM"
const inputText = document.querySelectorAll("input");

document.querySelector(".end-date").innerText = endDate;

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if (diff < 0) return;
    inputText[0].value = Math.floor(diff / 3600 / 24);
    inputText[1].value = Math.floor(diff / 3600) % 24;
    inputText[2].value = Math.floor(diff / 60) % 60;
    inputText[3].value = Math.floor(diff) % 60;
}

setInterval(
    () => {
        clock()
    },
    1000
)