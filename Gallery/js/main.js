function buildImage(url) {
    const $image = document.createElement("img");
    $image.src = url;
    return $image;
  }
  
  function buildOriginalUrl(thumbUrl) {
    return thumbUrl.replace("thumbs", "originals").replace("300x200", "900x600");
  }
  
  function main() {
    // console.log("main");
    // 1. Register handler for "click" event
    window.addEventListener("click", function handleClick(evt) {
      if (evt.target.tagName.toLowerCase() === "img") {
        // 2. Get URL of clicked image
        const thumbUrl = evt.target.src;
  
        // 3. Build URL for zoomed image
        const originalUrl = buildOriginalUrl(thumbUrl);
        // console.log("click", { thumbUrl, originalUrl });
  
        // 4. Render zoomed image
        const $original = document.querySelector("#original");
        const $image = buildImage(originalUrl);
  
        $original.firstElementChild?.remove();
        $original.append($image);
      }
    });
  }
  
  window.addEventListener("load", main);