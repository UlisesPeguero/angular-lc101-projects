import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Photo/Image Section Title Here";
  image1 = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  image2 =
    "https://education.launchcode.org/intro-to-professional-web-dev/_static/lc-ed-logo.png";
  image3 =
    "https://education.launchcode.org/intro-to-professional-web-dev/_static/lc-ed-logo.png";

  constructor() {}

  ngOnInit() {}
}
