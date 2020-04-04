import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'; 

@Component({
  selector: 'app-menu-two',
  templateUrl: './menu-two.component.html',
  styleUrls: ['./menu-two.component.css']
})
export class MenuTwoComponent implements OnInit {
  data = [     
    { y: 234, x: "Venezuela" },
    { y: 765,  x: "Saudi" },
    { y: 109,  x: "Canada" },
    { y: 150,  x: "Iran" },
    { y: 142,  x: "Iraq" },
    { y: 500, x: "Kuwait" },
    { y: 800,  x: "UAE" },
    { y: 80,  x: "Russia" }
];
y_axis=[];
x_axis=[];
barchart = [];  

  constructor() {
    this.data.map(z => {  
      this.y_axis.push(z.y);  
      this.x_axis.push(z.x);  
    });  
   }

  ngOnInit() {
    this.barchart = new Chart('canvas', {  
      type: 'bar',  
      data: {  
        labels: this.x_axis,  
        datasets: [  
          {  
            data: this.y_axis,  
            borderColor: '#3cba9f',  
            backgroundColor: [  
              "#3cb371",  
              "#0000FF",  
              "#9966FF",  
              "#4C4CFF",  
              "#00FFFF",  
              "#f990a7",  
              "#aad2ed",  
              "#FF00FF"
              
            ],  
            fill: true  
          }  
        ]  
      },  
      options: {  
        legend: {  
          display: false  
        },  
        scales: {  
          xAxes: [{  
            display: true  
          }],  
          yAxes: [{  
            display: true  
          }],  
        }  
      }  
    });  
 
  }

}
