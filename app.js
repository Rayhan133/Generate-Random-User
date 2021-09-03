const app = Vue.createApp({
  data() {
    return {
      firstName: "Aubri",
      lastName: "Farias",
      username: "aubri262",
      email: "aubrifarias@gmail.com",
      city: "Conventry",
      country: "United Kingdom",
      postcode: 37463,
      state: "Elazığ",
      cell: "081-314-1041",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.username = results[0].login.username;
      this.email = results[0].email;
      this.city = results[0].location.city;
      this.country = results[0].location.country;
      this.postcode = results[0].location.postcode;
      this.state = results[0].location.state;
      this.cell = results[0].cell;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
