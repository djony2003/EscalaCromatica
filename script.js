document.addEventListener("DOMContentLoaded", function() {
    showIntervals();
});

function showIntervals() {
    const noteOrder = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const intervals = [
        "Primeira (Uníssono)",
        "Segunda menor (1 semitom)",
        "Segunda maior (2 semitons)",
        "Terça menor (3 semitons)",
        "Terça maior (4 semitons)",
        "Quarta justa (5 semitons)",
        "Quinta diminuta (6 semitons)",
        "Quinta justa (7 semitons)",
        "Sexta menor (8 semitons)",
        "Sexta maior (9 semitons)",
        "Sétima menor (10 semitons)",
        "Sétima maior (11 semitons)",
        "Oitava (12 semitons)"
    ];

    const selectedNote = document.getElementById("noteSelect").value;
    const startIndex = noteOrder.indexOf(selectedNote);
    let resultHTML = `<h3>Intervalos partindo de ${selectedNote}:</h3><table><tr>`;

    for (let i = 0; i < intervals.length; i++) {
        resultHTML += `<th>${intervals[i]}</th>`;
    }

    resultHTML += `</tr><tr>`;

    for (let i = 0; i < intervals.length; i++) {
        const noteIndex = (startIndex + i) % noteOrder.length;
        resultHTML += `<td>${noteOrder[noteIndex]}</td>`;
    }

    resultHTML += `</tr></table>`;
    document.getElementById("result").innerHTML = resultHTML;
}
