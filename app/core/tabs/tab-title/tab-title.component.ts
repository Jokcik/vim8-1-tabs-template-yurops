import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabTitleComponent implements OnInit {

  constructor(private tabComponent: TabComponent) {
  }

  ngOnInit() {
  }

}

