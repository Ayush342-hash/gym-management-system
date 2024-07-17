document.addEventListener('DOMContentLoaded', function() {
    const signupModal = document.getElementById('signup-modal');
    const closeModal = document.getElementsByClassName('close')[0];

    closeModal.onclick = function() {
        signupModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == signupModal) {
            signupModal.style.display = 'none';
        }
    }
});
