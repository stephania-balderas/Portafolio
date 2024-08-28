let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #783864;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ae6997;">Soy estudiante de ingeniería mecatrónica del Instituto Tecnológico de Querétaro.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
