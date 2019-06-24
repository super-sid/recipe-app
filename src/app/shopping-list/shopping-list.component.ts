import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Sambhar", 800),
    new Ingredient("Masala", 900)
  ];

  constructor() {}

  ngOnInit() {}

  onAddRecipe(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
