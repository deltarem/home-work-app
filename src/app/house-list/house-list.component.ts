import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {HouseService} from '../core/services/house.service';
import {Router} from '@angular/router';
import {HouseType} from '../core/models/house-type';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<HouseType>;
  houseList: HouseType[] = [];
  displayedColumns: string[] = ['name', 'region', 'coatOfArms'];

  constructor(private houseService: HouseService,
              private router: Router )
  {

  }

  ngOnInit(): void {
    this.getHouseList();
  }

  ngAfterViewInit(): void {

  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getHouseList(): void {
    this.houseService.getHouses()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
}
