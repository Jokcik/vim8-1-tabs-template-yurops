import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'tab-content',
  template: `
      <ng-container *ngIf="tabComponent.active">
          <ng-container [ngTemplateOutlet]="template"></ng-container>
      </ng-container>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent implements OnInit {
  @ContentChild(TemplateRef, { static: false }) template: TemplateRef<any>;
  constructor(private tabComponent: TabComponent) {
  }

  ngOnInit() {
  }

}
