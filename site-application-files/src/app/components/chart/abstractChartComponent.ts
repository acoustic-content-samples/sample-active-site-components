/*******************************************************************************
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
/**
 * Do not modify this file, it will be auto-generated.
 */
import {
    Category,
    RenderingContextBinding,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/**
 * @name Chart
 * @id 2d1fd75c-6e5f-4d89-8cce-b50df45e080e
 */
export abstract class AbstractChartComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "elementType": "category",
     *   "key": "type",
     *   "label": "type",
     *   "restrictedParents": [
     *     "7cac8b4b-db7d-4243-8d7b-6458af55cb5d"
     *   ]
     * }
     */
    @RenderingContextBinding('category.type')
    readonly onType: Observable<Category>;

    /**
     * @see #onType
     */
    @RenderingContextBinding()
    readonly type: Category;

    protected constructor() {
        super();
    }
}
