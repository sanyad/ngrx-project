import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, EMPTY, map, mergeMap, throwError} from "rxjs";
import {AppService} from "../app.service";
import {ExampleActions} from "./example.action";

@Injectable({
  providedIn: 'root'
})
export class ExampleEffects {

  loadData$ = createEffect(() => this.actions$.pipe(
      ofType(ExampleActions.getData),
      mergeMap(() => this.appService.getSomeStuff()
        .pipe(
          map(data => ExampleActions.getDataSuccess({data: data})),
          catchError((err: any) => throwError(ExampleActions.getDataError({ error: err })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}
}
