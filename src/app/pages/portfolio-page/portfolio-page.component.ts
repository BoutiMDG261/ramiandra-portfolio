import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-page',
  imports: [],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Marco Ramiandraharivelo - Développeur Web Full Stack');
    this.meta.addTags([
      { name: 'description', content: 'Portfolio de Marco Tolotriniaina Ramiandraharivelo, développeur web full stack spécialisé en Angular et Node.js.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'google-site-verification', content: 'jwNYuhbxdve42DNY0XwugaWOcCfKmN4LLp1NQD5hPZs' }
    ]);
  }
}
