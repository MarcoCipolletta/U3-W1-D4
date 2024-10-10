import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iPost } from '../../Modules/i-post';
import { iJsonResponse } from '../../Modules/i-json-response';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  post!: iPost;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    fetch('db.json')
      .then((res) => <Promise<iJsonResponse>>res.json())
      .then((res) => {
        this.route.params.subscribe((params: any) => {
          console.log(params.id);

          const foundPost = res.posts.find((p) => p.id === parseInt(params.id));
          if (foundPost) {
            this.post = foundPost;
            console.log(this.post);
          }
        });
      });
  }
}
