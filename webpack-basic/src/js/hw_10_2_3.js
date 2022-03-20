import "skeletonic/dist/skeletonic.min.css";

export { Hw_10_2_3 };

class Hw_10_2_3 {
  constructor() {}

  randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  makeTransaction(transaction) {
    const delay = this.randomIntegerFromInterval(200, 500);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
        if (canProcess) {
          resolve({ id: transaction.id, time: delay });
        } else {
          reject(transaction.id);
        }
      }, delay);
    });
  }

  logSuccess({ id, time }) {
    console.log(`Transaction ${id} processed in ${time}ms`);
  }

  logError(id) {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  }
}
