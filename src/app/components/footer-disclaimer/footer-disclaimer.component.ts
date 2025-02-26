import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-disclaimer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-disclaimer.component.html',
  styleUrls: ['./footer-disclaimer.component.css']
})
export class FooterDisclaimerComponent {
  readonly versionId = require('../../../../package.json').version;
  readonly lastUpdateDate = new Date('2025-02-26');
} 