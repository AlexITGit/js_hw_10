import hw_10_1 from "../templates/hw_10_1.handlebars";
import "skeletonic/dist/skeletonic.min.css";
import "../css/hw_10_1.css";

export { Hw_10_1 };

class Hw_10_1 {
  constructor(timeout) {
    this.refs = {
      root: document.querySelector("#root"),
    };
    this.colors = [
      "red",
      "green",
      "violet",
      "gray",
      "blue",
      "yellow",
      "black",
      "brown",
      "pink",
    ];
    this.min = 0;
    this.max = this.colors.length - 1;
    this.intervalColorChange = undefined;
    this.timeout = timeout;
  }

  randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  changeColor = () => {
    let color = this.randomIntegerFromInterval(this.min, this.max);
    this.refs.body.style.backgroundColor = this.colors[color];
  };

  onstartBtnClick = () => {
    this.intervalColorChange = setInterval(
      () => this.changeColor(),
      this.timeout
    );
    this.refs.startBtn.setAttribute("disabled", true);
    this.refs.stopBtn.removeAttribute("disabled");
  };

  onstopBtnClick = () => {
    clearInterval(this.intervalColorChange);
    this.refs.body.style.backgroundColor = "white";
    this.refs.startBtn.removeAttribute("disabled");
    this.refs.stopBtn.setAttribute("disabled", true);
  };

  loadlisteners() {
    this.refs.startBtn.addEventListener("click", this.onstartBtnClick);
    this.refs.stopBtn.addEventListener("click", this.onstopBtnClick);
  }

  init() {
    this.refs.root.insertAdjacentHTML("beforeend", hw_10_1());
    this.refs.body = document.querySelector("body");
    this.refs.startBtn = document.querySelector('button[data-action="start"]');
    this.refs.stopBtn = document.querySelector('button[data-action="stop"]');
    this.refs.stopBtn.setAttribute("disabled", true);
    this.loadlisteners();
  }
}
