import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  @Input() pokemon = '';

  constructor(private location: Location, private route: Router) {}

  ngOnInit(): void {
    // this.route.navigate(['/pokemon']);
  }

  reloadCurrentRoute(pokemon: string) {
    let currentUrl = `/pokemon/${pokemon}`;
    console.log(currentUrl);
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate([currentUrl]);
    });
  }

  // goBack(): void {
  //   this.location.back();
  // }

  // reload(): void {
  //   window.location.reload();
  // }
}
