import {AfterViewInit, Component, HostListener, Input, OnInit, ContentChild, ChangeDetectorRef,ChangeDetectionStrategy} from '@angular/core';
import {TabService} from "../tab.service";
import {TabTitleComponent} from "../tab-title/tab-title.component";
import {ReplaySubject, Subject, BehaviorSubject} from 'rxjs'

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnInit, AfterViewInit {
  public active$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  @Input() 
  set active(active: boolean) {
    console.log('active', active);
    this.active$.next(active);
  }

  get active() {
    return this.active$.value;
  }

  @ContentChild(TabTitleComponent, { static: false, read: TabTitleComponent }) tabTitle: TabTitleComponent;

  constructor() {
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
  }

}
