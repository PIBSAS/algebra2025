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

    const isMobile = window.innerWidth <= 768;
    const ytVideos = document.querySelectorAll("video.yt");

    ytVideos.forEach((el, index) => {
        const url = el.textContent.trim();
        const id = `yt-auto-${index}`;

        el.textContent = "";
        el.id = id;
        el.classList.add("video-js", "vjs-default-skin");
        el.setAttribute("controls", true);
        el.setAttribute("width", "640");
        el.setAttribute("height", "360");

        const setup = {
            techOrder: ["youtube"],
            sources: [{
                type: "video/youtube",
                src: url
            }],
            youtube: {
                modestbranding: 1,
                rel: 0
            },
            ...(isMobile ? {
                fluid: true,
                aspectRatio: "16:9"
            } : {})
        };

        el.setAttribute("data-setup", JSON.stringify(setup));
        const player = videojs(id);
        player.ready(function () {
            const el = this.el();
            el.style.borderRadius = "16px";
            el.style.overflow = "hidden";

            const iframe = el.querySelector("iframe");
            if (iframe) {
                iframe.style.borderRadius = "16px";
            }
        });
    });
    document.querySelectorAll("iframe.d").forEach(iframe => {
        const id = iframe.textContent.trim();
        iframe.textContent = ""; // limpiar contenido
        iframe.src = `https://drive.google.com/file/d/${id}/preview`;
        iframe.setAttribute("allow", "autoplay");
    });
});

