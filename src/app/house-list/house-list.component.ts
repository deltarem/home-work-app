import { Component, OnInit } from '@angular/core';
import {HouseService} from '../core/services/house.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houseList: any[] = [];
  constructor(private houseService: HouseService,
              private router: Router )
  { }

  ngOnInit(): void {
    this.getHouseList();
  }

  getHouseList(): void {
    this.houseService.getHouses()
      .subscribe(res => {
        this.houseList = res;
      });
  }
}
