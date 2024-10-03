document.getElementById('sendBtn').addEventListener('click', function() {
    const comments = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            comments.push(`ההצעה ${index + 1} נבחרה.`);
        }
    });

    const body = comments.join('\n');

    fetch(`https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/issues`, {
        method: 'POST',
        headers: {
            'Authorization': `token YOUR_GITHUB_TOKEN`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: "תגובות חדשות מהאתר",
            body: body,
        })
    })
    .then(response => {
        if (response.ok) {
            alert('התגובות שלך נשלחו בהצלחה! תודה על השתתפותך.');
        } else {
            alert('שגיאה בשמירה של התגובות.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('שגיאה בשמירה של התגובות.');
    });
});
