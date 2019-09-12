import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit, ApplicationRef,
  ChangeDetectionStrategy,
  Component, ComponentRef,
  ContentChildren,
  OnInit,
  QueryList, ViewChild, ViewContainerRef
} from '@angular/core';
import {TabComponent} from "./tab/tab.component";
import {TabService} from "./tab.service";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TabService]
})
export class TabsComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {
  @ContentChildren(TabComponent, { descendants: true }) tabs: QueryList<TabComponent>;
  constructor(private tabsService: TabService,
              private tick: ApplicationRef) {
  }

  public ngAfterViewInit(): void {
    this.tabsService.setTabs(this.tabs.toArray());
  }

  public setActiveTab(tab: TabComponent) {
    this.tabsService.selectTab(tab);
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
  }

  ngAfterContentChecked(): void {
    this.tabsService.setTabs(this.tabs.toArray());
  }

  public trackByFunc(idx, tab) {
    return idx;
  }
}
