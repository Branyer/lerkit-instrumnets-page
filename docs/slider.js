const slides = document.querySelectorAll(".slide"); //array de imagenes

const times = [5000, 5000, 3000, 6000, 4000, 3000]; //array de tiempos en milisegundos

let selected = "";
let next = "";
let previous = "";
let index = 0;

const direction = 0;
// 0 : derecha izquierda
// 1 : izquierda derecha
// 2 : arriba abajo
// 3 : abajo arriba

switch (direction) {
  case 0:
    selected += "transform: translateX(0%)"; //derecha izquierda
    next = "transform: translateX(-110%);";
    previous = "transform: translateX(110%)";
    break;
  case 1:
    selected += "transform: translateX(0%)"; // izquierda derecha
    next = "transform: translateX(110%);";
    previous = "transform: translateX(-110%)";
    break;
  case 2:
    selected = "transform: translateY(0%)"; //arriba abajo
    next = "transform: translateY(-110%);";
    previous = "transform: translateY(110%)";
    break;
  case 3:
    selected = "transform: translateY(0%)"; //abajo arriba
    next = "transform: translateY(110%);";
    previous = "transform: translateY(-110%)";
    break;
}

//manejando el inicio del slide
slides.item(0).style = selected;
slides.item(1).style = next;
slides.item(slides.length - 1).style = previous;

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

slideWithCustomTime = async () => {
  while (true) {
    await wait(times[index]);

    if (index + 1 === slides.length) {
      slides.item(index).classList.remove("next", "selected");
      slides.item(index).classList.add("previous");
      slides.item(index).style = previous;

      slides.item(1).classList.remove("previous", "selected");
      slides.item(1).classList.add("next");
      slides.item(1).style = next;

      slides.item(0).classList.remove("previous", "next");
      slides.item(0).classList.add("selected");
      slides.item(0).style = selected;
      index = 0;
    } else if (index + 2 === slides.length) {
      slides.item(index).classList.remove("next", "selected");
      slides.item(index).classList.add("previous");
      slides.item(index).style = previous;

      slides.item(0).classList.remove("previous", "selected");
      slides.item(0).classList.add("next");
      slides.item(0).style = next;

      index++;
      slides.item(index).classList.remove("previous", "next");
      slides.item(index).classList.add("selected");
      slides.item(index).style = selected;
    } else {
      slides.item(index).classList.remove("next", "selected");
      slides.item(index).classList.add("previous");
      slides.item(index).style = previous;

      slides.item(index + 2).classList.remove("previous", "selected");
      slides.item(index + 2).classList.add("next");
      slides.item(index + 2).style = next;

      index++;
      slides.item(index).classList.remove("previous", "next");
      slides.item(index).classList.add("selected");
      slides.item(index).style = selected;
    }
  }
};

slideWithCustomTime();
