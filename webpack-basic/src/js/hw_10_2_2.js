import "skeletonic/dist/skeletonic.min.css";

export { Hw_10_2_2 };

class Hw_10_2_2 {
  constructor() {
    this.updatedUsers;
  }

  toggleUserState(users, userName) {
    return (this.updatedUsers = new Promise((resolve) => {
      resolve(
        users.map((user) =>
          user.name === userName ? { ...user, active: !user.active } : user
        )
      );
    }));
  }

  logger() {
    this.updatedUsers.then((res) => {
      console.table(res);
    });
  }
}
