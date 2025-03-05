(function () {
    // Apply styles to box headers
    function applyToBoxHeaders() {
      let boxHeaders = document.querySelectorAll(".box-header");
      if (boxHeaders.length > 0) {
        boxHeaders.forEach(header => {
          header.classList.add("bg-cyan-600", "border-b", "border-gray-300", "bg-slate-600", "flex", "items-center", "gap-2", "px-5", "rounded-t-2xl");
          header.classList.remove("box-header");
        });
      }
  
      // Apply styles to box titles
      let boxtitle = document.querySelectorAll(".box-title");
      boxtitle.forEach(title => {
        title.classList.add("text-white", "text-xl", "font-black");
      });
  
      // Apply styles to box content
      let boxcontent = document.querySelectorAll(".box-primary");
      boxcontent.forEach(content => {
        content.classList.add("rounded-t-2xl","bg-white","mb-5","rounded-b-xl");
        content.classList.remove("box");
        content.classList.remove("box-primary");
      });
    }
  
    // Apply styles to box headers on load
    applyToBoxHeaders();
  })();
  