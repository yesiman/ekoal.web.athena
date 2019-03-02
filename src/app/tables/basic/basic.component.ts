import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  basic_table_data;
  expandTableData = [ {
    title   : 'First tour',
    status    : 'Active',
    price: '40,000 USD',
    lastUpdate: 'April 13, 2018',
    expand     : false,
    other : [{
      label:"Learn from real test data",
      value:"USD 1000"
    },
    {
      label:"PSDs included",
      value:"USD 1000"
    },
    {
      label:"Extra Info",
      value:"USD 1000"
    },
    ]
  },
  {
    title   : 'First tour',
    status    : 'Active',
    price: '70,000 USD',
    lastUpdate: 'April 13, 2018',
    expand     : false,
    other : [{
      label:"Learn from real test data",
      value:"USD 1000"
    },
    {
      label:"PSDs included",
      value:"USD 1000"
    },
    {
      label:"Extra Info",
      value:"USD 1000"
    },
    ]
  },
  {
    title   : 'First tour',
    status    : 'Active',
    price: '20,000 USD',
    lastUpdate: 'April 13, 2018',
    expand     : false,
    other : [{
      label:"Learn from real test data",
      value:"USD 1000"
    },
    {
      label:"PSDs included",
      value:"USD 1000"
    },
    {
      label:"Extra Info",
      value:"USD 1000"
    },
    ]
  },
  {
    title   : 'First tour',
    status    : 'Active',
    price: '90,000 USD',
    lastUpdate: 'April 13, 2018',
    expand     : false,
    other : [{
      label:"Learn from real test data",
      value:"USD 1000"
    },
    {
      label:"PSDs included",
      value:"USD 1000"
    },
    {
      label:"Extra Info",
      value:"USD 1000"
    },
    ]
  },
  ];

  sortMapBasicTable = {
    uid   : null,
    nom    : null,
    prenom: null,
    activities:null,
    status:null,
    lastUpdate:null
  };


  sortName = null;
  sortValue = null;

  //No Option YET
  //https://github.com/swimlane/ngx-datatable/issues/423
  scrollBarHorizontal = (window.innerWidth < 960);
  columnModeSetting = (window.innerWidth < 960) ? 'standard':'force';
  columnModeSettingSmall = (window.innerWidth < 560) ? 'standard':'force';
  constructor() {
    this.fetch((data) => {
      this.basic_table_data = data;
    });
    window.onresize = () => {
      this.scrollBarHorizontal = (window.innerWidth < 960);
      this.columnModeSetting = (window.innerWidth < 960) ? 'standard':'force';
      this.columnModeSettingSmall = (window.innerWidth < 560) ? 'standard':'force';
    };
   }

  ngOnInit() {
  }

  selected = [];
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/table.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  //Expandable Table Code;
  @ViewChild('expTable') expTable: any;
  expanded: any = {};

  toggleExpandRow(row) {
    console.log(row);
    this.expTable.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
  }
}
