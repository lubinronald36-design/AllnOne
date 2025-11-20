// Add event listener to each question
document.querySelectorAll('.question').forEach((question) => {
	question.addEventListener('click', () => {
		// Toggle the answer visibility
		const answer = question.nextElementSibling;
		answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
	});
});

// Initialize answer visibility
document.querySelectorAll('.answer').forEach((answer) => {
	answer.style.display = 'block';
});
