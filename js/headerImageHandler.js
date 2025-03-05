(function () {
    // Replace image URLs
    const setImageSrc = (id, src) => {
        const element = document.getElementById(id);
        if (element) {
            element.src = chrome.runtime.getURL(src);
        }
    };
    setImageSrc("Banner1_IMG1", "images/header-cover.jpg");
    setImageSrc("banner_IMG1", "images/header-cover.jpg");
    setImageSrc("Banner1_IMG2", "images/header-cover2.jpg");
    setImageSrc("banner_IMG2", "images/header-cover2.jpg");

    // Replace background image URLs
    const newImageUrl = chrome.runtime.getURL("images/black.jpg");
  
    // Replace inline styles for background images
    document.querySelectorAll("[style*='/sess/LocalImage/bg.jpg']").forEach(el => {
      el.style.backgroundImage = `url('${newImageUrl}')`;
    });
  
    // Replace background images in CSS rules
    Array.from(document.styleSheets).forEach(sheet => {
      try {
        Array.from(sheet.cssRules).forEach(rule => {
          if (rule.style && rule.style.backgroundImage.includes("/sess/LocalImage/bg.jpg")) {
            rule.style.backgroundImage = `url('${newImageUrl}')`;
          }
        });
      } catch (error) {
        //console.warn("Error processing stylesheet:", error);
      }
    });
  })();
  