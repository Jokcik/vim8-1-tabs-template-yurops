import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
import {TabService} from "../tab.service";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnInit, AfterViewInit {
  @Input() active: boolean;

  constructor(private tabsService: TabService) {
  }

  @HostListener('click')
  public setActiveTab() {
    if (this.active) { return; }
    this.tabsService.selectTab(this);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
