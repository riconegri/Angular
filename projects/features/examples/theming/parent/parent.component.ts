import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'anms-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  themeSrc: { default: string } = {default: ''}; // require('!raw-loader!./parent.component.scss-theme.scss');
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() {}

  ngOnInit() {}
}
