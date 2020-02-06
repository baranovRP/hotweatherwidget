export class Weather {

  public title: string;
  public icon: string;
  public water: number;
  public temperature: number;

  constructor(
    title: string,
    icon: string,
    water: number,
    temperature: number
  ) {
    this.title = title;
    this.icon = icon;
    this.water = water;
    this.temperature = temperature;
  }
}
