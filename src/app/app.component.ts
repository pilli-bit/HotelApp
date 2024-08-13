// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { RegionService } from './region.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  regions: any[] = [];

  constructor(private regionService: RegionService) {}

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(): void {
    this.regionService.getRegions().subscribe((data) => {
      this.regions = data;
    });
  }

  addRegion(name: string): void {
    this.regionService.addRegion({ name }).subscribe(() => {
      this.getRegions();
    });
  }
}
