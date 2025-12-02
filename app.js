const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function formatTanggal() {
    const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const bulan = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const now = new Date();
    return `${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;
}

addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text === '') {
        alert('Tulis dulu tugasnya!');
        return;
    }

    const card = document.createElement('div');
    card.className = 'task-card';
    card.innerHTML = `
        <div class="task-info">
            <p class="task-text">${text}</p>
            <small>Ditambahkan pada: ${formatTanggal()}</small>
        </div>
        <div class="task-actions">
            <button class="edit">Edit</button>
            <button class="delete">Hapus</button>
        </div>
    `;

    // Event hapus
    card.querySelector('.delete').addEventListener('click', () => {
        card.remove();
    });

    // Event edit
    card.querySelector('.edit').addEventListener('click', () => {
        const newText = prompt('Edit tugas:', text);
        if (newText !== null && newText.trim() !== '') {
            card.querySelector('.task-text').textContent = newText.trim();
        }
    });

    taskList.appendChild(card);
    taskInput.value = '';
});
