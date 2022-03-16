window.onload = () => {
    var copyBtn = document.getElementById("copiarBtn");
    copyBtn.addEventListener("click", copyLinkToClipboard);

    var modalBg = document.getElementById("tutorialSimplexr");
    modalBg.addEventListener("click", (event) => {
        const bg = document.getElementById("tutorialSimplexr");

        if(event.target == bg) {
            openTutorial(0);
        }
    });
}

function openTutorial(onOff) {
    // if (onOff == 1) {
    //     var tutorial = document.getElementById('tutorialSimplexr');
    //     tutorial.classList.remove('sxr-tutorial-off')
    //     tutorial.classList.add('sxr-tutorial-on')
    // }
    // else if (onOff == 0) {
    //     var tutorial = document.getElementById('tutorialSimplexr');
    //     tutorial.classList.remove('sxr-tutorial-on')
    //     tutorial.classList.add('sxr-tutorial-off')
    // }
    window.location.href = 'http://teste.concertodenataldacatedral.com.br/#/home/7692f359-fa2a-4fac-a762-7f2ce1403617'

}

function copyLinkToClipboard() {
    var copyText = document.getElementById("textToCopy");
    navigator.clipboard.writeText(copyText.textContent);
    alert("Copied the text: " + copyText.textContent);
}
