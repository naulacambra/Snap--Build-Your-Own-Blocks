window.onload = function () {
  
  // Get the buttons.
  var styledModalBtn = document.getElementById('launchStyledModal');
  var espanolBtn = document.getElementById('launchEspanol');
  var closeBtns = document.querySelectorAll('.close');
  
  
  // Get the dialogs.
  var styledModal = document.getElementById('styledModal');
  var espanol = document.getElementById('espanol');

  styledModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    styledModal.showModal();
  });
  
  espanolBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    espanol.showModal();
  });
  
  for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function(e) {
      this.parentNode.close();
    });
  }
  
  
};
