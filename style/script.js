document.querySelectorAll(".project").forEach((project) => {
  project.onclick = (e) => {
    console.log(project);
    document.querySelector(".display h3").innerText =
      project.querySelector("h3").innerTxt;
    document.querySelector(".display p").innerText =
      project.querySelector("p").innerTxt;
    document.querySelector(".display img").src =
      project.querySelector("img").src;
    document.querySelector(".display a").href = project.querySelector("a").href;
  };
});
