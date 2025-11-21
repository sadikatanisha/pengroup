import { faker } from "@faker-js/faker";

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  course: string;
  quote: string;
  image: string;
}

export const generateFakeTestimonials = (count: number = 4): Testimonial[] => {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 25 }),
    course: faker.helpers.arrayElement([
      "Graphic Design",
      "Fashion",
      "Photography",
      "Marketing",
      "Business",
    ]),
    quote: faker.lorem.words(4).toUpperCase(),

    image: `https://images.unsplash.com/photo-${faker.helpers.arrayElement([
      "1544005313-94ddf0286df2",
      "1506794778202-cad84cf45f1d",
      "1534528741775-53994a69daeb",
      "1500648767791-00dcc994a43e",
      "1535713875002-d1d0cf377fde",
      "1522075469851-efc02093ccca",
      "1438761681033-6461ffad8d80",
    ])}?w=600&q=80`,
  }));
};
