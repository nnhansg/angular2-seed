import { Routes } from '@angular/router';

import { About2Routes } from './+about-2/index';
import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...About2Routes
];
