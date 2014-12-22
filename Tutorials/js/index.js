window.onload = function () {
  
  // Get the buttons.
  var styledModalBtn = document.getElementById('launchStyledModal');
  var italianoBtn = document.getElementById('italiano');
  var closeBtns = document.querySelectorAll('.close');
  
  
  // Get the dialogs.
  var styledModal = document.getElementById('styledModal');
  var italiano = document.getElementById('styledModal');

  styledModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    styledModal.showModal();
  });
  
  italianoBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    italiano.showModal();
  });
  
  for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function(e) {
      this.parentNode.close();
    });
  }
  
  
};
