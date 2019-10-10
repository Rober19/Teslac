import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { faProjectDiagram, faQuoteLeft, faQuoteRight, faUserEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  ctx;
  Icons: Array<any> = [faProjectDiagram, faQuoteLeft, faQuoteRight, faUserEdit];

  constructor() { }

  ngOnInit() {
    this.ctx = (document.getElementById('Chart') as HTMLCanvasElement).getContext('2d');
    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
          label: 'Actividad',
          data: [12, 19, 3, 5, 2, 3, 0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1
        }]
      },
    });
  }

}
