
export interface Tour {
  id: number;
  title: string;
  location: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  theme: string;
  activities: string[];
  features: string[];
  vehicle: string;
  startTime: string;
  groupSize: number;
}

export const tours: Tour[] = [
  {
    id: 1,
    title: "Phi phi khai islands tour",
    location: "Rassada Pier/Rass",
    price: 1400,
    originalPrice: 1820,
    rating: 4.3,
    reviews: 1,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    category: "Tours",
    theme: "Island Tour",
    activities: ["Swimming"],
    features: ["Transfer"],
    vehicle: "Yacht",
    startTime: "17:00",
    groupSize: 40
  },
  {
    id: 2,
    title: "Phi phi khai islands tour",
    location: "Turkey",
    price: 2000,
    originalPrice: 3000,
    rating: 4.4,
    reviews: 2,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    category: "Tickets",
    theme: "Land Tour",
    activities: ["Swimming"],
    features: ["Halal Food"],
    vehicle: "Speedboat",
    startTime: "18:00",
    groupSize: 30
  },
  {
    id: 3,
    title: "Phi phi khai islands tour",
    location: "Spain",
    price: 2890,
    originalPrice: 3900,
    rating: 4.5,
    reviews: 3,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    category: "Rent",
    theme: "Land Tour",
    activities: ["Running"],
    features: ["Halal Food"],
    vehicle: "Safari",
    startTime: "12:00",
    groupSize: 50
  },
  {
    id: 4,
    title: "Phi phi khai islands tour",
    location: "Turkey",
    price: 2999,
    originalPrice: 3399,
    rating: 4.6,
    reviews: 4,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    category: "Transfer",
    theme: "Land Tour",
    activities: ["Elephant Care"],
    features: ["Halal Food"],
    vehicle: "Catamaran",
    startTime: "14:00",
    groupSize: 30
  },
  {
    id: 5,
    title: "Phi phi khai islands tour",
    location: "Greece",
    price: 4828,
    originalPrice: 3728,
    rating: 4.5,
    reviews: 5,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    category: "Tours",
    theme: "Safari",
    activities: ["Snorkeling"],
    features: ["Vegetarian Food"],
    vehicle: "Speedcatamaran",
    startTime: "20:00",
    groupSize: 34
  }
];
