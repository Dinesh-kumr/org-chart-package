import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-org-chart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './org-chart.component.html',
  styleUrl: './org-chart.component.css'
})
export class OrgChartComponent {
  orgDataList: any = [{
    dynamicHtml: `
     <div>
      <h1>Welcome to OrgChart!</h1>
      <img src="https://via.placeholder.com/150" alt="Angular Image">
      <p>This is a sample paragraph.</p>
      <ul>
       <li>List item 1</li>
       <li>List item 2</li>
       <li>List item 3</li>
      </ul>
     </div>
    `,
    orgDataList: [
      {
        dynamicHtml: `
       <div>
        <h2>Child 1</h2>
        <p>Child content goes here.</p>
       </div>
      `,
        orgDataList: []
      },
      {
        dynamicHtml: `
      <div>
       <h1>Welcome to Angular!</h1>
       <button (click)="handleButtonClick()">Click me</button>
      </div>
     `,
      },
      {
        dynamicHtml: '<span style="color: red;">child 3</span>',
        orgDataList: [
          { dynamicHtml: 'child3.1' },
          { dynamicHtml: 'child3.2' }
        ]
      }
    ]
  }];
}
