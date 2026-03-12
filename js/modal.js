document.addEventListener('DOMContentLoaded', function () {
  var modalEl = document.getElementById('pageModal');
  if (!modalEl) return;
  var iframe = document.getElementById('pageModalIframe');
  var bsModal = null;

  function openInIframe(href) {
    if (!iframe) return;
    iframe.src = href;
    if (!bsModal) bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();

    // Clear iframe when modal is hidden to stop media/scripts
    modalEl.addEventListener('hidden.bs.modal', function () {
      iframe.src = '';
    }, { once: true });
  }

  document.querySelectorAll('a.modal-iframe').forEach(function (link) {
    link.addEventListener('click', function (e) {
      // If it's a normal left click without modifier keys
      if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        var href = link.getAttribute('href');
        if (href) openInIframe(href);
      }
    });
  });
});