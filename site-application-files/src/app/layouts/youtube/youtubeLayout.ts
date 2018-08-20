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
    LayoutComponent
} from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { TypeYoutubeComponent } from './../../components/youtube/typeYoutubeComponent';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

/**
 * @name youtubeLayout
 * @id youtube-layout
 */
@LayoutComponent({
    selector: 'youtube-layout'
})
@Component({
  selector: 'app-youtube-layout-component',
  templateUrl: './youtubeLayout.html',
  styleUrls: ['./youtubeLayout.scss']
})
export class YoutubeLayoutComponent extends TypeYoutubeComponent {
				url: SafeResourceUrl;
				baseURL: string;

    constructor(private sanitizer: DomSanitizer) {
        super();
								this.safeSubscribe(this.onVideoid, (id) => {
									this.safeSubscribe(this.onShowyoutubelogo, (showLogo) => {
												if (showLogo === false)
												{
													this.baseURL = 'https://www.youtube.com/embed/' + id + '?modestbranding=1';
												}
												else
												{
													this.baseURL = 'https://www.youtube.com/embed/' + id;
												}
												this.url =  this.sanitizer.bypassSecurityTrustResourceUrl(this.baseURL);
												console.log(`!!! ${this.baseURL}  ${this.url}`);
									});
								});
    }
}
