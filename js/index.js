function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function modeDark() {
  document.getElementById("dark").style.display = "none";
  document.getElementById("light").style.display = "block";

  const body = document.getElementById("bodyElement");
  body.style.backgroundColor = "#13131f";
  const habilidades = document.getElementById("habilidades");
  habilidades.style.color = "#fff";

  const title = document.getElementById("title");
  title.style.color = "#fff";

  const titleOne = document.getElementById("titleOne");
  titleOne.style.color = "#fff";

  const project = document.getElementById("project");
  project.style.color = "#fff";

  const contact = document.getElementById("contact");
  contact.style.color = "#fff";

  const telefone = document.getElementById("telefoneTitle");
  telefone.style.color = "#fff";

  const telefoneParagrafo = document.getElementById("telefoneParagrafo");
  telefoneParagrafo.style.color = "#a9a9a9";

  const linkedinTitle = document.getElementById("linkedinTitle");
  linkedinTitle.style.color = "#fff";

  const linkedinParagrafo = document.getElementById("linkedinParagrafo");
  linkedinParagrafo.style.color = "#a9a9a9";

  const githubTitle = document.getElementById("githubTitle");
  githubTitle.style.color = "#fff";

  const githubParagrafo = document.getElementById("githubParagrafo");
  githubParagrafo.style.color = "#a9a9a9";
}

function modeLight() {
  document.getElementById("light").style.display = "none";
  document.getElementById("dark").style.display = "block";

  const body = document.getElementById("bodyElement");
  body.style.backgroundColor = "#fff";

  const habilidades = document.getElementById("habilidades");
  habilidades.style.color = "#13131f";
  const title = document.getElementById("title");
  title.style.color = "#13131f";

  const titleOne = document.getElementById("titleOne");
  titleOne.style.color = "#13131f";

  const project = document.getElementById("project");
  project.style.color = "#13131f";

  const contact = document.getElementById("contact");
  contact.style.color = "#13131f";

  const telefone = document.getElementById("telefoneTitle");
  telefone.style.color = "#13131f";

  const telefoneParagrafo = document.getElementById("telefoneParagrafo");
  telefoneParagrafo.style.color = "#13131f";

  const linkedinTitle = document.getElementById("linkedinTitle");
  linkedinTitle.style.color = "#13131f";

  const linkedinParagrafo = document.getElementById("linkedinParagrafo");
  linkedinParagrafo.style.color = "#13131f";

  const githubTitle = document.getElementById("githubTitle");
  githubTitle.style.color = "#13131f";

  const githubParagrafo = document.getElementById("githubParagrafo");
  githubParagrafo.style.color = "#13131f";
}

//scroll Animation

const InitAnimationScroll = () => {
  const section = document.querySelectorAll(".overlay-content");

  const windowHalfSize = window.innerHeight * 0.6;

  const animateScroll = () => {
    section.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowHalfSize < 0;

      if (isSectionVisible) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };
  animateScroll();
  window.addEventListener("scroll", animateScroll);
};

InitAnimationScroll();

// scroll Smooth
const initScrollSmooth = () => {
  const linksInternos = document.querySelectorAll("overlay-content a");

  linksInternos.forEach((item) => {
    const scrollToSection = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      window.scrollTo({
        top: section.offsetTop - 100,
      });
    };
    item.addEventListener("click", scrollToSection);
  });
};
initScrollSmooth();
