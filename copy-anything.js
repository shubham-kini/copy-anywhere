(function() {
    // Remove CSS restrictions
    const styles = `
        * {
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            cursor: text !important;
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Remove JavaScript event listeners that prevent copying
    document.querySelectorAll("*").forEach(el => {
        el.onselectstart = el.oncopy = el.oncontextmenu = el.onmousedown = el.onmouseup = el.onmousemove = el.ondragstart = null;
    });

    console.log("✅ Copying enabled!");
})();
