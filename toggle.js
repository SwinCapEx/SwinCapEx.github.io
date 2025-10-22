
  document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll(".project-title");

    titles.forEach(title => {
      title.addEventListener("click", () => {
        const details = title.nextElementSibling;
        details.style.display = details.style.display === "none" ? "block" : "none";
      });
    });
  });

