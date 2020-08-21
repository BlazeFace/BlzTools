import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-recipe-submit',
  templateUrl: './recipe-submit.component.html',
  styleUrls: ['./recipe-submit.component.css']
})
export class RecipeSubmitComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor() { }
  ingr = ["Dinner"];
  selectable = true;
  removable = true;
  addOnBlur = true;
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.ingr.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(thing): void {
    const index = this.ingr.indexOf(thing);

    if (index >= 0) {
      this.ingr.splice(index, 1);
    }
  }
  ngOnInit(): void {
  }

}
