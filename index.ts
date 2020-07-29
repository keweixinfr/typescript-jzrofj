import { take, tap, delay } from "rxjs/operators";
import { interval, zip, Observable, combineLatest, forkJoin } from "rxjs";

const a = new Observable(s => {
  setTimeout(()=>s.error("a error"),0)
});

const b = new Observable(s => {
  setTimeout(()=>s.error("b error"),0)
});

const c = new Observable(s => {
  s.next("c success");
  s.complete();
});

forkJoin(a,b,c).subscribe(s => console.log('success', s), e => { console.log(e)})