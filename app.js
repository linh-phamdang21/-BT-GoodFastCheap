let good = document.getElementById("good");
let fast = document.getElementById("fast");
let cheap = document.getElementById("cheap");

function checkStatus(id) {
    let isCheckGood = good.checked;
    let isCheckFast = fast.checked;
    let isCheckCheap = cheap.checked;

    switch (id) {
        case "good":
            if (isCheckGood) {
                if (isCheckCheap && isCheckFast) {
                    fast.checked = false;
                }
            }
            break;
        case "fast":
            if (isCheckFast) {
                if (isCheckCheap && isCheckGood) {
                    cheap.checked = false;
                }
            }
            break;
        case "cheap":
            if (isCheckCheap) {
                if (isCheckGood && isCheckFast) {
                    good.checked = false
                }
            }
            break;
    }
}
