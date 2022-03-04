/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export { DefaultCatalogCollatorFactory } from './DefaultCatalogCollatorFactory';
export type { DefaultCatalogCollatorFactoryOptions } from './DefaultCatalogCollatorFactory';

import { CatalogEntityDocument as CatalogEntityDocumentType } from '@backstage/plugin-catalog-common';

/**
 * @deprecated import from `@backstage/plugin-catalog-common` instead
 * @public
 */
export type CatalogEntityDocument = CatalogEntityDocumentType;

/**
 * todo(backstage/techdocs-core): stop exporting this in a future release.
 */
export { DefaultCatalogCollator } from './DefaultCatalogCollator';