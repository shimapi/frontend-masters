import images from "./images";


let socialName: string;
let socialImage: string;

switch (icon) {
  case "Facebook":
    socialImage = images.facebook;
    socialName = "facebook";
    break;
  case "Twitter":
    socialImage = images.twitter;
    socialName = "twitter";
    break;
  case "Instagram":
    socialImage = images.instagram;
    socialName = "instagram";
    break;
  case "Youtube":
    socialImage = images.youtube;
    socialName = "youtube";
    break;
  default:
    socialImage = "";
    socialName = "";
    break;
}