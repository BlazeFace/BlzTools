import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  ingr: string[];
  tags: any;
  item = {"_id" : "5f3c28311704536acba301d4",
    "name" : "One-pot Swedish Meatball Pasta",
    "ingredients" : [
      "1 lb ground beef",
      "½ cup seasoned bread crumbs",
      "½ onion, finely minced",
      "1 egg",
      "1 tablespoon kosher salt",
      "1 tablespoon pepper",
      "2 tablespoons canola oil",
      "2 cups beef broth",
      "2 cups milk",
      "1 tablespoon worcestershire sauce",
      "4 cups egg noodle",
      "1 cup shredded parmesan cheese",
      "½ cup fresh parsley, chopped"
    ],
    "tags" : [
      "pasta",
      "meat",
      "one pot"
    ],
    "difficulty" : "easy",
    "link" : "https://tasty.co/recipe/one-pot-swedish-meatball-pasta",
    "desc" : "A thick sauce with wide noodles"}

  constructor() {this.ingr = ["1lb ground beef", "1/2 onion"]
  this.tags = ["pasta", "meat", "one pot"];
  }

  ngOnInit(): void {
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }
}


