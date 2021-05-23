import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterType } from '../core/models/character-type';
import { HouseData, HouseType } from '../core/models/house-type';
import { CharacterService } from '../core/services/character.service';
import { HouseService } from '../core/services/house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  houseData: HouseData;
  characters: CharacterType[] = [];
  houseId: string | null;
  constructor(private houseService: HouseService,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location) {
  }


  ngOnInit(): void {
    this.houseId = this.route.snapshot.paramMap.get('id');
    this.getCharacters();
  }

  goBack() {
    this.location.back();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(res => {
        this.characters = res;
        this.getHouse(this.houseId);
      });
  }

  getHouse(houseId: string | null): void {
    this.houseService.getHouse(houseId)
      .subscribe(res => {
        this.populateHouse(res);
      });
  }

  populateHouse(houseType: HouseType): void {
    ;
    this.houseData = {
      name: houseType.name,
      region: houseType.region,
      coatOfArms: houseType.coatOfArms,
      words: houseType.words,
      titles: houseType.titles.join(','),
      seats: houseType.seats.join(','),
      currentLord: this.getCharacter(houseType.currentLord),
      heir: this.getCharacter(houseType.heir),
      founded: houseType.founded,
      founder: this.getCharacter(houseType.founder)
    }
  }

getCharacter(url: string): string | undefined {
  ;
  const character = this.characters.find(c => c.url === url);
  return character?.name;
}

}
