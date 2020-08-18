var modalInfo = {
  1: {
    title: "Project 1",
    info: "...",
    link: "#",
    github: "#",
  },
  2: {
    title: "Project 2",
    info: "...",
    link: "#",
    github: "#",
  },
  3: {
    title: "Project 3",
    info: "...",
    link: "#",
    github: "#",
  },
  4: {
    title: "Project 4",
    info: "....",
    link: "#",
    github: "#",
  },
  5: {
    title: "Project 5",
    info: "...",
    link: "#",
    github: "#",
  },
  6: {
    title: "Project 6",
    info: "...",
    link: "#",
    github: "#",
  },
};

// Get the modal
var modal = document.getElementById("preview");

// button that opens the modal
var btn = document.getElementsByClassName("button");

// <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var project = btn[i].parentElement;
    openModal(project);
  });
}

function openModal(project) {
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img) {
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("live").onclick = function () {
    window.open(modalInfo[id].link, "_blank");
  };
  document.getElementById("github").onclick = function () {
    window.open(modalInfo[id].github, "_blank");
  };
}

// close the modal
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(".carousel-client").bxSlider({
  auto: true,
  slideWidth: 234,
  minSlides: 2,
  maxSlides: 5,
  controls: false,
});

$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        50,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#menu-center a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $("#menu-center ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
