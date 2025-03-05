(function () {
    // Check if the font is already added, if not, add it to the document
    if (!document.querySelector("#vazir-font")) {
      let fontLink = document.createElement("link");
      fontLink.id = "vazir-font";
      fontLink.rel = "stylesheet";
      fontLink.href = "https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@33.003/Vazirmatn-font-face.css";
      document.head.appendChild(fontLink);
    }
  
    // Apply the font to the entire site
    const fontUrl = "https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@latest/fonts/webfonts/Vazirmatn-RD-Regular.woff2";
    const style = document.createElement("style");
    style.innerHTML = `
      @font-face {
        font-family: 'Vazirmatn';
        src: url('${fontUrl}') format('woff2');
        font-weight: normal;
        font-style: normal;
      }
      * {
        font-family: 'Vazirmatn' !important;
      }
    `;
    document.head.appendChild(style);
  })();
  