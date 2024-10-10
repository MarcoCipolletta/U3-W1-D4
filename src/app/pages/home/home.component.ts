import { Component } from '@angular/core';
import { iPost } from '../../Modules/i-post';
import { iJsonResponse } from '../../Modules/i-json-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  featuredPost!: iPost;
  relatedPosts: iPost[] = [];

  shuffleArray(array: iPost[]): iPost[] {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  ngOnInit() {
    fetch('db.json')
      .then((res) => <Promise<iJsonResponse>>res.json())
      .then((res) => {
        const postsArr: iPost[] = res.posts;
        const postsArrShuffled = this.shuffleArray(postsArr);
        this.featuredPost = postsArrShuffled[0];
        this.relatedPosts = postsArrShuffled.slice(1, 5);
      });
  }
}
