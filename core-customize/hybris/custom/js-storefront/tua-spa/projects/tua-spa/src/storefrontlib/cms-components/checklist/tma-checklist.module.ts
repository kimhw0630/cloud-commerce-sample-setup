/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { NgModule } from '@angular/core';
import { TmaProductChecklistModule } from './product-checklist/tma-product-checklist.module';

@NgModule({
  imports:[
    TmaProductChecklistModule
  ]
})

export class TmaChecklistModule {}