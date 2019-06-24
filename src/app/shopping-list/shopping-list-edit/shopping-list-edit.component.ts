import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @Output() addedIngredient = new EventEmitter<Ingredient>();
  // @Output() deletedIngredient = new EventEmitter<{
  //   nameValue: string;
  // }>();
  // @Output() editedIngredient = new EventEmitter<{
  //   nameValue: string;
  // }>();

  @ViewChild("inputName") nameInput: ElementRef;
  @ViewChild("amountVal") valAmount: ElementRef;
  constructor() {}

  ngOnInit() {}

  addToList() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmt = this.valAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmt);
    this.addedIngredient.emit(newIngredient);
  }

  // delFromList() {
  //   this.deletedIngredient.emit({
  //     nameValue: this.nameInput.nativeElement.value
  //   });
  // }

  // clrFromList() {
  //   this.editedIngredient.emit({
  //     nameValue: this.nameInput.nativeElement.value
  //   });
  // }
}
