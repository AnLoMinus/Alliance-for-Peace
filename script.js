document.getElementById('sendBtn').addEventListener('click', function() {
    const comments = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Collect selected comments
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            comments.push(`ההצעה ${index + 1} נבחרה.`);
        }
    });

    const body = comments.join('\n');

    // GitHub API call to create a new issue
    fetch(`https://api.github.com/repos/AnLoMinus/Alliance-for-Peace/issues`, {
        method: 'POST',
        headers: {
            'Authorization': `token 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`,
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
