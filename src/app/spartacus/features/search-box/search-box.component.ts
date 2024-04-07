import { Component, ChangeDetectionStrategy, Optional } from "@angular/core";
import { CmsSearchBoxComponent, WindowRef, RoutingService } from "@spartacus/core";
import { SearchBoxComponent, SearchBoxComponentService, CmsComponentData } from "@spartacus/storefront";


@Component({
  selector: 'cx-searchbox',
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSearchBoxComponent extends SearchBoxComponent  {


  constructor(
    protected searchBoxComponentService: SearchBoxComponentService,
    @Optional()
    protected componentData: CmsComponentData<CmsSearchBoxComponent>,
    protected winRef: WindowRef,
    protected routingService: RoutingService
  ) {
    super(searchBoxComponentService, componentData, winRef,routingService);
  }

}
