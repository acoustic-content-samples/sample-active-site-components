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
import {
    RenderingContext
} from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { AbstractYoutubeComponent } from './abstractYoutubeComponent';

/**
 * @name Youtube
 * @id 4801b520-3b10-4763-ac3c-288dc52b63b3
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-youtube-component',
  templateUrl: './typeYoutubeComponent.html',
  styleUrls: ['./typeYoutubeComponent.scss']
})
*/
export class TypeYoutubeComponent extends AbstractYoutubeComponent {

    /**
     * TODO add custom fields here. These fields should be those
     * common to all layouts.
     */

    constructor() {
        super();
        /**
        * TODO initialize your custom fields here, note that
        * you can refer to the values bound via @RenderingContextBinding from
        * your super class.
        *
        * Make sure to call 'this.safeSubscribe' if you plan to subscribe to observables
        */
    }

}
