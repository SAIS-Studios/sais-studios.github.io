(() => {
  const storeURL = "https://apps.apple.com/app/id6761793653";
  let timer;
  const cancel = () => clearTimeout(timer);
  const fallback = () => { if (!document.hidden) window.location.replace(storeURL); };
  // iOS intercepts the HTTPS universal link before this page when associated.
  // Browsers cannot reliably detect installed apps; keep both explicit actions.
  if (/iPhone|iPad|iPod/.test(navigator.userAgent)) timer = setTimeout(fallback, 1800);
  else document.getElementById("status").textContent = "Available for iPhone. Choose the App Store to download.";
  document.getElementById("open").addEventListener("click", () => {
    cancel();
    document.getElementById("status").textContent = "Opening REPPEN…";
    timer = setTimeout(fallback, 2200);
  });
  document.getElementById("store").addEventListener("click", cancel);
  document.addEventListener("visibilitychange", () => { if (document.hidden) cancel(); });
  window.addEventListener("pagehide", cancel);
})();
