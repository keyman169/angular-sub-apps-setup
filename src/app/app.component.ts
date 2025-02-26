import {ApplicationRef, Component} from '@angular/core';
import {StoreService} from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Main Application';
  counter: number;

  plus1() {
    this.storeService.serCounter(this.counter + 1);

  }

  reset() {
    this.storeService.serCounter(0);

  }

  constructor(
    private storeService: StoreService,
    private appRef: ApplicationRef
  ) {
    storeService.getCounter().subscribe((value) => {
      this.counter = value;
      this.appRef.tick();
    });
  }
}
