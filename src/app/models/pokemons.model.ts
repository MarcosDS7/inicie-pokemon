export class Pokemon {
  name: string;
  description: string;
  type: string[];
  image: string;
  height: number;
  weight: number;
  cod: number;
  data: number[];

  constructor(
    name: string,
    description: string,
    type: string[],
    image: string,
    height: number,
    weight: number,
    cod: number,
    data: number[]
  ) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.image = image;
    this.height = height;
    this.weight = weight;
    this.cod = cod;
    this.data = data;
  }
}
