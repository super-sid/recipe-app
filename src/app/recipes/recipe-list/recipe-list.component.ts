import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipes.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() loadedSelectItem = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Dosa",
      "A South Indian Dish",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dosa_and_ghee.jpg/800px-Dosa_and_ghee.jpg"
    ),
    new Recipe(
      "Dosa",
      "A South-_East Indian Dish",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dosa_and_ghee.jpg/800px-Dosa_and_ghee.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}

  onItSelected(selectItem: Recipe) {
    this.loadedSelectItem.emit(selectItem);
  }
}
