import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItemContent: {
    name: string;
    description: string;
    imagePath: string;
  };

  @Output() itemSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onSelectItem() {
    this.itemSelected.emit();
  }
}
