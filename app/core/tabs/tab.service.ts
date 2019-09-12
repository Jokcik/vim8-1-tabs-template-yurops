import {TabComponent} from "./tab/tab.component";


export class TabService {
  public tabs: TabComponent[];

  public setTabs(tabs: TabComponent[]) {
     this.tabs = tabs;
     this.recalculate();
  }

  private recalculate() {
    if (this.tabs.length === 0) { return; }
    if (this.tabs.some(tab => tab.active)) { return; }

    setTimeout(() => {
      this.tabs[0].active = true;
    })
  }

  public selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
  }
}
