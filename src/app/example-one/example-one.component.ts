import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ExampleSelectors} from "../store/example.selectors";
import {ExampleActions} from "../store/example.action";

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent {
  message: string | undefined;

  methods = {
    increase: () => {
      this.store$.dispatch(ExampleActions.increaseCount())
    },
    decrease: () => {
      this.store$.dispatch(ExampleActions.decreaseCount())
    },
    sendMessage: () => {
      this.store$.dispatch(ExampleActions.sendMessage({message: this.message}))
    },
    changeDate: () => {
      this.store$.dispatch(ExampleActions.increaseDateFromOneMinute())
    },
  }

  constructor(private store$: Store) {

  }
}
