let minusBtn = document.querySelector(".button-minus");
let plusBtn = document.querySelector(".button-plus");
let volumeBar = document.querySelector(".volume-bar");
let bar = document.querySelector(".bar");
let value = document.querySelector(".value");
let newVolume = document.createElement("div");
let counter = 0;
value.innerText = counter + "%";
volumeBar.style.position = "relative";
newVolume.style.height = "100%";
newVolume.style.opacity = "0.6";
newVolume.style.position = "absolute";
newVolume.style.position.top = "0";
newVolume.style.position.left = "0";
newVolume.style.zIndex = "1";
newVolume.style.backgroundColor = "green";

plusBtn.addEventListener("mousedown", () => {
    let plusinterval = setInterval(() => {
        counter += 1;
        if (bar.style.width === "100%" || counter > 100) {
            counter = 100;
            bar.style.width = "100%";
        } else {
            bar.style.width = counter + "%";
            value.innerText = counter + "%";
        }
    }, 100);
    plusBtn.addEventListener("mouseup", () => {
        clearInterval(plusinterval);
    });
});

minusBtn.addEventListener("mousedown", () => {
    let minusinterval = setInterval(() => {
        counter -= 1;
        if (bar.style.width === "0%" || counter < 0) {
            counter = 0;
            bar.style.width = "0%";
        } else {
            bar.style.width = counter + "%";
            value.innerText = counter + "%";
        }
    }, 100);
    minusBtn.addEventListener("mouseup", () => {
        clearInterval(minusinterval);
    });
});

volumeBar.addEventListener("mousemove", (e) => {
    if (e.offsetX < 0) {
        newVolume.style.width = 0 + "px";
        value.innerText = 0 + "%";
    } else {
        volumeBar.prepend(newVolume);
        newVolume.style.width = e.offsetX + "px";
        value.innerText = ((e.offsetX * 100) / volumeBar.offsetWidth).toFixed() + "%";
    }
});

volumeBar.addEventListener("mouseleave", (e) => {
    bar.style.width = counter + "%";
    value.innerText = counter + "%";
    newVolume.style.width = 0;
});

volumeBar.addEventListener("mousedown", (e) => {
    bar.style.width = e.offsetX + "px";
    counter = Number(((e.offsetX * 100) / volumeBar.offsetWidth).toFixed());
});

volumeBar.addEventListener("mouseup", (e) => {
    bar.style.width = e.offsetX + "px";
    counter = Number(((e.offsetX * 100) / volumeBar.offsetWidth).toFixed());
});
