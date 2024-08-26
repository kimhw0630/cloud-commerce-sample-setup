// Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved

import '@spartacus/storefront';

declare module '@spartacus/storefront' {
  const enum LAUNCH_CALLER {
    SERVICEABILITY_FORM = 'SERVICEABILITY_FORM',
    SERVICEABILITY_CATEGORY_FORM = 'SERVICEABILITY_CATEGORY_FORM',
    PRODUCT_DETAILS_DIALOG = 'PRODUCT_DETAILS_DIALOG',
    JOURNEY_CHECKLIST_LOGIC_FORM = 'JOURNEY_CHECKLIST_LOGIC_FORM',
    JOURNEY_CHECKLIST_APPOINTMENT_FORM = 'JOURNEY_CHECKLIST_APPOINTMENT_FORM',
    JOURNEY_CHECKLIST_INSTALLATION_ADDRESS_FORM = 'JOURNEY_CHECKLIST_INSTALLATION_ADDRESS_FORM',
    TMA_CONSUMPTION = 'TMA_CONSUMPTION',
    TMA_PREMISE_DETAILS_FORM = 'TMA_PREMISE_DETAILS_FORM',
    TMA_GUIDED_SELLING_ADD_TO_CART = 'TMA_GUIDED_SELLING_ADD_TO_CART',
    TMA_TERMINATION_CONFIRM = 'TMA_TERMINATION_CONFIRM'
  }
}