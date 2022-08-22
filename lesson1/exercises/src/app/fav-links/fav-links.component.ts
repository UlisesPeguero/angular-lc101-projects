import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-links",
  templateUrl: "./fav-links.component.html",
  styleUrls: ["./fav-links.component.css"],
})
export class FavLinksComponent implements OnInit {
  favLinks = [
    {
      url: "https://angular.io",
      name: "Angular",
    },
    {
      url: "https://launchcode.org",
      name: "LaunchCode",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
