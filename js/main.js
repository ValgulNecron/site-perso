function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      console.log("Copied to clipboard: " + text);
    }, function(err) {
      console.error("Could not copy text: ", err);
    });
  }
