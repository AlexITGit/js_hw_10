import "skeletonic/dist/skeletonic.min.css";

export { Hw_10_2_1 };

class Hw_10_2_1 {
  delay = (ms) => {
    return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
  };

  logger = (time) => console.log(`Resolved after ${time}ms`);
}
