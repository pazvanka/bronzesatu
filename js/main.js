// loading awal
window.addEventListener('load', function () {
    $(".preloader").fadeOut();
});

const myModalInvitation = new bootstrap.Modal('#invitationModal');
if (window.screen.width <= 960) {
    myModalInvitation.show();
}

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('.btn-volume').css({ 'left': '-50px' });
    } else {
        $('.btn-volume').css({ 'left': '20px' });
    }
});

function invitationAudio() {
    var el = document.getElementById("myAudio");
    if (el.paused == true) {
        el.play();
        $('.btn-volume').html('<i class="fa-solid fa-volume-high"></i>');
    } else {
        el.pause();
        $('.btn-volume').html('<i class="fa-solid fa-volume-xmark"></i>');
    }
}

// gallery
jQuery("#animated-thumbnails-gallery").justifiedGallery({
    captions: false,
    lastRow: "hide",
    rowHeight: 180,
    margins: 5
}).on("jg.complete", function () {
    window.lightGallery(
        document.getElementById("animated-thumbnails-gallery"), {
        autoplayFirstVideo: false,
        pager: false,
        controls: false,
        zoom: false,
        download: false,
        rotate: false,
        showCloseIcon: true,
        galleryId: "nature",
        plugins: [lgZoom, lgThumbnail],
        mobileSettings: {
            controls: false,
            showCloseIcon: true,
            download: false,
            rotate: false
        }
    }
    );
});

// aos
function aos_init() {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
    });
}
aos_init();

// Wedding Gift
function weddingGift(typeGift) {
    var showGift = "";
    if (typeGift == "gift") {
        showGift = '<p class="mb-3"><strong>ALAMAT PENERIMA</strong></p>' +
            '<p class="mb-3">Nama Lengkap<br>085123456789</p>' +
            '<p class="mb-3">Jl. Magelang – Yogyakarta KM.6,5,<br>Kutu Tegal, Sinduadi,<br>Kec. Mlati, Kab. Sleman,<br>Daerah Istimewa Yogyakarta 55284</p>' +
            '<button class="btn btn-white btn-sm align-self-center " type="button" onclick="copyText(' + "'Jl. Magelang – Yogyakarta KM.6,5, Kutu Tegal, Sinduadi, Kec. Mlati, Kab. Sleman, Daerah Istimewa Yogyakarta 55284'" + ')"><i class="fas fa-copy"></i> Copy Alamat</button>';
    } else if (typeGift == "wallet1") {
        showGift = '<p class="mb-3"><strong>BANK BCA (014)</strong></p>' +
            '<p class="mb-3">Account Number : <strong>012345678913</strong></p>' +
            '<button class="btn btn-white btn-sm mb-3" type="button" onclick="copyText(' + "'012345678913'" + ')"><i class="fas fa-copy"></i> Copy Number</button>' +
            '<p>a/n Nama Mempelai</p>';
    }
    document.getElementById('showGift').innerHTML = showGift;
}

function copyText(url) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    $.notify("successfully copied", "success");
}