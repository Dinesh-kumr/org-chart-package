# OrgChart

org-chart-lib is a powerful npm package designed to simplify the creation of interactive organizational charts in Angular applications. It provides components and utilities to easily visualize hierarchical data structures in a visually appealing and customizable manner.

## Installation:

Install org-chart-lib via npm:
**npm install org-chart-lib**

## Get Started:

Import OrgChartComponent into your Angular module.
Use the <lib-org-chart> component in your HTML template, binding your hierarchical data to the orgDataList input.
## Import OrgChartComponent:
In your TypeScript file (*.ts), you import the OrgChartComponent from the org-chart-lib package:
**import { OrgChartComponent } from 'org-chart-lib';**

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Add OrgChartComponent to imports:
Inside your Angular module file (usually app.module.ts), you include OrgChartComponent in the imports array of your NgModule decorator:
**imports: [
  OrgChartComponent,
  // Other modules or components
]**

## HTML Template:
In your HTML file (*.html), you use the <lib-org-chart> component provided by org-chart-lib and bind the orgDataList input property to your data:
**<lib-org-chart [orgDataList]="orgDataList"></lib-org-chart>**

## Data Structure:
Your TypeScript variable orgDataList contains the hierarchical data structure for your organizational chart. Let's break down the structure:

orgDataList is an array containing objects representing nodes in the organizational chart.
Each object represents a node and can have dynamicHtml (HTML content) and orgDataList (children nodes) properties.
The HTML content in dynamicHtml will be rendered for each node.
orgDataList within each node represents its child nodes, forming a hierarchical structure.
**orgDataList: any = [
  {
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
        orgDataList: [] // Child nodes of "Child 1"
      },
      {
        dynamicHtml: `
          <div>
            <h1>Welcome to Angular!</h1>
          </div>
        `,
        orgDataList: [] // No child nodes for "Welcome to Angular!"
      },
      {
        dynamicHtml: '<span style="color: red;">child 3</span>',
        orgDataList: [
          { dynamicHtml: 'child3.1' }, // First child of "child 3"
          { dynamicHtml: 'child3.2' }  // Second child of "child 3"
        ]
      }
    ]
  }
];**
