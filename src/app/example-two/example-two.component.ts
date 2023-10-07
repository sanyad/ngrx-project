import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store'
import {ExampleSelectors} from '../store/example.selectors'
import {ExampleActions} from '../store/example.action'

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent implements OnInit {
  count$: Observable<number | undefined>
  updatedAt$: Observable<number | undefined>
  message$: Observable<string | undefined>
  data$: Observable<{title: string, userId: number, id: number, completed: boolean}> | undefined
  errors$: Observable<any> | undefined
  loading$: Observable<boolean> | undefined

  constructor(private store$: Store) {
    this.count$ = this.store$.select(ExampleSelectors.count)
    this.updatedAt$ = this.store$.select(ExampleSelectors.updateAt)
    this.message$ = this.store$.select(ExampleSelectors.message)
    this.loading$ = this.store$.select(ExampleSelectors.dataLoading)
  }

  ngOnInit() {
    this.data$ = this.store$.select(ExampleSelectors.data)
    this.errors$ = this.store$.select(ExampleSelectors.dataErrors)
  }

  getData() {
    this.store$.dispatch(ExampleActions.getData())
  }
}
