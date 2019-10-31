import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']

})
export class ChartComponent{
  highcharts = Highcharts;
  chartOptions = {   
     chart: {
        type: "column"
     },
     title: {
        text: "Monthly Average Temperature"
     },
     subtitle: {
        text: "Source: WorldClimate.com"
     },
     xAxis:{
        categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     },
     yAxis: {          
        title:{
           text:"Temperature °C"
        } 
     },
     tooltip: {
        valueSuffix:" °C"
     },
     series: [
        {
           name: 'Tokyo',
           data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
        }
     ]
  };
}

