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
    RenderingContextBinding,
    AbstractRenderingComponent
} from '@ibm-wch-sdk/ng';
import {
    Observable
} from 'rxjs/Observable';

/**
 * @name Youtube
 * @id 4801b520-3b10-4763-ac3c-288dc52b63b3
 */
export abstract class AbstractYoutubeComponent extends AbstractRenderingComponent {

    @RenderingContextBinding('text.videoid')
    readonly onVideoid: Observable<string>;

    /**
     * @see #onVideoid
     */
    @RenderingContextBinding()
    readonly videoid: string;



    @RenderingContextBinding('toggle.showyoutubelogo', false)
    readonly onShowyoutubelogo: Observable<boolean>;

    /**
     * @see #onNotshowyoutubelogo
     */
    @RenderingContextBinding()
    readonly showyoutubelogo: boolean;

    protected constructor() {
        super();
    }
}
