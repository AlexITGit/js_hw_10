import "../css/styleTimer.css";

import timerRender from "../templates/timerRender.handlebars";

export { Timer };

class Timer {
  constructor(promotionDate) {
    this.promotionDate = promotionDate;
    this.refs = {
      root: document.querySelector("#root"),
    };
  }

  setPromotion() {
    let promitionTimerId = setInterval(() => {
      let dist = this.promotionDate - Date.now();

      let days = Math.floor(dist / 1000 / 60 / 60 / 24);
      let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((dist % (1000 * 60)) / 1000);
      this.refs.days.innerText = days;
      this.refs.hours.innerText = hours;
      this.refs.mins.innerText = minutes;
      this.refs.secs.innerText = seconds;

      if (dist <= 0) {
        this.refs.title.innerText = "Акция закончилась";
        this.refs.days.innerText = 0;
        this.refs.hours.innerText = 0;
        this.refs.mins.innerText = 0;
        this.refs.secs.innerText = 0;
        clearInterval(promitionTimerId);
      }
    }, 1000);
  }

  init() {
    this.refs.root.insertAdjacentHTML("beforeend", timerRender());
    this.refs.title = document.querySelector(".countdown-title");
    this.refs.days = document.querySelector('span[data-value="days"]');
    this.refs.hours = document.querySelector('span[data-value="hours"]');
    this.refs.mins = document.querySelector('span[data-value="mins"]');
    this.refs.secs = document.querySelector('span[data-value="secs"]');
    this.setPromotion();
  }
}
