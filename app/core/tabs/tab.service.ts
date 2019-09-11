import {TabComponent} from "./tab/tab.component";


export class TabService {
  public tabs: TabComponent[];

  public setTabs(tabs: TabComponent[]) {
     this.tabs = tabs;
  }

  public selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;

    console.log(this.tabs);
  }
}
