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
    Link,
    RenderingContextBinding,
    AbstractRenderingComponent
} from 'ibm-wch-sdk-ng';
import {
    Observable
} from 'rxjs/Observable';

/**
 * @name Iframe
 * @id 7b4d6587-3cfe-46d0-9249-b0a689aa98eb
 */
export abstract class AbstractIframeComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "elementType": "link",
     *   "key": "source",
     *   "label": "source",
     *   "required": true
     * }
     */
    @RenderingContextBinding('link.source')
    readonly onSource: Observable<Link>;

    /**
     * @see #onSource
     */
    @RenderingContextBinding()
    readonly source: Link;

    /**
     * {
     *   "elementType": "number",
     *   "fieldType": "integer",
     *   "key": "width",
     *   "label": "width",
     *   "minimum": 0,
     *   "required": true
     * }
     */
    @RenderingContextBinding('number.width')
    readonly onWidth: Observable<number>;

    /**
     * @see #onWidth
     */
    @RenderingContextBinding()
    readonly width: number;

    /**
     * {
     *   "elementType": "number",
     *   "fieldType": "integer",
     *   "key": "height",
     *   "label": "height",
     *   "minimum": 0,
     *   "required": true
     * }
     */
    @RenderingContextBinding('number.height')
    readonly onHeight: Observable<number>;

    /**
     * @see #onHeight
     */
    @RenderingContextBinding()
    readonly height: number;

    protected constructor() {
        super();
    }
}
