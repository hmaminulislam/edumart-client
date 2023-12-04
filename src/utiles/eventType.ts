export interface IEvent {
  _id: number;
  image: string;
  price: number;
  features: string[];
  status: boolean;
  rating: number;
  quantity?: number;

  name: string;
  img: string;
  location: string;
  date: string;
  time: string;
  organizer: {
    name: string;
    phone: string;
    email: string;
    website: string;
  };
  venue: {
    name: string;
    phone: string;
    website: string;
  };
  eventAbout: string;
  eventDuring: string;
  programs: { title: string }[];
  mapDirection: string;
}
