import {ApplicationRef, Component} from '@angular/core';
import {StoreService} from '../../../../../src/app/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

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
