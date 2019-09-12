import {AfterViewInit, Component, HostListener, Input, OnInit, ContentChild} from '@angular/core';
import {TabService} from "../tab.service";
import {TabTitleComponent} from "../tab-title/tab-title.component";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnInit, AfterViewInit {
  @Input() active: boolean;
  @ContentChild(TabTitleComponent, { static: false, read: TabTitleComponent }) tabTitle: TabTitleComponent;

  constructor() {
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
  }

}
