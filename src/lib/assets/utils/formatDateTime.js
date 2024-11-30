/**
 * @param {string} date
 */

export function formatDateTime(date) {
	if (typeof date !== 'string') return;

	return new Date(date)
		.toLocaleString('ru-RU', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		})
		.split(',')
		.join('');
}
