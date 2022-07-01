const profile = {
  name: "Dron",
  age: 25,
  coordinates: {
    lat: 1,
    lng: 20,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

// const age = profile.age
const { age }: { age: number } = profile;

// const {
//   coordinates: { lat, lng },
// }: { coordinates: { lat: number; lng: number } } = profile;

const {
  coordinates: { lat, lng },
}: { coordinates: { lat: number; lng: number } } = profile;
