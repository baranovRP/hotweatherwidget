export class SocialInfo {

  public title: string;
  public img: string;
  public followers: number;
  public following: number;

  constructor(
    title: string,
    img: string,
    followers: number,
    following: number
  ) {
    this.title = title;
    this.img = img;
    this.followers = followers;
    this.following = following;
  }
}
