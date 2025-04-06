document.addEventListener("DOMContentLoaded", function() {
    const enlaces = {
        con: "https://campusvirtual.unm.edu.ar/moodle/mod/forum/view.php?id=365957",
        Geo: "https://www.geogebra.org/classic?lang=es",
        Req: "https://drive.google.com/file/d/1OjLunEFZ8VwrUmWhlOEmdlTYVoPUjepR/view?usp=sharing"
    };

    Object.keys(enlaces).forEach(clase => {
        document.querySelectorAll(`.${clase}`).forEach(elemento => {
            elemento.href = enlaces[clase];
        });
    });

    const ytVideos = document.querySelectorAll("video.yt");

    ytVideos.forEach((el, index) => {
        const url = el.textContent.trim();
        const id = `yt-auto-${index}`;

        el.textContent = "";
        el.id = id;
        el.classList.add("video-js", "vjs-default-skin", "vjs-fluid");
        el.setAttribute("controls", true);

        const setup = {
            techOrder: ["youtube"],
            plugins: {
                chromecast: {}
            },
            sources: [{
                type: "video/youtube",
                src: url
            }],
            youtube: {
                modestbranding: 1,
                rel: 0
            },
            fluid: true,
            aspectRatio: "16:9"
        };

        el.setAttribute("data-setup", JSON.stringify(setup));
        videojs(id);
    });
});

