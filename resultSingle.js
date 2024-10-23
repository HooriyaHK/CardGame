// not needed 

document.addEventListener('DOMContentLoaded', function() {
    
    const resultMessage = localStorage.getItem('gameResult') || "No Result";

    
    document.getElementById('resultMessage').textContent = resultMessage;

    
    document.getElementById('replayButton').addEventListener('click', function() {
        window.location.href = 'home.html';
    });
});

