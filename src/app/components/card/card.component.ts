import { Component, Input } from '@angular/core';
import { iPost } from '../../Modules/i-post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() post!: iPost;
}
