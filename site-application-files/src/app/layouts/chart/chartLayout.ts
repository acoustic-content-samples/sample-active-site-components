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
import { TypeChartComponent } from './../../components/chart/typeChartComponent';
import { UtilsService } from '@ibm-wch/components-ng-shared-utilities';
import { OnInit } from '@angular/core';



/**
 * @name chartLayout
 * @id chart-layout
 */
@LayoutComponent({
    selector: 'chart-layout'
})
@Component({
  selector: 'app-chart-layout-component',
  templateUrl: './chartLayout.html',
  styleUrls: ['./chartLayout.scss']
})
export class ChartLayoutComponent extends TypeChartComponent implements OnInit {
				public chartData:Array<any> = [
					{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
					{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
					{data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
				];
				public chartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
				public chartOptions:any = {
					responsive: true
				};
				public chartLegend:boolean = true;
				public chartType:string;

    constructor(public utilService: UtilsService) {
        super();
				}

				ngOnInit()
				{
					this.chartType = this.utilService.getFirstCategory(this.renderingContext, 'type');
				}

					// function called when you click on the chart
					public chartClicked(e:any):void {
						console.log(e);
					}
}
