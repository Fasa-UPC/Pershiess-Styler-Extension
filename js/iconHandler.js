(function () {
    // Replace specific icons with custom SVGs
    function replaceIcon(iconClass, newSvg) {
      let oldIcon = document.querySelector(iconClass);
      if (oldIcon) {
        let newIcon = document.createElement("div");
        newIcon.innerHTML = newSvg;
        oldIcon.replaceWith(newIcon.firstChild);
      }
    }
  
    // Replace icons on the page
    replaceIcon("i.fa.fa-link", `<svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="30" height="30" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4z"/><path stroke-linecap="round" d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"/></g></svg>`);
    replaceIcon("i.fa.fa-link", `<svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="30" height="30" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M18 6H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Zm17-8a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm5 8H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Z"/></svg>`);
    replaceIcon("i.fa.fa-desktop", `<svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M20 17c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H9.5c.3.6.5 1.3.5 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9c0-1.1.9-2 2-2zM8 4c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m9 2h2v8h-2zm-3 4h2v4h-2zm-3 0h2v4h-2z"/></svg>`);
    replaceIcon("i.fa.fa-list", `<svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="30" height="30" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M5.28 2.22a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0M6.5 3.75c0 .414.336.75.75.75h7a.75.75 0 0 0 0-1.5h-7a.75.75 0 0 0-.75.75m.75 3.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm-1.97.03a.75.75 0 0 0-1.06-1.06L2.75 7.69l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0 3.19a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0m1.97 1.03a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>`);
  
    // Replace Header Icons:
    // let iconpower = document.querySelectorAll(".Power");
    //   iconpower.forEach(content => {
    //     content.classList.add("Power2");
    //     content.classList.remove("Power");
    //   });
  
  
  })();
  