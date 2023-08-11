export class Hotel {
  id: number;
  name: string;
  type: string;
  rating: number;
  location: string;
  haslounge: boolean;
  hasparking: boolean;
  price: number;
  createdAt?: string;
  imgUrl?: string;
  constructor(
    id: number,
    name: string,
    type: string,
    rating: number,
    location: string,
    haslounge: boolean,
    hasparking: boolean,
    price: number,
    createdAt: string,
    imgUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.createdAt = createdAt;
    this.imgUrl = imgUrl;
    this.rating = rating;
    this.location = location;
    this.haslounge = haslounge;
    this.hasparking = hasparking;
  }
}
// export interface ApiResponse{
//   id: number;
// name: string;
// description: string;

// }
