import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
  item2: Recipe = {id : '5f3c28311704536acba301d4',
    name : 'One-pot Swedish Meatball Pasta',
    ingredients : [
      '1 lb ground beef',
      '½ cup seasoned bread crumbs',
      '½ onion, finely minced',
      '1 egg',
      '1 tablespoon kosher salt',
      '1 tablespoon pepper',
      '2 tablespoons canola oil',
      '2 cups beef broth',
      '2 cups milk',
      '1 tablespoon worcestershire sauce',
      '4 cups egg noodle',
      '1 cup shredded parmesan cheese',
      '½ cup fresh parsley, chopped'
    ],
    tags : [
      'pasta',
      'meat',
      'one pot'
    ],
    difficulty : 2,
    link : 'https://tasty.co/recipe/one-pot-swedish-meatball-pasta',
    desc : 'A thick sauce with wide noodles'};

  item1: Recipe = {id : '5f3c28311704536acba301d4',
    name : 'One-pot Swedish Meatball Pasta',
    ingredients : [
      '1 lb ground beef',
      '½ cup seasoned bread crumbs',
      '½ onion, finely minced',
      '1 egg',
      '1 tablespoon kosher salt',
      '1 tablespoon pepper',
      '2 tablespoons canola oil',
      '2 cups beef broth',
      '2 cups milk',
      '1 tablespoon worcestershire sauce',
      '4 cups egg noodle',
      '1 cup shredded parmesan cheese',
      '½ cup fresh parsley, chopped'
    ],
    tags : [
      'pasta',
      'meat',
      'one pot'
    ],
    difficulty : 0,
    link : 'https://tasty.co/recipe/one-pot-swedish-meatball-pasta',
    desc : 'A thick sauce with wide noodles'};

    items: Recipe[] = [this.item1, this.item2];
  constructor() {
  }

  ngOnInit(): void {
  }
  goToLink(url: string){
    window.open(url, '_blank');
  }

  getRecipes(difficulty: number){
    const recipes: Recipe[] = [];
    for (const item of this.items) {
        if (item.difficulty === difficulty){
          recipes.push(item);
        }
    }
    return recipes;
  }

}

class Recipe { difficulty: number;
  name: string;
  link: string;
  ingredients: string[];
  id: string;
  tags: string[];
  desc: string; }

enum Difficulty {
  Easy,
  Medium = 1,
  Hard =  2
  }


