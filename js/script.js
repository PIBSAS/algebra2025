const $Consultas = "https://campusvirtual.unm.edu.ar/moodle/mod/forum/view.php?id=365957";

document.querySelectorAll(".con").forEach(link => {
    link.href = $Consultas;
});
