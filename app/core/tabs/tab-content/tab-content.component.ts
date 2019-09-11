import {Component, OnInit} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'tab-content',
  template: `
    <div [hidden]="!tabComponent.active">
        <ng-content></ng-content>
    </div>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent implements OnInit {

  constructor(private tabComponent: TabComponent) {
  }

  ngOnInit() {
  }

}
