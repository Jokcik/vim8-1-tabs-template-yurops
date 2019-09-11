import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {TabContentComponent, TabTitleComponent} from "./tab-title/tab-title.component";
import {TabComponent} from "./tab/tab.component";
import {TabsComponent} from "./tabs.component";

const components = [
  TabComponent,
  TabsComponent,
  TabTitleComponent,
  TabContentComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: components,
  exports: [
    ...components
  ],
  entryComponents: [...components]
})
export class TabsModule {
}
